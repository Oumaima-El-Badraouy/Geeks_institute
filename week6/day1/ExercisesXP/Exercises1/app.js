const express = require('express');
const cors = require('cors');
const router = require('./routes/index.js');
const app=express();
app.use(cors());
app.use(express.json());



app.use('/',router);






app.listen(3000,()=>{
    console.log('server running at http://localhost:5000/')
})



