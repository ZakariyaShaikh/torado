import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { useAdmin } from "../../../context/AdminContext";
import { updateAgent } from "../../../services/AgentServices";

export const UpdateAgentForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { allAgents , getAgents} = useAdmin();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Existing Agent
  const [agent, setAgent] = useState(null);

  // Preview Image
  const [previewImage, setPreviewImage] = useState(null);

  const [formValues, setFormValues] = useState({
    name: "",
    listing_count: "",
    phone: "",
    email: "",
    location: "",
    description: "",
    agent_image: null,
  });

  useEffect(() => {
    if (!allAgents?.length) return;

    const currentAgent = allAgents.find(
      (item) => item._id === id
    );

    if (!currentAgent) return;

    setAgent(currentAgent);

    setFormValues({
      name: currentAgent.name,
      listing_count: currentAgent.listing_count,
      phone: currentAgent.phone,
      email: currentAgent.email,
      location: currentAgent.location,
      description: currentAgent.description,
      agent_image: null,
    });
  }, [allAgents, id]);

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
        setPreviewImage(preview);
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
        updateAgent( id , formData),
        {
          pending: "Updating Agent...",
          success: "Agent Updated Successfully!",
          error: "Failed to Update Agent.",
        },
        {
          theme: "dark",
          position: "top-center",
        }
      );

      navigate("/auth/admin/Agents");
      getAgents()
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  if (!agent) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }
  return (
  <div className="w-full min-h- flex items-center justify-center pb-5">
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col gap-5 px-4 sm:px-5 mt-5"
    >
      <div className="header flex items-center justify-center w-full text-2xl sm:text-4xl font-bold text-center">
        <span>Update Agent</span>
      </div>

      {error && (
        <span className="text-center text-red-500">
          {error}
        </span>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {/* Name */}
        <label className="flex flex-col gap-2">
          <span>Name :</span>

          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            className="outline-none border border-gray-400 rounded-md px-3 py-2"
          />
        </label>

        {/* Listing Count */}
        <label className="flex flex-col gap-2">
          <span>Listing Count :</span>

          <input
            type="number"
            name="listing_count"
            value={formValues.listing_count}
            onChange={handleChange}
            className="outline-none border border-gray-400 rounded-md px-3 py-2"
          />
        </label>

        {/* Phone */}
        <label className="flex flex-col gap-2">
          <span>Phone :</span>

          <input
            type="tel"
            name="phone"
            value={formValues.phone}
            onChange={handleChange}
            className="outline-none border border-gray-400 rounded-md px-3 py-2"
          />
        </label>

        {/* Email */}
        <label className="flex flex-col gap-2">
          <span>Email :</span>

          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            className="outline-none border border-gray-400 rounded-md px-3 py-2"
          />
        </label>

        {/* Location */}
        <label className="flex flex-col gap-2">
          <span>Location :</span>

          <input
            type="text"
            name="location"
            value={formValues.location}
            onChange={handleChange}
            className="outline-none border border-gray-400 rounded-md px-3 py-2"
          />
        </label>

        {/* Agent Image */}
        <label className="flex flex-col gap-2">
          <span>New Agent Image :</span>

          <input
            type="file"
            name="agent_image"
            accept=".jpg,.jpeg,.png"
            onChange={handleChange}
            className="outline-none border border-gray-400 rounded-md px-3 py-2"
          />
        </label>

        {/* Description */}
        <label className="flex flex-col gap-2">
          <span>Description :</span>

          <textarea
            rows={6}
            name="description"
            value={formValues.description}
            onChange={handleChange}
            className="border border-gray-400 rounded-lg outline-none resize-none p-3"
          />
        </label>

      </div>

      <div className="flex items-center gap-x-10">
                    {/* Existing Agent Image */}
      <div className="flex flex-col gap-5 mt-8">

        <h2 className="text-2xl font-semibold">
          Existing Agent Image
        </h2>

        <div className="flex gap-5">

          <div className="flex flex-col gap-2">
            <span className="font-medium">
              Current Image
            </span>

            <img
              src={agent.agent_image?.url}
              alt="Agent"
              className="w-full max-w-56 h-56 object-cover rounded-lg border"
            />
          </div>

        </div>

      </div>

      {/* New Selected Image Preview */}
      {previewImage && (
        <div className="flex flex-col gap-5 mt-8">

          <h2 className="text-2xl font-semibold">
            New Selected Image
          </h2>

          <div className="flex gap-5">

            <div className="flex flex-col gap-2">
              <span>Preview</span>

              <img
                src={previewImage}
                alt="Preview"
                className="w-full max-w-56 h-56 object-cover rounded-lg border"
              />
            </div>

          </div>

        </div>
      )}
      </div>

      {/* Submit Button */}
      <div className="w-full flex justify-center mb-8">

        <button
          type="submit"
          disabled={loading}
          className="bg-green-500 hover:bg-green-600 transition text-white px-8 py-3 rounded-lg disabled:bg-gray-400"
        >
          {loading ? "Updating..." : "Update Agent"}
        </button>

      </div>

    </form>
  </div>
);
};
