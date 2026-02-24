import Navbar from "./components/Navbar/Navbar"
import LenisScroll from "./components/lenis";

import Home from './pages/Home/Home'


function App() {

  return (
    <>
    <div className=" bg-black">

    <LenisScroll />
    <Navbar/>

    <Home/>



     </div>
    </>
  )
}

export default App
