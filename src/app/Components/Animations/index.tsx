"use client"
import React, { useState } from 'react'

function Animations() {
    const [activeTab, setActiveTab] = useState('tab1');
    const [selectedTab, setSelectedTab] = useState('tab6');
    const [itsselectedTab, itssetSelectedTab] = useState('tab12');

  const changeTab = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };


  const handleTabChange = (tab: React.SetStateAction<string>) => {
    setSelectedTab(tab);
  }

  const handleNewTabChange = (tab: React.SetStateAction<string>) => {
    itssetSelectedTab(tab);
  };

  return <>
  <h1 className='font-poppins  ml-[14px]  md:ml-[47px] text-4xl tracking-tight font-semibold text-[#042638]  mt-12  lg:text-4xl xl:text-4xl'>IT Services for Your Enterprise</h1>
  <p className=' ml-[14px] mt-12 md:ml-[47px] font-poppins transition-all duration-1000'>
  Now you can delve into the ultimate experience of availing the best possible enterprise services, empowering  business vision and accelerating you on the path of exponential growth.
  </p>
      <div className="flex justify-center  flex-col md:flex-row flex-wrap gap-2 mt-10">
   
   

 
      <div className="relative ">
      <div
        onMouseEnter={() => changeTab('tab1')}
        onMouseLeave={() => changeTab(activeTab)}
        className={` rounded-md
         transition-all duration-1000 ease-in-out  ${
          activeTab === 'tab1' ? ' w-screen md:w-[500px] h-36 md:h-72' : 'w-screen md:w-[200px]  h-36 md:h-72'
        }`}
      >
        <img
        style={{ filter: `brightness(${activeTab === 'tab1' ? 60 : 40}%)` }}

        className='w-full h-full rounded-md object-cover' src="keepcoding-lVF2HLzjopw-unsplash.jpg" alt="Error" />

        <div className="absolute top-4 text-white  ">
          <h2 className="text-base font-poppins font-normal mt-2 ml-6">Cloud</h2>
          <h2
            onClick={() => changeTab('tab1')}
            className={`  transition-all duration-1000    hover:ml-12 text-xs font-poppins  mt-2  ml-6 ease-in-out  ${
              activeTab === 'tab1' ? 'block ' : 'hidden'
            }`}
          >
            We enable access to computing resources for remote data management, <br /> enabling the high-class scalability and flexibility.
          </h2>
          <h2
            onClick={() => changeTab('tab1')}
            className={`  transition-all duration-1000  hover:ml-12 flex items-center gap-2 text-base font-poppins font-normal absolute top-24 md:top-[220px] ml-6 ease-in-out  ${
              activeTab === 'tab1' ? 'block' : 'hidden'
            }`}
          >
            Connect for more
            <svg
              className="text-white transition-all duration-1000 hover:ml-3"
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
          </h2>
        </div>
      </div>
    </div> 
 
 
 
 
      <div className="relative ">
      <div
        onMouseEnter={() => changeTab('tab2')}
        onMouseLeave={() => changeTab(activeTab)}
        className={` rounded-md
         transition-all duration-1000 ease-in-out  ${
          activeTab === 'tab2' ? ' w-screen md:w-[500px] h-36 md:h-72' : 'w-screen md:w-[200px]  h-36 md:h-72'
        }`}
      >
        <img
        style={{ filter: `brightness(${activeTab === 'tab2' ? 60 : 40}%)` }}

        className='w-full h-full rounded-md object-cover' src="austin-distel-21GWwco-JBQ-unsplash.jpg" alt="Error" />

        <div className="absolute top-4 text-white  ">
          <h2 className="text-base font-poppins font-normal mt-2 ml-6">Digital Transformation
</h2>
          <h2
            onClick={() => changeTab('tab2')}
            className={`  transition-all duration-1000    hover:ml-12 text-xs font-poppins  mt-2  ml-6 ease-in-out  ${
              activeTab === 'tab2' ? 'block ' : 'hidden'
            }`}
          >
          We reshape business operations, making digital room for <br /> more connectivity, security, and exponential growth.
          </h2>
          <h2
            onClick={() => changeTab('tab2')}
            className={`  transition-all duration-1000  hover:ml-12 flex items-center gap-2 text-base font-poppins font-normal absolute top-24 md:top-[220px] ml-6 ease-in-out  ${
              activeTab === 'tab2' ? 'block' : 'hidden'
            }`}
          >
            Connect for more
            <svg
              className="text-white transition-all duration-1000 hover:ml-3"
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
          </h2>
        </div>
      </div>
    </div> 
 
  <div className="relative "> 
      <div
        onMouseEnter={() => changeTab('tab3')}
        onMouseLeave={() => changeTab(activeTab)}
        className={` rounded-md
         transition-all duration-1000 ease-in-out  ${
          activeTab === 'tab3' ? 'w-screen md:w-[500px] h-36 md:h-72' : 'w-screen md:w-[200px]  h-36 md:h-72'
        }`}
      >
        <img
        style={{ filter: `brightness(${activeTab === 'tab3' ? 60 : 40}%)` }}

        className='w-full h-full rounded-md object-cover' src="guerrillabuzz-SYofhg_IX3A-unsplash.jpg" alt="Error" />

        <div className="absolute top-4 text-white  ">
          <h2 className="text-base font-poppins font-normal mt-2 ml-6">Cybersecurity
</h2>
          <h2
            onClick={() => changeTab('tab3')}
            className={`  transition-all duration-1000    hover:ml-12 text-xs font-poppins  mt-2  ml-6 ease-in-out  ${
              activeTab === 'tab3' ? 'block ' : 'hidden'
            }`}
          >
We mitigate risks and allocate space for a secure upward <br />
trajectory through our cybersecurity consulting services.          </h2>
          <h2
            onClick={() => changeTab('tab2')}
            className={`  transition-all duration-1000  hover:ml-12 flex items-center gap-2 text-base font-poppins font-normal absolute top-24 md:top-[220px] ml-6 ease-in-out  ${
              activeTab === 'tab3' ? 'block' : 'hidden'
            }`}
          >
            Connect for more
            <svg
              className="text-white transition-all duration-1000 hover:ml-3"
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
          </h2>
        </div>
      </div>
    </div> 


    <div className="relative ">
      <div
        onMouseEnter={() => changeTab('tab4')}
        onMouseLeave={() => changeTab(activeTab)}
        className={` rounded-md
         transition-all duration-1000 ease-in-out  ${
          activeTab === 'tab4' ? 'w-screen md:w-[500px] h-36 md:h-72' : 'w-screen md:w-[200px]  h-36 md:h-72'
        }`}
      >
        <img
        style={{ filter: `brightness(${activeTab === 'tab4' ? 80 : 40}%)` }}

        className='w-full h-full rounded-md object-cover' src="tim-kabel-FCrYdP8gohg-unsplash.jpg" alt="Error" />

        <div className="absolute top-4 text-white  ">
          <h2 className="text-base font-poppins font-normal mt-2 ml-6">DevOps</h2>
          <h2
            onClick={() => changeTab('tab4')}
            className={`  transition-all duration-1000    hover:ml-12 text-xs font-poppins  mt-2  ml-6 ease-in-out  ${
              activeTab === 'tab4' ? 'block ' : 'hidden'
            }`}
          >
We automate, integrate, and eventually deliver nothing less than <br /> excellence through our in-house DevOps solutions.          </h2>
          <h2
            onClick={() => changeTab('tab4')}
            className={`  transition-all duration-1000  hover:ml-12 flex items-center gap-2 text-base font-poppins font-normal absolute top-24 md:top-[220px] ml-6 ease-in-out  ${
              activeTab === 'tab4' ? 'block' : 'hidden'
            }`}
          >
            Connect for more
            <svg
              className="text-white transition-all duration-1000 hover:ml-3"
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
          </h2>
        </div>
      </div>
    </div> 

    
      </div>



      <div className="flex justify-center flex-col md:flex-row flex-wrap gap-2 mt-10">

      <div className="relative">
      <div
        onMouseEnter={() => handleTabChange('tab5')}
        onMouseLeave={() => handleTabChange(selectedTab)}
        className={` rounded-md
         transition-all duration-1000 ease-in-out  ${
          selectedTab === 'tab5' ? ' w-screen md:w-[500px] h-36 md:h-72' : 'w-screen md:w-[200px]  h-36 md:h-72'
        }`}
      >
        <img
        style={{ filter: `brightness(${selectedTab === 'tab5' ? 80 : 40}%)` }}
        className='w-full h-full rounded-md object-cover' 
          src="pakata-goh-EJMTKCZ00I0-unsplash.jpg" 
          alt="Error" 
        />

        <div className="absolute top-4 text-white">
          <h2 className="text-base font-poppins font-normal mt-2 ml-6">System Integration

</h2>
          <h2
            onClick={() => handleTabChange('tab5')}
            className={`transition-all duration-1000 hover:ml-12 text-xs font-poppins mt-2 ml-6 ease-in-out  ${
              selectedTab === 'tab5' ? 'block ' : 'hidden'
            }`}
          >
We offer our system integration services to run your company’s <br /> software and hardware components smoothly and efficiently.          </h2>
          <h2
            onClick={() => handleTabChange('tab5')}
            className={`transition-all duration-1000 hover:ml-12 flex items-center gap-2 text-base font-poppins font-normal absolute top-24 md:top-[220px] ml-6 ease-in-out  ${
              selectedTab === 'tab5' ? 'block' : 'hidden'
            }`}
          >
            Connect for more
            <svg
              className="text-white transition-all duration-1000 hover:ml-3"
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
          </h2>
        </div>
      </div>
    </div>

    <div className="relative">
      <div
        onMouseEnter={() => handleTabChange('tab6')}
        onMouseLeave={() => handleTabChange(selectedTab)}
        className={` rounded-md
         transition-all duration-1000 ease-in-out  ${
          selectedTab === 'tab6' ? ' w-screen md:w-[500px] h-36 md:h-72' : 'w-screen md:w-[200px]  h-36 md:h-72'
        }`}
      >
        <img
        style={{ filter: `brightness(${selectedTab === 'tab6' ? 60 : 40}%)` }}
        className='w-full h-full rounded-md object-cover' 
          src="myriam-jessier-eveI7MOcSmw-unsplash.jpg" 
          alt="Error" 
        />

        <div className="absolute top-4 text-white">
          <h2 className="text-base font-poppins font-normal mt-2 ml-6">Customer Experience
 (IoT)
</h2>
          <h2
            onClick={() => handleTabChange('tab6')}
            className={`transition-all duration-1000 hover:ml-12 text-xs font-poppins mt-2 ml-6 ease-in-out  ${
              selectedTab === 'tab6' ? 'block ' : 'hidden'
            }`}
          >
We provide you with the innovative designers who blend aesthetics and <br />functionality while focusing on growth-enhancing interfaces.          </h2>
          <h2
            onClick={() => handleTabChange('tab6')}
            className={`transition-all duration-1000 hover:ml-12 flex items-center gap-2 text-base font-poppins font-normal absolute top-24 md:top-[220px] ml-6 ease-in-out  ${
              selectedTab === 'tab6' ? 'block' : 'hidden'
            }`}
          >
            Connect for more
            <svg
              className="text-white transition-all duration-1000 hover:ml-3"
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
          </h2>
        </div>
      </div>
    </div>

    <div className="relative">
      <div
        onMouseEnter={() => handleTabChange('tab7')}
        onMouseLeave={() => handleTabChange(selectedTab)}
        className={` rounded-md
         transition-all duration-1000 ease-in-out  ${
          selectedTab === 'tab7' ? ' w-screen md:w-[500px] h-36 md:h-72' : 'w-screen md:w-[200px]  h-36 md:h-72'
        }`}
      >
        <img
        style={{ filter: `brightness(${selectedTab === 'tab7' ? 60 : 40}%)` }}
        className='w-full h-full rounded-md object-cover' 
          src="flyd-mT7lXZPjk7U-unsplash.jpg" 
          alt="Error" 
        />

        <div className="absolute top-4 text-white">
          <h2 className="text-base font-poppins font-normal mt-2 ml-6">Application Security Services

</h2>
          <h2
            onClick={() => handleTabChange('tab7')}
            className={`transition-all duration-1000 hover:ml-12 text-xs font-poppins mt-2 ml-6 ease-in-out  ${
              selectedTab === 'tab7' ? 'block ' : 'hidden'
            }`}
          >
We ensure the protection of your digital assets and user data robustly <br /> with the help of application security services.

          </h2>
          <h2
            onClick={() => handleTabChange('tab7')}
            className={`transition-all duration-1000 hover:ml-12 flex items-center gap-2 text-base font-poppins font-normal absolute top-24 md:top-[220px] ml-6 ease-in-out  ${
              selectedTab === 'tab7' ? 'block' : 'hidden'
            }`}
          >
            Connect for more
            <svg
              className="text-white transition-all duration-1000 hover:ml-3"
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
          </h2>
        </div>
      </div>
    </div>


    <div className="relative">
      <div
        onMouseEnter={() => handleTabChange('tab8')}
        onMouseLeave={() => handleTabChange(selectedTab)}
        className={` rounded-md
         transition-all duration-1000 ease-in-out  ${
          selectedTab === 'tab8' ? ' w-screen md:w-[500px] h-36 md:h-72' : 'w-screen md:w-[200px]  h-36 md:h-72'
        }`}
      >
        <img
        style={{ filter: `brightness(${selectedTab === 'tab8' ? 80 : 40}%)` }}
        className='w-full h-full rounded-md object-cover' 
          src="ux-indonesia-w00FkE6e8zE-unsplash.jpg" 
          alt="Error" 
        />

        <div className="absolute top-4 text-white">
          <h2 className="text-base font-poppins font-normal mt-2 ml-6">Marketing
</h2>
          <h2
            onClick={() => handleTabChange('tab8')}
            className={`transition-all duration-1000 hover:ml-12 text-xs font-poppins mt-2 ml-6 ease-in-out  ${
              selectedTab === 'tab8' ? 'block ' : 'hidden'
            }`}
          >
Optimize outreach and enhance brand visibility to foster customer <br /> engagement and growth through our tailored marketing services          </h2>
          <h2
            onClick={() => handleTabChange('tab8')}
            className={`transition-all duration-1000 hover:ml-12 flex items-center gap-2 text-base font-poppins font-normal absolute top-24 md:top-[220px] ml-6 ease-in-out  ${
              selectedTab === 'tab8' ? 'block' : 'hidden'
            }`}
          >
            Connect for more
            <svg
              className="text-white transition-all duration-1000 hover:ml-3"
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
          </h2>
        </div>
      </div>
    </div>
    </div>

    <h1 className='font-poppins  ml-[14px]  md:ml-[47px] text-4xl tracking-tight font-semibold text-[#042638]  mt-12  lg:text-4xl xl:text-4xl'>
    Our Advanced Services
    </h1>
    <p className=' ml-[14px]  md:ml-[47px] font-poppins mt-8'>
    Unravel the power of our Next-Gen IT services in the favor of your exclusive business mission.
    </p>
    <div className="flex justify-center flex-col md:flex-row flex-wrap gap-2 mt-14">

    <div className="relative">
      <div
        onMouseEnter={() => handleNewTabChange ('tab9')}
        onMouseLeave={() => handleNewTabChange (itsselectedTab)}
        className={` rounded-md
         transition-all duration-1000 ease-in-out  ${
          itsselectedTab === 'tab9' ? ' w-screen md:w-[500px] h-36 md:h-72' : 'w-screen md:w-[200px]  h-36 md:h-72'
        }`}
      >
        <img
        style={{ filter: `brightness(${itsselectedTab === 'tab9' ? 80 : 40}%)` }}
        className='w-full h-full rounded-md object-cover' 
          src="alex-knight-2EJCSULRwC8-unsplash.jpg" 
          alt="Error" 
        />

        <div className="absolute top-4 text-white">
          <h2 className="text-base font-poppins font-normal mt-2 ml-6">Artificial Intelligence
</h2>
          <h2
            onClick={() => handleNewTabChange ('tab9')}
            className={`transition-all duration-1000 hover:ml-12 text-xs font-poppins mt-2 ml-6 ease-in-out  ${
              itsselectedTab === 'tab9' ? 'block ' : 'hidden'
            }`}
          >
          Utilize AI/ML technology to elevate the apps and systems <br />performance based on our analytical insights.
          </h2>
          <h2
            onClick={() => handleNewTabChange ('tab9')}
            className={`transition-all duration-1000 hover:ml-12 flex items-center gap-2 text-base font-poppins font-normal absolute top-24 md:top-[220px] ml-6 ease-in-out  ${
              itsselectedTab === 'tab9' ? 'block' : 'hidden'
            }`}
          >
            Connect for more
            <svg
              className="text-white transition-all duration-1000 hover:ml-3"
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
          </h2>
        </div>
      </div>
    </div>
    <div className="relative">
      <div
        onMouseEnter={() => handleNewTabChange ('tab10')}
        onMouseLeave={() => handleNewTabChange (itsselectedTab)}
        className={` rounded-md
         transition-all duration-1000 ease-in-out  ${
          itsselectedTab === 'tab10' ? 'w-screen md:w-[500px] h-36 md:h-72' : 'w-screen md:w-[200px]  h-36 md:h-72'
        }`}
      >
        <img
        style={{ filter: `brightness(${itsselectedTab === 'tab10' ? 80 : 40}%)` }}
        className='w-full h-full rounded-md object-cover' 
          src="thomas-jensen-h3vT1Kp0FxA-unsplash.jpg" 
          alt="Error" 
        />

        <div className="absolute top-4 text-white">
          <h2 className="text-base font-poppins font-normal mt-2 ml-6">Internet of Things (IoT)
</h2>
          <h2
            onClick={() => handleNewTabChange ('tab10')}
            className={`transition-all duration-1000 hover:ml-12 text-xs font-poppins mt-2 ml-6 ease-in-out  ${
              itsselectedTab === 'tab10' ? 'block ' : 'hidden'
            }`}
          >
Enabling businesses to harness the potential of IoT, <br /> connecting/controlling devices, and collecting data.          </h2>
          <h2
            onClick={() => handleNewTabChange ('tab10')}
            className={`transition-all duration-1000 hover:ml-12 flex items-center gap-2 text-base font-poppins font-normal absolute top-24 md:top-[220px] ml-6 ease-in-out  ${
              itsselectedTab === 'tab10' ? 'block' : 'hidden'
            }`}
          >
            Connect for more
            <svg
              className="text-white transition-all duration-1000 hover:ml-3"
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
          </h2>
        </div>
      </div>
    </div>
 

    <div className="relative">
      <div
        onMouseEnter={() => handleNewTabChange ('tab11')}
        onMouseLeave={() => handleNewTabChange (itsselectedTab)}
        className={` rounded-md
         transition-all duration-1000 ease-in-out  ${
          itsselectedTab === 'tab11' ? ' w-screen md:w-[500px] h-36 md:h-72' : 'w-screen md:w-[200px]  h-36 md:h-72'
        }`}
      >
        <img
        style={{ filter: `brightness(${itsselectedTab === 'tab11' ? 80 : 40}%)` }}
        className='w-full h-full rounded-md object-cover' 
          src="luke-chesser-JKUTrJ4vK00-unsplash.jpg" 
          alt="Error" 
        />

        <div className="absolute top-4 text-white">
          <h2 className="text-base font-poppins font-normal mt-2 ml-6">Data & Analytics
</h2>
          <h2
            onClick={() => handleNewTabChange ('tab11')}
            className={`transition-all duration-1000 hover:ml-12 text-xs font-poppins mt-2 ml-6 ease-in-out  ${
              itsselectedTab === 'tab11' ? 'block ' : 'hidden'
            }`}
          >
Drive insights and refine strategies. Utilize the power of data for informed <br /> decisions and growth through our expertise in Data and analytics.          </h2>
          <h2
            onClick={() => handleNewTabChange ('tab11')}
            className={`transition-all duration-1000 hover:ml-12 flex items-center gap-2 text-base font-poppins font-normal absolute top-24 md:top-[220px] ml-6 ease-in-out  ${
              itsselectedTab === 'tab11' ? 'block' : 'hidden'
            }`}
          >
            Connect for more
            <svg
              className="text-white transition-all duration-1000 hover:ml-3"
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
          </h2>
        </div>
      </div>
    </div>



    <div className="relative">
      <div
        onMouseEnter={() => handleNewTabChange ('tab12')}
        onMouseLeave={() => handleNewTabChange (itsselectedTab)}
        className={` rounded-md
         transition-all duration-1000 ease-in-out  ${
          itsselectedTab === 'tab12' ? ' w-screen md:w-[500px] h-36 md:h-72' : 'w-screen md:w-[200px]  h-36 md:h-72'
        }`}
      >
        <img
        style={{ filter: `brightness(${itsselectedTab === 'tab12' ? 80 : 40}%)` }}
        className='w-full h-full rounded-md object-cover' 
          src="tech-daily-ztYmIQecyH4-unsplash.jpg" 
          alt="Error" 
        />

        <div className="absolute top-4 text-white">
          <h2 className="text-base font-poppins font-normal mt-2 ml-6">Blockchain
</h2>
          <h2
            onClick={() => handleNewTabChange ('tab12')}
            className={`transition-all duration-1000 hover:ml-12 text-xs font-poppins mt-2 ml-6 ease-in-out  ${
              itsselectedTab === 'tab12' ? 'block ' : 'hidden'
            }`}
          >
Choose the decentralized approaches to leverage transparency and <br /> immutability in data management through blockchain technology.          </h2>
          <h2
            onClick={() => handleNewTabChange ('tab12')}
            className={`transition-all duration-1000 hover:ml-12 flex items-center gap-2 text-base font-poppins font-normal absolute top-24 md:top-[220px] ml-6 ease-in-out  ${
              itsselectedTab === 'tab12' ? 'block' : 'hidden'
            }`}
          >
            Connect for more
            <svg
              className="text-white transition-all duration-1000 hover:ml-3"
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
          </h2>
        </div>
      </div>
    </div>

    </div>

  </>
}

export default Animations