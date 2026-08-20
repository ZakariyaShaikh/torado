const express = require("express");
const { createAgent, getAllAgents, deleteAgent, updateAgent } = require("../controller/Agents/agent.controller");
const upload = require("../config/multer");




const route = express.Router();





route.post("/create" ,upload.single("agent_image") ,createAgent);
route.get("/" ,getAllAgents);
route.delete("/:id" ,deleteAgent);
route.put("/update/:id" , upload.single("agent_image"),updateAgent)










module.exports = route