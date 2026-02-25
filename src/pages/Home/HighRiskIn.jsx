import React from "react";
import { motion } from "motion/react";
import { HighRiskCards } from "@/data/CardsData.js";

function HighRiskIn() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-[6%] lg:px-[8%] text-white">
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center flex flex-col gap-4 sm:gap-5">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          High-Risk Industries We Accept
        </h1>

        <p className="text-white/70 text-sm sm:text-base">
          Navigating high-risk industries can be challenging, but we make it
          easier with our specialized high-risk merchant account services. Our
          expert team is dedicated to providing secure and efficient payment
          processing tailored to your business needs.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="mt-10 sm:mt-14 lg:mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-10 max-w-7xl mx-auto">
        {HighRiskCards.map((item, index) => {
          const staggerClass =
            index % 3 === 1
              ? "lg:translate-y-12"
              : index % 3 === 2
              ? "lg:translate-y-24"
              : "";

          return (
            <div
              key={index}
              className={`relative rounded-3xl p-[1.5px] ${staggerClass}`}
            >
              <div
                className="
                  rounded-3xl
                  p-4 sm:p-5 lg:p-6
                  flex flex-col gap-3 sm:gap-4
                  h-full
                  hover:scale-110
                  transition-transform duration-300
                "
              >
                <div className="p-3 bg-white/10 w-fit rounded-xl mb-1 sm:mb-2 lg:mb-3 mx-auto">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-15 h-15 sm:w-20 sm:h-20 lg:w-auto lg:h-auto object-contain"
                  />
                </div>

                <h2 className="text-sm sm:text-base lg:text-lg font-semibold text-white text-center leading-snug">
                  {item.title}
                </h2>
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

export default HighRiskIn;