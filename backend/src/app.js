const express = require("express")
const adminAuth = require("./routes/admin.routes")
const cors = require("cors");
const agentRoutes = require("./routes/agents.routes")
const productRoutes = require("./routes/products.routes")





const app = express();
app.use(cors())
app.use(express.json())




app.use("/api/auth/admin",adminAuth)
app.use("/api/agents" , agentRoutes )
app.use("/api/products" , productRoutes)




app.get("/" , (req , res) => {
    res.send("Server is live...")
});


module.exports = app;