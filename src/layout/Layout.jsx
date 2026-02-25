import React, { Suspense } from 'react'
import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import LenisScroll from "../components/lenis";


function Layout() {

  
  return (
    <>
    <LenisScroll/>

    <Navbar/>
    
    <div className='bg-black'>
        <Outlet/>
    </div>

    <Footer/>
    </>
  )
}

export default Layout