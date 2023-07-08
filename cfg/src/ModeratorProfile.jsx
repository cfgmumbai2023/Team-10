import React from 'react';
import './ModeratorProfile.css';

const LeftSection = () => {
  return (
    <div className="left-section">
      <h2>Left Section</h2>
      <div className="card-container">
        <div className="card">Card 1</div>
        <div className="card">Card 2</div>
        <div className="card">Card 3</div>
        <div className="card">Card 4</div>
        <div className="card">Card 5</div>
        <div className="card">Card 6</div>
        <div className="card">Card 7</div>
        <div className="card">Card 8</div>
        <div className="card">Card 9</div>
        <div className="card">Card 10</div>
      </div>
    </div>
  );
};

const RightSection = () => {
  return (
    <div className="right-section">
      <h2>Right Section</h2>
      <div className="card-container">
        <div className="card">Card A</div>
        <div className="card">Card B</div>
        <div className="card">Card C</div>
        <div className="card">Card D</div>
        <div className="card">Card E</div>
        <div className="card">Card F</div>
        <div className="card">Card G</div>
        <div className="card">Card H</div>
        <div className="card">Card I</div>
        <div className="card">Card J</div>
      </div>
    </div>
  );
};

const ModeratorProfile = () => {
  return (
    <div className="app">
      <LeftSection />
      <RightSection />
    </div>
  );
};

export default ModeratorProfile;
