const express = require("express");
const route = express.Router();

//importing the controllers
const { createVideo, getVideoByTag, filter } = require("../controller/video")
//post request
route.post("/createVideo", createVideo);
route.get("/getbyTag", getVideoByTag);
route.get('/getbyfilter', filter);

module.exports = route 