const express = require('express');
const app=express();
app.use(express.json());
const data=[
    {id:1,title:"Book One",author:"Author One",publishedYear:2020},
    {id:2,title:"Book Two",author:"Author Two",publishedYear:2021},
    {id:3,title:"Book Three",author:"Author Three",publishedYear:2022}
];
app.use(express.json());

app.get('/books',(req,res)=>{
    res.json(data);
});
app.get('/books/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const book=data.find(b=>b.id===id);
    if(book){
        res.json(book);
    }else{
        res.status(404).json({error:"Book not found"});
    }
});
app.post('/books',(req,res)=>{
    const book=req.body;
    data.push(book);
    res.status(201).json(book);
});

app.listen(5000,()=>{
    console.log("Server started at port 3000");
});