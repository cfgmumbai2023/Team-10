import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signin.css";

const Signin = () => {
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const handleClick = async() => {

      // Make an API call to register the user
      try{
        await fetch("http://localhost:3000/api/v1/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            password: pass,
            confirmPassword: cpass,
            accountType: role,
            organizationName,
            PhoneNumber
          }),
        })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            navigate(`/${role}`);
          } else {
            console.error("Registration failed:", data.message);
          }
        })
        .catch((error) => {
          console.error("Registration error:", error);
        });
      }
    catch(err){
      console.error("Passwords do not match");
    }
  };

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
