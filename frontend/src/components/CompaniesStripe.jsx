import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export const CompaniesStripe = () => {
  const companies = [
    "https://torado.envytheme.com/real-estate-2/default/assets/images/logo/logo-3.png",
    "https://torado.envytheme.com/real-estate-2/default/assets/images/logo/logo-4.png",
    "https://torado.envytheme.com/real-estate-2/default/assets/images/logo/logo-5.png",
    "https://torado.envytheme.com/real-estate-2/default/assets/images/logo/logo-6.png",
    "https://torado.envytheme.com/real-estate-2/default/assets/images/logo/logo-1.png",
    "https://torado.envytheme.com/real-estate-2/default/assets/images/logo/logo-2.png",
  ];
  const logos = [...companies , ...companies]
  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={6}
        spaceBetween={50}
        loop
        speed={1000}
        allowTouchMove={false}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <img src={logo} alt="Logo" />
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
