import { FaPlay } from "react-icons/fa";
import { LiaIdCardSolid } from "react-icons/lia";
import { MdPersonSearch } from "react-icons/md";
import { FaSchool } from "react-icons/fa6";
import { BsBuildingFillGear } from "react-icons/bs";

export const SeeHowToradoCanHelpYou = () => {
  const tags = [
    "Search & Select",
    "Reserve The Property",
    "Confirm Reservation",
    "Experience Agent",
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,440px)_1fr] gap-10 px-4 sm:px-6 lg:px-10 xl:px-20 mt-14 lg:mt-20 bg-gray-200 py-14 lg:py-20">
      {/* Left Side */}
      <div className="flex flex-col gap-5 w-full px-0 lg:px-5 pb-5">
        <div className="header flex flex-col gap-2">
          <span className="text-3xl sm:text-4xl font-bold">
            See How Torado Can Help You
          </span>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            alias commodi. Cumque aperiam ut nemo temporibus iste similique
            ullam recusandae.
          </p>
        </div>
        <div className="img-area relative rounded-2xl z-10">
          <img
            src="https://torado.envytheme.com/real-estate-2/default/assets/images/about/about-image-1.jpg"
            className="object-cover object-center rounded-2xl"
          />
          <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-full">
            <div className="flex w-20 h-20 rounded-full items-center justify-center text-white bg-green-700">
              <span>
                <FaPlay />
              </span>
            </div>
          </div>
          <img
            src="https://torado.envytheme.com/real-estate-2/default/assets/images/shape/step-shape-1.png"
            className="absolute -top-3 left-2 -z-10 animate-[spin_15s_linear_infinite]"
          />
        </div>
      </div>
      {/* Left Side End */}

      {/* Right Side */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
        {tags.map((tag, index) => (
          <div
            className="flex flex-col gap-5 px-5 py-5 bg-white shadow-lg rounded-md group"
            key={index}
          >
            <div className="flex items-center justify-between">
              {index === 0 ? (
                <span className="w-20 h-20 rounded-full text-4xl bg-gradient-to-b from-pink-300 via-pink-100 to-white flex items-center justify-center">
                  <LiaIdCardSolid />
                </span>
              ) : index === 1 ? (
                <span className="w-20 h-20 rounded-full text-4xl bg-gradient-to-b from-pink-300 via-pink-100 to-white flex items-center justify-center">
                  <MdPersonSearch />
                </span>
              ) : index === 2 ? (
                <span className="w-20 h-20 rounded-full text-4xl bg-gradient-to-b from-pink-300 via-pink-100 to-white flex items-center justify-center">
                  <FaSchool />
                </span>
              ) : (
                <span className="w-20 h-20 rounded-full text-4xl bg-gradient-to-b from-pink-300 via-pink-100 to-white flex items-center justify-center">
                  <BsBuildingFillGear />
                </span>
              )}
              <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-5xl sm:text-7xl text-transparent transition-all duration-1000 group-hover:rotate-y-360">
                0{index + 1}
              </span>
            </div>
            <div>
              <span className="text-2xl lg:text-3xl font-bold">{tag}</span>
            </div>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              nulla iure, ipsam libero modi dicta rem quas illum soluta vel.
            </p>
          </div>
        ))}
      </div>
      {/* Right Side End */}
    </div>
  );
};
