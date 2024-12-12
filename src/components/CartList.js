import React, { lazy, useEffect, useState } from 'react'
import { MdDeleteOutline } from "react-icons/md";
import {Flip, toast } from 'react-toastify';
import CartImg from "../images/emptyCart.webp"
import { Link } from 'react-router-dom';

function CartList({ cart, onCartUpdate }) {
  console.log(cart);
  // const cart =[1,2,3,4,5]

  const [CART, SetCART] = useState([])
  useEffect(()=>{
    SetCART(cart)
  },[cart]);

const isCARTEmpty = () => CART.length===0;

const handleRemoveItem = (cartindex) => {
  const updatedCart = CART.filter((_, index) => index !== cartindex);
  SetCART(updatedCart);
  onCartUpdate(updatedCart);
  toast.error("Item removed from cart",{
    position:'top-right',
    autoClose:2000,
    hideProgressBar:false,
    draggable:true,
    theme:"colored",
    transition:Flip,
  });
};

const calculateTotalPrice = () => {
  return CART.reduce((total, item) => total + item.Price * item.quantity, 0);
};


  return (
    <div className='bg-[#F1F3F6]'>
    {
      isCARTEmpty()?(
        <div  className='flex flex-col items-center gap-4 h-[100%] bg-white'>
        <h1 className='text-center lg:text-3xl md:text-3xl max-md:text-3xl max-sm:text-2xl font-semibold text-gray-400 '>Cart is Empty!</h1>
        <img className='lg:w-[10%] md:w-[10%] max-md:w-[10%] max-sm:w-[15%] bg-white opacity-15' src={CartImg} loading='lazy'/>
        </div>):(

    <div className='lg:mt-[5%] md:mt-[70px] max-sm:mt-[60px] flex lg:justify-between max-sm:justify-center lg:px-12 lg:ml-12 md:px-4   relative max-sm:flex-col '> 
   
    <div className='flex flex-col max-sm:flex gap-4  lg:w-[60%] md:w-[70%] max-md:w-[70%]  max-sm:w-[100%]  shadow-md h-[500px] overflow-y-scroll no-scrollbar bg-white mb-4 relative '>
    {
       CART?.map((Cartitem,cartindex)=> {
        const id= Cartitem.id;
        <div key={Cartitem.id}>

        </div>
        console.log(id);
        
      
       return(
            <div className='lg:flex lg:flex-row max-sm:flex-col lg:gap-4 max-sm:gap-4 lg:justify-around md:justify-evenly max-md:justify-evenly shadow-sm py-4 rounded-md relative lg:px-2 md:flex max-md:flex max-sm:px-4'>
            <div className='lg:flex lg:items-center lg:gap-12 max-sm:flex max-sm:items-center max-sm:gap-8 md:flex  md:items-center md:gap-4'>
            <img className='w-[120px] max-sm:w-[120px] max-sm:h-[100%]' src={Cartitem.imgSrc} loading='lazy'/>
            <h1 className='overflow-hidden lg:w-[100px]'>{Cartitem.title}</h1>
            </div>
            <div className='max-sm:flex lg:flex lg:w-[400px] lg:justify-between items-center lg:gap-8 md:flex md:gap-4 max-sm:w-full max-sm:justify-between'>
             <div className='flex  items-center gap-3 border '>
             <button onClick={() => {
              const _CART = CART.map((item, index) =>{
                if(cartindex=== index && item.quantity>1){
                  return {...item ,quantity:item.quantity-1};
                }
              return item;

              })
              SetCART(_CART)

             }}

              className='text-2xl bg-gray-200  px-3 text-blue-600 border-r border-gray-300 font-semibold'>{Cartitem.decreaseBtn}</button>
             <div className='px-2'>{Cartitem.quantity}</div>
             <button  className='text-2xl bg-gray-200  px-2 text-blue-600 border-l border-gray-300 font-semibold' 
             onClick={() => {
         
              const _CART = CART.map((item, index) =>{
                return cartindex === index ? {...item,quantity: item.quantity+1 } : item
              })
              SetCART(_CART)
             }}
             >{Cartitem.increaseBtn}</button>
            
             </div>
             
             <div className='flex max-sm:flex items-center gap-6'>
             <h2 className='text-xl'>Rs. {Cartitem.Price * Cartitem.quantity}</h2>
             <span  className='text-lg cursor-pointer text-red-600 font-medium ' 
             onClick={()=> handleRemoveItem(cartindex)}
             ><MdDeleteOutline/></span>

             </div>
             </div>
             
            

            </div>
               
          )
        }) 
  
    }
    <div className=' sticky bottom-0 bg-white p-4 shadow-black shadow-t-4'>

    <Link to="">
    <button className='bg-orange-400 float-right px-4 shadow-sm py-2 text-white'>Place Order</button>
    </Link>

    </div>
   

    </div>
    

    <div className='bg-white shadow-md p-3 w-[25%] fixed lg:right-24 md:right-[30px] lg:h-[40%] md:h-[30%] flex flex-col justify-between max-sm:w-full max-sm:relative'>
    <h1 className='text-lg font-semibold text-gray-500 border-b-[3px] pb-3'>
    Price Details

    </h1>

      <h2 className='flex justify-between font-medium border-t-2 border-b-2 py-2 text-lg'> Total Price: <span className='font-normal'> Rs. {calculateTotalPrice()}</span></h2>
    </div>
    </div>

       )
      }
      </div>
  )
}

export default CartList;