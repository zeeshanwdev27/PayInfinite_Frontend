import React from "react";
import { motion } from "motion/react";
import { HighRiskCards } from "@/data/CardsData.js";

function HighRiskIn() {
  return (
    <section className="relative py-24 px-4 sm:px-[8%] text-white">
      
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center flex flex-col gap-5">
        <h1 className="text-4xl md:text-5xl font-bold">
          High-Risk Industries We Accept
        </h1>
        <p className="text-white/70">
        Navigating high-risk industries is challenging, but Crazy Merchants makes it easier with our specialized high-risk merchant account services. Our expert team is dedicated to providing secure and efficient payment processing solutions tailored to your business needs.
        </p>
      </div>



      {/* Cards Grid */}
      <div className="mt-20 grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-10 max-w-7xl mx-auto">
        {HighRiskCards.map((item, index) => {

          // Clean stagger logic
          const staggerClass =
            index % 3 === 1
              ? "lg:translate-y-12"
              : index % 3 === 2
              ? "lg:translate-y-24"
              : "";

          return (

          <div key={index} className={`relative rounded-3xl p-[1.5px]  ${staggerClass}`}>
            <div className="rounded-3xl p-6 flex flex-col gap-4 h-full hover:scale-110">
              
              <div className="p-3 bg-white/10 w-fit rounded-xl mb-3">
              <img src={item.image} alt={item.title} />
              </div>
              
              <h2 className="text-lg font-semibold text-white text-center">
                {item.title}
              </h2>
   
            
            </div>
          </div>
        )
        })}
      </div>


      {/* Buttons */}
      <div className="mt-35 flex justify-center gap-7 items-center">
          <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
            onClick={() => {
              if (window.LiveChatWidget) {
                window.LiveChatWidget.call("maximize");
              }
            }}
            className={`p-2 px-5 rounded-xl text-white border bg-primary border-white transition-all duration-300 cursor-pointer hover:bg-white hover:text-black`}
          >
            Get Started
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`p-2 px-5 rounded-xl border cursor-pointer transition-all duration-300 flex gap-3 items-center primary-btn hover:opacity-90`}
          >
            Learn More
          </motion.button>

      </div>



    </section>
  );
}

export default HighRiskIn;