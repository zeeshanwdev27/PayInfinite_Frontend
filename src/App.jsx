import React from "react"
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"

import Layout from "./layout/Layout.jsx"

const Home = React.lazy(()=> import('./pages/Home/Home'))
const HighRisk = React.lazy(()=> import('./pages/HighRisk/HighRisk'))
const LowRisk = React.lazy(()=> import('./pages/LowRisk/LowRisk'))
const ContactUs = React.lazy(()=> import('./pages/ContactUs/ContactUs'))
const AboutUs = React.lazy(()=> import('./pages/AboutUs/AboutUs'))
const PP_Layout = React.lazy(()=> import('./pages/PrivacyPolicy/PP_Layout'))
const TC_Layout = React.lazy(()=> import('./pages/TermsAndConditions/TC_Layout'))


const App = createBrowserRouter(
  createRoutesFromElements(
    <>
     <Route path="/" element={<Layout />}>

     <Route index element={<Home />} />

     {/* HighRisk */}
     <Route path="/highrisk" element={<HighRisk />} />  

     {/* LowRisk */}
     <Route path="/lowrisk" element={<LowRisk />} />  

     {/* About */}
     <Route path="/aboutus" element={<AboutUs />} />  

     {/* Contact */}
     <Route path="/contactus" element={<ContactUs />} />  


     {/* PrivacyPolicy */}
     <Route path="/privacypolicy" element={<PP_Layout />} />  

     {/* TermsAndConditions */}
     <Route path="/termsandconditions" element={<TC_Layout />} />  
     
     </Route>
    </>
  )
)
export default App
