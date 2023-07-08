import './App.css';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from './Home';
import Login from './login';
import Signin from './signin';
import StudentSRP from './studentSRP';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      
      <Route path="/login" element={<Login/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/student" element={<StudentSRP/>}/>

    </Routes>
  </BrowserRouter>
  );
}

export default App;
