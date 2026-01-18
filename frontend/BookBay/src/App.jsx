import { useState } from 'react'

import Navbar from "./components/Navbar"
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import FreeBook from './components/FreeBook';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <Navbar/>
  <main className="pt-16">
  <Banner />
  </main>
   <FreeBook/>
   
  <Footer/>
 
  </>
  )
}

export default App
