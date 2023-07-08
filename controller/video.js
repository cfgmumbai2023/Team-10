
// Import the Video model
const Video = require('../model/Video');
exports.createVideo =async (req,res)=>{
  try{
    //validation
    const {videoUrl,videoName,standard,subject,organisationName,tags,languages}=req.body
    if(!videoUrl || !videoName || !standard || !subject || !tags || !languages){
      return res.json({
        success:false,
        message:"Fill all the Required fields"
      })
    }
    //saving the video in db
    const videos=new Video({videoUrl,videoName,standard,subject,organisationName,tags,languages});
    await videos.save();
    res.json({
      success:true,
      message:"video uploaded succefully",
      videos
    })

  }catch(err){
    console.log(err)
    res.status(500).json({
      success:false,
      message:"server error",
    })

  }
}
