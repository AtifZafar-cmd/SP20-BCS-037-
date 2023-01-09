const express=require('express');
const jwt=require('jsonwebtoken');
const User = require('../Models/userSchema');
const router=express.Router();
const bcrypt=require('bcryptjs')

require('../Models/userSchema');


router.get('/',(req,res)=>{
    res.send('Hello World from the Homepage');
    })
    router.get('/register',(req,res)=>{
        console.log(req.body);
        })
 /* router.post('/register',(req,res)=>{
    const {name,email,phone,work,password,cpassword}=req.body;
    console.log(name);
   
    if(!name || !email || !phone ||!work || !password ||!cpassword){
        return res.status(422).json({error:"plz fill"});
    }
   User.findOne({email:email}).then((userExist)=>{
   if(userExist){
    return res.status(422).json({error:"email exist already"});
   }
   const user=new User({name,email,phone,work,password,cpassword});

   user.save().then(()=>{
    res.status(201).json({message:"success"});
   }).catch((err)=>{
    res.status(422).json({error:"Failed"});
   })
   }).catch((err)=>{console.log(err)})
}) 
*/

router.post('/register',async(req,res)=>{

    const {name,email,phone,work,password,cpassword}=req.body;
    console.log(name);
   
    if(!name || !email || !phone ||!work || !password ||!cpassword){
        return res.status(422).json({error:"plz fill"});
    }
    else{
        console.log("okay");
    }
    try{
      const userExist=await User.findOne({email:email});
      if(userExist){
        return res.status(422).json({error:"email exist already"});
       }
       else if(password!=cpassword){
        return res.status(422).json({error:"Password did'nt match"});
       }
       else{
        const user=new User({name,email,phone,work,password,cpassword});
     
        await user.save();
       res.status(201).json({message:"success"});
     
       }
       
       
    }catch(error){
     console.log(error);
    }
   
   
   
})

router.post('/login',async(req,res)=>{
    
    try{
        let token
    const {email,password}=req.body;
    if(!email || !password){
        return res.status(400).json({error:"Plz fill data"});
    }
    const Login=await User.findOne({email:email});
      if(Login){
        const isMatch=await bcrypt.compare(password,Login.password);
        token=await Login.generateAuthToken();
        console.log(token);
        res.cookie("jwtoken",token,{
            expires:new Date(Date.now()+2222222222222),
            httpOnly:true
        })
        if(!isMatch){
            return res.status(400).json({message:"invalid"});
        }
        else{
         res.json({message:"Login Successfully"});
         console.log(email,password)
        }
       }
       else {
        
         res.status(400).json({error:"user error"});
       }
    }
    catch(err){
        console.log("Error in Login Routing");
    }
})
    module.exports=router;