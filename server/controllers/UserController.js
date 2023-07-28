const User = require("../models/User");
const ErrorHandler = require("../utils/ErrorHandler");



exports.registerUser = async (req, res, next) => {
    
}

exports.loginUser = async (req, res) => {

}

exports.demoUser = (req, res) => {
    res.status(200).json({
        success: true,
        message: "Demo Verified"
    })
}