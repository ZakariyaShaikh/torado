import { SiEsphome } from "react-icons/si";
import {  TbHomeDollar } from "react-icons/tb";
import { AiFillPropertySafety } from "react-icons/ai";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { useRef } from "react";

export const LivingWhereYouLoveMeansLovingYourLife = () => {

    const swipRef= useRef()
  return (
    <div className="px-4 sm:px-6 lg:px-10 xl:px-20 bg-blue-950 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-x-5 text-white py-14 lg:py-20">
      {/* Left div */}
      <div className="flex flex-col gap-10">
        <div className="header flex flex-col gap-2">
          <h1 className="text-3xl sm:text-4xl font-bold ">
            Living Where You Love Means Loving Your Life
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            expedita quas harum doloremque facere amet cupiditate illo quam
            magni. Magnam nesciunt velit totam aliquam nihil vitae eligendi
            asperiores culpa alias?
          </p>
        </div>
        <div className="flex flex-col gap-10 relative z-10">
          <div className="flex gap-5">
            <span className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center text-3xl justify-center bg-gradient-to-b from-red-800 to-black/30">
              <SiEsphome />
            </span>
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold">Lowest Commission</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Impedit, odio.
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <span className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center text-3xl justify-center bg-gradient-to-b from-red-800 to-black/30">
              <TbHomeDollar />
            </span>
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold">Best Interest Rates</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Impedit, odio.
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <span className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center text-3xl justify-center bg-gradient-to-b from-red-800 to-black/30">
              <AiFillPropertySafety />
            </span>
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold">Property Insurance</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Impedit, odio.
              </p>
            </div>
          </div>
          <img src="https://torado.envytheme.com/real-estate-2/default/assets/images/shape/living-shape-1.png" className="absolute animate-[spin_10s_linear_infinite] top-1/4 -z-10" />
        </div>
      </div>

      {/* Right div */}
      <div className="relative">
        <Swiper
        loop ={true}
          spaceBetween={50}
          slidesPerView={1}
          onSwiper={(swiper) => (swipRef.current = swiper)}>
          <SwiperSlide>
            <img src="https://torado.envytheme.com/real-estate-2/default/assets/images/living/living-image-1.jpg" className="rounded-2xl"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://torado.envytheme.com/real-estate-2/default/assets/images/living/living-image-1.jpg" className="rounded-2xl" />
          </SwiperSlide>
        </Swiper>
        <div className="hidden sm:flex items-center gap-3 absolute bottom-6 lg:bottom-10 z-30 text-black">
            <span className="w-10 h-10 rounded-full flex items-center justify-center bg-white cursor-pointer" onClick={() => swipRef.current?.slidePrev()}><FaArrowLeft/></span>
            <span className="overflow-hidden rounded-2xl border-5 border-white w-24 h-24 xl:w-40 xl:h-40 "><img src="https://torado.envytheme.com/real-estate-2/default/assets/images/living/living-image-1.jpg"/></span>
            <span className="overflow-hidden rounded-2xl border-5 border-white w-24 h-24 xl:w-40 xl:h-40 "><img src="https://torado.envytheme.com/real-estate-2/default/assets/images/living/living-image-2.jpg" className="w-full h-full object-cover object-center"/></span>
            <span className="overflow-hidden rounded-2xl border-5 border-white w-24 h-24 xl:w-40 xl:h-40 "><img src="https://torado.envytheme.com/real-estate-2/default/assets/images/living/living-image-4.jpg" className="w-full h-full object-cover object-center"/></span>
            <span className="w-10 h-10 rounded-full flex items-center justify-center bg-white cursor-pointer" onClick={() => swipRef.current?.slideNext()}><FaArrowRight/></span>
        </div>
        <img src="https://torado.envytheme.com/real-estate-2/default/assets/images/shape/living-shape-2.png" className="absolute z-10 top-1/2 right-0 animate-[bounce_5s_linear_infinite]" />
      </div>
    </div>
  );
};
