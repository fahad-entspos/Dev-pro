"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Review() {
  return <>
<div className='flex justify-center gap-8 flex-wrap lg:flex-nowrap bg-[#fafafa] py-10 mt-20'>

<div className='w-[90%] lg:w-2/5 ml-[14px] xl:ml-[105px]    transition-all duration-1000 '>
  <h1 className='font-poppins text-[#042638] text-3xl tracking-tight transition-all duration-1000 lg:text-5xl xl:text-5xl font-bold'>
    Reviews by <br /> Our Clients
  </h1>
  <p className='font-poppins text-[#454545] text-sm lg:text-xl tracking-tight transition-all duration-1000 mt-4 lg:mt-12'>
    Clients rave about the exceptional services and cutting-edge IT solutions provided by Devsinc.
  </p>
  <img className='w-full lg:w-[560px] h-[250px] object-cover rounded-2xl mt-5' src="Rectangle-561.webp" alt="Error" />
</div>

<div className='w-[90%] lg:w-[50%] sticky bg-[#042638] ml-[14px] xl:ml-[105px]  p-4 :p-10 rounded-tl-2xl rounded-bl-2xl  rounded-tr-2xl  lg:rounded-tr-none rounded-br-2xl  lg:rounded-br-rounded-tr-none  '>
  <Swiper
    breakpoints={{
      280: { width: 300, slidesPerView: 1 },
      380: { width: 360, slidesPerView: 1 },
      400: { width: 430, slidesPerView: 1 },
      768: { width: 780, slidesPerView: 2 },
      1024: { width: 980, slidesPerView: 2 },
      1260: { width: 1260, slidesPerView: 1 },
    }}
    slidesPerView={2}
    spaceBetween={10}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    navigation={false}
    modules={[Autoplay, Pagination, Navigation]}
  >
    <div className='sticky'>

    <SwiperSlide>
      <div className='flex flex-col lg:flex-row gap-2 lg:gap-6 w-[85%]'>
        <img className='w-[90%] lg:w-40 object-cover h-[350px] rounded-lg lg:h-[400px]' src="Rectangle-606.png" alt="Error" />
        <div>
          <h1 className='font-poppins text-xl mt-4 text-[#0b9190] font-semibold'>
            Eric Hurst
          </h1>
          <div className="flex items-center gap-2">
              <svg  className="w-3 h-3 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>  <svg  className="w-3 h-3 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>  <svg  className="w-3 h-3 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>  <svg  className="w-3 h-3 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>  <svg  className="w-3 h-3 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
            </div>
          <p className='text-xs text-wrap lg:text-sm w-[90%] xl:w-[50%] mt-4 lg:mt-6 text-white font-extralight tracking-wider'>
            Responsive and committed, Devsinc provides quality work in a timely manner. They efficiently provide the clients in-house team with software development outsourcing services. They also ensure that the developers they provide meet the clients needs, leading to an ongoing partnership.
          </p>
        </div>
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className='flex flex-col lg:flex-row gap-2 lg:gap-6 w-[85%]'>
        <img className='w-[90%] lg:w-40 object-cover rounded-lg h-[350px] lg:h-[400px]' src="Kalidus.webp" alt="Error" />
        <div>
          <h1 className='font-poppins text-xl mt-4 text-[#0b9190] font-semibold'>
            Andy Crebar
          </h1>
          <div className='flex items-center gap-2 mt-2 lg:mt-4'>
            <p className='font-poppins text-xs text-white'>
              Co Kallidus
            </p>
            <div className="flex items-center gap-2">
              <svg  className="w-3 h-3 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>  <svg  className="w-3 h-3 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>  <svg  className="w-3 h-3 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>  <svg  className="w-3 h-3 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>  <svg  className="w-3 h-3 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
            </div>
          </div>
          <p className='text-xs w-[90%] xl:w-[50%]   text-wrap lg:text-sm mt-4 lg:mt-6 text-white font-extralight tracking-wider'>
            Thanks to Devsincs (formerly Agile17) efforts, the companys site has been aesthetically pleasing and user-friendly. Theyre responsive and the client finds it easy to work with them. Their exceptional work encourages ongoing partnership, making them highly recommended.
          </p>
        </div>
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className='flex flex-col lg:flex-row gap-2 lg:gap-6 w-[85%]'>
        <img className='w-[90%] lg:w-40 rounded-lg object-cover h-[350px] lg:h-[400px]' src="Kudo.webp" alt="Error" />
        <div>
          <h1 className='font-poppins text-xl mt-4 text-[#0b9190] font-semibold'>
            Parham
          </h1>
          <div className='flex items-center gap-2 mt-2 lg:mt-4'>
            <p className='font-poppins text-xs text-white'>
              President, Kudo
            </p>
            <div className="flex items-center gap-2">
              <svg  className="w-3 h-3 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>  <svg  className="w-3 h-3 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>  <svg  className="w-3 h-3 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>  <svg  className="w-3 h-3 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>  <svg  className="w-3 h-3 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
            </div>
          </div>
          <p className='text-xs w-[90%] xl:w-[50%]  text-wrap lg:text-sm mt-4 lg:mt-6 text-white font-extralight'>
            Devsinc has stood out for their promptness and responsiveness. The client is extremely satisfied with their performance and technical skills. All in all, they’re a reliable and committed partner.
          </p>
        </div>
      </div>
    </SwiperSlide>
    </div>

  </Swiper>

</div>

</div>


  
  
  </>
}

export default Review