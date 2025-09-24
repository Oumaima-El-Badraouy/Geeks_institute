const express = require('express');
const axios = require('axios');
const app = express();
app.get('/api/posts',async(req,res)=>{
});

app.get('/api/posts/:id',async(req,res)=>{
});
app.post('/api/posts',async(req,res)=>{
});
app.put('/api/posts/:id',async(req,res)=>{
});
app.delete('/api/posts/:id',async(req,res)=>{
});
app.listen(5000, () => {
  console.log(`Server running: http://localhost:${PORT}`);
});
