
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

//controller 2
exports.getVideoByTag= async (req,res)=>{
  try{
    const {tags} = req.body;
    if (!tags) {
        return res.status(400).json(
          { 
            message: 'Tags parameter is required' }
          );
    }
    const tagList = tags.split(',');
    const videos = await Video.find({ tags: { $all: tagList } });
   return res.status(400).json({
      success:true,
      message:"Videos fetched succefully",
      videos
    });
  }
  catch(err){
    console.error('Error retrieving videos by tags:', err);
    return res.status(500).json(
      { 
        success:false,
        error: 'Internal server error' }
      );
  }
}

