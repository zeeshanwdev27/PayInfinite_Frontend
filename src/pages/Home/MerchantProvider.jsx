import React, { useEffect, useMemo, useRef, useState } from "react";

import { MerchantProviderCards } from "@/data/CardsData.js";

import { motion } from "motion/react";

import { ChevronLeft, ChevronRight } from "lucide-react";

function useVisibleCount() {
  const getCount = () => {
    if (typeof window === "undefined") return 3;

    const w = window.innerWidth;

    if (w < 768) return 1;

    if (w < 1024) return 2;

    return 3;
  };

  const [count, setCount] = useState(getCount);

  useEffect(() => {
    const onResize = () => setCount(getCount());

    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  return count;
}

function MerchantProvider() {
  const visibleCount = useVisibleCount();
  const [index, setIndex] = useState(0);

  const trackRef = useRef(null);
  const firstCardRef = useRef(null);

  const [step, setStep] = useState(0);
  const gapPx = 40;

  useEffect(() => {
    if (!firstCardRef.current) return;
    const measure = () => {
      const cardWidth = firstCardRef.current.getBoundingClientRect().width;
      setStep(cardWidth + gapPx);
    };

    measure();

    const ro = new ResizeObserver(() => measure());

    ro.observe(firstCardRef.current);

    return () => ro.disconnect();
  }, []);

  // max index so we don't slide beyond last "page"

  const maxIndex = useMemo(() => {
    return Math.max(0, MerchantProviderCards.length - visibleCount);
  }, [visibleCount]);

  // keep index valid when screen resizes

  useEffect(() => {
    setIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const canPrev = index > 0;

  const canNext = index < maxIndex;

  const handlePrev = () => setIndex((prev) => Math.max(0, prev - 1));

  const handleNext = () => setIndex((prev) => Math.min(maxIndex, prev + 1));

  return (
    <section className="relative py-24 px-4 sm:px-[8%] text-white w-full">
      {/* Heading */}
      <div className="flex justify-between gap-10 mx-40">
        <div className="max-w-3xl flex flex-col gap-5">
          <h1 className="text-4xl md:text-5xl font-bold">
            Why Choose Us
          </h1>
          <p className="text-white/70">
          Choosing the right payment partner makes all the difference. We deliver secure processing,
          smooth system integration, and dedicated support to ensure your business runs without
          payment disruptions.
          Our infrastructure is built for performance, stability, and long-term growth — giving you the
          confidence to process payments without limits.

            
          </p>
        </div>

        <img
          src="./MerchantProvider/risk.png"
          alt="riskmanagment"
          className="w-120 h-50"
        />
      </div>

      {/* Slider */}
      <div className="mt-20 max-w-7xl mx-auto">
        {/* viewport */}
        <div className="overflow-hidden">
          {/* track */}
          <motion.div
            ref={trackRef}
            className="flex gap-10"
            animate={{ x: -(index * step) }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
          >
            {MerchantProviderCards.map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  ref={i === 0 ? firstCardRef : null}
                  className="min-w-full md:min-w-[calc((100%-40px)/2)] lg:min-w-[calc((100%-80px)/3)]"
                >
                  <div className="relative rounded-3xl p-[1.5px]">
                    <div className="rounded-3xl p-6 flex flex-col gap-4 hover:scale-102 button-gradient transition-all duration-300 h-full">
                      <div className="p-3 bg-white/10 w-fit rounded-xl mb-3">
                        <Icon size={28} strokeWidth={1.5} />
                      </div>

                      <h2 className="text-xl font-semibold text-white">
                        {item.title}
                      </h2>

                      <p className="text-white/70 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Slider Buttons (bottom-left like your screenshot) */}
      <div className="mt-15 flex justify-start mx-40 gap-5 items-center">
        <motion.button
          whileHover={{ scale: canPrev ? 1.05 : 1 }}
          whileTap={{ scale: canPrev ? 0.95 : 1 }}
          onClick={handlePrev}
          disabled={!canPrev}
          className={`p-2 px-5 py-3 rounded-xl transition-all duration-300 cursor-pointer

            ${canPrev ? "bg-primary text-white hover:bg-white hover:text-black" : "bg-white/10 text-white/40 cursor-not-allowed"}

          `}
        >
          <ChevronLeft />
        </motion.button>

        <motion.button
          whileHover={{ scale: canNext ? 1.05 : 1 }}
          whileTap={{ scale: canNext ? 0.95 : 1 }}
          onClick={handleNext}
          disabled={!canNext}
          className={`p-2 px-5 py-3 rounded-xl transition-all duration-300 cursor-pointer flex gap-3 items-center

            ${canNext ? "primary-btn hover:opacity-90" : "bg-white/10 text-white/40 cursor-not-allowed"}

          `}
        >
          <ChevronRight />
        </motion.button>
      </div>
    </section>
  );
}

export default MerchantProvider;
