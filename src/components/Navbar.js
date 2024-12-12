import React, { useState } from 'react'
import { Link, NavLink, useLinkClickHandler } from 'react-router-dom';
import { toast } from 'react-toastify';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegUserCircle } from "react-icons/fa";
import MobNav from './MobNav';
import { IoMdLogIn } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoMdLogOut } from "react-icons/io";
import { BsBoxSeamFill } from "react-icons/bs";

const Navbar = (props) => {
    let data = props.data;
    let size = props.size;
 console.log(props);

    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn= props.setIsLoggedIn;
    const [showNav, setshowNav] = useState(false);

    function ClickHandler(){
        setshowNav(!showNav);
      
    }
    // const [profile, setProfile] = useState(false);
    // function profileHandler(){
    //     setProfile(prevProfile => !prevProfile);
    // }
    const [toggle, setToggle] = useState(false)
    const [toggle2, setToggle2] = useState(false)

  return (
    <div className=''>
    <div className='flex items-center justify-between  lg:px-10 md:px-8 max-md:px-8 max-sm:px-6 shadow-sm py-4 max-sm:py-3 fixed top-0  w-screen z-[100] bg-white max-sm:items-center'>
    <div>
    <Link to="/">
    <h1 className='lg:text-3xl md:text-xl max-md:text-xl max-sm:text-lg font-semibold text-gray-800 '>LaundryLoft</h1>

    </Link>
    </div>
    <div  className='lg:flex md:hidden  max-sm:hidden items-center gap-8 Menu'>
        <NavLink to="/">
            Home
        </NavLink>
        <NavLink to="/products">
            Products
        </NavLink>
        <NavLink to="/helpsupport">
            Help & Support
        </NavLink>
        <NavLink to="/cart">
            Cart <span className='font-semibold'>({size})</span>
        </NavLink>
       
    </div>
<div className='flex gap-2 justify-center items-center'>


{
    !isLoggedIn &&
    <Link className='md:hidden max-md:hidden max-sm:hidden ' to="/login">
            <button>Login/Signup</button>
    </Link>
    
}

{
    !isLoggedIn &&
    <div
            onClick={() => setToggle(!toggle)} 
            className="lg:text-2xl md:text-xl max-md:text-xl max-sm:text-lg cursor-pointer hover:drop-shadow-lg transition-all duration-[.8s] hover:border-[2px] rounded-full hover:border-green-600 border-[2px] border-white hover:transition-all hover:duration-[.8s]  ">
            <FaRegUserCircle/>  
      </div>
}
{ !isLoggedIn&&
    toggle && (
        <ul className="list-group absolute bg-white w-[150px] px-4 py-3  lg:top-[70px] md:top-[60px] sm:top-[50px] max-sm:top-[50px] shadow-md rounded-sm  right-14 transform translate-x-8 translate-y-0">
          <Link to="/login" className=" flex items-center gap-2 hover:text-green-600 transition-all duration-500 ease-in-out hover:ml-4 Login text-lg">
            
          Login <span className='text-lg text-green-600 LoginIcon'>
            <IoMdLogIn/>
            </span></Link>
        </ul>
      )
}


{
    isLoggedIn && 
    <div
            onClick={() => setToggle2(!toggle2)} 
            className="lg:text-2xl md:text-xl max-md:text-xl max-sm:text-lg cursor-pointer hover:drop-shadow-lg transition-all duration-[.8s] hover:border-[2px] rounded-full hover:border-sky-400 border-[2px] border-white hover:transition-all hover:duration-[.8s]">
            <FaRegUserCircle/> 

    </div>


}
{ isLoggedIn &&
    toggle2 && (
        <ul className="list-group absolute bg-white lg:top-[70px] md:top-[60px] max-sm:top-[50px] shadow-md rounded-sm  right-14 transform translate-x-8 translate-y-0 w-[150px]  ">
        <div className='flex flex-col  '>
        <Link className='flex items-center gap-3 px-4 py-3 hover:bg-gray-200 ' to=""><div className='text-lg text-blue-600 '><CgProfile/></div> My Profile</Link>
        <Link className='flex items-center gap-3 border-t-[1px] border-b-[1px] py-3 px-4 hover:bg-gray-200 ' to=""><div className='text-md text-blue-600'><BsBoxSeamFill/></div> Orders</Link>
    <Link className='max-sm:hidden' to="/">
    <p className='flex  items-center gap-3 hover:text-red-500 px-4 py-3 hover:bg-gray-200 ' onClick={()=>{
    setIsLoggedIn(false);
    toast.success("Logged Out")
    }}>
    <span className='text-lg text-red-600'><IoMdLogOut/></span>
    LogOut
    </p>
</Link>
            </div> 
         
        </ul>
       
    
      )
   
}

  
{ isLoggedIn &&

<span className='font-semibold' >
    {data} 
    </span>
   
   


}
    <span onClick={ClickHandler} className='lg:hidden max-sm:block text-xl ml-4 '>
        <RxHamburgerMenu/>
    </span>
 
</div>

</div>
<MobNav size={size} showNav={showNav} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
</div>

  )
}
   {/* <Link className='lg:text-2xl md:text-xl max-sm:text-lg ' to="/login">
   
    </Link> */}

export default Navbar;