import Navbar from "./components/Navbar/Navbar"
import LenisScroll from "./components/lenis";
import HeroSection from "./pages/Home/HeroSection"


function App() {

  return (
    <>
    <div className="px-4 sm:px-[10%] bg-black">

    <LenisScroll />
    <Navbar/>


    <HeroSection/>


        <div className="min-h-screen flex justify-center items-center bg-red-400">
      <h1 className='text-7xl font-bold text-white'>Hello World</h1>
    </div>


        <div className="min-h-screen flex justify-center items-center bg-blue-400 mt-32">
      <h1 className='text-7xl font-bold text-white'>Hello World</h1>
    </div>



     </div>
    </>
  )
}

export default App
