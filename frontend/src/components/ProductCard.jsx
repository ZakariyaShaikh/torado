import { IoLocationSharp } from "react-icons/io5";
import { FaBed, FaStar } from "react-icons/fa6";
import { LuBath } from "react-icons/lu";
import { RxRulerSquare } from "react-icons/rx";
import { MdEdit } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

export const ProductCard = ({product}) => {
  const location = useLocation()
  const currantPath = location.pathname;
  

  return (
    <>
          <div className="flex flex-col gap-5 bg-white shadow-lg rounded-2xl overflow-hidden w-full">
            {/* Image Area */}
            <div className="img-area w-full h-[200px] overflow-hidden relative group">
              <img
                src={product?.property_img?.url}
                alt="Property-Image"
                className="object-cover object-center w-full h-full"
              />
              <span className={`absolute bottom-5 left-5 capitalize w-20 h-7 rounded-md flex items-center justify-center ${product?.status === "sale" ? "bg-green-400 transition-all duration-500 hover:bg-orange-400" : "bg-orange-400 transition-all duration-500 hover:bg-green-400"}`}>For {product?.status}</span>
              {currantPath.includes("admin") && <Link to={`/products/${product?._id}`} className={`absolute top-3 left-5 w-20 h-7 flex items-center justify-center gap-2 bg-yellow-300 rounded-md transition-all duration-500 opacity-0 -translate-x-10 group-hover:translate-x-0 group-hover:opacity-100`}>
                <span><MdEdit/></span>
                <span>Edit</span> </Link>} 
            </div>
            {/* Image Area End Here */}

            {/* Details Area */}
            <div className="flex flex-col gap-4 p-5 w-full border-b border-gray-300">
              {/* Product Name Area */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-xl font-semibold break-words">{product?.name}</span>
                <span className="text-orange-400 text-xl font-bold shrink-0">
                  $ {product?.price}
                </span>
              </div>
              {/* Product Name Area End Here */}

              {/* Product Address */}
              <div className="flex items-center gap-2">
                <span className="text-green-400">
                  <IoLocationSharp />
                </span>
                <span className="text-gray-500">{product?.location}</span>
              </div>
              {/* Product Address End Here */}

              {/* Product Features  */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-5">
                <span className="flex items-center gap-2">
                  <span className="text-green-400">
                    <FaBed />
                  </span>
                  <span className="text-gray-500">{product?.bedrooms} Bed</span>
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-green-400">
                    <LuBath />
                  </span>
                  <span className="text-gray-500">{product?.bath} Bath</span>
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-green-400">
                    <RxRulerSquare />
                  </span>
                  <span className="text-gray-500">{product?.sqft} Sqft</span>
                </span>
              </div>
              {/* Product Features End here */}
            </div>
            {/* Details Area End Here */}

            {/* Agent Details */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-5 py-2">
              <span className="flex items-center gap-4 min-w-0">
                <span className="rounded-full overflow-hidden shrink-0">
                  <img src={product?.agent_img?.url} alt="Agent-Image" />
                </span>
                <span className="break-words">By {product?.by_agent_name}</span>
              </span>
              {/* Rating */}
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FaStar key={index} className="text-yellow-500" />
                ))}
              </div>
            </div>
          </div>
    </>
  );
};
