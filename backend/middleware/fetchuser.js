var jwt = require('jsonwebtoken');
var secrettoken = "dead4vampire";

const fetchuser=(req,res,next)=>{
    //get user from token and add id to req 
    const token=  req.header('authtoken');
    
    if(!token){
        res.status(401).send("Invalid credentials");
    }
    try {
        const data= jwt.verify(token,secrettoken);
        req.user=data.user; 
        next(); 
    } catch (error) {
        res.status(403).send("Invalid credentials");
        console.log(error.message);
    }
    
}

module.exports=fetchuser;