const User = require("../models/User");
const ErrorHandler = require("../utils/ErrorHandler");
const getDataUri = require("../utils/DataUri");
const cloudinary = require("cloudinary").v2;
const jwt = require("jsonwebtoken");

exports.registerUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        const file = req.file;

        if(!name || !email || !password || !file){
            return next(new ErrorHandler("Please enter all fields", 400));
        }

        let user = await User.findOne({email: email});
        // 409 represents conflicting statusCode
        if(user) return next(new ErrorHandler("User Already exist", 409));

        const fileUri = getDataUri(file)
        const mycloud = await cloudinary.uploader.upload(fileUri.content);

        user = await User.create({
            name: name,
            email: email,
            password: password,
            avatar: {
                public_id: mycloud.public_id,
                url: mycloud.url
            }
            
        });

        const token = user.getJwtToken();

        const options = {
            httpOnly: true,
            expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
            sameSite: "none"
        }
        // 201 code is for created
        // A cookie is a piece of data that is sent to the client-side with a request and is stored on the client-side itself by 
        // the Web Browser the user is currently using. With the help of cookies –

        // It is easy for websites to remember the user’s information
        // It is easy to capture the user’s browsing history
        // It is also useful in storing the user’s sessions
        res.status(201).cookie("token", token, options).json({
            success: true,
            message: "User Registered Successfully",
            user, 
        })

    } catch (err) {
        return next(new ErrorHandler(err.message, null));
    }
}

exports.loginUser = async (req, res, next) => {
    try {
        const {email, userPassword} = req.body;

        if(!email || !userPassword) return next(new ErrorHandler("Please enter all fields", 400));

        const user = await User.findOne({email: email}).select("+password");


        if(!user) return next(new ErrorHandler("User not found", 401));

        const isAuthenticated = user.comparePassword(userPassword);

        if(!isAuthenticated) return next(new ErrorHandler("Password did not match", 401));

        const token = await user.getJwtToken();

        const options = {
            httpOnly: true,
            expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
            sameSite: "none"
        }

        res.status(200).cookie("token", token, options).json({
            success: true,
            message: "User Logged In",
        })
    } catch (error) {
        return next(new ErrorHandler(error.message, null))
    }

}

exports.logoutUser = (req, res) => {
    res.status(200).cookie("token", null, {
        expires: new Date(Date.now()),
        sameSite: "none", 
        httpOnly: true,
    }).json({
        success: true,
        message: "Logged out Successfully"
    })
}

exports.getMyProfile = async (req, res, next) => {
    try{
        const user = await User.findById(req.user._id);

        res.json({
            success: true,
            user,
        })
    }catch(err){
        next(new ErrorHandler(err.message, null))
    }
}

exports.updateProfile = async (req, res, next) => {
    const {name, email} = req.body;

    let user = await User.findById(req.user._id);

    if(name) user.name=name;
    if(email) user.email=email;

    await user.save();

    res.status(200).json({
        success: true,
        message: "User Updated Successfully"
    })
}

exports.updateProfilePicture = async (req, res, next) => {
    const file = req.file;

    if(!file) return next(new ErrorHandler("Please enter the field", 400))

    const user = await User.findById(req.user._id);

    const fileUri = getDataUri(file)

    const mycloud = await cloudinary.uploader.upload(fileUri.content);

    await cloudinary.uploader.destroy(user.avatar.public_id);

    user.avatar.public_id = mycloud.public_id;
    user.avatar.url = mycloud.url;

    await user.save();

    res.status(200).json({
        success: true,
        message: "User Profile Picture Updated Successfully"
    })
}