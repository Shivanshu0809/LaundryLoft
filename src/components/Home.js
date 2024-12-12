import React, { useEffect, useRef, useState } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import images from './Imgs';
import {Autoplay, Navigation, Pagination } from 'swiper/modules';
import Cards from '../cards/Cards';

import v1 from "../Video/clothes.mp4"
import v2 from "../Video/dryClothes.mp4";
import v3 from "../Video/iron.mp4";
import v4 from "../Video/washingclothes.mp4";


const Home = (props) => {
  const addToCart =props.addToCart;
  // console.log(props.size)
  const size = props.size;

  // console.log(addToCart,'homePage testing');

  return (
    <div className='lg:mt-[70px] md:mt-[60px] max-sm:mt-10'>
    <div className='w-[100%] lg:h-[500px] md:h-[300px] max-md:h-[300px] max-sm:h-[200px]  flex  justify-center '>


<>
 <Swiper
          spaceBetween={30}
          // slidesPerView={1}
          centeredSlides={true}
          autoplay ={{
            delay: 2500,
            disableOnInteraction:false,
          }}
          Pagination={{
            clickable:true, }}
          modules={[Autoplay, Pagination]}
        
          >

  <SwiperSlide>    
        <img className='w-screen h-screen object-cover object-bottom max-sm:object-cover max-sm:max-h-[100%]' key={images[0].id} src={images[0].src} alt={images[0].alt}  />
    </SwiperSlide>
    <SwiperSlide>    
     <img className='w-screen h-screen object-cover object-center max-sm:object-cover max-sm:max-h-[100%] ' key={images[1].id} src={images[1].src} alt={images[1].alt}  />
   </SwiperSlide>
  <SwiperSlide>    
     <img className='w-screen h-screen object-cover object-center max-sm:object-cover max-sm:max-h-[100%]' key={images[2].id} src={images[2].src} alt={images[2].alt}  />
  </SwiperSlide>
  <SwiperSlide>    
     <img key={images[3].id} src={images[3].src} alt={images[3].alt} className='w-screen h-screen object-cover object-bottom  max-sm:object-cover max-sm:max-h-[100%] ' />
  </SwiperSlide>
       
 </Swiper>
  
</>
   </div>
<div className='mt-12 mb-12 lg:px-10 md:px-10 max-md:px-10 max-sm:px-2 flex flex-col gap-4'>
      <h1 className='lg:text-4xl font-semibold md:text-3xl max-sm:text-lg '>Best
      laundry & Dry Cleaning
          Services..</h1>
      <p className='text-md Para max-sm:text-md'>Taking care of your clothes has never been easier.
      Mycleaners picks up, expertly cleans, and<br/> delivers
       your dry cleaning and laundry to your door.</p>

      <p className='font-semibold text-blue-400 max-sm:text-sm'>Try MyCleaners</p>
</div>
<div className='flex flex-col mt-8 h-fit'>
  <div className='flex flex-col items-center lg:gap-1  md:gap-1 max-sm:gap-0'>
      <h1 className='text-center text-4xl font-semibold max-sm:text-2xl'>Garments</h1>
      <div className='lg:w-[6%] md:w-[6%] max-sm:w-[15%] h-[4px] bg-gray-600 rounded-full'></div>
</div>


        {/* <div>
        {
           Video?.map((item,index)=>{
              <Video key= {index} src={item.src} autoPlay="true" muted loop  />
            })
        }
        </div> */}
        
<div className='lg:mt-[50px] md:mt-[50px] max-md:mt-[50px] max-sm:mt-[20px] flex flex-col lg:gap-12 md:gap-12 max-sm:gap-1'>
<div className='w-[100%] lg:h-[500px] md:h-[300px] max-md:h-[300px] max-sm:h-[200px]  flex  justify-center '>


<>
 <Swiper
          spaceBetween={50}
          slidesPerView={1}
          centeredSlides={true}
          autoplay ={{
            delay: 5000,
            disableOnInteraction:false,
          }}
          Pagination={{
            clickable:true, }}
          modules={[Autoplay, Pagination]}
        >

  <SwiperSlide>    
  <video className='w-[100vw] lg:h-[70vh] md:h-[50vh] object-fill' src={v1}  autoPlay="true" muted loop />

    </SwiperSlide>
    <SwiperSlide>    
    <video className='w-[100vw] lg:h-[70vh] md:h-[50vh] object-fill ' src={v2}  autoPlay="true" muted loop />

   </SwiperSlide>
  <SwiperSlide>    
  <video className='w-[100vw] lg:h-[70vh] md:h-[50vh] object-fill ' src={v3}  autoPlay="true" muted loop />

  </SwiperSlide>
  <SwiperSlide>    
  <video className='w-[100vw] lg:h-[70vh] md:h-[50vh] object-fill ' src={v4}  autoPlay="true" muted loop />

  </SwiperSlide>
       
 </Swiper>
  
</>
   </div>

  <Cards addToCart={addToCart} size={size}  />

</div>

  
</div>


   
    </div>
  );
}


export default Home