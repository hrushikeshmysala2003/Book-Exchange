const express = require('express');
const cookieParser = require("cookie-parser");
const app = express();
const errorMiddleware = require("./middlewares/Error")
const cors=require('cors');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use(cookieParser());

const user=require("./routes/UserRoutes");
const book=require("./routes/book");
app.use("/api/v1", user)
app.use("/api/v1", book)


app.use(errorMiddleware);


module.exports = app;