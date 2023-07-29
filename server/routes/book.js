const express = require('express');
const router = express.Router();
const {addBook, deleteBook} = require('../controllers/BookController');
const singleUpload = require("../middlewares/multer");


router.route("/addBook").post(singleUpload,addBook);
router.route("/deleteBook/:id").delete(deleteBook);
module.exports = router;