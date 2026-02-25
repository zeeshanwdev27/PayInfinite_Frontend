import React from "react";
import TermsAndConditions from "./TermsAndConditions";

function GlowSection({ children, index, className = "" }) {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative ${className}`}>
      {/* Glow Layer */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
          }}
        >
          {/* TOP GLOW */}
          <div
            className={`absolute -top-40 ${
              isEven ? "-right-40" : "-left-40"
            } w-[520px] h-[520px] md:w-[600px] md:h-[600px]
            rounded-full
            bg-[radial-gradient(circle_at_center,#1E40FF_0%,#032C9D_35%,#021B5A_60%,transparent_72%)]
            blur-[110px] opacity-80`}
          />

          {/* BOTTOM GLOW */}
          <div
            className={`absolute -bottom-40 ${
              isEven ? "-left-40" : "-right-40"
            } w-[520px] h-[520px] md:w-[700px] md:h-[420px]
            rounded-full
            bg-[radial-gradient(circle_at_center,#1E40FF_0%,#032C9D_35%,#021B5A_60%,transparent_72%)]
            blur-[140px] opacity-80`}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

function TC_Layout() {
  return (
    <div className="relative bg-black overflow-x-hidden">
      <GlowSection index={0} className="min-h-screen">
        <TermsAndConditions />
      </GlowSection>
    </div>
  );
}

export default TC_Layout;