const User = require("../models/User");
const ErrorHandler = require("../utils/ErrorHandler");
const getDataUri = require("../utils/DataUri");
const cloudinary = require("cloudinary").v2;


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