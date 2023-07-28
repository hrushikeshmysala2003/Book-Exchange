const User = require("../models/User");




exports.registerUser = async (req, res) => {

}

exports.loginUser = async (req, res) => {

}

exports.demoUser = (req, res) => {
    res.status(200).json({
        success: true,
        message: "Demo Verified"
    })
}