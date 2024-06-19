import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Homepage from './components/Homepage';
import StudentSignUp from './components/StudentSignUp'; 
import LecturerSignUp from './components/LecturerSignUp';
import Preference from './components/Preference';
import StudentProfile from './components/StudentProfile';



const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/student-signup" element={<StudentSignUp />} />
      <Route path="/lecturer-signup" element={<LecturerSignUp />} />
      <Route path="/preference" element={<Preference />} />
      <Route path="/student-profile" element={<StudentProfile />} />
   
    </Routes>
  </Router>
);

export default App;
