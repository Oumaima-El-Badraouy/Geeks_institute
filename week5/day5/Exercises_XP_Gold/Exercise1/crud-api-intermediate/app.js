const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());
app.get('/api/posts',async(req,res)=>{
    try{
    const posts=await  axios.get('https://jsonplaceholder.typicode.com/posts');
        res.json(posts.data);
    }
    catch(error){
        console.log('error :',error.message);
    }

});

app.get('/api/posts/:id',async(req,res)=>{
     try{
        const id=req.params.id;
    const post=await  axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

        res.json(post.data);
    }
    catch(error){
        console.log('error :',error.message);
    }
});
app.post('/api/posts',async(req,res)=>{
     try{
        const data=req.body;
    const posts= await  axios.post('https://jsonplaceholder.typicode.com/posts',data);
        res.json('nice');
    }
    catch(error){
        console.log('error :',error.message);
    }
});
app.put('/api/posts/:id',async(req,res)=>{
     try{
        const id=req.params.id;
        const data=req.body;
    const posts=await  axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`,data);
        res.json('user updated');
    }
    catch(error){
        console.log('error :',error.message);
    }
});
app.delete('/api/posts/:id',async(req,res)=>{
     try{
        const id = req.params.id;

    const posts=await  axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
        res.json('user deleted ');
    }
    catch(error){
        console.log('error :',error.message);
    }
});
app.listen(5000, () => {
  console.log(`Server running: http://localhost:5000`);
});
