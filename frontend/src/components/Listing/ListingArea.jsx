import { useAdmin } from "../../context/AdminContext";
import {ProductCard} from "../ProductCard"
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export const ListingArea = () => {
  const { allProducts, loading } = useAdmin();
  return (
    <div className="px-4 sm:px-6 lg:px-10 xl:px-20 flex flex-col gap-10 lg:gap-15 w-full pb-10">
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <span className="text-2xl text-gray-400">Loading...</span>
        </div>
      ) : (
       <>
         {/*Sorting Area  */}
        <div className="flex flex-col sm:flex-row w-full sm:items-center justify-between gap-4 pt-10">
          
          <span>{allProducts?.length} Products Found</span>
          <div className="sm:px-10 text-gray-400">
            {" "}
            <select name="sorting" className="w-full px-5 outline-none">
              <option value="Search by Most Popular">
                Search By Most Popular
              </option>
              <option value="Sky Villa Apartment">
                Sky Villa Apartment
              </option>
              <option value="Luxury & Modern Villa">
                Luxury & Modern Villa
              </option>
              <option value="Lake View Apartment">
                Lake View Apartment
              </option>
            </select>
          </div>
        </div>


        {/* Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {allProducts.map((product , index) => 
          <ProductCard key={index} product={product} />)}
        </div>

        <div className="flex items-center justify-center w-full py-5">
            <div className="flex items-center gap-2 sm:gap-5">
              <span className="text-2xl"><MdKeyboardArrowLeft/></span>
          {Array.from({length : 5},(_ , index) => (
            <span className={`px-4 sm:px-5 py-2 sm:py-3 rounded-full cursor-pointer ${index === 0 ? "bg-orange-600" : "bg-white shadow-lg"}`}>{index + 1}</span>
          ))}
          <span className="text-2xl"><MdOutlineKeyboardArrowRight/></span>
            </div>
        </div>
       </>
        
      )}
    </div>
  );
};
