const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(express.json());

const router = require('./routes/routes');
app.use('/api' , router);


app.listen(process.env.PORT , ()=>{
    console.log("Server has started running.");
    
}) 