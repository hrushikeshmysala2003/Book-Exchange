const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],

    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
        validate: validator.isEmail,
        unique: true,
    },
    password: {
        type: String,
        minLength: [6, "password must be atleast 6 characters"],
        required: [true, "Please neter password"],
        select: false,
    },
    avatar: {
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    resetPasswordToken: String,
    resetPasswordExpire: String,
})

module.exports = mongoose.model("User", userSchema);