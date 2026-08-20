const express = require("express");
const {
  createProduct,
  getAllProducts,
  deleteProduct,
  updateProduct,
} = require("../controller/Products/product.controller");
const upload = require("../config/multer");
const route = express.Router();

route.post(
  "/create",
  upload.fields([
    { name: "floor_plan", maxCount: 1 },
    { name: "property_img", maxCount: 1 },
    { name: "agent_img", maxCount: 1 }
  ]),
  createProduct,
);
route.get("/", getAllProducts);
route.delete("/:id", deleteProduct);
route.put(
  "/:id",
  upload.fields([
    { name: "property_img", maxCount: 1 },
    { name: "floor_plan", maxCount: 1 },
    { name: "agent_img", maxCount: 1 },
  ]),
  updateProduct,
);

module.exports = route;
