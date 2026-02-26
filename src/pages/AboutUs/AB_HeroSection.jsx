import React from "react";
import { motion } from "framer-motion";

function AB_HeroSection() {
  // Top section variants
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

  // Bottom section variants
  const bottomContainerVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.15 },
    },
  };

  const bottomGridVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 18, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="min-h-screen pt-35 sm:pt-28 lg:pt-32 overflow-hidden">
      {/* Body  */}
      <div className="px-4 sm:px-[6%] lg:px-[10%] rounded-4xl py-8 sm:py-10 lg:p-12 backdrop-blur-[14.4px]">
        {/* grid layout */}
        <div className="grid lg:grid-cols-[2fr_1.5fr] gap-8 sm:gap-10">
          {/* left */}
          <motion.img
            src="/About/aboutus.png"
            className="w-full h-full object-cover"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          />

          {/* Right */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-2xl flex flex-col gap-5 sm:gap-6 lg:gap-7"
          >
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight"
            >
              About Us
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base text-white/70"
            >
              At PayInfinite, we specialize in providing secure and dependable
              merchant account solutions for businesses that require stable and
              flexible payment processing. Our services are designed for both
              standard and high-risk industries, helping businesses accept
              payments through credit cards, debit cards, online transactions,
              recurring billing, and bank transfer solutions without processing
              interruptions. Many businesses struggle with payment approvals due
              to industry type, chargeback history, or banking limitations. We
              work closely with trusted acquiring banks and payment partners to
              structure merchant accounts that ensure higher approval rates,
              secure transaction processing, and long-term account stability.
              From e-commerce stores and subscription platforms to call centers
              and service-based businesses, PayInfinite delivers payment
              solutions built to support growth, reduce risk, and keep
              transactions running smoothly. Our mission is simple — to provide
              reliable payment processing solutions that allow businesses to
              operate, scale, and accept payments with confidence.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-5 mt-4 sm:mt-6 lg:mt-8"
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
        </div>

        {/* Bottom */}
        <motion.div
          className="hidden lg:block w-full max-w-8xl rounded-4xl border border-gray-800 px-4 sm:px-8 lg:px-10 py-5 bg-primary/50 mt-8 sm:mt-10 mx-auto"
          variants={bottomContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="flex flex-col gap-3 text-white">
            <motion.h1
              variants={itemVariants}
              className="text-center font-semibold text-3xl"
            >
             Why Businesses Struggle With Traditional Payment Providers
            </motion.h1>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 lg:gap-10 justify-items-center"
              variants={bottomGridVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              <motion.div
                variants={cardVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                className="py-3 rounded-t-xl cursor-pointer"
              >
                <div className="flex flex-col gap-2 items-center text-white text-center">
                  <div className="flex flex-col gap-2">
                    <h2 className="font-semibold text-sm sm:text-base lg:text-md">
                      Limited Payment Options
                    </h2>
                    <p className="text-[10px] sm:text-xs">
                      <span className="block">
                        Businesses often struggle to accept
                      </span>
                      <span className="block">
                        multiple payment methods due to restricted merchant
                        account capabilities.
                      </span>
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={cardVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                className="py-3 rounded-t-xl cursor-pointer"
              >
                <div className="flex flex-col gap-2 items-center text-white text-center">
                  <div className="flex flex-col gap-2">
                    <h2 className="font-semibold text-sm sm:text-base lg:text-md">
                      Processing Limits &amp; Fund Holds
                    </h2>
                    <p className="text-[10px] sm:text-xs">
                      <span className="block">
                        Increasing transaction volume can
                      </span>
                      <span className="block">
                        lead to rolling reserves, payout delays, or unexpected
                        fund holds.
                      </span>
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={cardVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                className="py-3 rounded-t-xl cursor-pointer"
              >
                <div className="flex flex-col gap-2 items-center text-white text-center">
                  <div className="flex flex-col gap-2">
                    <h2 className="font-semibold text-sm sm:text-base lg:text-md">
                      Integration Difficulties
                    </h2>
                    <p className="text-[10px] sm:text-xs">
                      <span className="block">
                        Complex payment gateway setups and
                      </span>
                      <span className="block">
                        compatibility issues can delay business operations.
                      </span>
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={cardVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                className="py-3 rounded-t-xl cursor-pointer"
              >
                <div className="flex flex-col gap-2 items-center text-white text-center">
                  <div className="flex flex-col gap-2">
                    <h2 className="font-semibold text-sm sm:text-base lg:text-md">
                      Lack of Reliable Support
                    </h2>
                    <p className="text-[10px] sm:text-xs">
                      <span className="block">
                        Many merchants face slow responses
                      </span>
                      <span className="block">
                        or limited assistance when payment issues directly
                        impact revenue flow.
                      </span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        
      </div>
    </section>
  );
}

export default AB_HeroSection;