import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa6";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

export const WhatOurUsersSayAboutUs = () => {
  const reviewer = [
    {
      name: "Rosalina Williams",
      img: "https://torado.envytheme.com/real-estate-2/default/assets/images/user/user-image-10.jpg",
    },
    {
      name: "Anderson Tremblay",
      img: "https://torado.envytheme.com/real-estate-2/default/assets/images/user/user-image-11.jpg",
    },
  ];
  return (
    <div className="flex flex-col gap-8 px-4 sm:px-6 lg:px-10 xl:px-20 bg-blue-950 text-white py-12 lg:py-15">
      <div className="header text-3xl sm:text-5xl text-center flex items-center justify-center">
        <span>What Our Users Say About Us</span>
      </div>
      <div className="details grid grid-cols-1 lg:grid-cols-[minmax(0,500px)_minmax(0,1fr)] gap-8 lg:gap-10">
        <div className="img overflow-hidden rounded-2xl  bg-red-900">
          <img
            src="https://torado.envytheme.com/real-estate-2/default/assets/images/about/about-image-2.jpg"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="min-w-0 relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            speed={1000}
            loop={true}
            spaceBetween={50}
            slidesPerView={1}
          >
            {reviewer.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col gap-5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-5xl sm:text-7xl text-orange-400">
                      66
                    </span>
                    <span className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <FaStar key={index} className="text-yellow-300" />
                      ))}
                    </span>
                  </div>
                  <p className="text-left sm:text-justify text-base sm:text-xl">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque ullam, sed nemo minima id architecto dolorum
                    dolor illo blanditiis explicabo, culpa pariatur obcaecati
                    eum. Voluptate vero eveniet dolore voluptatibus mollitia et
                    asperiores unde aperiam dolorem! Deserunt dicta quidem error
                    iure."
                  </p>
                  <div className="flex items-center gap-5 relative">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-15 h-15 object-cover rounded-full border-2 border-orange-400"
                    />
                    <span className="flex flex-col gap-1">
                      <span className="text-xl sm:text-2xl font-bold">{item.name}</span>
                      <span>Happy Customer</span>
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="flex items-center gap-5 static sm:absolute sm:right-0 sm:bottom-5 z-20 mt-6">
              <button className="custom-prev p-3 rounded-full bg-white text-black cursor-pointer">
                <FaArrowLeft />
              </button>

              <button className="custom-next p-3 rounded-full bg-white text-black cursor-pointer">
                <FaArrowRight />
              </button>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
