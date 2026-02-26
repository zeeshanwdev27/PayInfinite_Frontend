import React from "react";
import { motion } from "motion/react";

function Form() {
  return (
    <>
      <motion.form
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8"
      >
        {[
          "Full Name*",
          "Email Address*",
          "Phone Number*",
          "Business Name*",
        ].map((placeholder, i) => (
          <motion.input
            key={i}
            type="text"
            placeholder={placeholder}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.4 },
              },
            }}
            className="gradient-border-bottom p-1 outline-none focus:outline-none focus:ring-0"
          />
        ))}

        <motion.input
          type="text"
          placeholder="Write us a message*"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
          }}
          className="gradient-border-bottom p-1 sm:col-span-2 outline-none focus:outline-none focus:ring-0"
        />
      </motion.form>

      <motion.p
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
        className="text-sm"
      >
        Disclaimer: You agree to receive messages from PayInfinite. This
        includes SMS messages for account updates, application status,
        appointment scheduling, reminders, and billing notifications. Message
        frequency may vary. Text STOP to opt out at any time. View our Privacy
        Policy and Terms & Conditions for more details.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
        className="border p-2 text-md w-full max-w-md mx-auto rounded-md font-semibold primary-btn hover:opacity-90 cursor-pointer"
      >
        Connect With Us
      </motion.button>
    </>
  );
}

export default Form;
