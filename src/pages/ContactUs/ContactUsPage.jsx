import React from "react";
import Form from "@/components/form";
import { motion } from "motion/react";
import { MapPin, Phone, Mail } from "lucide-react";

function ContactUsPage() {
  return (
    <section className="min-h-screen pt-28 sm:pt-32 lg:pt-40 pb-16 overflow-hidden">
      <div className="flex flex-col gap-10 sm:gap-12 lg:gap-15 text-white">
        {/* Heading */}
        <div className="flex flex-col gap-3 sm:gap-5 mx-auto text-center items-center px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Contact Us</h1>
          <p className="text-sm sm:text-base text-white/70 max-w-2xl">
           We're here to help! Reach out to us anytime using the information below, or send us a message through our contact form.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 px-4 sm:px-[6%] lg:px-[10%] items-start">

          {/* Left Info */}
          <div className="flex flex-col gap-5 sm:gap-6 items-center justify-center h-full">
            {/* Address */}
            <div className="flex gap-4 sm:gap-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4 sm:p-5">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue-400/15 border border-blue-400/30 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-base sm:text-lg font-bold">Address</h2>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Laudantium, deserunt.
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4 sm:gap-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4 sm:p-5">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue-400/15 border border-blue-400/30 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-base sm:text-lg font-bold">Phone</h2>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Laudantium, deserunt.
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4 sm:gap-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4 sm:p-5">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue-400/15 border border-blue-400/30 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-base sm:text-lg font-bold">Email</h2>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Laudantium, deserunt.
                </p>
              </div>
            </div>
          </div>

          {/* Right Form (on top for mobile, right for desktop) */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15 } },
              }}
              className="w-full max-w-2xl flex flex-col gap-7 sm:gap-8 lg:gap-10 p-4 sm:p-6 text-white border-2 sm:border-4 border-[#FFFFFF]/40 rounded-2xl bg-white/5 backdrop-blur-md"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="flex flex-col gap-2 text-center sm:text-left"
              >
                <h1 className="text-xl sm:text-2xl font-semibold">
                  Get started with{" "}
                  <span className="text-blue-400">Pay Infinite</span>
                </h1>
                <p className="text-xs sm:text-sm text-white/70">
                  Fill out this form and a merchant services representative will
                  be in touch!
                </p>
              </motion.div>

              {/* Form Import */}
              <Form />

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="text-[11px] sm:text-sm text-white/70 leading-relaxed"
              >
                Disclaimer: You agree to receive messages from PayInfinite. This
                includes SMS messages for account updates, application status,
                appointment scheduling, reminders, and billing notifications.
                Message frequency may vary. Text STOP to opt out at any time.
                View our Privacy Policy and Terms & Conditions for more details.
              </motion.p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="border p-2.5 sm:p-3 text-sm sm:text-md w-full max-w-md mx-auto rounded-md font-semibold primary-btn hover:opacity-90 cursor-pointer"
              >
                Get A Quote
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUsPage;