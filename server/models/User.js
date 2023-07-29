const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


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

userSchema.pre("save", async function(next){

    if(!this.isModified("password")){
        next();
    }

    this.password = await bcrypt.hash(this.password, 10);
    next();
})

userSchema.methods.getJwtToken = async function(){
    return jwt.sign({_id: this._id}, process.env.JWT_SECRET, {
        expiresIn: "15d"
    })
}

userSchema.methods.comparePassword = async function(userPassword){
    return await bcrypt.compare(userPassword, this.password);
}

module.exports = mongoose.model("User", userSchema);