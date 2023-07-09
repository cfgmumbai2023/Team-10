import './studentSRP.css';
import React, { useState,createContext } from 'react';
import { Videocard } from './videocard';
import Header from './header';
import Footer from './footer';

const StudentSRP = () => {
const checked=[0,0,0]

 const handleCheckboxChange = (i) => {
 
    checked[i]=1-checked[i];
  };
  const filter=["latestby","rating","content-length"]
  const vid=["vid1","vid2","vid3","vid4"];
 
  return (
    <div>
      <Header />
    <div className="video-page">
      <div className="filters">
        <h2>Mock Filters</h2>
      
{filter.map((i)=>(<label>
  <input
    type="checkbox"
    
    checked={checked[i]}
    onChange={handleCheckboxChange(i)}
  />
 {i}

</label>))
  
}
       
        

      </div>

      <div className="cartcontainer">
        <h2>Video Cards</h2>
        <div> {vid.map((element,index)=> ( <div className="card" >
          
          <Videocard key={index} myProp={element}  />
        
       
          </div>))}</div>
    
        </div>
      
     

      
          
     
      <div className="profile-dashboard">
        <h2>Profile Dashboard</h2>
        <div className="profile">
          <h3>User Name</h3>
          <p>Location: City, Country</p>
          <p>Progress Analysis</p>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default StudentSRP;
