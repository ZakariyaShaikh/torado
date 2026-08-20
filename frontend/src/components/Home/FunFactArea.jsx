import { MdAddHomeWork } from "react-icons/md";
import { GiHouseKeys } from "react-icons/gi";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { FaBuildingCircleCheck } from "react-icons/fa6";

export const FunFactArea = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-20 py-10 bg-gray-200">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
            <div className="flex items-center gap-5">
                <span className="p-8 text-orange-500 text-4xl bg-gradient-to-b from-pink-300 via-pink-100 to-white rounded-full"><MdAddHomeWork/></span>
                <div className="flex flex-col gap-2">
                    <span className="text-4xl font-extrabold">40+</span>
                    <span className="opacity-50">Years of experience</span>
                </div>
            </div>
            <div className="flex items-center gap-5">
                <span className="p-8 text-orange-500 text-4xl bg-gradient-to-b from-pink-300 via-pink-100 to-white rounded-full"><MdOutlineMapsHomeWork/></span>
                <div className="flex flex-col gap-2">
                    <span className="text-4xl font-extrabold">120k+</span>
                    <span className="opacity-50">Apartments Rent</span>
                </div>
            </div>
            <div className="flex items-center gap-5">
                <span className="p-8 text-orange-500 text-4xl bg-gradient-to-b from-pink-300 via-pink-100 to-white rounded-full"><FaBuildingCircleCheck/></span>
                <div className="flex flex-col gap-2">
                    <span className="text-4xl font-extrabold">540+</span>
                    <span className="opacity-50">Total Constructions</span>
                </div>
            </div>
            <div className="flex items-center gap-5">
                <span className="p-8 text-orange-500 text-4xl bg-gradient-to-b from-pink-300 via-pink-100 to-white rounded-full"><GiHouseKeys/></span>
                <div className="flex flex-col gap-2">
                    <span className="text-4xl font-extrabold">310+</span>
                    <span className="opacity-50">Apart Rooms</span>
                </div>
            </div>
        </div>
    </div>
  )
}
