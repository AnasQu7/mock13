const jwt = require('jsonwebtoken')
const verifyAdmin = (req,res,next)=>{
    const token = req.headers["authorization"]
    console.log(token)
    try{
        
        const decoded = jwt.decode(token);
        console.log(decoded)
            if(decoded.role === "admin"){
                next();
            }else{
                
                return res.status(403).send("You are not allowed")
            }
       
   }catch{
       
       return res.status(403).send("You are not allowed")
    }
}

module.exports = verifyAdmin