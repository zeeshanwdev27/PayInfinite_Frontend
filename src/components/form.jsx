import React, { useState } from "react";
import { motion } from "motion/react";
import Swal from "sweetalert2";

const SENDMAIL_URL = "https://payinfinite.net/sendmail.php"; // ✅ change to your real URL

function Form() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    phone: "",
    businessname: "",
    message: "",
  });

  const onChange = (key) => (e) => setForm((p) => ({ ...p, [key]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (loading) return;

    // simple frontend validation
    if (
      !form.fullname ||
      !form.email ||
      !form.phone ||
      !form.businessname ||
      !form.message
    ) {
      Swal.fire({
        icon: "warning",
        title: "Missing Fields",
        text: "Please fill all required fields.",
      });
      return;
    }

    setLoading(true);
    try {
      const fd = new FormData();
      fd.append("form_type", "contact");
      fd.append("fullname", form.fullname.trim());
      fd.append("email", form.email.trim());
      fd.append("phone", form.phone.trim());
      fd.append("businessname", form.businessname.trim());
      fd.append("message", form.message.trim());

      const res = await fetch(SENDMAIL_URL, {
        method: "POST",
        body: fd,
      });

      const text = (await res.text()).trim();

      if (text === "success") {
        Swal.fire({
          icon: "success",
          title: "Submitted!",
          text: "Thanks! Our team will contact you shortly.",
        });
        setForm({
          fullname: "",
          email: "",
          phone: "",
          businessname: "",
          message: "",
        });
      } else if (text === "invalid_email") {
        Swal.fire({ icon: "error", title: "Invalid Email", text: "Please enter a valid email." });
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: "Something went wrong. Please try again.",
        });
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Network Error",
        text: "Could not submit. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <motion.form
        onSubmit={submit}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8"
      >
        <motion.input
          type="text"
          placeholder="Full Name*"
          value={form.fullname}
          onChange={onChange("fullname")}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
          }}
          className="gradient-border-bottom p-1 outline-none focus:outline-none focus:ring-0"
        />

        <motion.input
          type="email"
          placeholder="Email Address*"
          value={form.email}
          onChange={onChange("email")}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
          }}
          className="gradient-border-bottom p-1 outline-none focus:outline-none focus:ring-0"
        />

        <motion.input
          type="text"
          placeholder="Phone Number*"
          value={form.phone}
          onChange={onChange("phone")}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
          }}
          className="gradient-border-bottom p-1 outline-none focus:outline-none focus:ring-0"
        />

        <motion.input
          type="text"
          placeholder="Business Name*"
          value={form.businessname}
          onChange={onChange("businessname")}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
          }}
          className="gradient-border-bottom p-1 outline-none focus:outline-none focus:ring-0"
        />

        <motion.input
          type="text"
          placeholder="Write us a message*"
          value={form.message}
          onChange={onChange("message")}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
          }}
          className="gradient-border-bottom p-1 sm:col-span-2 outline-none focus:outline-none focus:ring-0"
        />

        <motion.button
          type="submit"
          disabled={loading}
          whileHover={{ scale: loading ? 1 : 1.05 }}
          whileTap={{ scale: loading ? 1 : 0.95 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="border p-2 text-md w-full sm:col-span-2 max-w-md mx-auto rounded-md font-semibold primary-btn hover:opacity-90 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Sending..." : "Connect With Us"}
        </motion.button>
      </motion.form>

      <motion.p
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
        initial="hidden"
        animate="visible"
        className="text-xs mt-4"
      >
        Disclaimer: You agree to receive messages from PayInfinite. This includes
        SMS messages for account updates, application status, appointment
        scheduling, reminders, and billing notifications. Message frequency may
        vary. Text STOP to opt out at any time. View our Privacy Policy and Terms
        &amp; Conditions for more details.
      </motion.p>
    </>
  );
}

export default Form;