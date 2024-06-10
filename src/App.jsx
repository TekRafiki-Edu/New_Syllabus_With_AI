import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Homepage from './components/Homepage';
import StudentSignUp from './components/StudentSignUp'; // Ensure this matches the filename

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/student-signup" element={<StudentSignUp />} />
    </Routes>
  </Router>
);

export default App;
