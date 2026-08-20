import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useAdmin } from "../../../context/AdminContext";
import { updateProduct } from "../../../services/AdminServices";

export const UpdatePropertyForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { allProducts } = useAdmin();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Existing Product
  const [product, setProduct] = useState(null);

  // Preview Images
  const [propertyPreview, setPropertyPreview] = useState(null);
  const [floorPreview, setFloorPreview] = useState(null);
  const [agentPreview, setAgentPreview] = useState(null);

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

  useEffect(() => {
    if (!allProducts?.length) return;

    const currentProduct = allProducts.find(
      (item) => item._id === id
    );

    if (!currentProduct) return;

    setProduct(currentProduct);

    setFormValues({
      name: currentProduct.name,
      price: currentProduct.price,
      location: currentProduct.location,
      sqft: currentProduct.sqft,
      status: currentProduct.status,
      description: currentProduct.description,
      category: currentProduct.category,
      bedrooms: currentProduct.bedrooms,
      bath: currentProduct.bath,
      garages: currentProduct.garages,
      floor_plan: null,
      property_img: null,
      by_agent_name: currentProduct.by_agent_name,
      agent_img: null,
    });
  }, [allProducts, id]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      const file = files[0];

      setFormValues((prev) => ({
        ...prev,
        [name]: file,
      }));

      if (file) {
        const preview = URL.createObjectURL(file);

        if (name === "property_img") {
          setPropertyPreview(preview);
        }

        if (name === "floor_plan") {
          setFloorPreview(preview);
        }

        if (name === "agent_img") {
          setAgentPreview(preview);
        }
      }
    } else {
      setFormValues((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    const formData = new FormData();

    Object.entries(formValues).forEach(([key, value]) => {
      if (value !== null) {
        formData.append(key, value);
      }
    });

    try {
      await toast.promise(
        updateProduct( formData, id),
        {
          pending: "Updating Property...",
          success: "Property Updated Successfully!",
          error: "Failed to Update Property.",
        },
        {
          theme: "dark",
          position: "top-center",
        }
      );

      navigate("/auth/admin/Properties");
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  if (!product) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }
  return (
  <div className="w-full h-full flex items-center justify-center pb-5">
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col gap-5 px-4 sm:px-5 mt-5"
    >
      <div className="header flex items-center justify-center w-full text-2xl sm:text-4xl font-bold text-center">
        <span>Update Property</span>
      </div>

      {error && (
        <span className="text-center text-red-500">
          {error}
        </span>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {/* Property Name */}
        <label className="flex flex-col gap-2">
          <span>Name :</span>
          <input
            type="text"
            name="name"
            className="outline-none border border-gray-400 px-3 py-1 rounded-md"
            value={formValues.name}
            onChange={handleChange}
          />
        </label>

        {/* Price */}
        <label className="flex flex-col gap-2">
          <span>Price :</span>
          <input
            type="number"
            name="price"
            className="outline-none border border-gray-400 px-3 py-1 rounded-md"
            value={formValues.price}
            onChange={handleChange}
          />
        </label>

        {/* Location */}
        <label className="flex flex-col gap-2">
          <span>Location :</span>
          <input
            type="text"
            name="location"
            className="outline-none border border-gray-400 px-3 py-1 rounded-md"
            value={formValues.location}
            onChange={handleChange}
          />
        </label>

        {/* Sqft */}
        <label className="flex flex-col gap-2">
          <span>Sqft :</span>
          <input
            type="text"
            name="sqft"
            className="outline-none border border-gray-400 px-3 py-1 rounded-md"
            value={formValues.sqft}
            onChange={handleChange}
          />
        </label>

        {/* Status */}
        <label className="flex flex-col gap-2">
          <span>Status :</span>
          <select
            name="status"
            className="outline-none border border-gray-400 px-3 py-1 rounded-md"
            value={formValues.status}
            onChange={handleChange}
          >
            <option value="">Select Status</option>
            <option value="rent">Rent</option>
            <option value="sale">Sale</option>
          </select>
        </label>

        {/* Category */}
        <label className="flex flex-col gap-2">
          <span>Category :</span>
          <select
            name="category"
            className="outline-none border border-gray-400 px-3 py-1 rounded-md"
            value={formValues.category}
            onChange={handleChange}
          >
            <option value="">Select Category</option>
            <option value="commercial">Commercial</option>
            <option value="residential">Residential</option>
            <option value="apartment">Apartment</option>
          </select>
        </label>

        {/* Bedrooms */}
        <label className="flex flex-col gap-2">
          <span>Bedrooms :</span>
          <select
            name="bedrooms"
            className="outline-none border border-gray-400 px-3 py-1 rounded-md"
            value={formValues.bedrooms}
            onChange={handleChange}
          >
            <option value="">Select Number</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>

        {/* Bath */}
        <label className="flex flex-col gap-2">
          <span>Bath :</span>
          <select
            name="bath"
            className="outline-none border border-gray-400 px-3 py-1 rounded-md"
            value={formValues.bath}
            onChange={handleChange}
          >
            <option value="">Select Number</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>

        {/* Garages */}
        <label className="flex flex-col gap-2">
          <span>Garages :</span>
          <select
            name="garages"
            className="outline-none border border-gray-400 px-3 py-1 rounded-md"
            value={formValues.garages}
            onChange={handleChange}
          >
            <option value="">Select Number</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </label>

        {/* Floor Plan */}
        <label className="flex flex-col gap-2">
          <span>New Floor Plan :</span>
          <input
            type="file"
            name="floor_plan"
            accept=".jpg,.jpeg,.png"
            className="outline-none border border-gray-400 px-3 py-1 rounded-md"
            onChange={handleChange}
          />
        </label>

        {/* Property Image */}
        <label className="flex flex-col gap-2">
          <span>New Property Image :</span>
          <input
            type="file"
            name="property_img"
            accept=".jpg,.jpeg,.png"
            className="outline-none border border-gray-400 px-3 py-1 rounded-md"
            onChange={handleChange}
          />
        </label>

        {/* Agent Name */}
        <label className="flex flex-col gap-2">
          <span>Agent Name :</span>
          <input
            type="text"
            name="by_agent_name"
            className="outline-none border border-gray-400 px-3 py-1 rounded-md"
            value={formValues.by_agent_name}
            onChange={handleChange}
          />
        </label>

        {/* Agent Image */}
        <label className="flex flex-col gap-2">
          <span>New Agent Image :</span>
          <input
            type="file"
            name="agent_img"
            accept=".jpg,.jpeg,.png"
            className="outline-none border border-gray-400 px-3 py-1 rounded-md"
            onChange={handleChange}
          />
        </label>

        <span></span>

        {/* Description */}
        <label className="flex flex-col gap-2">
          <span>Description :</span>

          <textarea
            rows={5}
            name="description"
            className="w-full border border-gray-400 rounded-lg p-3 outline-none resize-none"
            value={formValues.description}
            onChange={handleChange}
          />
        </label>

      </div>
            {/* Existing Images */}
      <div className="flex flex-col gap-6 mt-5">

        <h2 className="text-2xl font-semibold">
          Existing Images
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* Existing Property Image */}
          <div className="flex flex-col gap-2">
            <span className="font-medium">
              Property Image
            </span>

            <img
              src={product.property_img?.url}
              alt="Property"
              className="w-full h-52 rounded-lg object-cover border"
            />
          </div>

          {/* Existing Floor Plan */}
          <div className="flex flex-col gap-2">
            <span className="font-medium">
              Floor Plan
            </span>

            <img
              src={product.floor_plan?.url}
              alt="Floor Plan"
              className="w-full h-52 rounded-lg object-cover border"
            />
          </div>

          {/* Existing Agent Image */}
          <div className="flex flex-col gap-2">
            <span className="font-medium">
              Agent Image
            </span>

            <img
              src={product.agent_img?.url}
              alt="Agent"
              className="w-full h-52 rounded-lg object-cover border"
            />
          </div>

        </div>

      </div>

      {/* New Selected Images Preview */}
      {(propertyPreview || floorPreview || agentPreview) && (
        <div className="flex flex-col gap-6 mt-8">

          <h2 className="text-2xl font-semibold">
            New Selected Images
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            {propertyPreview && (
              <div className="flex flex-col gap-2">
                <span>Property Image</span>

                <img
                  src={propertyPreview}
                  alt=""
                  className="w-full h-52 rounded-lg border object-cover"
                />
              </div>
            )}

            {floorPreview && (
              <div className="flex flex-col gap-2">
                <span>Floor Plan</span>

                <img
                  src={floorPreview}
                  alt=""
                  className="w-full h-52 rounded-lg border object-cover"
                />
              </div>
            )}

            {agentPreview && (
              <div className="flex flex-col gap-2">
                <span>Agent Image</span>

                <img
                  src={agentPreview}
                  alt=""
                  className="w-full h-52 rounded-lg border object-cover"
                />
              </div>
            )}

          </div>

        </div>
      )}

      {/* Submit Button */}
      <div className="flex items-center justify-center mt-10">

        <button
          type="submit"
          disabled={loading}
          className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition disabled:bg-gray-400 cursor-pointer"
        >
          {loading ? "Updating..." : "Update Property"}
        </button>

      </div>

    </form>
  </div>
);
};
