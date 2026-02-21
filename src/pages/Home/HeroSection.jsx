import React from 'react'
import CountUp from "@/components/count-number.jsx";

function HeroSection() {
  return (
    <section className="min-h-screen pt-32">
      <div className="rounded-4xl p-12 backdrop-blur-[14.4px]">
      
      {/* grid layout */}
      <div className="grid lg:grid-cols-[2fr_1.5fr] gap-10">
      
      {/* left */}
      <div className="bg-black/50 rounded-2xl h-125 overflow-hidden">
        <video src="/HeroSection/signvideo.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover"/>
      </div>

      {/* Right */}
      <div className='w-full max-w-2xl flex flex-col gap-7'>

        <h1 className="text-6xl font-semibold text-white leading-tight">
          Seamless Global <br /> Money Transfer
        </h1>

        <p className="text-white/70">
          Streamline your payments with our advanced online payment solutions. Whether you're payi servicesi sending money abroad, or shopping online, our platform ensures safety
        </p>

        <div className="flex w-full">
          {/* Input */}
          <input type="email" placeholder="your email" className="text-black flex-1 bg-white rounded-l-xl border border-gray-300 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
          
          {/* Button */}
          <button className="rounded-r-xl primary-btn text-white px-6 py-3 font-semibold hover:opacity-90 transition cursor-pointer">
            Make A Payment
          </button>
        </div>

        <div className='flex gap-5 mt-8'>
          
          <button 
            onClick={() => {
              if (window.LiveChatWidget) {
                window.LiveChatWidget.call("maximize");
              }
            }}
            className={`p-2 px-5 rounded-xl text-white border bg-primary border-white transition-all duration-300 cursor-pointer hover:bg-white hover:text-black`}
          >
            Get Started
          </button>

          <a
            href="tel:+8886519042"
            className={`p-2 px-5 rounded-xl border cursor-pointer transition-all duration-300 flex gap-3 items-center primary-btn hover:opacity-90`}
          >
            888-651-9042
          </a>

        </div>

  

      </div>


      </div>



      {/* Bottom */}
      <div className='w-full max-w-8xl rounded-4xl border border-gray-800 px-10 py-5 flex justify-center gap-40 bg-primary/50 mt-10 mx-auto'>

        <div className='py-3 rounded-t-xl cursor-pointer'>
            <div className='flex flex-col gap-2 items-center text-white text-center'>
              <h1 className='text-4xl font-semibold'><CountUp from={100} to={265} />K</h1>
              
              <div className='flex flex-col gap-1'>
                <h2 className='font-semibold text-lg'>Transfer Payments</h2>
                <p className="text-xs">
                  <span className="block">Sending money abroad,</span>
                  <span className="block">or shopping online</span>
                </p>
              </div>
            </div>
        </div>

        <div className='py-3 rounded-t-xl cursor-pointer'>
            <div className='flex flex-col gap-2 items-center text-white text-center'>
              <h1 className='text-4xl font-semibold'><CountUp from={0} to={89} />K</h1>
              
              <div className='flex flex-col gap-1'>
                <h2 className='font-semibold text-lg'>Transfer Payments</h2>
                <p className="text-xs">
                  <span className="block">Sending money abroad,</span>
                  <span className="block">or shopping online</span>
                </p>
              </div>
            </div>
        </div>

        <div className='py-3 rounded-t-xl cursor-pointer'>
            <div className='flex flex-col gap-2 items-center text-white text-center'>
              <h1 className='text-4xl font-semibold'><CountUp from={0} to={89} />+</h1>
              
              <div className='flex flex-col gap-1'>
                <h2 className='font-semibold text-lg'>Transfer Payments</h2>
                <p className="text-xs">
                  <span className="block">Sending money abroad,</span>
                  <span className="block">or shopping online</span>
                </p>
              </div>
            </div>
        </div>


        <div className='py-3 rounded-t-xl cursor-pointer'>
            <div className='flex flex-col gap-2 items-center text-white text-center'>
              <h1 className='text-4xl font-semibold'> <CountUp from={0} to={99} />% </h1>
              
              <div className='flex flex-col gap-1'>
                <h2 className='font-semibold text-lg'>Transfer Payments</h2>
                <p className="text-xs">
                  <span className="block">Sending money abroad,</span>
                  <span className="block">or shopping online</span>
                </p>
              </div>
            </div>
        </div>

      </div>

  </div>
</section>

  )
}

export default HeroSection
