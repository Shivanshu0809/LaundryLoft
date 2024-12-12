import React from 'react';
import CardsData from "./CardsData"
import { useState } from 'react';
import {Link} from 'react-router-dom';
import {Bounce, Flip, Slide, ToastContainer, Zoom, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaCartShopping } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";
import CartList from '../components/CartList';


const Cards = (props) => {
  const addToCart = props.addToCart;
  const size= props.size;
  console.log(size)


  const notify = () => {
    toast.success (`${size+1} item Added in Cart`,{
      position:"top-right",
      autoClose:2000,
      hideProgressBar:false,
      draggable:true,
      theme:"dark",
      transition:Flip,
    })
  }


  console.log();
    // const [count, setCount] =useState({});
    // function increaseHandler(cardId){

    //           setCount(prevCount => ({
    //             ...prevCount,
    //             [cardId]:(prevCount[cardId]|| 0)+1
    //           }));  
    //         }

    // function decreaseHandler(cardId){
    //   setCount(prevCount => ({
    //     ...prevCount,
    //     [cardId]: Math.max((prevCount[cardId]|| 0) -1, 0)
    //   })); 
    //       }

    // console.log(count);
   
  return (
    <div className='flex justify-center lg:gap-8 md:gap-8 max-md:gap-4 max-sm:gap-4 mt-8 flex-wrap lg:px-8 md:px-4 max-md:px-2 max-sm:px-1 '>
        {
            CardsData.map((item) =>{
              const {id, imgSrc, title, decreaseBtn, increaseBtn, CartBtn,Price} = item;
              {/* console.log(id); */}

        return(
                <div className='flex flex-col items-center border border-1 border-gray-400 gap-3  hover:shadow-md transition-all duration-[.2s] lg:w-[300px] h-fit lg:pb-4 md:pb-4 max-md:pb-4 max-sm:pb-2 md:w-[220px] max-md:w-[200px] max-sm:w-[45%] mb-4 rounded-md' key={id}>
                  <img className='w-fit lg:h-[200px]  md:h-[150px] max-md:h-[150px] max-sm:h-[100px] max-sm:w-[100%] rounded-t-md CardImg ' src={imgSrc} loading='lazy' 
                  />
                    <h2 className='overflow-hidden w-[100px] text-center'>{title}</h2>

            {/* <p>{content}</p> */}

            {/* increase&decreacebtn */}


            {/* <div className='flex gap-4 border items-center'>
            <button 
            onClick={() => decreaseHandler(id)}
            className='text-2xl bg-gray-200  px-3 text-blue-600 border-r border-gray-300 font-semibold'>{decreaseBtn}</button>
            <div>{count[id] || 0}</div>
            
            <button  
            onClick={()=> increaseHandler(id)} 
            className='text-2xl bg-gray-200  px-3 text-blue-600 border-r border-gray-300 font-semibold'>{increaseBtn}</button>
            </div> */}
        
    
            <div className='lg:flex md:flex max-md:flex max-sm:flex justify-around w-full items-center'>
            <span className='font-semibold'>₹{Price}</span>
        <button onClick={ () =>{
              addToCart(item);
              notify();
              }} className=' border border-1 border-black py-2 px-3 lg:text-xs md:text-xs max-md:text-xs max-sm:text-xs rounded-md bg-gray-300 text-black flex items-center gap-2 font-semibold CartBtn hover:bg-gray-600 hover:text-white transition-all duration-500 ease-in-out '>
              <span className='CartIcon '>
              <FaCartShopping/>
              </span>
              <span className='max-sm:hidden'>
              {CartBtn}
              </span>
           
        </button>
            </div>   
           
        </div>
              )

              
            })
        }
       

    </div>
  )
}

export default Cards;