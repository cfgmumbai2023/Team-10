import React from 'react';
import './ModeratorProfile.css';
import { Videocard } from './videocard';

const LeftSection = () => {
  const pending=["vid1","vid2","vid3","vid6","vid7","vid8","vid9"];
  
  return (
    <div className="left-section">
      <h2>Pending Request</h2>
      <div className="card-container">
      <div> {pending.map((element,index)=> ( <div className="card" >
          
          <Videocard key={index} myProp={element}  />
        
       
          </div>))}</div>
      </div>
    </div>
  );
};

const RightSection = () => {
  const acc=["vid1","vid2","vid3","vid4","vid6","vid7","vid8","vid9"];
  return (
    
    <div className="right-section">
      <h2>Accepted Video</h2>
      <div className="card-container">
      <div> {acc.map((element,index)=> ( <div className="card" >
          
          <Videocard key={index} myProp={element}  />
        
       
          </div>))}</div>
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