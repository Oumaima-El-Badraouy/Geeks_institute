const express = require('express');
const app=express();
const data=[];
app.use(express.json());

app.get('/posts',(req,res)=>{
    res.json(data);
});
app.post('/posts',(req,res)=>{
    const post=req.body;
    data.push(post);
    res.status(201).json(post);
}); 
app.delete('/posts/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const index=data.findIndex(post=>post.id===id);
    res.status(204).send();
    
});
app.put('/posts/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const index=data.findIndex(post=>post.id===id);
    if(index!==-1){
        const updatedPost=req.body;
        data[index]={...data[index],...updatedPost};
        res.json(data[index]);
    }else{
        res.status(404).json({error:"Post not found"});
    }
});
app.listen(3000,()=>{
    console.log("Server started at port 3000");
});