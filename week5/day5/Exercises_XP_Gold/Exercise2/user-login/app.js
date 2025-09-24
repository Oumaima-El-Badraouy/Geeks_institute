const express= require('express');
const bcrypt= require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const cors = require('cors');
const app= express();
app.use(express.json());
app.use(cors());
const data=[];
app.post('/api/register',async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        const newpassword=await bcrypt.hash(password,10);
        data.push({name,email,password:newpassword});
        res.json('success');
    }
    catch(error){
        console.log('Error:',err.message);
    }
});
app.post('/api/login',async(req,res)=>{
    try{
    const {email,password}=req.body;
    const user= await data.find(user=>user.email===email);
    if(!user){
        res.json('user undefined !');
    }
    const passwordhash= await bcrypt.compare(password,user.password);
    if(!passwordhash){
        res.json('pass incorrect !');
    }
    res.json('nice');
    }
    catch(error){
         console.log('Error:',err.message);
    }
    

});
app.get('/api/profile/:name',async(req,res)=>{
    try{
        const username=req.params.name;
        const profile=data.find(user=>user.name===username);
         if(!profile){
        res.json('user undefined !');
        }
        res.json(profile);

    }
    catch(error){
        console.log('Error:',err.message);
    }

});
app.get('/profiles',async(req,res)=>{
    const profiles=data;
    res.json(profiles);
})

app.listen(6000,()=>{
    console.log('server running in http://localhost:6000/');
})

