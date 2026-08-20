import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { useRef } from "react";

export const OurHottestCities = () => {
  const cities = [
    {
      img: "https://torado.envytheme.com/real-estate-2/default/assets/images/cities/cities-image-5.jpg",
      name: "France",
      properties : "123 Properties"
    },
    {
      img: "https://torado.envytheme.com/real-estate-2/default/assets/images/cities/cities-image-4.jpg",
      name: "Huston",
      properties : "345 Properties"
    },
    {
      img: "https://torado.envytheme.com/real-estate-2/default/assets/images/cities/cities-image-3.jpg",
      name: "Chicago",
      properties : "456 Properties"
    },
    {
      img: "https://torado.envytheme.com/real-estate-2/default/assets/images/cities/cities-image-2.jpg",
      name: "Florida",
      properties : "567 Properties"
    },
    {
      img: "https://torado.envytheme.com/real-estate-2/default/assets/images/cities/cities-image-1.jpg",
      name: "New York",
      properties : "678 Properties"
    },
    {
      img: "https://torado.envytheme.com/real-estate-2/default/assets/images/cities/cities-image-6.jpg",
      name: "Austin",
      properties : "412 Properties"
    },
  ];

  const swipRef = useRef(null);
  return (
    <div className="px-4 sm:px-6 lg:px-10 xl:px-20 flex flex-col gap-10 lg:gap-15 py-14 lg:py-20 bg-gray-200">
      <div className="flex items-center justify-between gap-5">
        <h1 className="text-3xl sm:text-4xl font-bold">Our Hottest Nearby Cities</h1>
        <div className="flex gap-5">
          <span className="w-10 h-10 rounded-full flex items-center justify-center bg-white cursor-pointer"  onClick={() => swipRef.current?.slidePrev()}>
            <FaArrowLeft />
          </span>
          <span className="w-10 h-10 rounded-full flex items-center justify-center bg-white cursor-pointer" onClick={() => swipRef.current?.slideNext()}>
            <FaArrowRight />
          </span>
        </div>
      </div>
      <div>
        {" "}
        <Swiper
        modules={[Autoplay]}
        autoplay={{
            delay : 2000,
            disableOnInteraction : false
        }}
        speed={1000}
        loop={true}
          spaceBetween={50}
          slidesPerView={5}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 20 },
            480: { slidesPerView: 2, spaceBetween: 24 },
            768: { slidesPerView: 3, spaceBetween: 32 },
            1024: { slidesPerView: 5, spaceBetween: 50 },
          }}
          onSwiper={(swiper) => (swipRef.current = swiper)}
        >
            {cities.map((city, index) => (
          <SwiperSlide className="flex justify-center">
            <div className="flex flex-col gap-3 items-center" key={index}>
                <img src={city.img} alt={city.name} className="object-cover object-center rounded-full"/>
                <h4 className="font-semibold">{city.name}</h4>
                <h5 className="text-gray-400 text-sm">{city.properties}</h5>
              </div>
          </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};
