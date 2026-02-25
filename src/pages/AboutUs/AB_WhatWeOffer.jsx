import React from "react";
import { AboutCards } from "@/data/CardsData.js";
import { motion } from "motion/react";



function AB_WhatWeOffer() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-[6%] lg:px-[8%] text-white">
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center flex flex-col gap-4 sm:gap-5">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          What we offer
        </h1>
        <p className="text-white/70 text-sm sm:text-base">
        At PayInfinite, we deliver flexible merchant account solutions for both high-risk and low-risk businesses. Whether you need competitive standard processing or specialized risk-based approvals, we structure payment systems that support stability and growth.
        </p>
      </div>

      <div className="mt-10 sm:mt-14 lg:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
        {AboutCards.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className={`relative rounded-3xl p-[1.5px] bg-linear-to-br from-amber-400 via-blue-400 to-cyan-400`}
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



    </section>
  );
}

export default AB_WhatWeOffer;