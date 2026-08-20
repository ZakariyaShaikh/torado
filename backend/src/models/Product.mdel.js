const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name : {
        type : String ,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    location : {
        type : String , 
        required : true
    },
    sqft : {
        type : Number , 
        required : true
    },
    status : {
        type : String ,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    bedrooms : {
        type : String,
        required : true
    },
    bath : {
        type : String ,
        required : true
    },
    garages : {
        type : String,
        required : true
    },
    floor_plan : {
        url : String ,
        fileId : String
    },
    property_img : { 
        url : String,
        fileId : String
    },
    by_agent_name : {
        type : String , 
        required : true
    },
    agent_img : {
        url : String ,
        fileId : String
    }
}, {timestamps : true});


const Product = mongoose.model("Products", productSchema);

module.exports = Product;