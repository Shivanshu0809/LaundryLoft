import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className=' bg-gray-800 text-white max-sm:px-[3px]'>

  
    <div className='flex flex-wrap justify-around mt-[20px] py-1 px-2 max-sm:gap-6'>
        <div className='flex flex-col gap-2 '>
        <h1 className='lg:text-xl md:text-lg font-semibold'>LaundryLoft</h1>
        <p className=' max-sm:text-sm '>123 Consecteture at ligula 10660</p>
     <Link className='max-sm:text-sm' to="tel:0123456789">012-345-6789</Link>
     <p className='max-sm:text-sm' onClick={()=>window.location = 'mailto:yourmail@domain.com'}>Contact Me</p>

        </div>

        <div className='flex flex-col gap-2'>
            <h1 className='lg:text-xl md:text-lg font-semibold'>Products</h1>
            <Link className='max-sm:text-sm' to="/">Men's Wear</Link>
            <Link className='max-sm:text-sm' to="/">Women's Dress</Link>
            <Link className='max-sm:text-sm' to="/">Men's Wear</Link>
        </div>

        <div className='flex flex-col gap-2'>
            <h1 className='lg:text-xl md:text-lg font-semibold'>Further Info</h1>
            <Link  className='max-sm:text-sm' to="/">Home</Link>
            <Link  className='max-sm:text-sm' to="/">About Us</Link>
            <Link  className='max-sm:text-sm' to="/">Shop Location</Link>
        </div>

       
        </div>
        <div className='text-center lg:py-8 md:py-8 max-sm:py-3 max-sm:text-[.8rem] '>
            <p>Copyright © 2024 LaundryLoft | All rights Reserved</p>
        </div>

    </div>
  )
}

export default Footer