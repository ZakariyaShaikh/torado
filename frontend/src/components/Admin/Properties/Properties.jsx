import { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { AddPropertiesForm } from "./AddPropertiesForm";
import { useAdmin } from "../../../context/AdminContext";
import { ProductCard } from "../../ProductCard";

export const Properties = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { allProducts , loading } = useAdmin();
  return (
    <div className="flex flex-col overflow-hidden">
      <div className="bg-blue-950 flex items-center justify-between gap-4 text-white px-4 sm:px-5 py-4">
        <span className="text-2xl sm:text-3xl ">Properties</span>
        <button
          className="flex items-center gap-2 rounded-md bg-green-500 px-3 sm:px-5 py-2 cursor-pointer"
          onClick={() => setIsClicked((prev) => !prev)}
        >
          <span>
            <IoAddCircleOutline />
          </span>
          <span className="hidden sm:inline">Add Properties</span>
        </button>
      </div>
      <div>
        {isClicked ? (
          <AddPropertiesForm />
        ) : loading ? <div className="w-full min-h-screen fle items-center justify-center">Loading...</div> : !allProducts  ? (
          <div className="w-full min-h-full flex items-center justify-center">
            <span>No data available</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-4 sm:px-5 py-4 gap-x-5 gap-y-5">{allProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}</div>
        )}
      </div>
    </div>
  );
};
