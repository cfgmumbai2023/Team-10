import React from 'react';
import './studentSRP.css';

const StudentSRP = () => {
  return (
    <div className="video-page">
      <div className="filters">
        <h2>Mock Filters</h2>
        <ul>
          <li>Filter 1</li>
          <li>Filter 2</li>
          <li>Filter 3</li>
          <li>Filter 4</li>
        </ul>
      </div>
      <div className="video-cards">
        <h2>Video Cards</h2>
        <div className="card">
          <h3>Video 1</h3>
          <p>Description of Video 1</p>
        </div>
        <div className="card">
          <h3>Video 2</h3>
          <p>Description of Video 2</p>
        </div>
        <div className="card">
          <h3>Video 3</h3>
          <p>Description of Video 3</p>
        </div>
      </div>
      <div className="profile-dashboard">
        <h2>Profile Dashboard</h2>
        <div className="profile">
          <h3>User Name</h3>
          <p>Location: City, Country</p>
          <p>Followers: 100</p>
        </div>
      </div>
    </div>
  );
};

export default StudentSRP;
