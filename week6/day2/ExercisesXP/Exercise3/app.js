const express = require('express');
const cors = require('cors');
const app=express();
const router = require('./Routes/books.js');
app.use(cors());
app.use(express.json());



app.use('/books',router);






app.listen(3000,()=>{
    console.log('server running at http://localhost:3000/')
})


