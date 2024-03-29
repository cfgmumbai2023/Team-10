
// Import the Video model
const Video = require('../model/Video');
const Creator=require('../model/Creator')

exports.createVideo = async (req, res) => {
  try {
    //validation
    console.log(JSON.stringify(req.body))
    const { videoUrl,videoName,standard, subject,tags} = req.body
    if (!videoUrl || !videoName || !standard || !subject || !tags) {
      return res.json({
        success: false,
        message: "Fill all the Required fields"
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
      success: true,
      message: "video uploaded succefully",
      videos
    })

  } catch (err) {
    console.log(err)
    res.status(500).json({
      success: false,
      message: "server error",
    })
  }
}

exports.getVideoByTag = async (req, res) => {
  try {
    const tags = req.body.search;
    if (!tags) {
      return res.status(400).json({ error: 'Tags parameter is required' });
    }

    const tagList = tags.split(' ');

    try {
      const videos = await Video.find({ tags: { $in: tagList } });
      res.json(videos);
    } catch (error) {
      console.error('Error retrieving videos by tags:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};
exports.filter = async (req, res) => {
  try {
    const tags = req.body.search;
    if (!tags) {
      return res.status(400).json({ error: 'Tags parameter is required' });
    }

    const tagList = tags.split(' ');

    try {
      const videos = await Video.find({ tags: { $all: tagList } });
      res.json(videos);
    } catch (error) {
      console.error('Error retrieving videos by tags:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};
