"use client"
import React from 'react'
import CountUp from 'react-countup'

function Hero() {
  return <>
 <div className='flex flex-wrap justify-between px-5 md:px-28  mt-20 '>
     

<h1 className='font-poppins  text-2xl tracking-tight font-semibold text-[#042638]   lg:text-start sm:text-2xl transition-all duration-1000 md:text-3xl lg:text-4xl xl:text-4xl'>
Innovative Tech Heads <br /> Bringing Realistic  Solutions
</h1>
<h1  className='font-poppins  text-base tracking-tight  text-[#042638]   lg:text-start  sm:text-sm transition-all duration-1000 md:text-2xl lg:text-[25px] xl:text-[29px]'>
To help SMEs and large enterprises from a number of <br /> industries grow exponentially, we offer bespoke and <br />sustainable IT services.
</h1>
</div>



<div className='grid grid-cols-1 md:grid-cols-2 px-5 md:px-28 '>
  <img className='w-full md:w-[550px] object-cover' src="Group-1000005747.webp" alt="Error" />
  <div className='flex flex-col '>
    <p className='text-base text-[#494949] text-center lg:text-start'>
      We are an IT services provider and consulting company, bridging the gap
      between the ever-changing IT landscape and business scalability in a digital
      world. Operational since 2009, we take pride in offering custom services
      designed to secure, revolutionize, and flexibly manage your business of any size.
    </p>

    <div className='border-2 border-[#ececec] flex justify-around items-center py-5 px-2 rounded-md mt-6'>

<div className=' '>
  <h1 className='text-lg lg:text-2xl font-poppins font-semibold text-[#0ebab1]'>
  <CountUp start={0} end={1700} duration={25.5}
                />+</h1>
    
  <p className='  text-[10px] lg:text-sm text-[#454545] mt-1 '>Vetted IT Experts</p>
</div>
<div className='w-[1px] h-12 bg-[#ececec]'></div>
<div>
<div className=' '>
  <h1 className='text-lg lg:text-2xl font-poppins font-semibold text-[#0ebab1]'>
  <CountUp start={0} end={3000} duration={25.5}
                />+</h1>
    
</div>
  <p className='  text-[10px] lg:text-sm text-[#454545] mt-1'>Successful Project
</p>
</div>
<div className='w-[1px] h-12 bg-[#ececec]'></div>
<div>
<div className=' '>
  <h1 className='text-lg lg:text-2xl font-poppins font-semibold text-[#0ebab1]'>
  <CountUp start={0} end={99} duration={25.5}
                />%</h1>
    
</div>  <p className='  text-xs lg:text-sm text-[#454545] mt-1'>Client Satisfaction</p>
</div>
    </div>

    <div className='flex flex-row flex-wrap mt-6 gap-4'>
      <button className='px-6 py-2 border transition-all duration-1000 font-poppins hover:text-white hover:bg-[#0a1c2e] rounded-md border-black'>
        Learn More
      </button>

      <button className='bg-[#0ebab1] text-white transition-all duration-1000 hover:px-9 rounded-md px-6 py-2 flex flex-row gap-2 items-center font-poppins'>
        <a>Connect Now</a>
        <svg
          className="text-white "
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
</div>




  
  </>
}

export default Hero 