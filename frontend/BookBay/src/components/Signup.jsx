import React from 'react'
import { Link } from "react-router-dom";

function Signup() {
  return (
    <>
    <div>
        <div id="my_modal_3" className="">
        <div className="">
           <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
           <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
        <h3 className="font-bold text-lg">Login</h3>

        {/*Email */}
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
           <button className='bg-pink-300 text-white rounded-md px-3 py-1 hover:bg-pink-500 duration-300'>Login</button>
           <p>Not registered? <Link to="/signup" className='underline text-blue-400 cursor-pointer '>Signup</Link></p>
        </div>

       </div>
      </div>
    </div>
    </>
  )
}

export default Signup
