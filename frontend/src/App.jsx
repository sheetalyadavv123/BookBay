import { useState } from 'react'
import Home from './home/Home';
import Courses from './courses/Courses';
import Signup from './components/Signup'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Routes, Route, Navigate} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import {useAuth} from "./context/AuthProvider";


function App() {
  const [authUser,setAuthUser]=useAuth();
  console.log(authUser);
  const [count, setCount] = useState(0)

  return (
  <>
    
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={authUser?<Courses/>:<Navigate to="/signup"/>}/>
      <Route path="/signup" element={<Signup/>}/>
     </Routes>
     <Toaster/>
  </>
  )
}

export default App
