import React from 'react';
import './moderatorReview.css';

const VideoPlayer = () => {
  return (
    <div className="video-player">
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/VIDEO_ID"
          title="YouTube Video Player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="content-section">
        <h2>Text Section</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="comment-section">
        <h2>Comment Section</h2>
        <div className="comment">Comment 1</div>
        <div className="comment">Comment 2</div>
        <div className="comment">Comment 3</div>
      </div>
      <div className="binary-selection">
        <h2>Binary Selection</h2>
        <input type="radio" id="option1" name="binary" />
        <label htmlFor="option1">Option 1</label>
        <input type="radio" id="option2" name="binary" />
        <label htmlFor="option2">Option 2</label>
      </div>
    </div>
  );
};

export default VideoPlayer;
