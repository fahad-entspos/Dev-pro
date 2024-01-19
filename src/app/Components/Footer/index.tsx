import React from 'react'
import { FiFacebook } from "react-icons/fi";
import { LuInstagram } from "react-icons/lu";
import { TbBrandLinkedin } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import { BiSolidMessage } from "react-icons/bi";
import styles from "@/app/Components/Footer/Footer.module.css"
function Footer() {
  return <div className='mt-10 '>
  
<div   className=" ">





</div>

<div className='bg-[#042638]  '>











    <footer className="grid lg:grid-cols-6 gap-4 px-5 md:px-28  py-2 pt-24 ">
        <div className="col-span-2   ">
<img className='w-48' src="Footer.logo.webp" alt="" />
<div className='flex flex-col gap-6 mt-6 text-[#c5c6c6]'>

<h1 className='text-[#c5c6c6] font-poppins text-base'>Devsinc is an IT services and consulting company that builds, designs, and offers top IT services to businesses of all sizes covering diverse industries.
</h1>
<h1 className='text-[#c5c6c6] font-poppins text-base'>
Devsinc, 1160 Battery St suite 1111,<br />
San Francisco, CA 94111, USA.
</h1>
<u className='text-[#c5c6c6] font-poppins text-base'>sales@devsinc.com</u>
<u className='text-[#c5c6c6] font-poppins text-base'>+1 (408) 758-6353</u>
<div className='flex items-center gap-4'>
<FiFacebook/>
<LuInstagram/>
<TbBrandLinkedin/>
<FaXTwitter/>
</div>
</div>

           </div>

        <div className="col-span-1 text-sm">
        <div className="border-t flex flex-col gap-4 font-poppins text-[#c5c6c6] border-gray-500 hover:border-[#0eb9b0]  transition duration-1000 p-4">
          <h1 className='text-2xl text-white'>Company</h1>
          <h1 className='hover:text-[#0eb9b0]'>Home</h1>
          <h1 className='hover:text-[#0eb9b0]'>Company</h1>
          <h1 className='hover:text-[#0eb9b0]'>Blogs</h1>
          <h1 className='hover:text-[#0eb9b0]'>Careers</h1>
          <h1 className='hover:text-[#0eb9b0]'>Contact</h1>
</div>
        </div>

        <div className="col-span-1  text-sm">
        <div className="border-t flex flex-col gap-4 font-poppins text-[#c5c6c6] border-gray-500 hover:border-[#0eb9b0]  transition duration-1000 p-4">
          <h1 className='text-2xl text-white'>Industries</h1>
          <h1  className='hover:text-[#0eb9b0]'>Healthcare</h1>
          <h1  className='hover:text-[#0eb9b0]'>EdTech</h1>
          <h1  className='hover:text-[#0eb9b0]'>Fintech</h1>
          <h1  className='hover:text-[#0eb9b0]'>E-Commerce</h1>
          <h1  className='hover:text-[#0eb9b0]'>Gaming</h1>
</div>
        </div>

        <div className="col-span-1  text-sm">
        <div className="border-t flex flex-col gap-4 font-poppins text-[#c5c6c6] border-gray-500 hover:border-[#0eb9b0] transition duration-1000 p-4">
          <h1 className='text-2xl text-white'>Industries</h1>
          <h1 className='hover:text-[#0eb9b0]'>AI / ML</h1>
          <h1 className='hover:text-[#0eb9b0]'>Software Development</h1>
          <h1 className='hover:text-[#0eb9b0]'>Desktop App Development</h1>
          <h1 className='hover:text-[#0eb9b0]'>Mobile App Development</h1>
          <h1 className='hover:text-[#0eb9b0]'>DevSecOps / DevOps</h1>
          <h1 className='hover:text-[#0eb9b0]'>Quality Assurance</h1>
          <h1 className='hover:text-[#0eb9b0]'>Microsoft Dynamics 360</h1>
          <h1 className='hover:text-[#0eb9b0]'>UI/UX Designing</h1>
          <h1 className='hover:text-[#0eb9b0]'>Internet of Things - IoT</h1>
          <h1 className='hover:text-[#0eb9b0]'>Data Science</h1>
</div>
        </div>
<div className="col-span-1  text-sm">
        <div className="border-t flex flex-col gap-4 font-poppins text-[#c5c6c6] border-gray-500 hover:border-[#0eb9b0] transition duration-1000 p-4">
          <h1 className='text-2xl text-white'>Advanced Services</h1>
          <h1 className='hover:text-[#0eb9b0]'>Generative AI</h1>
          <h1 className='hover:text-[#0eb9b0]'>Cyber Security</h1>
          <h1 className='hover:text-[#0eb9b0]'>Blockchain</h1>
          <h1 className='hover:text-[#0eb9b0]'>Cyber Security</h1>
          <h1 className='hover:text-[#0eb9b0]'>Metaverse Technology</h1>
</div>
        </div>
    </footer>

<div className='px-10 h-[2px] text-[#0c3a53]  bg-[#0c3a53] w-[85%] mx-auto  mt-10' />

<div className="flex justify-around w-full  text-sm mt-10">
      <div className="w-[20%]">
        <h1 className="font-poppins text-[#0eb9b0] text-lg">Partners</h1>
        <div className="flex flex-col gap-6 md:flex-row mt-2 ">
          <img className="w-28" src="Group-1000005856.webp" alt="Error" />
          <img className="w-28" src="Group-1000005855.webp" alt="Error" />
        </div>
      </div>

      <div className={`w-[50%] overflow-hidden ${styles.marqueeContainer}`}>
          <h1 className="font-poppins text-[#0eb9b0] text-lg">
            Client
          </h1>
          <div className={`marquee-content ${styles.marquee}`}>

          <div className="flex gap-6 mt-2 flex-row">
            <img className="w-28" src="Group-1000005847.webp" alt="Error" />
            <img className="w-28" src="Group-1000005848.webp" alt="Error" />
            <img className="w-28" src="Group-1000005849.webp" alt="Error" />
            <img className="w-28" src="Group-1000005854.webp" alt="Error" />
            <img className="w-28" src="Group-1000005847.webp" alt="Error" />
            <img className="w-28" src="Group-1000005848.webp" alt="Error" />
            <img className="w-28" src="Group-1000005852sdas.webp" alt="Error" />
            <img className="w-28" src="Group-1000005849.webp" alt="Error" />
            <img className="w-28" src="Group-1000005854.webp" alt="Error" />
            <img className="w-28" src="Group-1000005847.webp" alt="Error" />
          </div>
        </div>
      </div>
    </div>

<footer className="bg-[#0c3a53]  text-sm mt-8 ">
    <div className="w-full mx-auto max-w-screen-xl  py-4 md:flex md:items-center md:justify-between ">
      <span className="text-sm md:text-base text-gray-500 sm:text-center dark:text-gray-400">  Copyrights © 2023 Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-base font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <u className="hover:underline me-4 md:me-6 text-sm md:text-base">Privacy Policy</u>
        </li>
        <li>
            <u className="hover:underline me-4 md:me-6 text-sm md:text-base">Terms of services</u>
        </li>
        <li>
            <u className="hover:underline me-4 md:me-6 text-sm md:text-base">Cookie Policy</u>
        </li>
        <li>
        </li>
    </ul>
    </div>
</footer>

    </div>


  
  </div>
}

export default Footer