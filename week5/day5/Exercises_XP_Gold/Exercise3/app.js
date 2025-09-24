const express= require('express');
const cors = require('cors');
const uuid = require('uuid');
const app= express();
app.use(express.json());
app.use(cors());
const todo=[];

app.post('/api/todos',async(req,res)=>{
try{
        const {id,title,complited}=req.body;
        data.push({id,title,complited});
        res.json('success');
    }
    catch(error){
        console.log('Error:',err.message);
    }
});
app.get('/api/todos',async(req,res)=>{
    try{
        const data=todo;
        res.json(data);
    }
    catch(error){
        console.log('Error:',err.message);
    }

});
app.get('/api/todos/:id',async(req,res)=>{
 try{
    const id=parseInt(req.params.id);
        const data=todo.find(todo=>todo.id===id);
        if(!data){
             res.json('todo undefined');
        }
        res.json(data);
    }
    catch(error){
        console.log('Error:',err.message);
    }
});
app.put('/api/todos/:id',async(req,res)=>{
     try{
       
        const id=parseInt(req.params.id);
         const todo2  = req.body;
        const todos=todo.find(todo=>todo.id===id);
        
        if(!data){
             res.json('todo undefined');
        }

        res.json(data);
    }
    catch(error){
        console.log('Error:',err.message);
    }

});
app.delete('/api/todos/:id',async(req,res)=>{

});


app.listen(5000,()=>{
    console.log('server running in http://localhost:6000/');
})

