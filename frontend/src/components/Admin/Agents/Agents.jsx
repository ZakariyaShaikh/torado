import { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { AddAgentsForm } from "./AddAgentsForm";
import { useAdmin } from "../../../context/AdminContext";
import { AgentCard } from "./AgentCard";



export const Agents = () => {
  const [isClicked , setIsClicked]= useState(false)
  const {loading , allAgents} = useAdmin()
  return (
    <div className="flex flex-col">
        <div className="bg-blue-950 flex items-center justify-between gap-4 text-white px-4 sm:px-5 py-4" >
            <span className="text-2xl sm:text-3xl ">Agents</span>
            <button className="flex items-center gap-2 rounded-md bg-green-500 px-3 sm:px-5 py-2 cursor-pointer" onClick={() => setIsClicked((prev) => !prev)}>
                <span><IoAddCircleOutline/></span>
                <span className="hidden sm:inline">Add Agent</span>
            </button>
        </div>
      {isClicked ? <AddAgentsForm/> 
      : loading ? <div></div> : allAgents?.length === 0 ? (<div className="w-full min-h-full flex items-center justify-center">
        <span>No data available</span>
       </div>) : <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-5 px-4 sm:px-5 py-4">{allAgents.map((agent) => (
        <AgentCard key={agent._id} agent={agent}/>
       ))} </div> 
       }
    </div>
  )
}
