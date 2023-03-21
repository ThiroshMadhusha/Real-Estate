const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {

    if(!req.headers.authorization) return res.status(403).json({msg:"Not Authorized. No Token"});

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.JWT_SECRET,(error, data)=>{
            if(error) return res.status(403).json({msg:"Not Authorized. Invalid Token Provided"});
            else{
                // data = {id: user._id}
                req.user = data;
                next();
            }
        })
    }
}

module.exports = verifyToken;