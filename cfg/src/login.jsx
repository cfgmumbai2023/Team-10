
// import "./login.css";

// const Login = () => {
 
//   return (
//     <div className="login">
      
//       <div className="lContainer">
//         <input
//           type="text"
//           placeholder="email"
//           id="email"
        
//           className="lInput"
//         />
//         <input
//           type="password"
//           placeholder="password"
//           id="password"
//           className="lInput"
//         />
//         <button className="lButton">
//           Login
//         </button>
        
//       </div>
//     </div>
//   );
// };
// export default Login;

import React, { useState } from 'react';
import "./login.css";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      // Make an API call to authenticate the user
      if(email==="moderator@gmail.com"){
        navigate("/moderatorProfile");
       }
      
      console.log('hi')
      const response = await fetch('http://localhost:3000/api/v1/login',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin':true
        },
        body: JSON.stringify({ email, password }),
        //credentials: 'include'
      });
    // console.log("hi")
      if (response.ok) {
        // Handle successful login
        // console.log('hi')
        const data = await response.json();
        const { token, user, accountType } = data;
      
       if(accountType==="NGO"){
          navigate("/creator")
       }else{
           navigate("/student")
       }
     
        console.log('User logged in successfully');
        console.log('Account Type:', accountType);
        console.log('User logged in successfully');
      } else {
        // Handle login error
        console.error('Error logging in');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };


  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="Email"
          id="email"
          className="lInput"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="lInput"
          value={password}
          onChange={handlePasswordChange}
        />
        <button className="lButton" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
