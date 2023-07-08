
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';
import "./signin.css";

const Signin = () => {
 const [role,setRole]=useState("")
 const navigate=useNavigate()
 const handleClick = () => {
  if (pass===cpass){
    navigate(`/${role}`);
  } else {
    navigate(`/`);
  }
 
};
const [pass,setPass]=useState("");
const [cpass,setCPass]=useState("");




  return (
    <div className="studentsign">
      
      <div className="ssContainer">
        <input
          type="text"
          placeholder="First Name"
          id="firstName"
        
          className="ssInput"
        />
         <input
          type="text"
          placeholder="Last Name"
          id="lastName"
        
          className="ssInput"
        />
         <input
          type="text"
          placeholder="Email"
          id="email"
        
          className="ssInput"
        />
         <input
          type="password"
          placeholder="Password"
          id="password"
          onChange={(e)=>{setPass(e.target.value)}}
          className="ssInput"
        />
         <input
          type="password"
          placeholder="Confirm Password"
          id="confirmPassword"
          onChange={(e)=>{setCPass(e.target.value)}}
          className="ssInput"
        />

        <input
          type="text"
          placeholder="Phone"
          id="phone"
    
          className="ssInput"
        />
        <input
          type="text"
          placeholder="Student or Creator"
          id="phone"
          onChange={(e) => setRole(e.target.value)}
          className="ssInput"
        />
        
        <input
          type="text"
          placeholder="Organisation Name"
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
