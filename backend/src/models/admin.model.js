const mongoose = require("mongoose");

const adminSChema = new mongoose.Schema({
    email : {
        type : String,
        required : true
    },
    password : {
        type : String ,
        required : true
    },
    role : {
        type : String ,
        required : true
    }
},
{timestamps : true});

const Admin = mongoose.model("Admin" , adminSChema);
module.exports = Admin;