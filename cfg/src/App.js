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
import VideoPlayer from './moderatorReview';
import ModeratorProfile from './ModeratorProfile';
import CreatorForm from './contentCreator';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      
      <Route path="/login" element={<Login/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/student" element={<StudentSRP/>}/>
      <Route path='/moderator' element={<VideoPlayer/>}/>
      <Route path='/moderatorProfile' element={<ModeratorProfile/>}/>
      <Route path='/creator' element={<CreatorForm/>}/>

    </Routes>
  </BrowserRouter>
  );
}

export default App;
