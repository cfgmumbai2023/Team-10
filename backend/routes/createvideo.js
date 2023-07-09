const express=require("express");
const route=express.Router()

//importing the controllers
const {createVideo}=require("../controller/video")
//post request
route.post("/createVideo",createVideo);
route.post("/getVideo",)

module.exports = route 