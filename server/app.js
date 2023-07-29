const express = require('express');
const app = express();
const errorMiddleware = require("./middlewares/Error")

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
const user=require("./routes/UserRoutes");
app.use("/api/v1", user)


app.use(errorMiddleware);
module.exports = app;