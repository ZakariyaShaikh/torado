const dotenv = require("dotenv");
dotenv.config();


if(!process.env.VITE_PORT) {
    throw new Error ("Port is missing in environmental variables")
};
if(!process.env.MONGODB_URI) {
    throw new Error ("MONGODB URI is missing in environmental variables")
};
if(!process.env.BCRYPT_SALT) {
    throw new Error ("BCRYPT_SALT is missing in environmental variables")
};
if(!process.env.VITE_JWT_SECRET) {
    throw new Error ("JWT SECRET is missing in environmental variables")
};
if(!process.env.IMAGEKIT_PRIVATE_KEY) {
    throw new Error ("IMAGEKIT_PRIVATE_KEY is missing in environmental variables")
};
if(!process.env.IMAGEKIT_PUBLIC_KEY) {
    throw new Error ("IMAGEKIT_PUBLIC_KEY is missing in environmental variables")
};
if(!process.env.IMAGEKIT_URL_ENDPOINT) {
    throw new Error ("IMAGEKIT_URL_ENDPOINT is missing in environmental variables")
};




const config = {
    VITE_PORT : process.env.VITE_PORT,
    MONGODB_URI : process.env.MONGODB_URI,
    BCRYPT_SALT : process.env.BCRYPT_SALT,
    VITE_JWT_SECRET : process.env.VITE_JWT_SECRET,
    IMAGEKIT_PUBLIC_KEY : process.env.IMAGEKIT_PUBLIC_KEY,
    IMAGEKIT_PRIVATE_KEY : process.env.IMAGEKIT_PRIVATE_KEY,
    IMAGEKIT_URL_ENDPOINT : process.env.IMAGEKIT_URL_ENDPOINT
};


module.exports = config