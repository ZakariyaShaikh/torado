const bcrypt = require("bcrypt");
const Admin = require("../../models/admin.model");
const config = require("../../config/config");
const connectDB = require("../../config/db");

const createAdmin = async () => {
  try {
    await connectDB()
    const existingAdmin = await Admin.findOne({
      email: "itachiuchiha123@gmail.com",
    });

    if (existingAdmin) {
      console.log("Admin already exists");
      return;
    }
    const hashedPassword = await bcrypt.hash(
      "A-B-C-D-0000",
      Number(config.BCRYPT_SALT),
    );
    await Admin.create({
      email: "itachiuchiha123@gmail.com",
      password: hashedPassword,
      role: "admin",
    });
    console.log("Admin created successfully");
  } catch (error) {
    console.log("Error in creating admin:", error);
  }
};

createAdmin();