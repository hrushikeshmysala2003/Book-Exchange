const express = require("express");
const { registerUser, loginUser, demoUser } = require("../controllers/UserController");
const router = express.Router();

router.route("/demo").get(demoUser);
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

module.exports = router;
