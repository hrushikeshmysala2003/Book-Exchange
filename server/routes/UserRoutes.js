const express = require("express");
const { registerUser, loginUser, logoutUser, getMyProfile, updateProfile, updateProfilePicture, deleteMyProfile } = require("../controllers/UserController");
const singleUpload = require("../middlewares/multer");
const isAuthenticated = require("../middlewares/auth");
const router = express.Router();


router.route("/register").post( singleUpload ,registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logoutUser);
router.route("/me").get( isAuthenticated ,getMyProfile);
router.route("/updateprofile").put( isAuthenticated ,updateProfile);
router.route("/updateprofilepicture").put( isAuthenticated, singleUpload ,updateProfilePicture);
router.route("/me").delete( isAuthenticated, deleteMyProfile);


module.exports = router;
