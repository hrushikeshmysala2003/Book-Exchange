const express = require("express");
const passport = require("passport");
const { registerUser, loginUser, logoutUser, getMyProfile, updateProfile, updateProfilePicture, deleteMyProfile } = require("../controllers/UserController");
const singleUpload = require("../middlewares/multer");
const isAuthenticated = require("../middlewares/auth");
const router = express.Router();


router.route("/googlelogin").get( passport.authenticate("google", {
    scope: ["profile", "email"]
}) )
router.route("/current_user").get((req, res) => {
    res.send(req.user)
});
router.route("/login").get(passport.authenticate("google", 
    {
        successRedirect: '/current_user',
    	failureRedirect: '/login'
    }
))
// router.route("/login").get((req, res) => {
//     res.send("Logged in")
// })

router.route("/register").post( singleUpload ,registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logoutUser);
router.route("/me").get( isAuthenticated ,getMyProfile);
router.route("/updateprofile").put( isAuthenticated ,updateProfile);
router.route("/updateprofilepicture").put( isAuthenticated, singleUpload ,updateProfilePicture);
router.route("/me").delete( isAuthenticated, deleteMyProfile);


module.exports = router;
