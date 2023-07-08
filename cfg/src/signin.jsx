
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import "./signin.css";

const Signin = () => {
 const [role,setRole]=useState("")
 const navigate=useNavigate()
 const handleClick = () => {
  navigate(`/${role}`);
};


const options = [
  'student', 'creator'
];
const defaultOption = options[0];
  return (
    <div className="studentsign">
      
      <div className="ssContainer">
        <div>First Name</div>
        <input
          type="text"
          placeholder="firstName"
          id="firstName"
        
          className="ssInput"
        />
         <div>Last Name</div>
         <input
          type="text"
          placeholder="lastName"
          id="lastName"
        
          className="ssInput"
        />
        <div>Email</div>
         <input
          type="text"
          placeholder="email"
          id="email"
        
          className="ssInput"
        />
        <div>Phone</div>
        <input
          type="text"
          placeholder="phone"
          id="phone"
    
          className="ssInput"
        />
        <div>Role</div>
        <input
          type="text"
          placeholder="phone"
          id="phone"
          onChange={(e) => setRole(e.target.value)}
          className="ssInput"
        />
        
         <div>Organisation Name</div>
        <input
          type="text"
          placeholder="organisation"
          id="organisation"
         
          className="ssInput"
        />
       
        <button className="ssButton" onClick={handleClick}>
          Register
        </button>
      
         
      </div>
    </div>
  );
};

export default Signin;
