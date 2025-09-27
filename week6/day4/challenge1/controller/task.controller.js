
const Task= require('../models/tasks.json');
const uuid=require('uuid');
const getTasks=async(req,res)=>{
    const todos=await Todo.findAll();
    res.json(todos);
};
const getTask=async(req,res)=>{
    const id=req.params.id;
    const todo=await Todo.findByPk(id);
    res.json(todo);
};
const CreateTask=async(req,res)=>{
    const data=req.body;
    await Todo.create({id: uuid.v4(),...data});
    res.send('todo created success ');
};
const UpdateTask=async(req,res)=>{
    const id=req.params.id;
        const data=req.body;
    await Todo.update(data, { where: { id } });
    res.send('todo updated success ');
}
const DeleteTask=async(req,res)=>{
    const id=req.params.id;
    await Todo.destroy( { where: { id } });
    res.send('todo deleted success ');
}
module.exports={getTasks, getTask, UpdateTask, DeleteTask, CreateTask
};