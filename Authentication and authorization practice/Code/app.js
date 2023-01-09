//Simply we will import the express having lot of functions available//
const express=require('express');
const dotenv=require('dotenv');
dotenv.config({path:'./config.env'});
//variable app can use all express functions/methods/properties now//
const app=express();
const mongoose=require('mongoose')

mongoose.set('strictQuery', true);
//connecting to db//
require('./connection');
app.use(express.json());
const User=require('./Models/userSchema');
app.use(require('./Routes/routes'))
//Middlewares//
const middleware=(req,res,next) =>{
    console.log("Middleware created");
    next();
}



//Routing//



app.get('/about',middleware,(req,res)=>{
    res.send('Hello World from the About');
    console.log("Now we get access to About page")
    })

    app.get('/contact',(req,res)=>{
        res.cookie("Name",'value');
        res.send('Hello World from the Contact');
        })
     
        app.get('/signin',(req,res)=>{
            res.send('Hello World from the Sign');
            })
            app.get('/signup',(req,res)=>{
                res.send('Hello World from the LOGIN');
                })   



console.log("Server Running SuccessFully");

//"proxy":"http://localhost:3001"//

app.listen(2000,()=>{
    console.log("Server Running at port 3000");
})
