const express = require('express');
const app = express();
require('dotenv').config();

const router = require('./routes/routes');
app.use('/' , router);

app.listen(process.env.PORT , ()=>{
    console.log("Server has started running.");
    
})