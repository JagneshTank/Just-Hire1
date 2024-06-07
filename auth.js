const jwt = require("jsonwebtoken");
const User = require("../models/user.js");

const auth = async (req, res, next) => {
    try {
        const token = req.header("X-auth-token");
        
        if(!token){
            return res.status(401).json({message: "No auth token, access denied"})
        }
        
        
        const verified = jwt.verify(token,"passwordKey");

        if(!verified){
            return res.status(401)
            .json({message: "Authentication failed"})
        };

        req.user = verified.id;
        req.token = token;
        next();
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

const addAuth = async (req, res, next) => {
    try{
        console.log("1");
//        const token = req.header('X-auth-token').replace('Bearer ','');
        const token = req.header('X-auth-token');
        if (!token)
              return res.status(401).json({ msg: "No auth token, access denied" });
        console.log("2");

        const verified = jwt.verify(token, "passwordKey");
        console.log("5");
        if (!verified)
              return res
                .status(401)
                .json({ msg: "Token verification failed, authorization denied." });
        console.log("4");

        const user = await User.findById(verified.id);
        console.log("3");

        if(!user){
            throw new Error();
        }
        console.log("4");
        req.user = user;
        req.token = token;
        console.log("5");
        next();
        console.log("6");
    }catch (e){
        res.status(401).send({error: 'Please authenticate. '});
    }
}

module.exports = {auth, addAuth,};