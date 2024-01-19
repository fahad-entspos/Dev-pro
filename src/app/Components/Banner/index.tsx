import React from 'react'
import { FiFacebook } from "react-icons/fi";
import { RiInstagramLine } from "react-icons/ri";
import { PiLinkedinLogoBold } from "react-icons/pi";
function Banner() {
  return <>
  
  <div className='bg-[#193a53] w-full flex justify-between px-4 md:px-11 h-12 items-center   transition-all duration-1000 ease-in-out'>
<div className='flex gap-2 items-center  transition-all duration-1000 ease-in-out'>
<svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 text-white">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>
  <u className=' text-xs  text-white font-medium  transition-all duration-1000 ease-in-out'>info@devsinc.com</u>

</div>

<div className='flex gap-2   md:gap-3 text-white  transition-all duration-1000 ease-in-out '>
<FiFacebook  className="w-5 h-5"/>
<RiInstagramLine className="w-5 h-5"/>
<PiLinkedinLogoBold className="w-5 h-5"/>
</div>


</div>
  
  </>
}

export default Banner