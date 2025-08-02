const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(cors());

const router = require('./routes/routes');
app.use('/api' , router);


app.listen(process.env.PORT , ()=>{
    console.log("Server has started running.");
    
}) 