const express = require('express');
const router = express.Router();
const {addBook, deleteBook, getAllbooks, myBooks} = require('../controllers/BookController');
const singleUpload = require("../middlewares/multer");
const isAuthenticated = require("../middlewares/auth");


router.route("/addBook").post(isAuthenticated,singleUpload,addBook);
router.route("/deleteBook/:id").delete(isAuthenticated,deleteBook);
router.route("/getallbooks").get(getAllbooks);
router.route("/mybooks").get(isAuthenticated,myBooks);
module.exports = router;