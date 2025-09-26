const express =require('express');
const router=express.Router();
const todos = [];

router.get('/',(req,res)=>{
    res.send( todos);
});

router.post('/',(req,res)=>{
    const data=req.body;
    
        res.send( 'About Us');
});
 module.exports=router;
