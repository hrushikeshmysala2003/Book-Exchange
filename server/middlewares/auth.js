const jwt = require("jsonwebtoken");
const User = require("../models/User");
const ErrorHandler = require("../utils/ErrorHandler");


const isAuthenticated = async (req, res, next) => {
    try {
        if(req.user){
            console.log("shdgid");
            next();
        }
        else{
            const {token} = req.cookies;

            if(!token) return next(new ErrorHandler("User not logged in", 401));

            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            req.user = await User.findById(decoded._id);

            next();
        }
        
    } catch (error) {
        return next(new ErrorHandler(error.message, null));
    }
}

module.exports = isAuthenticated;