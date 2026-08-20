import { CiLocationOn } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";


export const HomeHeroSection = () => {

  return (
    <div className="bg-blue-950 flex flex-col gap-8 lg:gap-16 px-4 sm:px-6 lg:px-10 xl:px-20 relative overflow-hidden">
      <div className="flex flex-col lg:flex-row mt-6 lg:mt-10 relative w-full gap-8 xl:gap-[15rem] py-5 lg:before:content-[''] lg:before:w-30 lg:before:h-40 lg:before:bg-[url(https://torado.envytheme.com/real-estate-2/default/assets/images/shape/hero-shape-5.png)] lg:before:absolute lg:before:top-20 lg:before:left-[26rem] lg:before:z-10 lg:before:bg-no-repeat lg:before:bg-contain">
        <div className="img overflow-hidden rounded-lg lg:max-w-md">
          <img
            src="https://torado.envytheme.com/real-estate-2/default/assets/images/banner/banner-image-4.jpg"
            alt="Hero Image.1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5">
            <span className="text-4xl sm:text-5xl xl:text-7xl text-white font-bold">We Help To</span>
            <div className="overflow-hidden w-36 sm:w-48 rounded-full">
              <img
                src="https://torado.envytheme.com/real-estate-2/default/assets/images/banner/banner-image-3.png"
                alt="Hero Image.2"
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3 text-white">
            <span className="text-4xl sm:text-5xl xl:text-7xl font-bold">Build Your Dream</span>
            <p >Proin gravida nibh vel velit auctor aliquet aenean sollicitudin lorem quis bibendum auctor nisi elit consequat ipsum nec sagittis sem nibh id elit dolore.</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row gap-8 xl:gap-x-20 pb-10 lg:pb-15 relative">
        <img src="https://torado.envytheme.com/real-estate-2/default/assets/images/shape/hero-shape-2.png" alt="Hero Image.3"  className="absolute top-0 object-cover opacity-40 lg:opacity-100"/>
        <div className="flex gap-x-4 sm:gap-x-10 text-white relative z-10">
          <div className="flex">
            <img src="https://torado.envytheme.com/real-estate-2/default/assets/images/user/user-image-3.jpg" alt="User-3" className="rounded-full border-2 border-gray-400 relative w-14 h-14"/>
            <img src="https://torado.envytheme.com/real-estate-2/default/assets/images/user/user-image-2.jpg" alt="User-2" className="rounded-full border-2 border-gray-400 relative z-10 w-14 h-14 -left-5"/>
            <img src="https://torado.envytheme.com/real-estate-2/default/assets/images/user/user-image-1.jpg" alt="User-1" 
            className="z-30 relative -left-8 rounded-full border-2 border-gray-400 w-14 h-14"/>
          </div>
          <span className="text-3xl font-thin ">|</span>
          <div className="flex flex-col gap-1">
            <span className="text-lg font-bold">5k+ People</span>
            <p className="text-sm">Successfully Getting House</p>
          </div>
        </div>
        <div className="imgs flex flex-col sm:flex-row gap-5 xl:ml-10 pb-5">
          <div className="img-1 overflow-hidden w-full sm:w-1/2 rounded-lg">
            <img src="https://torado.envytheme.com/real-estate-2/default/assets/images/banner/banner-image-1.jpg" alt="Hero Image-3" className="w-full h-full object-cover rounded-lg"/>
          </div>
          <div className="img-2 overflow-hidden w-full sm:w-[300px] rounded-lg bg-white ">
            <div className="w-full h-50 overflow-hidden">
              <img src="https://torado.envytheme.com/real-estate-2/default/assets/images/banner/banner-image-1.jpg" alt="Hero Image-3" className="object-contain"/>
            </div>
            <div className="flex flex-col gap-2 px-7 pb-2">
              <div className="flex items-center gap-2 mt-5 ">
                <span className="text-green-400 text-xl"><CiLocationOn/></span>
                <span className="text-gray-400">64 1st Avenue, High Street</span>
              </div>
              <p className="text-2xl font-bold">Jakarta Garden City House Modern Building</p>
              <p className="text-gray-400">Nunc laor lectue dapibus maximus sapien and tincidunted dolore magna.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col static xl:absolute xl:bottom-50 xl:left-0 w-full xl:w-1/2">
          <div className="flex item-center gap-5 text-white font-semibold ml-5">
            <span className="border border-gray-400 p-2">Buy</span>
            <span className="border border-gray-400 p-2">Sell</span>
            <span className="border border-gray-400 p-2">Rent</span>
          </div>
          <div className="p-3 sm:p-5 bg-white/50 backdrop-blur-xs rounded-lg">
            <div className="flex flex-col sm:grid sm:grid-cols-2 xl:flex xl:flex-row bg-white rounded-lg gap-3 xl:justify-between p-4">
              <select className="px-3 sm:px-5 py-2 outline-none text-gray-400">
                <option value="">Location</option>
                <option value="">Paso Robles</option>
                <option value="">San Simeon</option>
                <option value="">Santa Maria</option>
              </select>
              <select className="px-3 sm:px-5 py-2 outline-none text-gray-400">
                <option value="">Property</option>
                <option value="">Modern Apartment</option>
                <option value="">New Luxury Villa</option>
                <option value="">New Properties Sale</option>
              </select>
              <select className="px-3 sm:px-5 py-2 outline-none text-gray-400">
                <option value="">Price</option>
                <option value="">$3500</option>
                <option value="">$2300</option>
                <option value="">$5300</option>
              </select>
              <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg cursor-pointer bg-orange-500 text-white font-semibold transition-colors duration-300 hover:bg-green-400">
                <span><IoSearch/></span>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
