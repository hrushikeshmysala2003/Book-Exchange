const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxLength: [40, 'A book title must have less or equal than 40 characters'],
    },
    author: {
        type: String,
        required: true,
    },
    image: {
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxLength:[100, 'A book description must have less or equal than 100 characters'],
    },
    price:{
        type:Number,
        required:true

    },
    status: {
        type: String,
        enum: ["new", "booked", "sold"],
        required: true,
        default: "new"
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'Book must belong to seller']
    },
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})
module.exports = mongoose.model('Book', bookSchema);