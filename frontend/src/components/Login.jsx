import React from 'react'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import axios from 'axios';


function Login() {
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit =async (data) => {
      const userInfo={
        email:data.email,
        password:data.password,

      }
      await axios
       .post("http://localhost:4001/user/login",userInfo)
       .then((res)=>{
         console.log(res)
         if(res.data){
          alert("Login successfull")
         
         localStorage.setItem("Users",JSON.stringify(res.data.user));
         }
       })
       .catch((err)=>{
        if(err.response){
            console.log(err);
            alert("Error:"+err.response.data.message)
        }
       })
    }

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
           
      {/* if there is a button in form, it will close the modal */}
           <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
      
        <h3 className="font-bold text-lg">Login</h3>

        <form onSubmit={handleSubmit(onSubmit)} >
        {/*Email */}
        <div className='mt-4 space-y-2'>
            <span>Email</span>
            <br/>
            <input type="email"
            placeholder="Enter your email"
            className="w-80 px-3 py-1 border rounded-md outline-none"
            {...register("email", { required: true })}/>
            <br/>
            {errors.email && <span className='text-sm text-pink-300'>This field is required</span>}
        </div>


       {/*Password */}
        <div className='mt-4 space-y-2'>
            <span>Password</span>
            <br/>
            <input type="text"
            placeholder="Enter your Password"
            className="w-80 px-3 py-1 border rounded-md outline-none"
            {...register("password", { required: true })}/>
            <br/>
            {errors.password && <span className='text-sm text-pink-300'>This field is required</span>}
        </div>

        {/*button and signup */}
        <div className='flex justify-around mt-4'>
           <button className='bg-pink-300 text-white rounded-md px-3 py-1 hover:bg-pink-500 duration-300'>Login</button>
           <p>Not registered? <Link to="/signup" className='underline text-blue-400 cursor-pointer '>Signup</Link></p>
        </div>
       </form>
       </div>
      </dialog>
    </div>
  )
}

export default Login
