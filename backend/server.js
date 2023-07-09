//server instantiation
const express=require('express');
const app=express();
const cors = require("cors");
const signupRoutes = require("./routes/signup");
const createVideo=require("./routes/createvideo");
const cookieParser = require("cookie-parser");
//load config from env file
require("dotenv").config();
const PORT= 3000;

//connect  to the database
const dbConnect=require("./config/db_connect");
dbConnect();

//middleware to parse json request body

app.use(cors()) 
app.use(express.json());
app.use(cookieParser());

// app.use(cors());
app.use("/api/v1", signupRoutes);
app.use("/api/v1",createVideo);

//server start
app.listen(3000,()=>{
    console.log(`Server started at 8000`);
})



//default route
app.get("/",(req,res)=>{
    res.send('<h1>This is Homebody</h1>')
})