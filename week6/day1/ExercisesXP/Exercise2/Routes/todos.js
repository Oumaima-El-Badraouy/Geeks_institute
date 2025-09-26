const express = require('express');
const router= express.Router();
let todos = [];

router.get('/',(req,res)=>{
    res.send( todos);
});

router.post('/',(req,res)=>{
    const data=req.body;
    todos.push(data);
        res.send( 'nice',todos);
});
router.put('/:id',(req,res)=>{
    const {completed,title}=req.body;
    const id=req.params.id;
    const todo=todos.find(tod=>tod.id==id);
        todo.title=title;
        todo.completed=completed;
         res.send( 'nice',todos);
});
 



router.delete('/:id',(req,res)=>{
    const id=req.params.id;
    todos=todos.filter(todo=>todo.id!=id);
    res.send( 'nice',todos);
});
module.exports=router;