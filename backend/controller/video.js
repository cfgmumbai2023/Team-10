
// Import the Video model
const Video = require('../model/Video');
exports.createVideo = async (req, res) => {
  try {
    //validation
    const { videoUrl, videoName, standard, subject, organisationName, tags, languages } = req.body
    if (!videoUrl || !videoName || !standard || !subject || !tags || !languages) {
      return res.json({
        success: false,
        message: "Fill all the Required fields"
      })
    }
    //saving the video in db
    const videos = new Video({ videoUrl, videoName, standard, subject, organisationName, tags, languages });
    await videos.save();
    res.json({
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
// exports.getVideoByTag= async (req,res)={
//   try{
//     const tags = req.query.tags;
//     if (!tags) {
//         return res.status(400).json({ error: 'Tags parameter is required' });
//     }

//   }
//   catch(err){

//   }
// }

// app.get('/videos/by-tags', async (req, res) => {
//     const tags = req.query.tags;
//     if (!tags) {
//         return res.status(400).json({ error: 'Tags parameter is required' });
//     }

//     const tagList = tags.split(',');

//     try {
//         const videos = await Video.find({ tags: { $in: tagList } });
//         res.json(videos);
//     } catch (error) {
//         console.error('Error retrieving videos by tags:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });
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