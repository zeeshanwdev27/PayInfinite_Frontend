import React from "react";
import { motion } from "motion/react";
import Form from "@/components/form";

function HR_HeroSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="min-h-screen pt-32 sm:pt-28 lg:pt-32 overflow-hidden">
      {/* Body */}
      <div className="px-4 sm:px-[6%] lg:px-[10%] rounded-4xl py-8 sm:py-10 lg:p-12 backdrop-blur-[14.4px]">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1.5fr] gap-8 sm:gap-10">
          {/* RIGHT (show first on small/medium) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-1 lg:order-2 w-full max-w-2xl flex flex-col gap-5 sm:gap-6 lg:gap-7 mx-auto lg:mx-0"
          >
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight text-center lg:text-left"
            >
              Secure & Reliable High-Risk Merchant Accounts
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base text-white/70 text-center lg:text-left"
            >
              High-risk businesses often face rejections, closures, or strict
              limits from traditional providers. At PayInfinite, we deliver
              specialized merchant accounts built for secure, uninterrupted
              processing — including cards, online payments, recurring billing,
              and ACH. We help high-risk businesses get approved, stay
              operational, and scale with confidence.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="hidden md:flex flex-col sm:flex-row gap-3 sm:gap-5 mt-4 sm:mt-6 lg:mt-8 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  if (window.LiveChatWidget) {
                    window.LiveChatWidget.call("maximize");
                  }
                }}
                className="p-2 px-5 rounded-xl text-white border bg-primary border-white transition-all duration-300 cursor-pointer hover:bg-white hover:text-black w-full sm:w-auto"
              >
                Get Started
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  if (window.LiveChatWidget) {
                    window.LiveChatWidget.call("maximize");
                  }
                }}
                className="p-2 px-5 rounded-xl border cursor-pointer transition-all duration-300 flex gap-3 items-center justify-center primary-btn hover:opacity-90 w-full sm:w-auto"
              >
                Speak With a Specialist
              </motion.button>
            </motion.div>
          </motion.div>

          {/* LEFT (show second on small/medium) */}
          <div className="flex justify-center order-2 lg:order-1">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
              className="w-full h-fit max-w-2xl flex flex-col gap-10 p-6 text-white border-4 border-[#FFFFFF]/40 rounded-2xl"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5 },
                  },
                }}
                className="flex flex-col gap-2"
              >
                <h1 className="text-2xl font-semibold">
                  Get started with{" "}
                  <span className="text-blue-400">Pay Infinite</span>
                </h1>
                <p className="text-sm">
                  Fill out this form and a merchant services representative will
                  be in touch!
                </p>
              </motion.div>

              {/* Form Import */}
              <Form />
            </motion.div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10">
          {/* Small + Medium version */}
          <div className="block lg:hidden w-full rounded-3xl border border-gray-800 px-4 py-6 bg-primary/40">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.12 } },
              }}
              className="flex flex-col gap-4 text-white"
            >
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="text-center font-semibold text-xl sm:text-2xl"
              >
                Common Reasons Business Are Classified High-Risk
              </motion.h1>

              <motion.div
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.12 } },
                }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center"
              >
                {[
                  {
                    title: "Frequent Payment Rejections",
                    text1: "High-risk businesses are often declined by",
                    text2: "traditional banks and payment providers due to industry classification or risk policies.",
                  },
                  {
                    title: "Sudden Account Shutdowns",
                    text1: "Many merchants experience unexpected account",
                    text2: "suspensions or terminated processing without prior notice.",
                  },
                  {
                    title: "High Chargeback Monitoring",
                    text1: "Businesses operating in high-risk sectors",
                    text2: "face strict monitoring, making transaction stability difficult to maintain.",
                  },
                  {
                    title: "Delayed Approvals & Onboarding",
                    text1: "Lengthy underwriting processes and repeated",
                    text2: "document requests slow down business operations and payment activation.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 18 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.45 },
                      },
                    }}
                    className="w-full py-3 rounded-xl bg-white/5 border border-white/10 px-4"
                  >
                    <div className="flex flex-col gap-2 items-center text-center">
                      <h2 className="font-semibold text-sm sm:text-base">
                        {item.title}
                      </h2>
                      <p className="text-[11px] sm:text-xs text-white/70">
                        <span className="block">{item.text1}</span>
                        <span className="block">{item.text2}</span>
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Large version (unchanged) */}
          <div className="hidden lg:block w-full max-w-8xl rounded-4xl border border-gray-800 px-4 sm:px-8 lg:px-10 py-5 bg-primary/50 mt-8 sm:mt-15 mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15 } },
              }}
              className="flex flex-col gap-4 text-white"
            >
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="text-center font-semibold text-3xl"
              >
                Common Reasons Business Are Classified High-Risk
              </motion.h1>

              <motion.div
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.15 } },
                }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 lg:gap-20 justify-items-center"
              >
                {[
                  {
                    title: "Frequent Payment Rejections",
                    text1: "High-risk businesses are often declined by",
                    text2: "traditional banks and payment providers due to industry classification or risk policies.",
                  },
                  {
                    title: "Sudden Account Shutdowns",
                    text1: "Many merchants experience unexpected ",
                    text2: "account suspensions or terminated processing without prior notice.",
                  },
                  {
                    title: "High Chargeback Monitoring",
                    text1: "Businesses operating in high-risk sectors",
                    text2: "face strict monitoring, making transaction stability difficult to maintain.",
                  },
                  {
                    title: "Delayed Approvals & Onboarding",
                    text1: "Lengthy underwriting processes and repeated",
                    text2: "document requests slow down business operations and payment activation.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 25 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5 },
                      },
                    }}
                    className="py-3 rounded-t-xl cursor-pointer"
                  >
                    <div className="flex flex-col gap-2 items-center text-center">
                      <h2 className="font-semibold text-sm sm:text-base lg:text-md">
                        {item.title}
                      </h2>
                      <p className="text-[10px] sm:text-xs">
                        <span className="block">{item.text1}</span>
                        <span className="block">{item.text2}</span>
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HR_HeroSection;
