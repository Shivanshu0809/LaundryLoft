import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import { toast } from 'react-toastify'

const Login= ({setIsLoggedIn}) => {
  const navigate = useNavigate();
 
  const [showbg, setshowbg]= useState(false)

  const handleClick =() =>{
    setshowbg(!showbg);
  }
  const [showPassword, setshowPassword] = useState(false)
 function submitHandler(e){
  e.preventDefault();
  toast.success("Logged In");
  setIsLoggedIn(true);
  navigate("/");

 }

  return (
  
    <div className='mt-[100px] flex  justify-center mb-4'>
        <h1> </h1>
        <form onSubmit={submitHandler} className='shadow-md lg:w-[400px]
        md:w-[400px] max-sm:w-[300px]  pb-6 rounded-md border'>
        <div className='flex justify-center w-[100%]'>

            <div className='text-gray-500 bg-white py-2 w-[50%] text-center lg:text-lg' >Login</div>
           
        </div>
        <div className='mt-8 items-center flex flex-col gap-4 relative '>
        <input
                required
                type='email'
                name='email'
                placeholder='Email or Username'
                className='border p-2 outline-none w-[90%]'
            />
            <input
                type={showPassword? 'text' : 'password'}
                placeholder='Password'
                required
                className='border p-2 outline-none w-[90%] relative'
            />
            <span className='absolute right-8 top-[65px] cursor-pointer' onClick={()=> setshowPassword((prev)=> !prev)}>

              {
                showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)
              }
            </span>

            <button type='submit' className='border w-[90%] py-1 bg-green-600 text-white'>Login</button>
            <p>New Customer?  <Link to="/signup" className='text-blue-600 py-2 text-center w-[50%] rounded-tr-md'>
          
           
            Signup
            </Link> </p>
            <span className='text-gray-400'>Forget Password?</span>
        </div>
          
        </form>
    </div>
  )
}

export default Login;