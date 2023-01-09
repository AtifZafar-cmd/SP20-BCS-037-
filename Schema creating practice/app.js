console.log("hello")

const express=require('express');
const app=express();
const mongoose=require('mongoose');
require('./conn');
app.use(express.json());
const User=require('./schema');
app.get('/',(req,res)=>{
    res.send('homepage')
})

app.get('/register',(req,res)=>{
res.send("Register")
})
app.post('/register',async(req,res)=>{

    const {name,email,phone,work,password,cpassword}=req.body;
    console.log(name);
   
    if(!name || !email || !phone ||!work || !password ||!cpassword){
        return res.status(422).json({error:"plz fill"});
    }
    try{
      const userExist=await User.findOne({email:email});
      if(userExist){
        return res.status(422).json({error:"email exist already"});
       }
       
        const user=new User({name,email,phone,work,password,cpassword});
     
          await user.save();
         res.status(201).json({message:"success"});
       
    }catch(error){
     console.log(error);
    }
   
   
   
})

app.listen(2000)
