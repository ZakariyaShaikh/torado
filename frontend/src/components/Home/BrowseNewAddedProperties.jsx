import { FaArrowLeft, FaArrowRight } from "react-icons/fa6"
import { Autoplay, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { useAdmin } from "../../context/AdminContext"
import "swiper/css";
import "swiper/css/navigation";
import { ProductCard } from "../ProductCard"


export const BrowseNewAddedProperties = () => {
    const {allProducts} = useAdmin()
  return (
    <div className="px-4 sm:px-6 lg:px-10 xl:px-20 flex flex-col gap-10 lg:gap-15 py-14 lg:py-20">
      <div className="flex items-center justify-between gap-5">
        <h1 className="text-3xl sm:text-4xl font-bold">Browse New Added Properties</h1>
        <div className="flex gap-5">
          <span className="prev-el w-10 h-10 rounded-full flex items-center justify-center shadow-lg bg-white cursor-pointer transition-all duration-500 hover:bg-green-500">
            <FaArrowLeft />
          </span>
          <span className="next-el w-10 h-10 rounded-full flex items-center justify-center shadow-lg bg-white cursor-pointer transition-all duration-500 hover:bg-green-500">
            <FaArrowRight />
          </span>
        </div>
      </div>
      <div>
        {" "}
        <Swiper
        modules={[Autoplay, Navigation]}
        navigation={{
              prevEl: ".prev-el",
              nextEl: ".next-el",
            }}
        autoplay={{
            delay : 2000,
            disableOnInteraction : false
        }}
        speed={1000}
        loop={true}
          spaceBetween={50}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 32 },
            1024: { slidesPerView: 3, spaceBetween: 50 },
          }}
        >
            {allProducts.map((product, index) => (
          <SwiperSlide className="flex pb-5">
            <ProductCard key={index} product={product}/>
          </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  )
}
