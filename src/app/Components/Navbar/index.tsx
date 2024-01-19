/* eslint-disable react/no-unescaped-entities */
"use client"
import { useState, useEffect } from 'react';
import { BsMessenger, BsQuestionCircle, BsFillBellFill } from 'react-icons/bs';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [dropdownVisible, setDropdownVisible] =   useState(false);
  const [navbarOne, setNavbar] = useState(false);
  const toggleDropdown = () => {
      setDropdownVisible(!dropdownVisible);
      setNavbar(!navbarOne);
  }
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return  <>
  
  <nav
      className={`${
        scrolling
          ? 'bg-white fixed top-0 text-black left-0 right-0 '
          : 'bg-transparent text-white backdrop-blur-md bg-opacity-75 '
      }  `}
    >
   <div className="w-full   bg-transparent shadow">
        <div className="justify-between  mx-auto md:items-center flex  px-5 md:px-28  transition-all duration-1000 ease-in-out  " >
            <div>
                <div className="flex items-center justify-between py-3 md:py-5 md:block  ">
                {scrolling ? (
    <img className='h-9' src="download (1)" alt="Scrolling Image" />
  ) : (
    <img className='h-9' src="qweqweqw.webp" alt="Non-Scrolling Image" />
  )}                </div>
            </div>

            <div className={"md:items-center  " + (dropdownVisible ? 'text-black ' : ' hidden ' ) + " md:flex absolute md:static   top-0 left-0  w-[250px] md:w-full bg-white text- md:bg-transparent z-10 md:h-auto h-[100vh]"}>
                <ul className="md:flex items-center   justify-end overflow-x-auto w-full  md:space-x-8">



                <li className=' p-3 md:px-0   hover:text-[#0ebab1]   text-base  font-poppins'>
                        <a >Company</a>
                        
                    </li>
                    <li className=' p-3 md:px-0 hover:text-[#0ebab1]  text-base      font-poppins'>
                        <a >Careers</a>
                    </li>

                   
                    <li className=' p-3 md:px-0 hover:text-[#0ebab1]  text-base      font-poppins'>
                        <a >Blogs</a>
                    </li>
                    <div className='md:pl-0 pl-2'>

                    <button className='bg-[#0ebab1] text-white  transition-all duration-1000  hover:px-9 rounded-md px-6  py-2 flex flex-row gap-2 items-center font-poppins'>
                        <a >Schedule a call</a>
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
                </ul>
            </div>

            <div className="flex items-center md:hidden ml-1">
                <button className=" text-gray-700 rounded-md outline-none  focus:border-gray-400 focus:border" onClick={toggleDropdown}>
                    {navbarOne ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-8  h-8 text-[#0ebab1]"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-8  h-8 text-[#0ebab1]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </button>
            </div>
        </div>
        </div>
    </nav>
   
</>
};

export default Navbar;
