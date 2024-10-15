const asyncHandler = require("express-async-handler")
const jwt = require("jsonwebtoken")

const validateToken = asyncHandler(async (req, res, next) => {
    let token;
    let authHeader = req.headers.authorization || req.headers.Authorization;

    if(authHeader && authHeader.startsWith("Bearer")){
        token = authHeader.split(" ")[1]
        if(!token){
            res.status(400);
            throw new Error("Unauthorized access")
        }
        
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if(err){
                res.status(401)
                throw new Error("Unauthorized access");
            }
            req.user = decoded.user
            next()
        })
    }
})

module.exports = validateToken