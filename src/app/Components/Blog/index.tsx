import React from 'react'
import { BsArrowRight } from "react-icons/bs";
function Blogs() {
  return <>
  <div className='mt-40 '>

  <div className='flex w-[95%] items-center justify-between  '>
  <h1 className=' font-poppins  ml-[14px]    transition-all duration-1000 md:ml-[47px] text-4xl tracking-tight font-semibold text-[#042638]   lg:text-4xl xl:text-4xl'>Our Blogs</h1>
  
  <u className=' text-black rounded-md  gap-2 flex flex-row  items-center font-poppins'>
                        <a ></a>View More
                       <BsArrowRight className="text-black mt-1"/>
                    </u>
  </div>
 
 
 
  <p className='  ml-[14px]    transition-all duration-1000 md:ml-[47px]  font-poppins mt-8'>
  Enjoy a deep dive into the pool of tech knowledge provided by our experts. Stay up to date with the latest trends and much more happening in the world.    </p>



<div className='flex md:flex-row flex-colm ml-[17px] gap-3 md:gap-4 md:ml-[7px]  md:justify-center  flex-wrap mt-10'>

  <div className='relative w-[90%] lg:w-[480px] h-[260px] md:h-[460px] transition-all duration-1000   overflow-hidden rounded-2xl'>
    <img 
     style={{
      filter: "brightness(40%)"
    }}
    className='w-full h-full object-cover transition-all duration-1000  ' src="ss (6).png" alt="Error " />

    <div className="absolute top-4 text-white  transition-all duration-1000  ">
        <h2 className="font-poppins  text-xl tracking-tight  transition-all duration-1000   lg:text-3xl xl:text-4xl font-bold mt-4 md:mt-12  ml-4 md:ml-12">Generative API: 3 AI <br /> Foundational Models You<br /> Must  Know  About</h2>
       
                    <button className='bg-[#0ebab1] transition-all duration-1000   text-white rounded-md ml-4  md:ml-12 mt-20 md:mt-52 px-8 py-2 flex flex-row gap-2 items-center font-poppins'>
                        <a >Read More</a>
                        <svg
                        className="text-white"
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
<div className='flex flex-col gap-[11px] transition-all duration-1000  '>
<div className='relative w-[90%] lg:w-[270px] h-[260px] md:h-[225px] overflow-hidden rounded-2xl'>
    <img
    style={{
      filter: "brightness(40%)"
    }}
    className='w-full h-full object-cover' src="ss (2).png" alt="Error" />

    <div className="absolute top-4 text-white transition-all duration-1000  ">
        <h2 className="text-base font-poppins font-normal mt-2 transition-all duration-1000   ml-6">3 Ways To Optimize Database <br /> Queries</h2>
        <h2 className="text-base font-poppins font-normal mt-36 md:mt-24 transition-all duration-1000  ml-6">Read More</h2>
       
          
    </div>
</div> 
<div className='relative w-[90%] lg:w-[270px] h-[260px] transition-all duration-1000  md:h-[225px] overflow-hidden rounded-2xl'>
    
    <img 
     style={{
      filter: "brightness(40%)"
    }}
    className='w-full h-full object-cover transition-all duration-1000 ' src="ss (4).png" alt="Error" />

    <div className="absolute top-4 text-white  transition-all duration-1000 ">
        <h2 className="text-base transition-all duration-1000  font-poppins font-normal mt-2  ml-6">Build Vs Buy: Which Software <br /> Application Fits Your Business?</h2>
        <h2 className="text-base  transition-all duration-1000  font-poppins font-normal mt-36 md:mt-24  ml-6">Read More</h2>
       
          
    </div>
</div> 
</div>
<div className='relative w-[90%] lg:w-[333px]  h-[260px] md:h-[460px] overflow-hidden rounded-2xl transition-all duration-1000 '>
    <img 
     style={{
      filter: "brightness(40%)"
    }}
    className='w-full h-full object-cover transition-all duration-1000 ' src="ss (5).png" alt="Error" />

    <div className="absolute top-4 text-white transition-all duration-1000  ">
        <h2 className="text-base font-poppins font-normal mt-2 transition-all duration-1000   ml-6">UNLOCKING THE POWER OF <br /> SALESFORCE API: NAVIGATING <br /> LIMITATIONS</h2>
        <h2 className="text-base font-poppins transition-all duration-1000  font-normal mt-32 md:mt-[310px]  ml-6">Read More</h2>
       
          
    </div>
</div>
  </div>
  </div>

  
  </>
}

export default Blogs