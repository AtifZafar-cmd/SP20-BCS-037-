const express=require('express')
const app=express();
const dotenv=require('dotenv');
const mongoose=require('mongoose')
dotenv.config({path:'./config.env'});
const Pizza=require('./models/pizzaModel')

app.use(express.json());
mongoose.set('strictQuery', true);
require('./db')

const pizzasRoute=require('./routes/pizzasRoute');
app.use(require('./routes/userRoutes'))

app.get("/",(req,res)=>{
    res.send("Working");
})
app.use("/api/pizzas/",pizzasRoute);

const middleware=(req,res,next) =>{
    console.log("Middleware created");
    next();
}

app.get('/about',middleware,(req,res)=>{
    res.send('Hello World from the About');
    console.log("Now we get access to About page")
    })


const port=process.env.PORT || 5000;
app.listen(5000,console.log("Server Running"))