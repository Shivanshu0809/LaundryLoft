import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
const MobNav = (props) => {
   const size= props.size;
   const setshowNav =props.setshowNav;
   const showNav =props.showNav;
   let isLoggedIn=props.isLoggedIn;
   let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div>
    {
       showNav &&
   
     <div  className='lg:hidden md:flex max-md:flex flex-col max-sm:flex  items-center gap-8 fixed mt-12 z-[10] top-0 w-screen bg-white justify-evenly p-4 border '>
        <NavLink to="/">
            Home
        </NavLink>
        <NavLink to="/products">
            Products
        </NavLink>
        <NavLink to="/helpsupport">
            Help & Support
        </NavLink>
        <NavLink   to="/cart">
            Cart <span>({size})</span>
        </NavLink>
    {
    isLoggedIn &&
<Link  to="/">
    <p  onClick={()=>{
    setIsLoggedIn(false);
    toast.success("Logged Out")
    }}>
    LogOut

    </p>
     

</Link>
}
    </div>

}

    </div>
  )
}

export default MobNav;