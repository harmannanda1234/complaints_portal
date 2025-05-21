const express = require("express")
const { signup, login, adminlog } = require("../controllers/authcon")
const arouter = express.Router()

// arouter.get("/user/:id")
arouter.post("/signup",signup)
arouter.post("/login",login)
arouter.post("/admin/login",adminlog)
// arouter.get("/user")


module.exports= {arouter};