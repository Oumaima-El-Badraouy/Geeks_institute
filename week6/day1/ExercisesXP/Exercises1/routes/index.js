const express =require('express');
const router=express.Router();

router.get('/',()=>{
    return 'Home page';
});

router.get('/About',()=>{
    return 'About Us';
});
 module.exports=router;
