import { FaUsers } from "react-icons/fa";
import { BsBuildingsFill } from "react-icons/bs";
import { FaDollarSign } from "react-icons/fa6";
import { useAdmin } from "../../context/AdminContext";
import {ProductCard} from "../ProductCard";
import {AgentCard} from "../Admin/Agents/AgentCard"

export const Dashboard = () => {
  const { allProducts, allAgents, loading } = useAdmin();
  return (
    <div className="flex flex-col min-w-0">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-3 px-4 sm:px-5 bg-blue-950">
        {/* Total Agents */}
        <div className="flex gap-5 items-center px-0 sm:px-5">
          <span className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-4xl sm:text-5xl bg-gradient-to-b from-pink-300 via-pink-100 to-white ">
            <FaUsers />
          </span>
          <div className="flex flex-col gap-2 bg-gradient-to-r from-[#C8A45D] via-[#e9b57f] to-green-400 bg-clip-text text-transparent">
            <span>Total Agents</span>
            <span>10</span>
          </div>
        </div>

        {/* Total Properties */}
        <div className="flex gap-5 items-center px-0 sm:px-5">
          <span className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-4xl sm:text-5xl bg-gradient-to-b from-pink-300 via-pink-100 to-white ">
            <BsBuildingsFill />
          </span>
          <div className="flex flex-col gap-2 bg-gradient-to-r from-[#C8A45D] via-[#e9b57f] to-green-400 bg-clip-text text-transparent">
            <span>Total Properties</span>
            <span>10</span>
          </div>
        </div>

        {/* Total Revenue */}
        <div className="flex gap-5 items-center px-0 sm:px-5">
          <span className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-4xl sm:text-5xl bg-gradient-to-b from-pink-300 via-pink-100 to-white ">
            <FaDollarSign />
          </span>
          <div className="flex flex-col gap-2 bg-gradient-to-r from-[#C8A45D] via-[#e9b57f] to-green-400 bg-clip-text text-transparent">
            <span>Total Revenue</span>
            <span>$ 10</span>
          </div>
        </div>
      </div>
      {/* Properties Area */}
      {loading ? (
        <div className="w-full min-h-screen flex items-center justify-center"> <span>Loading...</span></div>
      ) : (
        <div className="flex flex-col gap-5 mt-5 px-4 sm:px-5">
          <div className="w-full">
            <span className="text-3xl font-semibold">Properties</span>
          </div>
          {!allProducts ? <div className="flex w-full px-5 items-center justify-center">
            <span className="opacity-20">No currant properties available</span>
          </div> : <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-5">{allProducts.map((product) => (
    <ProductCard
      key={product._id}
      product={product}
    />
  ))}</div>}
        </div>
      )}
      {/* Properties Area End Here */}

      {/* Agents Area  */}
      {loading ? (
        <div className="w-full min-h-screen flex items-center justify-center"> <span>Loading...</span></div>
      ) : (
        <div className="flex flex-col gap-5 mt-14 lg:mt-25 px-4 sm:px-5 py-10">
          <div className="w-full">
            <span className="text-3xl font-semibold">Agents</span>
          </div>
          {!allAgents ? <div className="flex w-full px-5 items-center justify-center">
            <span className="opacity-20">No currant properties available</span>
          </div> : <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-5">{allAgents.map((agent) => (
            <AgentCard key={agent._id} agent={agent} />
          ))}</div>}
        </div>
      )}
      {/* Agents Area End Here */}
    </div>
  );
};
