import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentProfile from './components/StudentProfile'; 
import LecturerSignUp from './components/LecturerSignUp';
import Preference from './components/Preference';
import StudentLogin from './components/StudentLogin';
import LecturerLogin from './components/LecturerLogin';
import ForgotPassword from './components/ForgotPassword';
import StudentDashboard from './components/StudentDashboard';
import LecturerDashboard from './components/LecturerDashboard';
import Chatbot from './components/Chatbot';
import Units from './components/Units';
import AdminDashboard from './components/AdminDashboard';
import Curriculum from './components/Curriculum';
import Kickoff from './components/Kickoff';
import Login  from './components/Login';
import Signup from './components/Signup';
import Chat from './components/Chat';


const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Kickoff />} />
      <Route path="/Chat" element={<Chat />} />
      
      <Route path="/Signup" element={<Signup />} />
      <Route path="/student-profile" element={<StudentProfile />} />
      <Route path="/lecturer-signup" element={<LecturerSignUp />} />
      <Route path="/preference" element={<Preference />} />
      <Route path="/student-login" element={<StudentLogin />} />
      <Route path="/lecturer-login" element={<LecturerLogin />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/student-dashboard" element={<StudentDashboard />} />
      <Route path="/lecturer-dashboard" element={<LecturerDashboard />} />
      <Route path="/chat-bot" element={<Chatbot />} />
      <Route path="/units" element={<Units />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/curriculum" element={<Curriculum />} />
      <Route path="/login" element={<Login />} />
      
   
    </Routes>
  </Router>
);

export default App;
