import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Homepage from './components/Homepage';
import StudentSignUp from './components/StudentSignUp'; 
import LecturerSignUp from './components/LecturerSignUp';
import Preference from './components/Preference';
import StudentLogin from './components/StudentLogin';
import LecturerLogin from './components/LecturerLogin';
import ForgotPassword from './components/ForgotPassword';




const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/student-signup" element={<StudentSignUp />} />
      <Route path="/lecturer-signup" element={<LecturerSignUp />} />
      <Route path="/preference" element={<Preference />} />
      <Route path="/student-login" element={<StudentLogin />} />
      <Route path="/lecturer-login" element={<LecturerLogin />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    
   
   
    </Routes>
  </Router>
);

export default App;
