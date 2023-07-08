const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });

// Import the Video model
const Video = require('./videoSchema');

// GET request to fetch all videos
app.get('/videos', async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (error) {
    console.error('Error retrieving videos:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST request to create a new video
app.post('/videos', async (req, res) => {
  try {
    const video = new Video(req.body);
    await video.save();
    res.json(video);
  } catch (error) {
    console.error('Error creating video:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
