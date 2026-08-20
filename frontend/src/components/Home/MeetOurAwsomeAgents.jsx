import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay , Pagination } from "swiper/modules";
import { AgentCard } from "../Admin/Agents/AgentCard";
import { useAdmin } from "../../context/AdminContext";
import { CompaniesStripe } from "../CompaniesStripe";

export const MeetOurAwesomeAgents = () => {
    const {allAgents} = useAdmin()
  return (
    <div className="px-4 sm:px-6 lg:px-10 xl:px-20 flex flex-col py-10 gap-10 pb-14 lg:pb-20">
      {/* Header */}
      <div className="header w-full flex items-center justify-center">
        <span className="text-3xl sm:text-4xl font-bold text-center">Meet Our Awesome Agents</span>
      </div>
      <div>
        <Swiper
          modules={[Autoplay, Pagination]}

          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination ={{
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
          {allAgents.map((agent , index) => (
            <SwiperSlide className="flex pb-10">
            <AgentCard key={index} agent={agent}/>
          </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mt-12 lg:mt-30">
        <CompaniesStripe/>
      </div>
    </div>
  );
};
