import React from "react";
import CountUp from "@/components/count-number.jsx";
import { motion } from "framer-motion";

function AB_HeroSection() {
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
              At PayInfinite, we provide secure and reliable merchant account
              solutions for both high-risk and low-risk businesses across
              multiple industries. Whether your business has stable processing
              history or faces challenges like industry restrictions,
              chargebacks, or prior declines — we structure payment solutions
              that fit your model. With years of experience in domestic and
              offshore payment processing, we work with trusted banking partners
              to deliver smooth approvals, competitive rates, and long-term
              account stability. From retail and professional services to
              high-risk industries and international merchants, our mission is
              simple — make payment processing accessible, secure, and scalable
              for every business.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col  sm:flex-row gap-3 sm:gap-5 mt-4 sm:mt-6 lg:mt-8"
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
        <div className="hidden lg:block w-full max-w-8xl rounded-4xl border border-gray-800 px-4 sm:px-8 lg:px-10 py-5 bg-primary/50 mt-8 sm:mt-10 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 lg:gap-20 justify-items-center">
            <div className="py-3 rounded-t-xl cursor-pointer">
              <div className="flex flex-col gap-2 items-center text-white text-center">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
                  <CountUp from={0} to={25} />K
                </h1>

                <div className="flex flex-col gap-1">
                  <h2 className="font-semibold text-sm sm:text-base lg:text-md">
                    Businesses Supported (High & Low Risk)
                  </h2>
                  <p className="text-[10px] sm:text-xs">
                    <span className="block">
                      Empowering approved merchants across
                    </span>
                    <span className="block">
                      diverse and regulated industries.
                    </span>
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
                  <h2 className="font-semibold text-sm sm:text-base lg:text-md">
                    Transactions Processed Daily
                  </h2>
                  <p className="text-[10px] sm:text-xs">
                    <span className="block">
                      Secure, real-time processing for
                    </span>
                    <span className="block">growing businesses worldwide.</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="py-3 rounded-t-xl cursor-pointer">
              <div className="flex flex-col gap-2 items-center text-white text-center">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
                  <CountUp from={0} to={100} />+
                </h1>

                <div className="flex flex-col gap-1">
                  <h2 className="font-semibold text-sm sm:text-base lg:text-md">
                    Industry Categories Served
                  </h2>
                  <p className="text-[10px] sm:text-xs">
                    <span className="block">From retail and SaaS to</span>
                    <span className="block">
                      high-risk and restricted sectors.
                    </span>
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
                  <h2 className="font-semibold text-sm sm:text-base lg:text-md">
                    Application Review Rate
                  </h2>
                  <p className="text-[10px] sm:text-xs">
                    <span className="block">Efficient underwriting with</span>
                    <span className="block">fast, transparent approvals.</span>
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

export default AB_HeroSection;
