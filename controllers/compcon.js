const pool = require('../db')


const postcomplaint=async (req,res)=>{//for students to post comp
    let{sid, complaint,photo}=req.body
    let ip = req.ip
    try {
        if(!sid||!complaint){
            return res.json({
                message:"invalid request"
            })
        }

        let createdat= new Date()
        const query = "INSERT INTO complaints (sid,complaint,created_at,ip,photo) Values(?,?,?,?,?)"
        const [result] = await pool.execute(query,[sid,complaint,createdat,ip,photo])
        const comp_id = result.insertId
        // console.log(result)
        return res.json({
            message:"complaint registered succesfully",
            complaintid : comp_id
        })
    } catch (error) {
        return res.json({
            message:error.message
        })
    }
}

const getcomplaints = async (req,res)=>{ // for admin to see all complaints
    
    return res.json({
        message:"welcome to protected route",
        decoded : req.user
    })

}


module.exports={
    postcomplaint,
    getcomplaints

}