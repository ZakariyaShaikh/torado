import { useState } from "react";
import { createProduct } from "../../../services/AdminServices";
import { toast } from "react-toastify";

export const AddPropertiesForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [formValues, setFormValues] = useState({
    name: "",
    price: "",
    location: "",
    sqft: "",
    status: "",
    description: "",
    category: "",
    bedrooms: "",
    bath: "",
    garages: "",
    floor_plan: null,
    property_img: null,
    by_agent_name: "",
    agent_img: null,
  });

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

    setError("");
    setLoading(true);

    const formData = new FormData();

    Object.entries(formValues).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      await toast.promise(
        createProduct(formData),
        {
          pending: "Listing property...",
          success: "Property listed successfully!",
          error: "Failed to list property.",
        },
        {
          position: "top-center",
          theme: "dark",
        },
      );
    } catch (error) {
      setError(error.response?.data?.message || "Error creating product");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-full h-full flex items-center justify-center pb-5">
      {loading ? (
        <span className="flex items-center justify-center w-full min-h-screen">
          Listing...
        </span>
      ) : (
        <form
          action=""
          className="w-full flex flex-col gap-5 px-4 sm:px-5 mt-5"
          onSubmit={handleSubmit}
        >
          <div className="header flex items-center justify-center w-full text-2xl sm:text-4xl font-bold text-center">
            <span>Please Fill the Property Details</span>
          </div>
          {error && (
            <span className="flex items-center justify-center text-red-500">
              {error}
            </span>
          )}
          {/* Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Property Name */}
            <label htmlFor="name" className="flex flex-col gap-2">
              <span>Name :</span>
              <input
                type="text"
                name="name"
                className="outline-none border border-gray-400 px-3 py-1 rounded-md"
                placeholder="e.g. Luxury Villa"
                onChange={handleChange}
                value={formValues.name}
              />
            </label>

            {/* Price */}
            <label htmlFor="price" className="flex flex-col gap-2">
              <span>Price :</span>
              <input
                type="number"
                name="price"
                className="outline-none border border-gray-400 px-3 py-1 rounded-md"
                placeholder="e.g. $1000"
                min={10000}
                max={60000}
                onChange={handleChange}
                value={formValues.price}
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
                onChange={handleChange}
                value={formValues.location}
              />
            </label>

            {/* Sqft */}
            <label htmlFor="sqft" className="flex flex-col gap-2">
              <span>Sqft :</span>
              <input
                type="text"
                name="sqft"
                className="outline-none border border-gray-400 px-3 py-1 rounded-md"
                placeholder="e.g. 240 Sqft"
                onChange={handleChange}
                value={formValues.sqft}
              />
            </label>

            {/* Status */}
            <label htmlFor="status" className="flex flex-col gap-2">
              <span>Status:</span>
              <select
                name="status"
                id=""
                className="outline-none border border-gray-400 px-3 py-1 rounded-md"
                onChange={handleChange}
                value={formValues.status}
              >
                <option value="">Select Status</option>
                <option value="rent">Rent</option>
                <option value="sale">Sale</option>
              </select>
            </label>

            {/* Categories */}
            <label htmlFor="category" className="flex flex-col gap-2">
              <span>Categories:</span>
              <select
                name="category"
                className="outline-none border border-gray-400 px-3 py-1 rounded-md"
                onChange={handleChange}
                value={formValues.category}
              >
                <option value="">Select Category</option>
                <option value="commercial">Commercial</option>
                <option value="residential">Residential</option>
                <option value="apartment">Apartment</option>
              </select>
            </label>

            {/* Bedrooms */}
            <label htmlFor="bedrooms" className="flex flex-col gap-2">
              <span>Bedrooms :</span>
              <select
                name="bedrooms"
                className="outline-none border border-gray-400 px-3 py-1 rounded-md"
                onChange={handleChange}
                value={formValues.bedrooms}
              >
                <option value="">Select Number</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </label>

            {/* Bath */}
            <label htmlFor="bath" className="flex flex-col gap-2">
              <span>Bath :</span>
              <select
                name="bath"
                className="outline-none border border-gray-400 px-3 py-1 rounded-md"
                onChange={handleChange}
                value={formValues.bath}
              >
                <option value="">Select Number</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </label>

            {/* Garages */}
            <label htmlFor="garages" className="flex flex-col gap-2">
              <span>Garages :</span>
              <select
                name="garages"
                className="outline-none border border-gray-400 px-3 py-1 rounded-md"
                onChange={handleChange}
                value={formValues.garages}
              >
                <option value="">Select Number</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </label>

            {/* Floor Plans Image */}
            <label htmlFor="floor_plan" className="flex flex-col gap-2">
              <span>Floor Plans :</span>
              <input
                type="file"
                name="floor_plan"
                className="outline-none border border-gray-400 px-3 py-1 rounded-md"
                accept=".jpg,.jpeg,.png"
                onChange={handleChange}
              />
            </label>

            {/* Property Image */}
            <label htmlFor="property_img" className="flex flex-col gap-2">
              <span>Property Image :</span>
              <input
                type="file"
                name="property_img"
                className="outline-none border border-gray-400 px-3 py-1 rounded-md"
                accept=".jpg,.jpeg,.png"
                onChange={handleChange}
              />
            </label>

            {/* By Agent Name */}
            <label htmlFor="by_agent_name" className="flex flex-col gap-2">
              <span>By Agent Name:</span>
              <input
                type="text"
                name="by_agent_name"
                className="outline-none border border-gray-400 px-3 py-1 rounded-md"
                placeholder="e.g. Nilla Thomas"
                onChange={handleChange}
                value={formValues.by_agent_name}
              />
            </label>

            {/* Agent Image */}
            <label htmlFor="agent_img" className="flex flex-col gap-2">
              <span>Agent Image :</span>
              <input
                type="file"
                name="agent_img"
                id=""
                className="outline-none border border-gray-400 px-3 py-1 rounded-md"
                accept=".jpg,.jpeg,.png"
                onChange={handleChange}
              />
            </label>
            <span className="hidden md:block"></span>
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
                onChange={handleChange}
                value={formValues.description}
              />
            </label>
          </div>
          {/* Details End here */}
          <div className="w-full flex items-center justify-center">
            <button className="text-white bg-green-400 px-5 py-2 rounded-sm transition-colors duration-300 hover:bg-orange-500">
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
