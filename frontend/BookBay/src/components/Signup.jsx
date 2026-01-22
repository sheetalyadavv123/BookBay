import React from 'react'
import { Link } from "react-router-dom";
import Login from "../components/Login"

function Signup() {
  return (
    <>
    <div className='flex h-screen items-center justify-center '>
        <div id="" className="border-2px shadow-md p-5 rounded-md">
        <div className="">
           <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
           <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
          </form>
        <h3 className="font-bold text-lg">Login</h3>

        {/*name */}
        <div className='mt-4 space-y-2'>
            <span>Name</span>
            <br/>
            <input type="text"
            placeholder="Enter your name"
            className="w-80 px-3 py-1 border rounded-md outline-none"/>
        </div>

        {/*email */}
        <div className='mt-4 space-y-2'>
            <span>Email</span>
            <br/>
            <input type="email"
            placeholder="Enter your email"
            className="w-80 px-3 py-1 border rounded-md outline-none"/>
        </div>


       {/*Password */}
        <div className='mt-4 space-y-2'>
            <span>Password</span>
            <br/>
            <input type="text"
            placeholder="Enter your Password"
            className="w-80 px-3 py-1 border rounded-md outline-none"/>
        </div>

        {/*button and signup */}
        <div className='flex justify-around mt-4'>
           <button className='bg-pink-300 text-white rounded-md px-3 py-1 hover:bg-pink-500 duration-300'>Signup</button>
           <p className="text-md">Have account? <button className='underline text-blue-400 cursor-pointer'
           onClick={()=>
            document.getElementById("my_modal_3").showModal()
           }>
            Login</button>
            <Login/></p>
        </div>

       </div>
      </div>
    </div>
    </>
  )
}

export default Signup
