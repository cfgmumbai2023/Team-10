//server instantiation
const express=require('express');
const app=express();

//load config from env file
require("dotenv").config();
const PORT=process.send.PORT || 4000;


app.use(express.json());


//server start
app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`);
})

//connect  to the database
const dbConnect=require("./config/database_config");
dbConnect();

//default route
app.get("/getVideos",(req,res)=>{
    res.send('<h1>This is Homebody</h1>')
})