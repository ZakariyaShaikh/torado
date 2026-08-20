const Admin = require("../../models/admin.model");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const config = require("../../config/config");






const loginAdmin = async (req, res) => {
    try {
        const {email , password} = req.body;

        if(!email || !password) {
            res.status(400).json({
                success : false ,
                message : "Email and Password both are required."
            });
            return;
        };
        const admin = await Admin.findOne({
            email
        });
        if(!admin){
            res.status(404).json({
                success : false,
                message : "Admin is not found."
            });
            return;
        };
        const isMatch = await bcrypt.compare(password , admin.password);

        if(!isMatch) {
            res.status(400).json({
                success : false ,
                 message : "Invalid credentials"
            });
            return;
        };
        const token = jwt.sign({id : admin._id} , config.VITE_JWT_SECRET,{expiresIn : "1d"}) 
        res.status(200).json({
            success : true,
            message : "Admin logged in successfully.",
            admin : {
                email : admin.email ,
                role : admin.role
            },
            token
        });
    } catch (error) {
        res.status(500).json({
            success : false ,
            message : `Error :${error.message}`
        })
    }
}

module.exports = {
    loginAdmin
}