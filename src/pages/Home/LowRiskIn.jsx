import React from "react";
import { LowRiskCards } from "@/data/CardsData.js";
import { motion } from "motion/react";

function LowRishIndus() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-[6%] lg:px-[8%] text-white">
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center flex flex-col gap-4 sm:gap-5">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Low-Risk Industries We Accept
        </h1>
        <p className="text-white/70 text-sm sm:text-base">
          We provide secure and stable merchant accounts for a wide range of
          low-risk businesses. Our payment processing system ensures fast
          approvals, competitive rates, and smooth transaction flow to help your
          business grow without interruptions.
        </p>
      </div>

      {/* Cards Grid */}
      {/* ✅ Mobile: 1 col (same as before)
          ✅ Medium: 2 col (same as before)
          ✅ Large: 3 col (same as before) */}
      <div className="mt-10 sm:mt-14 lg:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
        {LowRiskCards.map((item, index) => {
          const Icon = item.icon;

          // ✅ keep your large-screen stagger exactly the same
          const staggerClass =
            index % 3 === 1
              ? "lg:translate-y-12"
              : index % 3 === 2
              ? "lg:translate-y-24"
              : "";

          return (
            <div
              key={index}
              className={`relative rounded-3xl p-[1.5px] bg-gradient-to-br from-amber-400 via-blue-400 to-cyan-400 ${staggerClass}`}
            >
              <div className="rounded-3xl p-5 sm:p-6 flex flex-col gap-4 bg-[#0f172a] hover:scale-105 hover:bg-black hover:border hover:border-white transition-all duration-300 h-full">
                <div className="p-3 bg-white/10 w-fit rounded-xl mb-2 sm:mb-3">
                  <Icon size={28} strokeWidth={1.5} />
                </div>

                <h2 className="text-lg sm:text-xl font-semibold text-white">
                  {item.title}
                </h2>

                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Buttons */}
      <div className="mt-10 sm:mt-14 lg:mt-35 flex flex-col sm:flex-row justify-center gap-3 sm:gap-7 items-stretch sm:items-center">
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
          className="p-2 px-5 rounded-xl border cursor-pointer transition-all duration-300 flex gap-3 items-center justify-center primary-btn hover:opacity-90 w-full sm:w-auto"
        >
          Learn More
        </motion.button>
      </div>
    </section>
  );
}

export default LowRishIndus;