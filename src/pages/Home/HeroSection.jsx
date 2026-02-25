import React from "react";
import CountUp from "@/components/count-number.jsx";
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

  return (
    <section className="min-h-screen pt-50 sm:pt-28 lg:pt-32 overflow-hidden">
      {/* Body  */}
      <div className="px-4 sm:px-[6%] lg:px-[10%] rounded-4xl py-8 sm:py-10 lg:p-12 backdrop-blur-[14.4px]">
        {/* grid layout */}
        <div className="grid lg:grid-cols-[2fr_1.5fr] gap-8 sm:gap-10">
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
              Reliable Merchant Accounts
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base text-white/70"
            >
              Accept payments globally with a secure and high-performance
              merchant account built for modern businesses. From high-risk to
              low-risk industries, we provide fast approvals, multiple payment
              options, and stable processing you can depend on.
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
                Make A Payment
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
        <div className="hidden lg:block w-full max-w-8xl rounded-4xl border border-gray-800 px-4 sm:px-8 lg:px-10 py-5 bg-primary/50 mt-8 sm:mt-10 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 lg:gap-40 justify-items-center">
            <div className="py-3 rounded-t-xl cursor-pointer">
              <div className="flex flex-col gap-2 items-center text-white text-center">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
                  <CountUp from={100} to={265} />K
                </h1>

                <div className="flex flex-col gap-1">
                  <h2 className="font-semibold text-sm sm:text-base lg:text-lg">
                    Transactions Processed
                  </h2>
                  <p className="text-[10px] sm:text-xs">
                    <span className="block">Secure and stable payment</span>
                    <span className="block">processing for growing businesses.</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="py-3 rounded-t-xl cursor-pointer">
              <div className="flex flex-col gap-2 items-center text-white text-center">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
                  <CountUp from={0} to={89} />K
                </h1>

                <div className="flex flex-col gap-1">
                  <h2 className="font-semibold text-sm sm:text-base lg:text-lg">
                    Active Merchant Account
                  </h2>
                  <p className="text-[10px] sm:text-xs">
                    <span className="block">Supporting startups, enterprises,</span>
                    <span className="block">and high-risk industries.</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="py-3 rounded-t-xl cursor-pointer">
              <div className="flex flex-col gap-2 items-center text-white text-center">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
                  <CountUp from={0} to={89} />+
                </h1>

                <div className="flex flex-col gap-1">
                  <h2 className="font-semibold text-sm sm:text-base lg:text-lg">
                    Payment Integrations
                  </h2>
                  <p className="text-[10px] sm:text-xs">
                    <span className="block">Cards, international payments,</span>
                    <span className="block">and global gateways.</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="py-3 rounded-t-xl cursor-pointer">
              <div className="flex flex-col gap-2 items-center text-white text-center">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
                  <CountUp from={0} to={99} />%
                </h1>

                <div className="flex flex-col gap-1">
                  <h2 className="font-semibold text-sm sm:text-base lg:text-lg">
                    Approval Success Rate
                  </h2>
                  <p className="text-[10px] sm:text-xs">
                    <span className="block">Fast onboarding with</span>
                    <span className="block">dedicated merchant support.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;