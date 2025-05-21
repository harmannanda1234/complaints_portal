const jwt = require("jsonwebtoken")

const authToken = (req,res,next)=>{
    const tokenheader = req.headers["authorization"]
    if(!tokenheader){
        return res.status(404).json({
            message:"not found"
        })
    }
    const token = tokenheader.split(' ')[1] 
    jwt.verify(token,"secret", (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' });
        }

        req.user = decoded; 
        next(); 
    });

}

module.exports=authToken