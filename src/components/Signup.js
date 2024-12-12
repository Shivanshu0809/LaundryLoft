import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import { toast } from 'react-toastify'


const Signup= (props) => {
    const greet = props.greet;
    const setIsLoggedIn = props.setIsLoggedIn;
    const navigate = useNavigate();
 

    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:"",
    })

    function changeHandler(e){
        setFormData((prevData)=>(
            {
                ...prevData,
                [e.target.name]:e.target.value
            }
        ))
    }
    const [bgcolor, setbgcolor] =useState(false);
    const clickHandler = ()=> {
        setbgcolor(!bgcolor);

    }
    function submitHandler(e){
        e.preventDefault();
        if(formData.password != formData.confirmPassword){
            toast.error("Password do not Match");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account Created");
        navigate("/")
    }
    const Formname = formData.firstName;
    console.log(formData.firstName)
    const[showPassword, setshowPassword] = useState(false);
    const [showConfirmPassword,setshowConfirmPassword]=useState(false);
  return (
    <div className='mt-[100px] flex  justify-center mb-4'>
        <h1> </h1>
        <form  onSubmit={submitHandler}
        className='shadow-md lg:w-[400px] md:w-[400px] max-sm:w-[300px]  pb-6 rounded-md border  '>
        <div className='flex justify-center w-[100%]'>
       
            <div className='text-gray-500 py-2 text-center w-[50%] rounded-tr-md lg:text-lg'>Signup</div>
           
        </div>
        <div className='mt-8 items-center flex flex-col gap-4'>
        <div className='flex justify-around p-2 '>
        <input
                required
                type='text'
                name='firstName'
                placeholder='Firstname'
                onChange={changeHandler}
                value={formData.firstName}
                
                className='border p-2 outline-none w-[45%]'
            />
         <input
                type='text'
                name='lastName'
                placeholder='Lastname'
                onChange={changeHandler}
                value={formData.lastName}
                className='border p-2 outline-none w-[45%]'
            />
        </div>
       
          <input
                required
                type='email'
                name='email'

                placeholder='Email or Username'
                onChange={changeHandler}
                value={formData.email}
                className='border p-2 outline-none w-[90%]'
            />
            <div className='lg:flex md:flex max-sm:flex max-sm:flex-col items-center justify-around p-2 relative  max-sm:w-[95%] max-sm:gap-4'>

            <input
                required
                type={showPassword? ("text"):("password")}
                name='password'
                placeholder='Create Password'
                onChange={changeHandler}
                value={formData.password}
                className='border p-2 outline-none lg:w-[45%] md:w-[45%] max-sm:w-[100%] '
            />
            <span onClick={()=> setshowPassword((prev)=>!prev)} className='absolute lg:left-[155px] md:left-[155px]  max-sm:top-4 max-sm:right-8'>
                {
                    showPassword?(<AiOutlineEyeInvisible fontSize={22} fill='#AFB2BF'/>):(<AiOutlineEye fontSize={22} fill='#AFB2BF'/>)
                }

            </span>
            <input
                required
                type={showConfirmPassword? ("text") :("password")}
                name='confirmPassword'
                placeholder='Confirm Password'
                onChange={changeHandler}
                value={formData.confirmPassword}
                 className='border p-2 outline-none lg:w-[45%] md:w-[45%]  max-sm:w-[100%]'
            />

                <span onClick={()=> setshowConfirmPassword((prev)=>!prev)} className='absolute lg:right-6 md:right-6 max-sm:right-8 max-sm:bottom-4'>
                {
                    showConfirmPassword?(<AiOutlineEyeInvisible fontSize={22} fill='#AFB2BF'/>):(<AiOutlineEye fontSize={22} fill='#AFB2BF'/>)
                }

            </span>
            </div>
         
            <button onClick={ () => {
                greet(Formname)
            }} className='border w-[90%] py-1 bg-green-600 text-white'>Signup</button>
            <p>Already have an Account?  <Link to="/login"  className='text-blue-600 bg-white py-2 w-[50%] text-center rounded-tl-md' onClick={clickHandler}
      
        >
            Login
            </Link></p>
                <div className='flex items-center gap-2'>
                <hr className='w-[150px]'/>
                <span>or</span>
              <hr className='w-[150px]'/>
                </div>
            <Link to ="#">
          
            <div className='text-blue-400'>Signup with Google</div>
             </Link>
        </div>
          
        </form>
    
    </div>
  )
}

export default Signup;