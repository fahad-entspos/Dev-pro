import React from 'react'

function Why() {
  return <>

<div className='relative w-full top-28 overflow-hidden transition-all duration-1000'>
  <img
    style={{
      filter: "brightness(40%)"
    }}
    className='w-full h-[130vh] object-cover transition-all duration-1000 xl:h-[130vh] lg:h-[130vh] md:h-[130vh] sm:h-[130vh]'
    src="mohammad-rahmani-lPKIb8dJ8kw-unsplash.jpg"
    alt="Error "
  />

  <div className="absolute top-4 text-white transition-all duration-1000">
    <h2 className="font-poppins text-[#0ebab1] text-2xl tracking-tight transition-all duration-1000 lg:text-3xl xl:text-4xl font-bold mt-4 md:mt-8 ml-[14px] xl:ml-[105px] ">Why Choose Devsinc? </h2>
    <p className="font-poppins text-[#c7c7c7] text-xs sm:text-sm tracking-tight transition-all duration-1000 md:text-base lg:text-lg xl:text-lg mt-4 md:mt-5 ml-[14px] xl:ml-[105px] ">While sustaining the vision to embrace the future seamlessly, <br /> we commit to transparency and a proactive approach to <br />address conventional and non-conventional IT solutions. Our <br />tenacity has been the cornerstone in acing new levels of <br />innovation and digital experiences. Our core expertise covers <br />all possible angles of solutions; from custom product <br /> development, Generative AI integrations, data modernizations, <br /> and cloud operations, to business consultancy</p>

    <button className='bg-transparent border-2 transition-all duration-1000 text-white rounded-md ml-[14px] xl:ml-[105px] mt-2 md:mt-6 px-8 py-2 flex flex-row gap-2 items-center font-poppins'>
      <a href="#">Connect Now</a>
    </button>
  </div>

  <div className="absolute top-[300px] sm:top-[470px] ml-[14px] xl:ml-[105px]  transition-all duration-1000">
    <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-3 lg:gap-16 text-white font-poppins transition-all duration-1000">
      <div className="mb-6 sm:mb-0 transition-all duration-1000">
        <div className="flex gap-2 flex-row transition-all duration-1000">
          <p className="w-[2px] h-6 rounded-md bg-[#0ebab1] transition-all duration-1000"></p>
          <h1 className="text-lg sm:text-xl md:text-xl lg:text-xl xl:text-xl transition-all duration-1000">Empowered Innovation</h1>
        </div>
        <p className='mt-2 text-[#c7c7c7] ml-2 text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base transition-all duration-1000'>
          Empowering innovation at our core, we pioneer <br />transformative solutions, driving progress, and <br /> shaping the future of IT excellence.
        </p>
      </div>

      <div className="  sm:w-[1px] flex-col sm:flex-row   w-11/12 h-[1px] rounded-lg sm:h-40 bg-white "></div>

      <div className="mb-6 sm:mb-0 transition-all duration-1000">
        <div className="flex gap-2 flex-row transition-all duration-1000">
          <p className="w-[2px] h-6 rounded-md bg-[#fcd53f] transition-all duration-1000"></p>
          <h1 className="text-lg sm:text-xl md:text-xl lg:text-xl xl:text-xl transition-all duration-1000">Guaranteed Excellence</h1>
        </div>
        <p className='mt-2 text-[#c7c7c7] ml -2 text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base transition-all duration-1000 '>
          We think out of the box about every incoming <br /> thread and problem that customers face <br /> and provide diligent solutions.
        </p>
      </div>

      <div className="  sm:w-[1px] flex-col sm:flex-row   w-11/12 h-[1px] rounded-lg sm:h-40 bg-white  "></div>

      <div>
        <div className="flex gap-2  flex-row transition-all duration-1000">
          <p className="w-[2px]  ml-1  h-6 rounded-md bg-[#9747ff]  transition-all duration-1000"></p>
          <h1 className="text-lg sm:text-xl md:text-xl lg:text-xl xl:text-xl transition-all duration-1000">Impeccable Performance</h1>
        </div>
        <p className='mt-2 text-xs ml-2 text-[#c7c7c7] sm:text-sm md:text-sm lg:text-sm xl:text-base transition-all duration-1000'>
          We offer software with robust speed and on <br /> time by focusing on the deliverables and tricky<br /> clients’  requirements.
        </p>
      </div>
    </div>
  </div>
</div>


  </>
}

export default Why