const pool = require('../db')


const postcomplaint=async (req,res)=>{

}

const getcomplaints = async (req,res)=>{
    console.log(req.user)
    return res.json({
        message:"welcome to protected route",
        decoded : req.user
    })

}


module.exports={
    postcomplaint,
    getcomplaints

}