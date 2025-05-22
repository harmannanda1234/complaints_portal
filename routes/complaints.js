const express = require('express')
const { postcomplaint, getcomplaints, getcomplaintbyid, resolvecomplaintbyid } = require('../controllers/compcon')
const adminrole = require('../middlewares/adminonly')
const crouter = express.Router()

crouter.post("/complaints",postcomplaint) //student
crouter.get("/getcomplaint",adminrole,getcomplaints) //admin
crouter.get("/getcomplaint/:id",adminrole,getcomplaintbyid)//admin
crouter.put("/getcomplaint/:id",adminrole,resolvecomplaintbyid)//admin
// crouter.update("/getcomplaint/:id",adminrole)//admin
// crouter.update("/getmycomplaint/:id",)//student

module.exports=crouter