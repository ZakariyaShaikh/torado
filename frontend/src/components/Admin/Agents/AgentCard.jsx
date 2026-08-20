import { useAdmin } from "../../../context/AdminContext";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEdit, MdEmail } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { deleteAgent } from "../../../services/AgentServices";
import { toast, Zoom } from "react-toastify";
import { FaShareAlt } from "react-icons/fa";

export const AgentCard = ({ agent }) => {
  const { getAgents } = useAdmin();
  const location = useLocation();
  const currantPath = location.pathname;
  const handleDelete = async (id) => {
    try {
      await toast.promise(
        deleteAgent(id),
        {
          pending: "Wait until agent is deleted.",
          success: "Agent successfully deleted.",
          error: "Failed to delete agent.",
        },
        {
          theme: "dark",
          transition: Zoom,
          position: "top-center",
        },
      );
    } catch (error) {
      toast.error(error.message);
    } finally {
      getAgents();
    }
  };
  return (
    <div className="flex flex-col gap-5 pb-3 rounded-2xl bg-white shadow-lg relative w-full">
        <span className="text-3xl bg-red-500 text-white absolute top-1/2 z-20 right-10 w-15 h-15 flex items-center justify-center rounded-full"><FaShareAlt/></span>
      {/* Image Area */}
      <div className="overflow-hidden w-full h-[250px] rounded-t-2xl relative group">
        <img
          src={agent?.agent_image?.url}
          alt="Agent Profile Image"
          className="object-cover object-center"
        />
        {currantPath.includes("admin") && (
          <div className="absolute top-0 w-full px-5 pt-3 flex items-center justify-between">
            <Link
              to={`/agents/${agent?._id}`}
              className="w-20 h-7 rounded-lg flex items-center justify-center gap-4 bg-yellow-400 text- transition-all duration-500 -translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
            >
              <span>
                <MdEdit />
              </span>
              <span>Edit</span>
            </Link>
            <button
              className=" w-20 h-7 rounded-lg flex items-center justify-center bg-red-400 text- transition-all duration-500 -translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 cursor-pointer"
              onClick={() => handleDelete(agent?._id)}
            >
              <span>
                <MdDelete />
              </span>
            </button>
          </div>
        )}
        
      </div>
      {/* Image Area End Here */}

      {/* Details Area */}
      <div className="flex flex-col gap-3 px-5">
        {/* Name */}
        <div>
          <span className="text-2xl font-bold break-words">{agent?.name}</span>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-5">
          <span className="text-green-400">
            <FaPhoneVolume />
          </span>
          <span className="text-gray-400 break-all">{agent?.phone}</span>
        </div>

        {/* email */}
        <div className="flex items-center gap-5">
          <span className="text-green-400">
            <MdEmail />
          </span>
          <span className="text-gray-400 break-all">{agent?.email}</span>
        </div>

        {/* Profile Button */}
        <Link
          to={""}
          className="text-gray-500 transition-colors duration-500 hover:text-orange-400"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};
