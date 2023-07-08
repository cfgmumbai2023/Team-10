const Video = require('./videoModel');

// POST /videos route
exports.createVideo = async (req, res) => {
  try {
    // Extract video data from the request body
    const { videoUrl, organisationName, class: videoClass, languages } = req.body;

    // Create a new video object
    const video = new Video({
      videoUrl,
      organisationName,
      class: videoClass,
      languages,
    });

    // Save the video to the database
    const savedVideo = await video.save();

    // Send a response
    res.status(201).json({ message: 'Video added successfully', video: savedVideo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
