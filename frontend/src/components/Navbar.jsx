import React, { useEffect } from 'react'
import {useState} from "react";
import Login from "../components/Login"

function Navbar() {

  const [sticky,setSticky]=useState(false)
  useEffect(()=>{
    const handleScroll=()=>{
        if(window.scrollY>0){
          setSticky(true)
        }
        else{
          setSticky(false)
        }
    }
    window.addEventListener('scroll',handleScroll)
    return ()=>{
        window.removeEventListener('sceoll',handleScroll)
    }
  },[])
    const navItems=(
    <>
    <li><a href="/">Home</a></li>
    <li><a href="/course">Course</a></li>
    <li><a>Contact</a></li>
    <li><a>About</a></li>
    </>
    );
  return (
    <div className={`max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 ${
      sticky?"stcky-navBar shadow-md bg-base-200 duration-300 transition-all ease in out":""
    }`}>
      <div className="navbar shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">{navItems}</ul>
    </div>
    <a className="text-2xl font-bold cursor-pointer">BookBay</a>
  </div>
  <div className="navbar-end space-x-3">
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">{navItems}</ul>
  </div>
  
 
   <div className="hidden md:block"> 
    <label className="input input-bordered flex items-center gap-2 focus-within:outline-none focus-within:ring-0">
   
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
   <input
      type="search"
      placeholder="Search"
      className="grow focus:outline-none focus:ring-0"
    />
</label>
</div>

 
<label className="swap swap-rotate cursor-pointer">

  <input
    type="checkbox"
    onChange={(e) => {
      document.documentElement.setAttribute(
        "data-theme",
        e.target.checked ? "dark" : "light"
      );
    }}
  />

  {/* SUN */}
  <svg
    className="swap-off h-6 w-6 text-yellow-500"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.36-6.36-1.42 1.42M7.05 16.95l-1.42 1.42m0-12.02 1.42 1.42m9.9 9.9 1.42 1.42M12 8a4 4 0 100 8 4 4 0 000-8z"
    />
  </svg>

  {/* MOON */}
  <svg
    className="swap-on h-6 w-6 text-blue-400"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
    />
  </svg>

</label>


  <div className="">
    <a className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-500 duration-300"
        onClick={()=>document.getElementById("my_modal_3").showModal()}>
      Login</a>
      <Login/>
  </div>
  
</div>
</div>
    </div>
  )
}

export default Navbar
