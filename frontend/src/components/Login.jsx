import React from 'react'
import { Link, useNavigate } from "react-router-dom"; // Added useNavigate
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast from 'react-hot-toast';
import { useAuth } from "../context/AuthProvider"; 

function Login() {
  const [authUser, setAuthUser] = useAuth(); 
  const navigate = useNavigate(); 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    }
    
    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        if (res.data) {
          toast.success('Logged in Successfully');
          
          document.getElementById("my_modal_3").close();
          
          localStorage.setItem("Users", JSON.stringify(res.data.user));
          setAuthUser(res.data.user);
          setTimeout(() => {
            window.location.reload(); 
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      })
  }

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box relative"> {/* added relative for absolute cross button */}
          
          {/* Using a button to close the modal properly */}
          <button 
            type="button"
            onClick={() => document.getElementById("my_modal_3").close()}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>

          <h3 className="font-bold text-lg">Login</h3>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email Field */}
            <div className='mt-4 space-y-2'>
              <span>Email</span>
              <br />
              <input 
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })} 
              />
              <br />
              {errors.email && <span className='text-sm text-pink-300'>This field is required</span>}
            </div>

            {/* Password Field */}
            <div className='mt-4 space-y-2'>
              <span>Password</span>
              <br />
              <input 
                type="password" // Changed to password type for security
                placeholder="Enter your Password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: true })} 
              />
              <br />
              {errors.password && <span className='text-sm text-pink-300'>This field is required</span>}
            </div>

            {/* Login Button */}
            <div className='flex justify-around mt-4'>
              <button className='bg-pink-300 text-white rounded-md px-3 py-1 hover:bg-pink-500 duration-300'>
                Login
              </button>
              <p>Not registered? 
                <Link to="/signup" className='underline text-blue-400 cursor-pointer ml-1'>
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  )
}

export default Login