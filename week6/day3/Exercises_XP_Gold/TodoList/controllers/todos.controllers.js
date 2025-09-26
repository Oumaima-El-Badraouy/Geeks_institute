
const Todo= require('../models/todo.js');

const gettodos=async(req,res)=>{
    const todos=await Todo.findAll();
    res.json(todos);
};
const gettodo=async(req,res)=>{
    const id=req.params.id;
    const todo=await Todo.findByPk(id);
    res.json(todo);
};
const createtodo=async(req,res)=>{
    const data=req.body;
    await Todo.create(data);
    res.send('todo created success ');
};
const updatetodo=async(req,res)=>{
    const id=req.params.id;
        const data=req.body;
    await Todo.update(data, { where: { id } });
    res.send('todo updated success ');
}
const deletetodo=async(req,res)=>{
    const id=req.params.id;
    await Todo.destroy( { where: { id } });
    res.send('todo deleted success ');
}
module.exports={deletetodo,updatetodo,createtodo,gettodo,gettodos};