"use client"
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { RiEarthFill } from 'react-icons/ri';
// import required modules
function CaseStudies() {
  return <>
  
  <div className='relative w-full transition-all  duration-1000 overflow-x-hidden top-24'>
  <img
    style={{
      filter: "brightness(10%)"
    }}
    className='w-full h-[160vh] object-cover transition-all duration-1000 xl:h-[160vh] lg:h-[160vh] md:h-[160vh] sm:h-[160vh]'  // Adjust the height as needed
    src="flyd-BH0Wwlmv2oA-unsplash.jpg"
    alt="Error "
  />

  <div className="absolute top-4 w-[95%] text-white transition-all  duration-1000">
    <div className='flex items-center justify-between '>

      <div>
        <h2 className="font-poppins  text-2xl tracking-tight transition-all duration-1000 lg:text-3xl xl:text-4xl font-bold mt-4 md:mt-8 ml-[14px] xl:ml-[105px] ">Case Studies
</h2>
      </div>
      <div className=' cursor-pointer   flex flex-row gap-2 text-base mt-4 md:mt-16 text-[#0ebab1]'>
        <FaArrowLeftLong className="text-[#9ce0dd]" />
        <FaArrowRightLong className="" />
      </div>
    </div>
    <p className="font-poppins text-[#c7c7c7] text-xs sm:text-sm tracking-tight transition-all duration-1000 md:text-base lg:text-xl xl:text-xl mt-4 md:mt-5 ml-[14px] xl:ml-[105px] ">Discover how our IT solutions drive ROI and traffic for <br />our clients worldwide</p>
  </div>




            <div className="w-[90vw] lg:w-[100vw]  absolute top-36 lg:top-52  rounded-3xl font-poppins     transition-all duration-1000 ml-[14px] xl:ml-[105px]  py-8 ">

<div className="sticky">

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
                    slidesPerView: 1,
                  },1024: {
                  width: 980,
                  slidesPerView: 1,
                },
                1260: {
                  width: 1260,
                  slidesPerView: 1,
                },
              }}
                slidesPerView={2}
                spaceBetween={50}
             autoplay={{
               delay: 2500,
               disableOnInteraction: false,
             }}
             navigation={false}
             modules={[Autoplay, Pagination, Navigation]}
             className=""
      >
<SwiperSlide>

    <div className='bg-[#fff3e9] rounded-3xl  flex flex-row gap-4 lg:gap-0 transition-all duration-1000 items-center justify-around flex-wrap-reverse py-8 lg:py-0'>

      <div className="flex flex-col gap-2 lg:gap-4 xl:gap-8  transition-all  duration-1000 w-[90%] lg:w-2/6">
        <h1 className='text-xl text-[#042638] tracking-tight transition-all duration-1000 md:text-xl lg:text-xl xl:text-3xl font-semibold'>
          Intellirent - Rental <br />Data Manager
        </h1>
        <div className="flex space-x-4">
          <button className="bg-[#dcdfe7] hidden md:block text-[#6b6968] px-2 xl:px-2 font-poppins py-2 xl:py-3 text-xs font-thin rounded-md">Product Development</button>
          <button className="bg-[#dcdfe7] text-[#6b6968] md:block hidden px-2 xl:px-2 font-poppins py-2 xl:py-3 text-xs font-thin rounded-md">Product Management</button>
        </div>
        <p className='text-xs tracking-tight transition-all duration-1000 lg:text-sm xl:text-base '>
          Intellirent is an online platform designed to help property managers and landlords make informed rental decisions.
        </p>
        <div>
          <button className='bg-[#0ebab1] text-white text-xs lg:text-base transition-all duration-1000 hover:px-9 rounded-md px-6 py-2 flex flex-row gap-2 items-center font-poppins'>
            <a >View Case Study</a>
            <svg
              className="text-white hover:pl-6"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <mask
                id="mask0_527_522"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="16"
                height="16"
              >
                <rect width="16" height="16" fill="#D9D9D9"></rect>
              </mask>
              <g mask="url(#mask0_527_522)">
                <path
                  d="M10 12.6666L9.05004 11.7333L12.1167 8.6666H1.33337V7.33327H12.1167L9.06671 4.2666L10 3.33327L14.6667 7.99994L10 12.6666Z"
                  fill="white"
                ></path>
              </g>
            </svg>
          </button>
        </div>

      </div>
      <img className='w-[90%] sm:h-40 md:h-80 lg:h-auto xl:h-auto object-cover lg:w-[45%] transition-all duration-1000' src="Intellirent.webp" alt="" />  
    </div>

    
    </SwiperSlide>

    <SwiperSlide>


<div className='bg-[#eaeaea]  rounded-3xl flex flex-row gap-4 lg:gap-0 transition-all duration-1000 items-center justify-around flex-wrap-reverse  py-8 lg:py-0'>

  <div className="flex flex-col gap-2 lg:gap-4 xl:gap-8 w-[90%]   transition-all  duration-1000 lg:w-2/6">
    <h1 className='text-xl text-[#042638] tracking-tight transition-all duration-1000 md:text-xl lg:text-xl xl:text-3xl font-semibold'>
    KUDO - Languages <br />Translator
    </h1>
    <div className="flex space-x-4">
      <button className="bg-[#dcdfe7] hidden md:block text-[#6b6968] px-2 xl:px-2 font-poppins py-2 xl:py-3 text-xs font-thin rounded-md">Product Development</button>
      <button className="bg-[#dcdfe7] text-[#6b6968] md:block hidden px-2 xl:px-2 font-poppins py-2 xl:py-3 text-xs font-thin rounded-md">Product Management</button>
    </div>
    <p className='text-xs tracking-tight transition-all duration-1000 lg:text-sm xl:text-base '>
    KUDO provides an interpretation service that matches its clients’ requirements for meetings, webinars, and events on demand.    </p>
    <div>
      <button className='bg-[#0ebab1] text-white text-xs lg:text-base transition-all duration-1000 hover:px-9 rounded-md px-6 py-2 flex flex-row gap-2 items-center font-poppins'>
        <a >View Case Study</a>
        <svg
          className="text-white hover:pl-6"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <mask
            id="mask0_527_522"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="16"
            height="16"
          >
            <rect width="16" height="16" fill="#D9D9D9"></rect>
          </mask>
          <g mask="url(#mask0_527_522)">
            <path
              d="M10 12.6666L9.05004 11.7333L12.1167 8.6666H1.33337V7.33327H12.1167L9.06671 4.2666L10 3.33327L14.6667 7.99994L10 12.6666Z"
              fill="white"
            ></path>
          </g>
        </svg>
      </button>
    </div>

  </div>
  <img className='w-[90%]  sm:h-40 md:h-80 lg:h-auto xl:h-auto object-cover lg:w-[45%] transition-all duration-1000' src="Intellirent.webp" alt="" />  
</div>
</SwiperSlide>



<SwiperSlide>


<div className='bg-[#EDF0F9]  rounded-3xl flex flex-row gap-4 lg:gap-0 transition-all duration-1000 items-center justify-around flex-wrap-reverse  py-8 lg:py-0' >

  <div className="flex flex-col gap-2 lg:gap-4 xl:gap-8 w-[90%] lg:w-2/6  transition-all  duration-1000">
    <h1 className='text-xl text-[#042638] tracking-tight transition-all duration-1000 md:text-xl lg:text-xl xl:text-3xl font-semibold'>
    Recurate - Reselling <br /> Channel    </h1>
    <div className="flex space-x-4">
      <button className="bg-[#ece1d8] hidden md:block text-[#6b6968] px-2 xl:px-2 font-poppins py-2 xl:py-3 text-xs font-thin rounded-md">Product Development</button>
      <button className="bg-[#ece1d8] text-[#6b6968] md:block hidden px-2 xl:px-2 font-poppins py-2 xl:py-3 text-xs font-thin rounded-md">Product Management</button>
    </div>
    <p className='text-xs tracking-tight transition-all duration-1000 lg:text-sm xl:text-base '>
    Recurate is a full-service re-commerce partner that enables a used product P2P market directly on eCommerce stores.    </p>
    <div>
      <button className='bg-[#0ebab1] text-white text-xs lg:text-base transition-all duration-1000 hover:px-9 rounded-md px-6 py-2 flex flex-row gap-2 items-center font-poppins'>
        <a >View Case Study</a>
        <svg
          className="text-white hover:pl-6"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <mask
            id="mask0_527_522"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="16"
            height="16"
          >
            <rect width="16" height="16" fill="#D9D9D9"></rect>
          </mask>
          <g mask="url(#mask0_527_522)">
            <path
              d="M10 12.6666L9.05004 11.7333L12.1167 8.6666H1.33337V7.33327H12.1167L9.06671 4.2666L10 3.33327L14.6667 7.99994L10 12.6666Z"
              fill="white"
            ></path>
          </g>
        </svg>
      </button>
    </div>

  </div>
  <img className='w-[90%]  sm:h-40 md:h-80 lg:h-auto xl:h-auto object-cover lg:w-[45%] transition-all duration-1000' src="Intellirent.webp" alt="" />  
</div>
</SwiperSlide>
    </Swiper>
    </div>


  </div>




  
</div>

  
  </>
}

export default CaseStudies