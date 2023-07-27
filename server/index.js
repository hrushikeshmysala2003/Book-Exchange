const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const connetToDB = require('./db');

connetToDB().then(()=>{
    app.listen(port,()=>{
        console.log(`Server is listening on port ${port}`);
    })
}).catch((err)=>{
    throw err;
})
