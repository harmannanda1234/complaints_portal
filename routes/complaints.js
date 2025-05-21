const express = require('express')
const { postcomplaint } = require('../controllers/compcon')
const crouter = express.Router()

crouter.post("/complaints",postcomplaint)

module.exports=crouter