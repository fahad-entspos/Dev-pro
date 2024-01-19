"use client";
import { SetStateAction, useState } from "react";
import { RiOpenaiFill } from "react-icons/ri";
import { BiHealth } from "react-icons/bi";
import { BiHome } from "react-icons/bi";
import { GrCommand } from "react-icons/gr";
import { IoGameControllerOutline } from "react-icons/io5";
function About() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [activeTab, setActiveTab] = useState("tab1");

  const changeTab = (tab: SetStateAction<string>) => {
    setActiveTab(tab);
  };
  return (
    <>
      <h1 className="font-poppins     transition-all duration-1000 ml-[14px] xl:ml-[105px]  mt-56 text-4xl tracking-tight font-semibold text-[#042638]   lg:text-4xl xl:text-4xl">
        Fuelling businesses across various <br />
        sectors and global locations
      </h1>
      
      <div className=" flex justify-center">

            <div className="flex justify-center  gap-12 mt-10 flex-col-reverse lg:flex-row  flex-wrap">
      <div className="flex flex-col  jus gap-2">

      <button
      onClick={() => changeTab("tab1")}
      className={`font-poppins border-2 rounded-md flex w-[90vw] md:w-[450px] p-[21px] font-medium flex-row gap-8 items-center
                  ${activeTab === "tab1" ? "bg-[#042638] text-[#adaeae]" : "bg-[#fafafa] text-[#042638]"}
                `}
    >
      <RiOpenaiFill className={`w-5 h-5 ${activeTab === "tab1" ? "" : ""}`} />
      <h1 className={`w-[1px] h-8 ${activeTab === "tab1" ? "bg-[#adaeae] text-[#042638]" : " bg-[#042638] text-[#adaeae]"}`}></h1>
      <a className={`text-lg font-medium`}>EdTech</a>
    </button>

      
    <button
      onClick={() => changeTab("tab2")}
      className={`font-poppins border-2 rounded-md flex w-[90vw]   md:w-[450px] p-[21px] font-medium flex-row gap-8 items-center
                  ${activeTab === "tab2" ? "bg-[#042638] text-[#adaeae]" : "bg-[#fafafa] text-[#042638]"}
                `}
    >
      <BiHealth className={`w-5 h-5 ${activeTab === "tab2" ? "" : ""}`} />
      <h1 className={`w-[1px] h-8 ${activeTab === "tab2" ? "bg-[#adaeae] text-[#042638]" : " bg-[#042638] text-[#adaeae]"}`}></h1>
      <a className={`text-lg font-medium`}>Healthcare</a>
    </button>

    <button
      onClick={() => changeTab("tab3")}
      className={`font-poppins border-2 rounded-md flex w-[90vw]   md:w-[450px] p-[21px] font-medium flex-row gap-8 items-center
                  ${activeTab === "tab3" ? "bg-[#042638] text-[#adaeae]" : "bg-[#fafafa] text-[#042638]"}
                `}
    >
      <BiHome className={`w-5 h-5 ${activeTab === "tab3" ? "" : ""}`} />
      <h1 className={`w-[1px] h-8 ${activeTab === "tab3" ? "bg-[#adaeae] text-[#042638]" : " bg-[#042638] text-[#adaeae]"}`}></h1>
      <a className={`text-lg font-medium`}>Fintech</a>
    </button>


    <button
      onClick={() => changeTab("tab4")}
      className={`font-poppins border-2 rounded-md flex w-[90vw]  md:w-[450px] p-[21px] font-medium flex-row gap-8 items-center
                  ${activeTab === "tab4" ? "bg-[#042638] text-[#adaeae]" : "bg-[#fafafa] text-[#042638]"}
                `}
    >
      <GrCommand className={`w-5 h-5 ${activeTab === "tab4" ? "" : ""}`} />
      <h1 className={`w-[1px] h-8 ${activeTab === "tab4" ? "bg-[#adaeae] text-[#042638]" : " bg-[#042638] text-[#adaeae]"}`}></h1>
      <a className={`text-lg font-medium`}>E-Commerce</a>
    </button>


    <button
      onClick={() => changeTab("tab5")}
      className={`font-poppins border-2 rounded-md flex w-[90vw] md:w-[450px] p-[21px] font-medium flex-row gap-8 items-center
                  ${activeTab === "tab5" ? "bg-[#042638] text-[#adaeae]" : "bg-[#fafafa] text-[#042638]"}
                `}
    >
      <IoGameControllerOutline className={`w-5 h-5 ${activeTab === "tab5" ? "" : ""}`} />
      <h1 className={`w-[1px] h-8 ${activeTab === "tab5" ? "bg-[#adaeae] text-[#042638]" : " bg-[#042638] text-[#adaeae]"}`}></h1>
      <a className={`text-lg font-medium`}>Gaming</a>
    </button>

  </div>
        <div className=" mt-3">

        {activeTab === "tab1" && 
    <div className="flex flex-col md:flex-row  ">
    <img className=" w-[90vw] md:w-[400px] object-cover h-[100px] md:h-[400px] rounded-tl-xl   md:rounded-bl-xl rounded-bl-none      rounded-tr-xl md:rounded-tr-none  " src="Education.webp" alt="Error" />  
    <div className="  w-[90vw] md:w-[400px]  h-[270px] md:h-[400px] relative shadow-2xl rounded-2xl  ">
    
        <p className="absolute left-4 font-poppins font-semibold text-lg text-[#042638] inset-0 top-2 md:top-8">Pave The Way for Smart Education <br />with EdTech</p>
        <p className="absolute left-4 inset-0 text-[#5c5f5c] top-20 md:top-24 text-[13px] md:text-xs pr-3">
        To streamline the hefty management of educational data and teacher-student interaction  we use technologies like VR/AR, AI, and Blockchain to develop seamless systems, virtual classrooms, and tools for restriction-free eLearning and better results.
        </p>
    
        <button className="bg-[#0ebab1]  md:rounded-bl-none rounded-bl-xl   rounded-br-xl  w-[90vw] md:w-[400px] absolute top-[207px]  md:top-[336px] py-5 text-white flex justify-center flex-row gap-2 items-center font-poppins">
          <a>Learn more about our EdTech services </a>
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
}  
             {activeTab === "tab2" &&
       <div className="flex flex-col md:flex-row ">
       <img className="  w-[90vw] md:w-[400px] object-cover h-[100px] md:h-[400px] rounded-tl-xl   md:rounded-bl-xl rounded-bl-none      rounded-tr-xl md:rounded-tr-none  " src="Healthcare.png" alt="Error" />  
       <div className="  w-[90vw] md:w-[400px]  h-[270px] md:h-[400px] relative shadow-2xl rounded-2xl   ">
       
           <p className="absolute left-4 font-poppins font-semibold text-xl text-[#042638] inset-0 top-2 md:top-8">Healthcare Redefined Through <br /> Tech-Driven Solutions</p>
           <p className="absolute left-4 inset-0 text-[#5c5f5c] top-20 md:top-24 text-[13px] md:text-xs pr-3">
           Achieve a big-picture view of patient care and  medicinal<br /> management with the help of  technology in healthcare.<br /> Through software applications and next-gen IT   <br />solutions, we bring clarity to decision-making <br />  and open doors to  real-time telemedicine.
           </p>
       
           <button className="bg-[#0ebab1]  md:rounded-bl-none rounded-bl-xl   rounded-br-xl  w-[90vw] md:w-[400px] absolute top-[207px]  md:top-[336px] py-5 text-white flex justify-center flex-row gap-2 items-center font-poppins">
             <a>Dive into future-ready health and wellness</a>
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
} 
              {activeTab === "tab3" && 
             <div className="flex flex-col md:flex-row ">
             <img className=" w-[90vw] md:w-[400px] object-cover h-[100px] md:h-[400px] rounded-tl-xl   md:rounded-bl-xl rounded-bl-none     rounded-tr-xl md:rounded-tr-none  " src="FIntech.png" alt="Error" />  
             <div className="  w-[90vw] md:w-[400px]  h-[270px] md:h-[400px] relative shadow-2xl rounded-2xl  ">
             
                 <p className="absolute left-4 font-poppins font-semibold text-xl text-[#042638] inset-0 top-2 md:top-8">Revolutionized, Secure, and Swift <br />Financial Systems</p>
                 <p className="absolute left-4 inset-0 text-[#5c5f5c] top-20 md:top-24 text-[13px] md:text-xs pr-3">
                 Adopting technology for payments, P2P lending, <br /> and investment is one thing, making it secure, swift, <br /> and easy to navigate is another. We bridge the gap <br /> between advancement and smart transactions by <br /> utilizing cybersecurity, business analysis, and <br /> software development.                 </p>
             
                 <button className="bg-[#0ebab1]  md:rounded-bl-none rounded-bl-xl   rounded-br-xl  w-[90vw] md:w-[400px] absolute top-[207px]  md:top-[336px] py-5 text-white flex justify-center flex-row gap-2 items-center font-poppins">
                   <a>Embrace the future of the financial world </a>
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
    }  
             {activeTab === "tab4" && 
        <div className="flex flex-col md:flex-row ">
        <img className=" w-[90vw] md:w-[400px] object-cover h-[100px] md:h-[400px] rounded-tl-xl    md:rounded-bl-xl rounded-bl-none      rounded-tr-xl md:rounded-tr-none  " src="E-commerce.png" alt="Error" />  
        <div className=" w-[90vw] md:w-[400px]  h-[270px] md:h-[400px] relative shadow-2xl rounded-2xl   ">
        
            <p className="absolute left-4 font-poppins font-semibold text-xl text-[#042638] inset-0 top-2 md:top-8">Optimized & Interactive <br /> eCommerce Experiences</p>
            <p className="absolute left-4 inset-0 text-[#5c5f5c] top-20 md:top-24 text-[13px] md:text-xs pr-3">
            From swift web pages to user-friendly mobile apps <br /> that generate more sales, eCommerce is <br />experiencing rapid change in today’s world. Our <br />developers shape immersive shopping experiences <br /> along with maintaining user data and interfaces for <br /> your business needs.            </p>
        
            <button className="bg-[#0ebab1]  md:rounded-bl-none rounded-bl-xl   rounded-br-xl  w-[90vw] md:w-[400px] absolute top-[207px]  md:top-[336px] py-5 text-white flex justify-center flex-row gap-2 items-center font-poppins">
              <a className=" text- lg:text-base ">
Change the way you manage business   </a>
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
} 
              {activeTab === "tab5" &&
          <div className="flex flex-col md:flex-row ">
          <img className=" w-[90vw] md:w-[400px] object-cover h-[100px] md:h-[400px] rounded-tl-xl    md:rounded-bl-xl rounded-bl-none      rounded-tr-xl md:rounded-tr-none  " src="Automotive.webp" alt="Error" />  
          <div className="   w-[90vw] md:w-[400px]  h-[270px] md:h-[400px] relative shadow-2xl rounded-2xl   ">
          
              <p className="absolute left-4 font-poppins font-semibold text-xl text-[#042638] inset-0 top-2 md:top-8">Power The Ultimate Gaming <br /> Experience!</p>
              <p className="absolute left-4 inset-0 text-[#5c5f5c] top-20 md:top-24 text-[13px] md:text-xs pr-3">
              Materializing gaming experiences that are rich in <br />art, development, entertainment, and <br /> advancement is easier with our front-end and back-end <br />developers. Our extensive services <br /> include Metaverse, blockchain, UE5, and more <br /> for different platforms and genres.              </p>
          
              <button className="bg-[#0ebab1]  md:rounded-bl-none rounded-bl-xl   rounded-br-xl  w-[90vw] md:w-[400px] absolute top-[207px]  md:top-[336px] py-5 text-white flex justify-center flex-row gap-2 items-center font-poppins">
                <a>Make gaming ideas secure and advance </a>
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
}
        </div>
      </div>
      </div>

    </>
  );
}

export default About;
