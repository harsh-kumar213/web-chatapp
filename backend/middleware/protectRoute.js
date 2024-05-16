import jwt from 'jsonwebtoken'
import User from '../models/user.model.js';

const protectRoute = async (req,res,next)=>{
    try
    { 
        const token =  req.cookies.jwt;
    
    if(!token)
        {
            res.status(401).json({error:"Unauthorized - No token provided"});
        }
    const decoded = jwt.verify(token,"kbsgdshfvoangbaobg");
    if(!decoded)
        {
            res.status(401).json({error:"Unauthorized - Invalid token"});
        }
    
     const user = await User.findById(decoded.userId).select("-password");
     if(!user)
        {
            res.status(404).json({error:"user not found"});
        }
    req.user = user;
    next();}
    catch(error)
    {
        console.log("error in protectRoute middleware",error);
        res.status(500).json({error:"Internal Server Error"});
    }
}

export default protectRoute;