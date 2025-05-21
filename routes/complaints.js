const express = require('express')
const { postcomplaint, getcomplaints } = require('../controllers/compcon')
const crouter = express.Router()

crouter.post("/complaints",postcomplaint)
crouter.get("/getcomplaint",getcomplaints)

module.exports=crouter