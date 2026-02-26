import React from "react";
import { motion } from "framer-motion";

function HeroSection() {
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


    const cardVariants = {
    hidden: { opacity: 0, y: 18, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
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

  return (
    <section className="min-h-screen pt-50 sm:pt-28 lg:pt-32 overflow-hidden">
      {/* Body  */}
      <div className="px-4 sm:px-[6%] lg:px-[10%] rounded-4xl py-8 sm:py-10 lg:p-12 backdrop-blur-[14.4px]">
        {/* grid layout */}
        <div className="grid lg:grid-cols-[2fr_1.5fr] gap-8 sm:gap-0">

          {/* left */}
          <div className="bg-black/50 rounded-2xl h-[260px] sm:h-[360px] lg:h-125 overflow-hidden">
            <video
              src="/HeroSection/signvideo.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

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
              Reliable Merchant Accounts for Secure Payment Processing
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base text-white/70"
            >
              Accept payments seamlessly with merchant account solutions designed for businesses that need secure, stable, and uninterrupted payment processing. PayInfinite provides specialized merchant accounts that allow businesses to process credit cards, debit cards, online payments, recurring transactions, and bank transfers through trusted payment networks — even for industries that face approval challenges with traditional providers.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row w-full gap-3 sm:gap-0"
            >
              <input
                type="email"
                placeholder="your email"
                className="text-black flex-1 bg-white rounded-xl sm:rounded-l-xl sm:rounded-r-none border border-gray-300 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-xl sm:rounded-l-none sm:rounded-r-xl primary-btn text-white px-6 py-3 font-semibold hover:opacity-90 transition cursor-pointer w-full sm:w-auto"
              >
                Connect With Us
              </motion.button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="hidden md:flex flex-col  sm:flex-row gap-3 sm:gap-5 mt-4 sm:mt-6 lg:mt-8"
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

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+8886519042"
                className="p-2 px-5 rounded-xl border cursor-pointer transition-all duration-300 flex gap-3 items-center justify-center primary-btn hover:opacity-90 w-full sm:w-auto"
              >
                888-651-9042
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom */}
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

export default HeroSection;