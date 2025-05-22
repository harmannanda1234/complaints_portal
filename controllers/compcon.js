const pool = require('../db')


const postcomplaint=async (req,res)=>{//for students to post comp
    let{sid, complaint,photo,title}=req.body
    let ip = req.ip
    try {
        if(!sid||!complaint){
            return res.json({
                message:"invalid request"
            })
        }

        let createdat= new Date()
        const query = "INSERT INTO complaints (sid,complaint,created_at,ip,photo,title) Values(?,?,?,?,?,?)"
        const [result] = await pool.execute(query,[sid,complaint,createdat,ip,photo,title])
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
    try {
        const query = "select * from complaints"
        const [result]= await pool.execute(query)
        return res.json({
            message:"success",
            complaints: result
        })
    } catch (error) {
        return res.error({message:error.message})
    }

}

const getcomplaintbyid = async (req,res)=>{ //by admin only
    const {id} = req.params
        try {
        const query = "select * from complaints where cid =?" 
        const [result] =await pool.execute(query,[id])
        // console.log(result)
        if(result.length===0){
            return res.json({
                message:"data not found"
            })
        }

        return res.json({
            message:"success",
            result : result
        })
    } catch (error) {
        return res.json({
            message:error.message
        })
    }

}

const resolvecomplaintbyid = async (req,res)=>{ //by admin only
    const {id} = req.params
        try {
        const query = "update complaints set comp_status = 'resolved' where cid =?" 
        await pool.execute(query,[id])
        return res.json({
            message:"complaint resolved successfully"
        })
    } catch (error) {
        return res.json({
            message:error.message
        })
    }

}

module.exports={
    postcomplaint,
    getcomplaints,
    getcomplaintbyid,
    resolvecomplaintbyid
}