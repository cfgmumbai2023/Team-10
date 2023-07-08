const express=require("express");
const route=express.Router()

//importing the controllers
const {createVideo,getVideoByTag}=require("../controller/video")

//post request
route.post("/createVideo",createVideo);
route.get("/getVideoByTag",getVideoByTag);

module.exports = route 