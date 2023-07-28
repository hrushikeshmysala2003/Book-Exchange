const express = require('express');
const app = express();


const user=require("./routes/UserRoutes");
app.use("/api/v1", user)



module.exports = app;