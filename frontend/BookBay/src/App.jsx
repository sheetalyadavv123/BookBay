import { useState } from 'react'
import Home from './home/Home';
import Courses from './courses/Courses';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Routes, Route} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={<Courses/>}/>
     </Routes>
  </>
  )
}

export default App
