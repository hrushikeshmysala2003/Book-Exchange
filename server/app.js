const express = require('express');
const cookieParser = require("cookie-parser");
const app = express();
const errorMiddleware = require("./middlewares/Error")
const cors = require("cors")
const passport=require("passport");
const cookieSession = require("cookie-session")
require('dotenv').config();
require('./utils/Provider');
app.use(
    cookieSession({
        maxAge: 15 * 24 * 60 * 60 * 100,
        keys: process.env.COOKIE_KEY
    })
)
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}));
app.use(express.urlencoded({
    extended: true
}));

const user=require("./routes/UserRoutes");
const book=require("./routes/book");
app.use("/api/v1", user)
app.use("/api/v1", book)


app.use(errorMiddleware);


module.exports = app;