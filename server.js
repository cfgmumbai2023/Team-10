//server instantiation
const express=require('express');
const app=express();

//load config from env file
require("dotenv").config();
const PORT=process.env.PORT || 3000;
//middleware to parse json request body 
app.use(express.json());


//server start
app.listen(8000,()=>{
    console.log(`Server started at 8000`);
})

//connect  to the database
const dbConnect=require("./config/db_connect");
dbConnect();

//default route
app.get("/",(req,res)=>{
    res.send('<h1>This is Homebody</h1>')
})