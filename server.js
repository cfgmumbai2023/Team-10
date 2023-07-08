//server instantiation
const express=require('express');
const app=express();
const cors = require("cors");
const signupRoutes = require("./routes/signup");
const cookieParser = require("cookie-parser");
//load config from env file
require("dotenv").config();
const PORT= 8000;

//connect  to the database
const dbConnect=require("./config/db_connect");
dbConnect();

//middleware to parse json request body 
app.use(express.json());
app.use(cookieParser());
// app.use(
// 	cors({
// 		origin:"http://localhost:8000",
// 		credentials:true,
// 	})
// )
app.use("/api/v1", signupRoutes);

//server start
app.listen(8000,()=>{
    console.log(`Server started at 8000`);
})



//default route
app.get("/",(req,res)=>{
    res.send('<h1>This is Homebody</h1>')
})