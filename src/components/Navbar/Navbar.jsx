import React, { useState, useEffect } from 'react'
import { ChevronDown, PhoneCall } from 'lucide-react';
import MbOverlay from './MbOverlay.jsx'
import { motion } from "framer-motion";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Widget Hidden on Overlay
  useEffect(() => {
    const handleLiveChatVisibility = () => {
      if (typeof window.LiveChatWidget === 'undefined') return;

      if (isMenuOpen) {
        window.LiveChatWidget.call("hide");
      } else {
        window.LiveChatWidget.call("minimize");
      }
    };

    const timer = setTimeout(handleLiveChatVisibility, 100);
    return () => clearTimeout(timer);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`fixed flex justify-between lg:justify-evenly px-6 lg:px-0 py-8 top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black shadow-lg py-3' : 'bg-transparent'
    }`}>

      {/* Logo */}
      <img 
        src="/Navbar/logo.png" 
        className='w-50 h-12 cursor-pointer' 
        alt="payinfinite_logo" 
      />

      {/* Hamburger */}
      <button
        className="lg:hidden flex flex-col justify-center items-center w-8 h-8"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={`w-6 h-0.5 ${isScrolled ? 'bg-black' : 'bg-white'} transition-all duration-300 ${
          isMenuOpen ? "rotate-45 translate-y-1.5" : ""
        }`} />
        <span className={`w-6 h-0.5 ${isScrolled ? 'bg-black' : 'bg-white'} my-1.5 transition-all duration-300 ${
          isMenuOpen ? "opacity-0" : ""
        }`} />
        <span className={`w-6 h-0.5 ${isScrolled ? 'bg-black' : 'bg-white'} transition-all duration-300 ${
          isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
        }`} />
      </button>

      {/* Desktop Menu */}
      <div className='hidden lg:flex justify-around items-center gap-30'>
        <ul className="flex rounded-4xl px-8 py-0.5 gap-7 justify-center items-center text-white">

          <li className="hover:opacity-80 transition-opacity duration-300 cursor-pointer">
            Home
          </li>

          {/* About Us */}
          <li className="hover:opacity-80 transition-opacity duration-300 cursor-pointer">
            About Us
          </li>


          {/* Services */}
          <li className="relative group cursor-pointer">


            <div className="flex items-center gap-2 rounded-2xl py-2 hover:opacity-80 transition-all duration-300">
              Services
              <ChevronDown className='w-5 h-5'/>
            </div>

            {/* Invisible Gap Barrier */}
            <div className="absolute top-full left-0 right-0 h-3 hidden group-hover:block" />


            <div className="absolute left-0 mt-3 hidden group-hover:grid bg-white text-black shadow-lg rounded-xl py-3 w-100 z-50 grid-cols-2 gap-2">
              <div className="px-4 py-2 text-sm hover:text-blue-400">Merchant Services</div>
              <div className="px-4 py-2 text-sm hover:text-blue-400">ACH</div>
              <div className="px-4 py-2 text-sm hover:text-blue-400">Chargeback Management</div>
              <div className="px-4 py-2 text-sm hover:text-blue-400">High-Risk Merchant Account</div>
              <div className="px-4 py-2 text-sm hover:text-blue-400">3D Secure</div>
              <div className="px-4 py-2 text-sm hover:text-blue-400">Fraud Prevention</div>
              <div className="px-4 py-2 text-sm hover:text-blue-400">Payment Gateway</div>
              <div className="px-4 py-2 text-sm hover:text-blue-400">MOTO Processing</div>
              <div className="px-4 py-2 text-sm hover:text-blue-400">Level 2 & 3 Processing</div>
              <div className="px-4 py-2 text-sm hover:text-blue-400">Recurring Payments</div>
              <div className="px-4 py-2 text-sm hover:text-blue-400">Mobile Payments</div>
              <div className="px-4 py-2 text-sm hover:text-blue-400">Virtual Terminal</div>
              <div className="px-4 py-2 text-sm hover:text-blue-400">Online Payments</div>
              <div className="px-4 py-2 text-sm hover:text-blue-400">B2B Payments</div>
            </div>
          </li>

          {/* Features */}
          <li className="hover:opacity-80 transition-opacity duration-300 cursor-pointer">
            Features
          </li>


           {/* Resources */}
          <li className="hover:opacity-80 transition-opacity duration-300 cursor-pointer">
            Faq
          </li>

        </ul>

        {/* CTA */}
        <div className='flex gap-5 items-center justify-center'>

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

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="tel:+8886519042"
            className={`p-2 px-5 rounded-xl border cursor-pointer transition-all duration-300 flex gap-3 items-center primary-btn hover:opacity-90`}
          >
            <PhoneCall className='w-5 h-5'/>
            888-651-9042
          </motion.a>

        </div>
      </div>

      {isMenuOpen && (
        <MbOverlay isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      )}

    </div>
  )
}

export default Navbar