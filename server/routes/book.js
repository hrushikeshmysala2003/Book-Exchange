const express = require('express');
const router = express.Router();
const {addBook, deleteBook} = require('../controllers/BookController');
const singleUpload = require("../middlewares/multer");
const isAuthenticated = require("../middlewares/auth");


router.route("/addBook").post(isAuthenticated,singleUpload,addBook);
router.route("/deleteBook/:id").delete(isAuthenticated,deleteBook);
module.exports = router;