const dotenv = require("dotenv")
dotenv.config()
const app = require ("./app");
const config = require("./config/config.js");
const connectDB = require("./config/db.js")


connectDB();


app.listen(config.VITE_PORT,() => {
    console.log(`Server is listing on http://localhost:${config.VITE_PORT}`)
})