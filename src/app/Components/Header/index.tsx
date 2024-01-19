"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Navbar from "../Navbar";
import { Span } from "next/dist/trace";

interface Video {
  url: string;
  text: string;
}

const videos: Video[] = [
  {
    url: "Devsinc.mp4",
    text: "Video 1: Hatim Jasmeen Background Music",
  },
  {
    url: "Devsinc_1.mp4",
    text: "Video 2: Yun Pakistan Bana Tha - Singer & Composer Sahir Ali Bagga",
  },
  {
    url: "Devsinc_2.mp4",
    text: "Video 3: Yun Pakistan Bana Tha - Singer & Composer Sahir Ali Bagga",
  },
  {
    url: "Devsinc_3.mp4",
    text: "Video 4: Hatim Jasmeen Background Music (Again)",
  },
];

const VideoPlayer: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveVideo((prevIndex) => (prevIndex + 1) % videos.length);
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);

  const handleTabClick = (videoNumber: number) => {
    setActiveVideo(videoNumber);
  };


  return (
    <>
      <div className="relative">

      <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={false}
      className="mySwiper bg-[#183240] bg-opacity-50"
      onSlideChange={(swiper) => {
        setActiveVideo(swiper.activeIndex);
      }}>
        <div className="absolute w-full  top-0 z-50">
          <Navbar />
        </div>
        {videos.map((video, index) => (
          <SwiperSlide key={index}>
            <div 
            
             style={{
               filter: "brightness(100%)"
             }}
            className="video-container w-full h-screen">
              <video
                src={videos[activeVideo].url}
                frameBorder="0"
                allowFullScreen
                title={`Video ${index + 1}`}
                autoPlay
                muted
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "brightness(70%)",
                  transition: "transform 0.5s ease",
                  background: "rgba(0, 122, 255, 0.7)", // Blue color with transparency
                  transform: activeVideo === index ? "scale(1.05)" : "",
                }}
                className="w-full h-full object-cover"
              ></video>

              <div className=" absolute inset-0 top-48  lg:top-24 ">
                <div className="flex space-x-4  transition-all duration-1000 ease-in-out  ml-[14px] lg:ml-[46px]   w-full ">
                  {activeVideo === 0 && (
                    <div className="text-white flex flex-col gap-6 ">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-semibold font-poppins transition-all duration-1000 ease-in-out">
    Transform Your Business with
</h1>
                      <div className="pt-2">
                        <span className="text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold  transition-all duration-1000 ease-in-out  px-3 py-3 font-poppins bg-slate-500 bg-opacity-35 rounded-xl mt-5 text-[#0ebab1] ">
                          Generative AI
                        </span>
                      </div>
                      <p className="font-poppins pt-2 text-xs  transition-all duration-1000 ease-in-out lg:text-lg">
                        Our expertise in Generative AI, Machine Learning,
                        Computer <br /> Vision,  Python, and Deep Learning
                        techniques ensures your <br /> business is 
                        amplified and personalized simultaneously.
                      </p>
                      <div >
                      <p className="flex md:text-base text-xs transition-all duration-1000 ease-in-out font-poppins items-center gap-4  ">
                        Claim Your Future
                        <svg
                        className="text-white  hover:ml-4 transition-all duration-1000 "
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
                      </p>
                      <div className=" hover:w-44  w-32 md:w-40 rounded-sm mt-1 transition-all duration-1000 ease-in-out bg-white h-[1px]">

                      </div>
                      </div>

                    </div>
                  )}
                  {activeVideo === 1 && (
                    <div className="text-white flex flex-col gap-4 md:gap-3 ">
                      <div className="text-5xl transition-all duration-1000 ease-in-out  lg:text-6xl flex flex-col gap-3 font-semibold font-poppins">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold font-poppins transition-all duration-1000 ease-in-out">Streamline Data</h1>
                        <span className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold font-poppins transition-all duration-1000 ease-in-out"> Optimization Using</span>
                      </div>
                      <div className=" mt-3 md:mt-4 ">
                        <span className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold bg-opacity-35 font-poppins transition-all duration-1000 ease-in-out bg-slate-500 px-3 py-3 rounded-xl text-[#0ebab1] ">
                          Cloud Computing
                        </span>
                      </div>
                      <p className="font-poppins pt-3 text-xs  transition-all duration-1000 ease-in-out lg:text-base">
                        We use networking, databases, and servers over the
                        Internet  <br /> to lower operational costs and enhance
                        the reliability required  <br /> for enterprises to grow.
                      </p>
                      <div >
<p className="flex md:text-base text-xs transition-all duration-1000 ease-in-out font-poppins items-center gap-4  ">
Embark Your Knowledge
                        <svg
                        className="text-white  hover:ml-4 transition-all duration-1000 "
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
                      </p>
                      <div className="w-40 md:w-52 rounded-sm mt-1 bg-white h-[1px]">

                      </div>
                      </div>
                    </div>
                  )}
                  {activeVideo === 2 && (
                    <div className="text-white flex flex-col gap-6 ">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-semibold font-poppins transition-all duration-1000 ease-in-out">
                        Enhance Brand Success with
                      </h1>
                      <div className="pt-2">
                        <span className="text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold bg-opacity-35 font-poppins transition-all duration-1000 ease-in-out bg-slate-500 px-3 py-3 rounded-xl text-[#0ebab1] ">
                          Digital Transformation
                        </span>
                      </div>
                      <p className=" font-poppins pt-3 text-xs  transition-all duration-1000 ease-in-out lg:text-lg">
                        Our strategic use of Data Science as a Service,
                        Cybersecurity, and <br /> other program management
                        skills leverage your digital business <br />{" "}
                        initiatives.
                      </p>
                    
                      <div >
<p className="flex md:text-base text-xs transition-all duration-1000 ease-in-out font-poppins items-center gap-4  ">
Explore your solution
                        <svg
                        className="text-white  hover:ml-4 transition-all duration-1000 "
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
                      </p>
                      <div className="w-36 md:w-48 rounded-sm mt-1 bg-white h-[1px]">

                      </div>
                      </div>
                    </div>
                  )}
                  {activeVideo === 3 && (
                    <div className="text-white flex flex-col gap-6 ">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold font-poppins transition-all duration-1000 ease-in-out">
                        Decode Complexities with
                      </h1>

                      <div className="pt-2  ">
                        <span className="text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold bg-opacity-35 font-poppins transition-all duration-1000 ease-in-out bg-slate-500 px-2 lg:px-3 py-2 lg:py-2 rounded-xl text-[#0ebab1]  ">
                          Our Enterprise Services
                        </span>
                      </div>

                      <p className="font-poppins pt-4 text-xs  transition-all duration-1000 ease-in-out lg:text-lg">
                        We build, repair, and manage enterprise software
                        development,<br /> security operations, and  data-based
                        infrastructure to bring  <br /> seamless efficiency to
                        the table.
                      </p>
               

                      <div >
<p className="flex md:text-base text-xs transition-all duration-1000 ease-in-out font-poppins items-center gap-4  ">
Embark Your Knowledge
                        <svg
                        className="text-white hover:ml-4 transition-all duration-1000 "  
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
                      </p>
                      <div className="w-40 md:w-52 rounded-sm mt-1 bg-white h-[1px]">

                      </div>
                      </div>

                    </div>
                  )}
                </div>

                <div className="absolute  left-0 right-0 top-[28rem]  transition-all duration-1000 ease-in-out   lg:top-[23rem]">
                  <div className="flex justify-center ">
                    <button
                      onClick={() => handleTabClick(0)}
                      className={`flex gap-2 text-xs w-[23vw] flex-row py-2 px-4 text-center border-t-2 transition transform ${
                        activeVideo === 0
                          ? "border-[#0ebab1] scale-105 text-[#0ebab1]"
                          : "border-white text-white"
                      }`}
                    >
                      <h1>01.</h1>

                      <h1 className="hidden lg:block">Generative AI</h1>
                    </button>
                    <button
                      onClick={() => handleTabClick(1)}
                      className={`flex gap-2 text-xs w-[23vw] flex-row py-2 px-4 text-center border-t-2 transition transform ${
                        activeVideo === 1
                          ? "border-[#0ebab1] scale-105 text-[#0ebab1]"
                          : "border-white text-white"
                      }`}
                    >
                      <h1>02.</h1>
                      <h1 className="hidden lg:block">Cloud Computing</h1>
                    </button>
                    <button
                      onClick={() => handleTabClick(2)}
                      className={`flex gap-2 text-xs w-[23vw] flex-row py-2 px-4 text-center border-t-2 transition transform ${
                        activeVideo === 2
                          ? "border-[#0ebab1] scale-105 text-[#0ebab1]"
                          : "border-white text-white"
                      }`}
                    >
                      <h1>03.</h1>
                      <h1 className="hidden lg:block">
                        Digital Transformation
                      </h1>
                    </button>
                    <button
                      onClick={() => handleTabClick(3)}
                      className={`flex gap-2 text-xs w-[22vw] flex-row py-2 px-4 text-center border-t-2 transition transform ${
                        activeVideo === 3
                          ? "border-[#0ebab1] scale-105 text-[#0ebab1]"
                          : "border-white text-white"
                      }`}
                    >
                      <h1>04.</h1>
                      <h1 className="hidden lg:block">Enterprise Services </h1>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </>
  );
};

export default VideoPlayer;
