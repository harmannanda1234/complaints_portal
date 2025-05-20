const express = require("express")
const { signup, login } = require("../controllers/authcon")
const arouter = express.Router()

// arouter.get("/user/:id")
arouter.post("/signup",signup)
arouter.post("/login",login)
// arouter.get("/user")


module.exports= {arouter};