import React from 'react';
import './moderatorReview.css';
import { Link } from 'react-router-dom';

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
        <h2>Add tags on video</h2>
        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        <textarea rows="10"
                  cols="150"
                  placeholder="Description of video">
        </textarea>
      </div>
      <div className="comment-section">
        <h2>Moderator comments</h2>
        {/* <div className="comment">Comment 1</div>
        <div className="comment">Comment 2</div>
        <div className="comment">Comment 3</div> */}
        <textarea rows="10"
                  cols="150"
                  placeholder="comments on video">
        </textarea>
      </div>
      <div className="binary-selection">
        <h2>Approvation</h2>
        
         <button id="bt1" type="approve" value="approve">
    Approve
  </button>
  <Link to="/moderatorProfile"><button id2="bt2" type="reject" value="reject" href="">
    Reject
  </button></Link>
   
  {/* <button>Approved</button> &nbsp;&nbsp;&nbsp; <button>Reject</button> */}
      </div>
    </div>
  );
};

export default VideoPlayer;
