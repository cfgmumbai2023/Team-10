import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signin.css";

const Signin = () => {
 const [role,setRole]=useState("")
 const navigate=useNavigate()
 const handleClick = () => {
  if (pass===cpass){
    navigate("/login");
  } else {
    navigate(`/`);
  }
 
};
const [pass,setPass]=useState("");
const [cpass,setCPass]=useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCPass] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [PhoneNumber,setPhoneNumber]=useState("");

  return (
    <div className="studentsign">
      <div className="ssContainer">
        <input
          type="text"
          placeholder="First Name"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="ssInput"
        />
        <input
          type="text"
          placeholder="Last Name"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="ssInput"
        />
        <input
          type="text"
          placeholder="Email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="ssInput"
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          className="ssInput"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          id="confirmPassword"
          value={cpass}
          onChange={(e) => setCPass(e.target.value)}
          className="ssInput"
        />
        <input
          type="text"
          placeholder="Phone"
          id="phone"
          value={PhoneNumber}
          onChange={(e)=>setPhoneNumber(e.target.value)}
          className="ssInput"
        />
        <input
          type="text"
          placeholder="Student or Creator"
          id="phone"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="ssInput"
        />
        <input
          type="text"
          placeholder="Organisation Name"
          id="organisation"
          value={organizationName}
          onChange={(e) => setOrganizationName(e.target.value)}
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
