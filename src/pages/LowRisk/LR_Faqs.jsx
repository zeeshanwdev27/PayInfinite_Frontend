import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LR_Faqss } from "@/data/CardsData.js";

function LR_Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const EASE_OUT = [0.16, 1, 0.3, 1];
  const EASE_IN_OUT = [0.4, 0, 0.2, 1];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.35,
        ease: EASE_OUT,
        staggerChildren: 0.07,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 16, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.38, ease: EASE_OUT },
    },
  };

  const answerVariants = {
    closed: {
      opacity: 0,
      clipPath: "inset(0 0 100% 0)",
      transition: { duration: 0.2, ease: EASE_IN_OUT },
    },
    open: {
      opacity: 1,
      clipPath: "inset(0 0 0% 0)",
      transition: { duration: 0.26, ease: EASE_IN_OUT },
    },
  };

  const iconVariants = {
    closed: { rotate: 0 },
    open: { rotate: 180 },
  };

  return (
    <section className="relative px-4 sm:px-[6%] lg:px-[8%] text-white py-10 md:py-20">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center flex flex-col gap-4 sm:gap-5">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Got Questions? We’ve Got Answers! 
        </h1>

        <p className="text-white/70 text-sm sm:text-base">
          A merchant account is a business account that allows you to accept
          credit and debit card payments securely. It connects your business to
          payment networks and ensures smooth transaction processing.
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full mt-10 sm:mt-12 lg:mt-20 gap-8 sm:gap-10 lg:px-30">
        {/* Left */}
        <div className="flex justify-center order-1 lg:order-none">
          <img
            src="./Faqs/faqs.png"
            alt="faqs"
            className="w-full max-w-xs sm:max-w-sm lg:max-w-md h-80 md:h-100 object-contain"
          />
        </div>

        {/* Right */}
        <div className="relative w-full flex flex-col gap-5 order-2 lg:order-none">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center"
          >
            <motion.div variants={containerVariants} className="w-full space-y-3">
              {LR_Faqss.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    layout="position"
                    transition={{ layout: { duration: 0.2, ease: EASE_IN_OUT } }}
                    className="cursor-pointer w-full rounded-2xl px-4 sm:px-6 py-4 sm:py-5
                               bg-white/5 backdrop-blur-md border border-white/10
                               hover:bg-white/10 transition shadow-sm hover:shadow-md"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    whileHover={{ scale: 1.008 }}
                    whileTap={{ scale: 0.992 }}
                  >
                    <div className="flex items-center justify-between gap-3 sm:gap-4">
                      <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white leading-relaxed">
                        {faq.title}
                      </h3>

                      <motion.div
                        variants={iconVariants}
                        animate={isOpen ? "open" : "closed"}
                        transition={{ duration: 0.22, ease: EASE_IN_OUT }}
                        className="flex-shrink-0 text-xl sm:text-3xl font-medium text-white/80"
                      >
                        {isOpen ? "−" : "+"}
                      </motion.div>
                    </div>

                    <AnimatePresence initial={false} mode="wait">
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial="closed"
                          animate="open"
                          exit="closed"
                          variants={answerVariants}
                          className="mt-3 sm:mt-4 overflow-hidden will-change-[clip-path,opacity]"
                        >
                          <p className="text-xs sm:text-sm lg:text-base text-white/70 leading-relaxed sm:leading-loose">
                            {faq.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default LR_Faqs;