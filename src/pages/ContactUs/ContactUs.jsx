import React from "react";
import ContactUsPage from './ContactUsPage'

function GlowSection({ children, index, className = "" }) {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative ${className}`}>
      {/* Glow Layer */}
      <div className={`absolute inset-0 pointer-events-none z-0 overflow-hidden`}>
        <div className="absolute inset-0" style={{ WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)", maskImage: "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",}}>
         
          {/* TOP GLOW */}
          <div className={`absolute -top-40 ${isEven ? "-right-40" : "-left-40"} w-130 h-130 md:w-150 md:h-150 rounded-full bg-[radial-gradient(circle_at_center,#1E40FF_0%,#032C9D_35%,#021B5A_60%,transparent_72%)] blur-[95px] opacity-65 mix-blend-screen`}/>

          {/* BOTTOM GLOW */}
          <div className={`absolute -bottom-40 ${isEven ? "-left-40" : "-right-40"} w-130 h-130 md:w-175 md:h-120 rounded-full bg-[radial-gradient(circle_at_center,#1E40FF_0%,#032C9D_35%,#021B5A_60%,transparent_72%)] blur-[120px] opacity-65 mix-blend-screen`}/>
        
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

function ContactUs() {
  const sections = [
    <ContactUsPage />,
  ];

  return (
    <div className="relative bg-black overflow-x-hidden">
      {sections.map((Section, index) => (
        <GlowSection
          key={index}
          index={index}
          disableGlow={index === 0} 
          className={index === 0 ? "min-h-screen" : ""}
        >
          {Section}
        </GlowSection>
      ))}
    </div>
  );
}

export default ContactUs;
