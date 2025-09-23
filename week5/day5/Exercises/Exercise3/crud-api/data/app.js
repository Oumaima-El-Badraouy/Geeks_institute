const express=require('express');
const dataService = require('./dataService');
const app=express();
dataService.fetchPosts().then(posts=>{
    console.log(posts);
});
app.listen(5000,()=>{
    console.log("Server started at port 5000");
});