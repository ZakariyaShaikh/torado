const mongoose = require("mongoose");


const agentSchema = new mongoose.Schema({
    name : {
        type : String ,
        required : true
    },
    listing_count : {
        type : Number,
        required : true
    },
    phone : {
        type : String ,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    location : {
        type : String ,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    agent_image : {
        url : String,
        fileId : String
    }
}, {timestamps : true})

const Agent = mongoose.model("Agent" , agentSchema);

module.exports = Agent;