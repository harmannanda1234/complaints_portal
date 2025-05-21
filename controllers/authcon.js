const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const pool = require('../db')

const signup = async(req,res)=>{
    let {sname , sid , password ,semail , branch ,phone} = req.body;
    if(!sname || !sid || !password ||!semail || !branch || !phone ){
        return res.status(400).json({
            message:"invalid request",
            status:400
        })
    }
    try {
        const hashed = await bcrypt.hash(password,10)
        const query = "INSERT INTO student_cred VALUES(?,?,?,?,?,?)"
        await pool.execute(query,[sname,sid,hashed,semail,branch,phone])
        return res.status(201).json({
            message:"success",
            status:201
        })  
    } catch (error) {
        return res.status(500).json({
            message: error.message,
            status:500
        })
    }

}

const login = async (req,res)=>{
    let { sid , phone , semail,upassword}= req.body 
    const passq = "SELECT password FROM student_cred WHERE sid = ? and phone = ? and semail =?"
    try {
        const [password] = await pool.execute(passq ,[sid,phone,semail])
        if(password.length===0){
            return res.json({
                message:"invalid credentials",
                status:"404 not found"
            })
        }
        const istrue = await bcrypt.compare(upassword,password[0].password)
        if(!istrue){
            return res.json({
                message:"invalid credentials",
                status:400
            })
        }

        const token = jwt.sign({
            payload : {
                sid :sid
            }
        },"secret")
        res.setHeader("Authorization",`Bearer ${token}`)
        return res.status(201).json({
            message:"login successful",
            status:201,
            token:`Bearer ${token}`
        })
    } catch (error) {
        return res.json({
            error :error.message
        })
    }
    

}

const updatepass = async(req,res)=>{
    let {password ,sid} = req.body

    try {
         
    } catch (error) {
        
    }

}


module.exports ={
    signup,
    login,
    updatepass
}