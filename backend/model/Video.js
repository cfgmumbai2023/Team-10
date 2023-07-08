const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  videoUrl: {
    type: String,
    required: true,
    unique: true,
  },
  videoName:{
    type:String,
    required:true,
  },
  organisationName: {
    type: String,
    required: true,
    trim: true,
  },
  standard: {
    type: Number,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  languages: [{
    type: String,
    required: true,
  }],
  tags:[{
    type:String,
    required:true,
  }]
});

module.exports = mongoose.model("Video", videoSchema);