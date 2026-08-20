const mongoose = require("mongoose");
const config = require("./config")


const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGODB_URI);
    } catch (error) {
        console.log("MongoDB connection error :" , error)
    }
};

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected");
});

module.exports = connectDB