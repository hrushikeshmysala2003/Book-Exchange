const express = require('express');
const app = express();
const errorMiddleware = require("./middlewares/Error")

const user=require("./routes/UserRoutes");
app.use("/api/v1", user)


app.use(errorMiddleware);
module.exports = app;