import React from "react";

function AB_Revolutization() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-[6%] lg:px-[8%] text-white w-full">
      {/* Heading */}
      <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-15 mx-0 lg:mx-35 items-start">
        {/* Left */}
        <div className="w-full max-w-3xl flex flex-col gap-4 sm:gap-5 text-center lg:text-left mx-auto lg:mx-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight lg:leading-18">
            Revolutionizing Finance with Blockchain
          </h1>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-10">
            <div className="gradient-border p-4 rounded-md flex flex-col justify-center items-center gap-3 text-center sm:mt-20">
              <h1 className="text-xl font-semibold">Our Vision</h1>
              <p className="text-white/70 text-sm sm:text-base">
                To become a globally trusted payment partner delivering secure,
                transparent, and scalable merchant account solutions for every
                business category.
              </p>
            </div>

            <div className="gradient-border p-4 rounded-md flex flex-col justify-center items-center gap-3 text-center sm:mb-20">
              <h1 className="text-xl font-semibold">Our Mission</h1>
              <p className="text-white/70 text-sm sm:text-base">
                To simplify payment processing by offering fast approvals,
                competitive pricing, reliable risk management, and dedicated
                support for both high-risk and low-risk merchants.
              </p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="w-full max-w-3xl flex flex-col gap-4 sm:gap-5 items-start mx-auto lg:mx-0">
          {/* show image on md+ as you had, but keep layout clean on small */}
          <img
            src="/About/Revolutionizing.png"
            alt="revolutionizing"
            className="hidden md:block w-80 lg:w-120 h-auto mx-auto lg:mx-0"
          />

          <p className="text-white/70 text-sm sm:text-base text-center lg:text-left">
            Choosing the right payment partner makes all the difference. We
            deliver secure processing, smooth system integration, and dedicated
            support to ensure your business runs without payment disruptions.
            Our infrastructure is built for performance, stability, and
            long-term growth — giving you the confidence to process payments
            without limits.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AB_Revolutization;