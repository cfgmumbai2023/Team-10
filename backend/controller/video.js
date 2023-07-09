
// Import the Video model
const Video = require('../model/Video');
const Creator=require('../model/Creator')
exports.createVideo =async (req,res)=>{
  try{
    //validation
    console.log(JSON.stringify(req.body))
    const {videoUrl,standard,subject,videoName,tags}=req.body
    if(!videoUrl || !standard || !subject || !videoName || !tags ){
      return res.json({
        success:false,
        message:"Fill all the Required fields"
      })
    }

    //saving the video in db
    // await Video.create({videoUrl,videoName,standard,subject,organisationName,tags,languages})
    const videos=new Video({videoUrl,standard,subject,videoName,tags});
     await videos.save();
    
    console.log('Video saved successfully');
    // const creator=new Creator({courseCreated:videoName,URL:videoUrl});
    // await creator.save();
    return res.json({
      success:true,
      message:"video uploaded successfully",
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
