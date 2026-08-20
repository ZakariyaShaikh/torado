import { useMemo, useState } from "react"
import { ProductCard } from "../ProductCard"
import { useAdmin } from "../../context/AdminContext";

export const DiscoverHouseListing = () => {
    const {allProducts , loading} = useAdmin();
    const [selectedCategory, setSelectedCategory] = useState("") 
    const btns = ["Commercial" , "Residential" , "Apartment"]
    const filteredProducts = useMemo(() => {
      if (!selectedCategory) return allProducts;
      return allProducts.filter((product) => {
        return product.category.toLowerCase() === selectedCategory.toLowerCase();
      });
    }, [allProducts, selectedCategory]);

  return (
    <div className="mt-14 lg:mt-20 px-4 sm:px-6 lg:px-10 xl:px-20 flex flex-col gap-5">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-bold">Discover House Listings</span>
            <div className="flex flex-wrap gap-3">
                {btns.map((btn , index) => (
                    <button className="px-5 py-2 shadow-lg rounded-lg font-bold cursor-pointer transition-colors duration-500 hover:bg-green-400" key={index} onClick={() => setSelectedCategory(btn)}>{btn}</button>
                ))}
            </div>
        </div>
        {loading ? <div className="w-full flex items-center justify-center"> <span>Loading...</span></div> : <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-5">
            {filteredProducts.map((products) => (
                <ProductCard key={products._id} product={products} />
            ))}
        </div>}
        <div className="flex items-center justify-center">
            <span className="px-5 py-2 text-white bg-orange-600 rounded-lg">View All Listings</span>
        </div>
    </div>
  )
}
