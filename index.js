const express = require("express")
const { arouter } = require("./routes/authroutes")
const authToken = require("./middlewares/token")
const crouter = require("./routes/complaints")
const app = express()
require('dotenv').config()
const Port = process.env.Port


//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))


//routes
app.use("/credentials",arouter)
app.use("/students",authToken,crouter)

//server config
app.listen(Port,()=>{
    console.log(`server running on port ${Port}`)
})