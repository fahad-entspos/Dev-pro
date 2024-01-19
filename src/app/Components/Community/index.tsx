import React from 'react'
import { BiSolidMessage } from "react-icons/bi";

function Community() {
  return <>
  
  <div className='bg-[#0c3a53] mt-10 w-[85vw]  flex justify-center lg:justify-between flex-wrap  gap-3 items-center py-20 px-12 rounded-2xl mx-auto'>


<div className='flex flex-col gap-3 '>
    <h1 className='text-[#bcbfc0] text-sm lg:text-lg font-poppins  items-center'>Get Your Daily Dose of Tech Insights! </h1>
    <h1 className='text-white font-poppins font-semibold text-3xl text-center'>Join our community </h1>
</div>

<div className='flex items-center flex-wrap justify-center gap-2'>

    <div className="relative w-[90%] lg:w-96 ">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 ">
            <BiSolidMessage  className="w-6 h-6 text-[#c7c7c7]"/>
        </div>
        <input type="search" id="default-search" className="block w-full bg-[#0d3f57] opacity-20 text-white p-4 ps-10 text-base   border-2 border-gray-300  rounded-lg " placeholder="Enter you email." required/>
    </div>
    <button className='bg-[#0ebab1] text-white  transition-all duration-1000  hover:px-9 rounded-md px-7  py-3 flex flex-row gap-2 items-center font-poppins'>
                        <a >Join Us</a>
                        
                    </button>
</div>
</div>
  
  
  </>
}

export default Community