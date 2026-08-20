const { toFile } = require("@imagekit/nodejs/index.js");
const imageKit = require("../../config/imagekit");
const Agent = require("../../models/Agent.model");

const createAgent = async (req, res) => {
  const { name, listing_count, phone, email, location, description } = req.body;
  const uploadedImage = req.file;

  try {
    if (
      !name ||
      !listing_count ||
      !phone ||
      !email ||
      !location ||
      !description
    ) {
      res.status(400).json({
        success: false,
        message: "All files must be required",
      });
      return;
    }
    if (!uploadedImage) {
      res.status(400).json({
        success: false,
        message: "Image filed is required.",
      });
      return;
    }

    const uploadedFile = await imageKit.files.upload({
      file: await toFile(uploadedImage.buffer, uploadedImage.originalname),
      fileName: name,
    });

    const isAlreadyExists = await Agent.findOne({ name });
    if (isAlreadyExists) {
      res.status(409).json({
        success: false,
        message: "Agent already exists.",
      });
      return;
    }
    const agent = await Agent.create({
      name,
      listing_count,
      phone,
      email,
      location,
      description,
      agent_image: { url: uploadedFile.url, fileId: uploadedFile.fileId },
    });

    return res.status(201).json({
      success: true,
      message: "Agent created successfully.",
      agent,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Error : ${error.message}`,
    });
  }
};

const getAllAgents = async (req, res) => {
  try {
    const agents = await Agent.find();

    if (!agents || agents.length === 0) {
      res.status(404).json({
        success: false,
        message: "Agents not found",
      });
      return;
    }
    return res.status(200).json({
      success: true,
      message: "Agents find successfully.",
      agents,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Error : ${error.message}`,
    });
  }
};

const deleteAgent = async (req, res) => {
  try {
    const { id } = req.params;

    const agent = await Agent.findById(id);

    if (!agent) {
      return res.status(404).json({
        success: false,
        message: "Agent not found.",
      });
    }

    await imageKit.files.delete(agent.agent_image.fileId);

    await Agent.findByIdAndDelete(id);

    return res.status(200).json({
      success: true,
      message: "Agent deleted successfully.",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateAgent = async (req, res) => {
  const { name, listing_count, phone, email, location, description } = req.body;
  const uploadedImage = req.file;
  const { id } = req.params;
  console.log(uploadedImage);

  try {
    const agent = await Agent.findById(id);

    if (!agent) {
      return res.status(404).json({
        success: false,
        message: "Agent not found.",
      });
    }

    let oldImageFileId = null;

    // Upload new image if provided
    if (uploadedImage) {
      const newImage = await imageKit.files.upload({
        file: await toFile(uploadedImage.buffer, uploadedImage.originalname),
        fileName: uploadedImage.originalname,
      });

      // Store old fileId for deletion later
      oldImageFileId = agent.agent_image.fileId;

      // Update image details
      agent.agent_image = {
        url: newImage.url,
        fileId: newImage.fileId,
      };
    }

    // Update other fields
    agent.name = name ?? agent.name;
    agent.listing_count = listing_count ?? agent.listing_count;
    agent.phone = phone ?? agent.phone;
    agent.email = email ?? agent.email;
    agent.location = location ?? agent.location;
    agent.description = description ?? agent.description;

    // Save changes once
    await agent.save();

    // Delete old image after successful save
    if (oldImageFileId) {
      try {
        await imageKit.files.delete(oldImageFileId);
      } catch (error) {
        console.error("Failed to delete old agent image:", error.message);
      }
    }

    return res.status(200).json({
      success: true,
      message: "Agent updated successfully.",
      agent,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Error: ${error.message}`,
    });
  }
};

module.exports = {
  createAgent,
  getAllAgents,
  deleteAgent,
  updateAgent
};
