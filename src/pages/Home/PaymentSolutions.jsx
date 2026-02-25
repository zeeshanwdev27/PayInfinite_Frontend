import React from "react";
import { motion } from "motion/react";

function PaymentSolutions() {
  const cards = [
    { image: "./PaymentSol/img1.png", hover: "./PaymentSol/img1.1.png" },
    { image: "./PaymentSol/img2.png", hover: "./PaymentSol/img2.2.png" },
    { image: "./PaymentSol/img3.png", hover: "./PaymentSol/img3.3.png" },
  ];

  return (
    <section className="relative  py-24 px-4 sm:px-[8%] text-white">
      
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center flex flex-col gap-5">
        <h1 className="text-4xl md:text-5xl font-bold">
          Advanced Merchant Accounts for Global Payment Processing
        </h1>
        <p className="text-white/70">
        Growing beyond borders requires a secure and dependable payment partner. We provide
        high-risk and low-risk merchant accounts built for stable processing, fast approvals, and
        worldwide transaction support.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="mt-20 grid sm:grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {cards.map((card, index) => (
          <HoverCard key={index} card={card} />
        ))}
      </div>



      {/* Buttons */}
      <div className="mt-15 flex justify-center gap-7 items-center">
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

export default PaymentSolutions;



/* ================= Hover Card ================= */

function HoverCard({ card }) {
  return (
    <div className="relative group cursor-pointer overflow-hidden rounded-3xl hover:scale-105">

      {/* Default Image */}
      <img
        src={card.image}
        alt=""
        className="w-full h-full object-cover rounded-3xl transition-opacity duration-500 group-hover:opacity-0"
      />

      {/* Hover Image */}
      <img
        src={card.hover}
        alt=""
        className="absolute inset-0 w-full h-full object-cover rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

    </div>
  );
}