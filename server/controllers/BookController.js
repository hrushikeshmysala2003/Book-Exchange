const Book = require("../models/Book");
const ErrorHandler = require("../utils/ErrorHandler");
const getDataUri = require("../utils/DataUri");
const User = require("../models/User");
const cloudinary = require("cloudinary").v2;

exports.addBook=async(req,res,next)=>{
    try {
        const {title,author,category,description,id} = req.body;
        const file = req.file;
        
        if(!title || !author || !category || !description || !id || !file){
            return next(new ErrorHandler("Please enter all the book details", 400));
        }

        const fileUri = getDataUri(file);
        const mycloud = await cloudinary.uploader.upload(fileUri.content);
        
        const user = await User.findById({id});
        const book=await Book.create({
            title,
            author,
            image:{
                public_id: mycloud.public_id,
                url: mycloud.url
            },
            category,
            description,
            status:"new",
            user:user._id
        })

        res.status(201).json({
            success: true,
            message: "Book added Successfully",
            user, 
        })
    } catch (error) {
        return next(new ErrorHandler(err.message, null));
    }
}