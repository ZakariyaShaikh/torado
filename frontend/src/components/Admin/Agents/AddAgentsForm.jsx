import { useState } from "react";
import {  toast, Zoom } from "react-toastify";
import { createAgent } from "../../../services/AgentServices";
import { useAdmin } from "../../../context/AdminContext";

export const AddAgentsForm = () => {
  const [loading , setLoading] = useState(false);
  const [error , setError] = useState("")
  const [formValues, setFormValues] = useState({
    name: "",
    listing_count: "",
    location: "",
    phone: "",
    description: "",
    email : "",
    agent_image: null,
  });
  const {getAgents} = useAdmin()

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormValues((prev) => {
      return {
        ...prev,
        [name]: type === "file" ? files[0] : value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("")
    setLoading(true);
    const formData = new FormData();

    Object.entries(formValues).forEach(([key, value]) => {
      formData.append(key, value);
    });
    
    try {
      await toast.promise(createAgent(formData),{
        pending : "Listing Agent...",
        success : "Agent successfully added.",
        error : "Failed to list agent."
      },
    {
      theme : "dark",
      transition : Zoom,
      hideProgressBar : false,
      position : "top-center"
    })
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong.")
    } finally {
      setLoading(false);
      getAgents()
    }
  };
  return (
    <>
    {loading ? <div className="flex items-center justify-center w-full min-h-svh">
      <span className="text-xl font-semibold">Listing...</span>
    </div> : <div className="w-full h-full flex items-center justify-center pb-5">
      <form
        className="w-full flex flex-col gap-5 px-4 sm:px-5 mt-5"
        onSubmit={handleSubmit}
      >
        <div className="header flex items-center justify-center w-full text-2xl sm:text-4xl font-bold text-center">
          <span>Please Fill the Agents Details</span>
        </div>
        {error && <span className="text-rose-500 flex items-center justify-center">{error}</span>}
        {/* Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Agent Name */}
          <label htmlFor="name" className="flex flex-col gap-2">
            <span>Name :</span>
            <input
              type="text"
              name="name"
              className="outline-none border border-gray-400 px-3 py-1 rounded-md"
              placeholder="e.g. John Doe"
              value={formValues.name}
              onChange={handleChange}
            />
          </label>

          {/* Listing Count */}
          <label htmlFor="listing_count" className="flex flex-col gap-2">
            <span>Listing Count :</span>
            <input
              type="number"
              name="listing_count"
              min={1}
              className="outline-none border border-gray-400 px-3 py-1 rounded-md"
              placeholder="e.g. 10"
              value={formValues.listing_count}
              onChange={handleChange}
            />
          </label>

          {/* Location */}
          <label htmlFor="location" className="flex flex-col gap-2">
            <span>Location :</span>
            <input
              type="text"
              name="location"
              className="outline-none border border-gray-400 px-3 py-1 rounded-md"
              placeholder="e.g. 824 Gateway Avenue, California"
              value={formValues.location}
              onChange={handleChange}
            />
          </label>

          {/* Phone */}
          <label htmlFor="phone" className="flex flex-col gap-2">
            <span>Phone No. :</span>
            <input
              type="tel"
              name="phone"
              className="outline-none border border-gray-400 px-3 py-1 rounded-md"
              placeholder="Enter agent phone number"
              value={formValues.phone}
              onChange={handleChange}
            />
          </label>

          {/* Agent Image */}
          <label htmlFor="agent_image" className="flex flex-col gap-2">
            <span>Agent Image :</span>
            <input
              type="file"
              name="agent_image"
              className="outline-none border border-gray-400 px-3 py-1 rounded-md"
              accept=".jpg,.jpeg,.png"
              onChange={handleChange}
            />
          </label>

          {/* Email */}
          <label htmlFor="email" className="flex flex-col gap-2">
            <span>Email :</span>
            <input
              type="email"
              name="email"
              className="outline-none border border-gray-400 px-3 py-1 rounded-md"
              placeholder="Enter agent email"
              value={formValues.email}
              onChange={handleChange}
            />
          </label>

          {/* Description */}
          <label htmlFor="description" className="flex flex-col gap-2">
            <span>Description :</span>
            <textarea
              name="description"
              rows={5}
              placeholder="Enter description"
              minLength={20}
              maxLength={500}
              className="w-full border border-gray-400 outline-none rounded-lg p-3 resize-none"
              value={formValues.description}
              onChange={handleChange}
            />
          </label>
        </div>
        {/* Details End here */}
        <div className="w-full flex items-center justify-center">
          <button className="text-white bg-green-400 px-5 py-2 rounded-sm transition-colors duration-300 hover:bg-orange-500 cursor-pointer">
            Submit
          </button>
        </div>
      </form>
    </div>}
    </>
  );
};
