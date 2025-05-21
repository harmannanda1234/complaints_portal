const express = require("express")
const { arouter } = require("./routes/authroutes")
const authToken = require("./middlewares/token")
const app = express()
require('dotenv').config()
const Port = process.env.Port


//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))


//routes
app.use("/credentials",arouter)
app.use("/students",authToken,arouter)

//server config
app.listen(Port,()=>{
    console.log(`server running on port ${Port}`)
})