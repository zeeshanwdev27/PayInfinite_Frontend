import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import LenisScroll from "./components/lenis";

import Home from './pages/Home/Home'


function App() {

  return (
    <>
    <div className=" bg-black">

    <LenisScroll />
    <Navbar/>

    <Home/>

    <Footer/>



     </div>
    </>
  )
}

export default App
