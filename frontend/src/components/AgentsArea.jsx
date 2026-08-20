import {AgentCard} from "../components/Admin/Agents/AgentCard"
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useAdmin } from "../context/AdminContext";

export const AgentsArea = () => {
  const { allAgents, loading } = useAdmin();
  return (
    <div className="px-4 sm:px-6 lg:px-10 xl:px-20 flex flex-col gap-10 lg:gap-15 w-full pb-10">
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <span className="text-2xl text-gray-400">Loading...</span>
        </div>
      ) : (
       <>
         {/*Header Area  */}
        <div className="flex flex-col items-center gap-3 pt-10">
            <h4 className="text-lg text-orange-600"> Our Agents</h4>
            <h1 className="text-3xl sm:text-4xl font-bold text-center">
                Meet Our Awesome Agents
            </h1>
        </div>


        {/* Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {allAgents.map((agent , index) => 
          <AgentCard key={index} agent={agent} />)}
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
