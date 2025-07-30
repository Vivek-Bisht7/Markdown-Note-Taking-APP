const express = require('express');
const app = express();
require('dotenv').config();

app.get("/" , (req,res)=>{
    res.send("Hello");
})

app.listen(process.env.PORT , ()=>{
    console.log("Server has started running.");
    
})