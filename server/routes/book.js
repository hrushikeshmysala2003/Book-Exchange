const express = require('express');
const router = express.Router();
const {addBook} = require('../controllers/BookController');
const singleUpload = require("../middlewares/multer");


router.route("/addBook").post(singleUpload,addBook);
module.exports = router;