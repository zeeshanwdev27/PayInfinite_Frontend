import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SENDMAIL_URL = "https://payinfinite.net/sendmail.php"; // change to your real URL

function Footer() {
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);

  const submitFooterEmail = async (e) => {
    e.preventDefault();
    if (sending) return;

    const clean = email.trim();
    if (!clean) {
      Swal.fire({
        icon: "warning",
        title: "Email Required",
        text: "Please enter your email address.",
      });
      return;
    }

    setSending(true);
    try {
      const fd = new FormData();
      fd.append("form_type", "footer");
      fd.append("email", clean);

      const res = await fetch(SENDMAIL_URL, {
        method: "POST",
        body: fd,
      });

      const text = (await res.text()).trim();

      if (text === "success") {
        Swal.fire({
          icon: "success",
          title: "Subscribed!",
          text: "Thanks! You’ve been added successfully.",
        });
        setEmail("");
      } else if (text === "invalid_email") {
        Swal.fire({
          icon: "error",
          title: "Invalid Email",
          text: "Please enter a valid email address.",
        });
      } else if (text === "forbidden_origin") {
        Swal.fire({
          icon: "error",
          title: "Blocked",
          text: "Your domain is not allowed in CORS. Add it in sendmail.php.",
        });
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
      setSending(false);
    }
  };

  return (
    <div className="relative px-4 sm:px-[15%] py-10 md:py-20 overflow-hidden bg-black">
      {/* Bottom Glow */}
      <div className="absolute -bottom-55 left-1/2 -translate-x-1/2 pointer-events-none z-0">
        <div
          className="
            w-200 h-75 md:w-250 md:h-100
            rounded-full
            bg-[radial-gradient(circle_at_center,#1E40FF_0%,#032C9D_40%,transparent_70%)]
            blur-[160px]
            opacity-70
          "
        />
      </div>

      {/* Footer Card */}
      <div className="relative text-white bg-primary/50 backdrop-blur-2xl rounded-2xl border border-stone-600 p-6 sm:p-8 md:p-10 w-full flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col justify-center items-center gap-5 text-center">
          <h1 className="text-3xl sm:text-4xl semi-bold">
            Stay Updated with PayInfinite
          </h1>

          <p className="text-xs sm:text-sm text-stone-400 max-w-xl">
            Powering businesses with secure, reliable, and seamless payment
            solutions. Whether you're a startup, enterprise, or high-risk
            businesses, we’ve got you covered.
          </p>

          {/* ✅ FOOTER EMAIL FORM */}
          <form
            onSubmit={submitFooterEmail}
            className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-5 items-stretch sm:items-center w-full"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:max-w-sm border border-white/80 rounded-md px-4 py-2 text-md transition-colors duration-200 focus:outline-none focus:border-blue-400 placeholder:text-white/50"
              placeholder="Enter your email"
            />

            <motion.button
              type="submit"
              disabled={sending}
              whileHover={{ scale: sending ? 1 : 1.05 }}
              whileTap={{ scale: sending ? 1 : 0.95 }}
              className="rounded-2xl primary-btn text-white px-6 py-3 font-semibold hover:opacity-90 transition cursor-pointer w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {sending ? "Sending..." : "Connect With Us"}
            </motion.button>
          </form>
        </div>

        <hr className="border border-stone-600" />

        {/* Body */}
        <div className="flex flex-col lg:flex-row justify-between py-2 text-stone-400 text-sm gap-10 lg:gap-0">
          <div className="flex flex-col gap-3">
            <img
              src="./Navbar/logo.png"
              alt="logo.png"
              className="w-40 h-10 cursor-pointer"
            />

            <div className="mt-3">
              <p>Address: 123 Health Avenue, Suite 100,</p>
              <span>Wellness City, Country 12345</span>
            </div>

            <p>Phone: +123 456 7890</p>
            <p>Email: info@medicalhealth.com</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 text-base sm:text-lg gap-8 sm:gap-10">
            <div className="flex flex-col">
              <h2 className="text-md font-semibold text-white mb-3">Explore</h2>
              <ul className="space-y-1">
                <Link to={"/"}>
                  <li className="hover:text-blue-400 cursor-pointer">Home</li>
                </Link>
                <Link to={"/aboutus"}>
                  <li className="hover:text-blue-400 cursor-pointer">About Us</li>
                </Link>
                <Link to={"/contactus"}>
                  <li className="hover:text-blue-400 cursor-pointer">Contact Us</li>
                </Link>
                <Link to={"/privacypolicy"}>
                  <li className="hover:text-blue-400 cursor-pointer">Privacy Policy</li>
                </Link>
                <Link to={"/termsandconditions"}>
                  <li className="hover:text-blue-400 cursor-pointer">
                    Terms And Conditions
                  </li>
                </Link>
              </ul>
            </div>

            <div className="flex flex-col">
              <h2 className="text-md font-semibold text-white mb-3">Services</h2>
              <ul className="space-y-1">
                <Link to={"/highrisk"}>
                  <li className="hover:text-blue-400 cursor-pointer">High-Risk</li>
                </Link>
                <Link to={"/lowrisk"}>
                  <li className="hover:text-blue-400 cursor-pointer">Low-Risk</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>

        <hr className="border border-stone-600" />

        {/* Bottom */}
        <div className="flex flex-col lg:flex-row justify-between items-center py-5 gap-5 lg:gap-0">
          <div className="flex gap-5 items-center">
            <img
              src="./Footer/facebook.png"
              alt="facebook.png"
              className="w-4 h-5 hover:opacity-50 cursor-pointer"
            />
            <img
              src="./Footer/instagram.png"
              alt="instagram.png"
              className="w-5 h-5 hover:opacity-50 cursor-pointer"
            />
            <img
              src="./Footer/linkedin.png"
              alt="linkedin.png"
              className="w-5 h-5 hover:opacity-50 cursor-pointer"
            />
            <img
              src="./Footer/twitter.png"
              alt="twitter.png"
              className="w-5 h-5 hover:opacity-50 cursor-pointer"
            />
          </div>

          <p className="text-sm sm:text-md text-center">
            © Copyright 2026 PayInfinite. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;