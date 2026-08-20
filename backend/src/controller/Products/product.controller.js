const { toFile } = require("@imagekit/nodejs/index.js");
const imageKit = require("../../config/imagekit");
const Product = require("../../models/Product.mdel");

const createProduct = async (req, res) => {
  const {
    name,
    price,
    location,
    sqft,
    status,
    description,
    category,
    bedrooms,
    bath,
    garages,
    by_agent_name
  } = req.body;
  const propertyImage = req.files.property_img?.[0];
  const floorPlanImage = req.files.floor_plan?.[0];
  const agentImage = req.files.agent_img?.[0];

  try {
    if (
      !name ||
      !price ||
      !location ||
      !sqft ||
      !status ||
      !description ||
      !category ||
      !bedrooms ||
      !bath ||
      !garages ||
      !by_agent_name
    ) {
      res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
      return;
    }

    if (!propertyImage || !floorPlanImage || !agentImage) {
      res.status(400).json({
        success: false,
        message: "Please choose Property,Agent & Floor Images.",
      });
      return;
    }
    const propertyUpload = await imageKit.files.upload({
      file: await toFile(propertyImage.buffer, propertyImage.originalname),
      fileName: propertyImage.originalname,
    });
    const floorPlanUpload = await imageKit.files.upload({
      file: await toFile(floorPlanImage.buffer, floorPlanImage.originalname),
      fileName: floorPlanImage.originalname,
    });
    const agentImageUpload = await imageKit.files.upload({
      file: await toFile(agentImage.buffer, agentImage.originalname),
      fileName: agentImage.originalname,
    });

    const product = await Product.create({
      name,
      price,
      location,
      sqft,
      status,
      description,
      category,
      bedrooms,
      bath,
      garages,
      by_agent_name,
      property_img: {
        url: propertyUpload.url,
        fileId: propertyUpload.fileId,
      },
      floor_plan: {
        url: floorPlanUpload.url,
        fileId: floorPlanUpload.fileId,
      },
      agent_img : {
        url : agentImageUpload.url ,
        fileId : agentImageUpload.fileId
      }
    });

    res.status(201).json({
      success: true,
      message: "Product is created successfully.",
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Error : ${error.message}`,
    });
  }
};
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    if (!products || products.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Products not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Products found successfully.",
      products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Error : ${error.message}`,
    });
  }
};
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    await imageKit.files.delete(product.floor_plan.fileId);
    await imageKit.files.delete(product.property_img.fileId);

    await Product.findByIdAndDelete(id);

    return res.status(200).json({
      success: true,
      message: "Product deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Error : ${error.message}`,
    });
  }
};
const updateProduct = async (req, res) => {
  const {
    name,
    price,
    location,
    sqft,
    status,
    description,
    category,
    bedrooms,
    bath,
    garages,
    by_agent_name
  } = req.body;

  const propertyImage = req.files?.property_img?.[0];
  const floorPlanImage = req.files?.floor_plan?.[0];
  const agentImage = req.files?.agent_img?.[0];

  try {
    const { id } = req.params;

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found.",
      });
    }

    let oldPropertyImageId = null;
    let oldFloorPlanId = null;
    let oldAgentImage = null;

    if (propertyImage) {
      try {
              const uploadedPropertyImage = await imageKit.files.upload({
        file: await toFile(propertyImage.buffer, propertyImage.originalname),
        fileName: propertyImage.originalname,
      });

      oldPropertyImageId = product.property_img.fileId;

      product.property_img = {
        url: uploadedPropertyImage.url,
        fileId: uploadedPropertyImage.fileId,
      };
      } catch (error) {
        return res.status(400).json({
          success : false ,
          message : `Error in Updating New Property Image : ${error.message}`
        })
      }
    }

    if (floorPlanImage) {
      try {
        const uploadedFloorPlan = await imageKit.files.upload({
        file: await toFile(floorPlanImage.buffer, floorPlanImage.originalname),
        fileName: floorPlanImage.originalname,
      });

      oldFloorPlanId = product.floor_plan.fileId;

      product.floor_plan = {
        url: uploadedFloorPlan.url,
        fileId: uploadedFloorPlan.fileId,
      };
      } catch (error) {
        return res.status(400).json({
          success : false ,
          message : `Error in Updating New Floor Plan Image : ${error.message}`
        })
      }
    };

    if (agentImage) {
      try {
        const uploadedAgentImage = await imageKit.files.upload({
        file: await toFile(agentImage.buffer, agentImage.originalname),
        fileName: agentImage.originalname,
      });

      oldAgentImage = product.agent_img.fileId;

      product.agent_img = {
        url: uploadedAgentImage.url,
        fileId: uploadedAgentImage.fileId,
      };
      } catch (error) {
        return res.status(400).json({
          success : false ,
          message : `Error in Updating New Agent Image : ${error.message}`
        })
      }
    }

    product.name = name ?? product.name;
    product.price = price ?? product.price;
    product.location = location ?? product.location;
    product.sqft = sqft ?? product.sqft;
    product.status = status ?? product.status;
    product.description = description ?? product.description;
    product.category = category ?? product.category;
    product.bedrooms = bedrooms ?? product.bedrooms;
    product.bath = bath ?? product.bath;
    product.garages = garages ?? product.garages;
    product.by_agent_name = by_agent_name ?? product.by_agent_name;

    await product.save();


    if (oldPropertyImageId) {
      try {
        await imageKit.files.delete(oldPropertyImageId);
      } catch (error) {
        console.error(
          "Failed to delete old property image:",
          error.message
        );
      }
    }

    if (oldFloorPlanId) {
      try {
        await imageKit.files.delete(oldFloorPlanId);
      } catch (error) {
        console.error(
          "Failed to delete old floor plan:",
          error.message
        );
      }
    }
    if (oldAgentImage) {
      try {
        await imageKit.files.delete(oldAgentImage);
      } catch (error) {
        console.error(
          "Failed to delete old agent image:",
          error.message
        );
      }
    }

    return res.status(200).json({
      success: true,
      message: "Product updated successfully.",
      product,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = {
  createProduct,
  getAllProducts,
  deleteProduct,
  updateProduct,
};
