import React from 'react'
import HeroSection from './HeroSection'
import LowRiskIn from './LowRiskIn'
import HighRiskIn from './HighRiskIn'
import PaymentSolutions from './PaymentSolutions'
import MerchantProvider from './MerchantProvider'
import FaqSection from './FaqSection'

function Home() {
  return (
  <div className="relative bg-black overflow-hidden">
    
    {/* GLOBAL BACKGROUND GLOW */}
    <div className="absolute -top-100 -right-100 w-300 h-300 rounded-full bg-[radial-gradient(circle_at_center,#1E40FF_0%,#032C9D_35%,#021B5A_60%,transparent_60%)]  blur-[120px] opacity-40 pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-300 h-300 rounded-full bg-[radial-gradient(circle_at_center,#1E40FF_0%,#032C9D_35%,#021B5A_60%,transparent_60%)] blur-[120px] opacity-40 pointer-events-none" />
    
    <HeroSection />
    <LowRiskIn />
    <HighRiskIn />
    <PaymentSolutions/>
    <MerchantProvider/>
    <FaqSection/>
    
    
</div>

  )
}

export default Home
