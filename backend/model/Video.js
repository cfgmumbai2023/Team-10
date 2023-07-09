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
  }],
  tags:[{
    type:String,
    required:true,
  }]
});

module.exports = mongoose.model("Video", videoSchema);
