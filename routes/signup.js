const express=require("express");
const route=express.Router()

//importing the controllers
const {signup,login}= require("../controller/auth")
const {auth}=require("../middleware/authent");
//post request
route.post("/signup",signup);
route.post("/login",login);

module.exports = route