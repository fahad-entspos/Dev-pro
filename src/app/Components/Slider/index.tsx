"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowRightLong } from "react-icons/fa6";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { RiEarthFill } from 'react-icons/ri';
import { FaArrowLeftLong } from "react-icons/fa6";

export default function App() {
  return <>
    
    <div className='flex  mt-20 flex-wrap justify-center gap-6 md:gap-0   lg:flex-nowrap bg-[#fafafa] transition-all duration-1000 '>
    <div  className='w-[90%] sticky lg:w-[60%] ml-0 md:ml-28  transition-all duration-1000 '>
<button className='text-xs rounded-sm px-3 mt-14 text-[#0ebab1] bg-[#e8e7e7] py-[6px] transition-all duration-1000 '> Team Building Plan</button>

<div className='flex justify-between items-center transition-all duration-1000  '>
<h1 className='font-poppins mt-8 text-sm md:text-xl tracking-tight font-semibold text-[#042638] transition-all duration-1000   lg:text-2xl xl:text-2xl'>Choose from a diverse pool of experts <br /> to build your team.
</h1>
<div className='flex flex-row gap-2 text-base mr-4 text-[#0ebab1]'>
  <FaArrowLeftLong className="text-[#9ce0dd]"/>
  <FaArrowRightLong className=""/>
</div>

</div>
  
<div className=''>
<Swiper
  breakpoints={{
    280: {
      width: 300,
      slidesPerView: 1,
    },
    380: {
      width: 360,
      slidesPerView: 1,
    },
    400: {
      width: 430,
      slidesPerView: 1,
    },
    768: {
      width: 780,
      slidesPerView: 2,
    },
    1024: {
      width: 980,
      slidesPerView: 3,
    },
    1280: {
      width: 1260,
      slidesPerView: 3,
    },
  }}
  spaceBetween={1}
  centeredSlides={false}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  navigation={false}
  modules={[Autoplay, Pagination, Navigation]}
  className=" mt-4  "
>

<SwiperSlide>
<div className="bg-white w-fit   h-80 rounded-xl px-6 py-4 transition-all duration-1000 ">
  <div className="text-2xl mt-4 text-[#0ebab1]">
    <RiEarthFill />
  </div>
  <h1 className="text-lg mt-4 font-medium font-poppins ">
    Software Development <br /> Team
  </h1>
  <p className="text- mt-5 text-[#626262] text-xs">
    Our developers craft custom software <br />
    solutions by leveraging cutting-edge <br />
    technologies, like blockchain and AI, <br />
    to streamline workflow and reliability..
  </p>
  <div>
    <p className="flex text-[#0ebab1] gap-3 ease-in-out font-poppins items-center mt-5 hover:ml-4 transition-all duration-1000">
      Hire now
      <RiEarthFill className="text-[#0ebab1] mt-1" />
    </p>
  </div>
</div>
</SwiperSlide>

<SwiperSlide>
<div className="bg-white w-fit h-80 rounded-xl px-6 py-4 transition-all duration-1000 ">
  <div className="text-2xl mt-4 text-[#0ebab1]">
    <RiEarthFill />
  </div>
  <h1 className="text-lg mt-4 font-medium font-poppins ">
  Design Team
  </h1>
  <p className="text- mt-5 text-[#626262] text-xs">
    Our developers craft custom software <br />
    solutions by leveraging cutting-edge <br />
    technologies, like blockchain and AI, <br />
    to streamline workflow and reliability..
  </p>
  <div>
    <p className="flex text-[#0ebab1] gap-3 ease-in-out font-poppins items-center mt-5 hover:ml-4 transition-all duration-1000">
      Hire now
      <RiEarthFill className="text-[#0ebab1] mt-1" />
    </p>
  </div>
</div>
</SwiperSlide>

<SwiperSlide>
<div className="bg-white w-fit  h-80 rounded-xl px-6 py-4 transition-all duration-1000 ">
  <div className="text-2xl mt-4 text-[#0ebab1]">
    <RiEarthFill />
  </div>
  <h1 className="text-lg mt-4 font-medium font-poppins ">
    Software Development <br /> Team
  </h1>
  <p className="text- mt-5 text-[#626262] text-xs">
    Our developers craft custom software <br />
    solutions by leveraging cutting-edge <br />
    technologies, like blockchain and AI, <br />
    to streamline workflow and reliability..
  </p>
  <div>
    <p className="flex text-[#0ebab1] gap-3 ease-in-out font-poppins items-center mt-5 hover:ml-4 transition-all duration-1000">
      Hire now
      <RiEarthFill className="text-[#0ebab1] mt-1" />
    </p>
  </div>
</div>
</SwiperSlide>
<SwiperSlide>
<div className="bg-white w-fit h-80 rounded-xl px-6 py-4 transition-all duration-1000 ">
  <div className="text-2xl mt-4 text-[#0ebab1]">
    <RiEarthFill />
  </div>
  <h1 className="text-lg mt-4 font-medium font-poppins ">
    Software Development <br /> Team
  </h1>
  <p className="text- mt-5 text-[#626262] text-xs">
    Our developers craft custom software <br />
    solutions by leveraging cutting-edge <br />
    technologies, like blockchain and AI, <br />
    to streamline workflow and reliability..
  </p>
  <div>
    <p className="flex text-[#0ebab1] gap-3 ease-in-out font-poppins items-center mt-5 hover:ml-4 transition-all duration-1000">
      Hire now
      <RiEarthFill className="text-[#0ebab1] mt-1" />
    </p>
  </div>
</div>
</SwiperSlide>
      </Swiper>
   </div>


{/* <img className='w-[400px] h-[500px] absolute top-0  right-0 z-50' src="austin-distel-21GWwco-JBQ-unsplash.jpg" alt="Error" /> */}
    </div>

    <div className='relative    w-[100%] lg:w-[600px] h-[500px] md:h-[600px] transition-all duration-1000   overflow-hidden '>
    <img 
     style={{
      filter: "brightness(40%)"
    }}
    className='w-full h-full object-cover transition-all duration-1000  ' src="tim-kabel-FCrYdP8gohg-unsplash.jpg" alt="Error " />
    

    <div className="absolute top-4  w-2/3 text-white    ml-4 md:ml-12   transition-all duration-1000 ">
        <button className='text-xs rounded-md px-3 mt-14 text-white bg-[#435863] py-[6px]    transition-all duration-1000 '> Fix Bid Plan</button>
        <h2 className="font-poppins  text-xl tracking-tight  transition-all duration-1000      lg:text-2xl xl:text-3xl font-bold mt-4 md:mt-8  ">Try product development on pre-defined     terms.</h2>
       <p className='font-poppins text-lg mt-4  transition-all duration-1000 '>In this plan, we offer a fixed number of experts for a pre-decided timeframe. Additionally, this plan comprises a few requirements, a fixed schedule, and a definite cost.</p>
       <div className='flex flex-row gap-2 mt-6 hover:ml-4 font-poppins  transition-all duration-1000  text-base items-center text-[#0ebab1]'>
<h1>Explor Details</h1>
  <FaArrowRightLong className=""/>
</div>
    </div>
</div>

    </div>
    </>
  
}

