// LecturerSignUp.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './components_styles/LecturerSignUp.css'; 

const LecturerSignUp = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  const handleSendRequest = () => {
    // Implement logic to send access request to admin
    console.log('Send Access Request clicked');
  };

  return (
    <div className="lecturer-signup-container">
      <div className="lecturer-signup-content">
        <h2>Lecturer Sign Up</h2>
        <div className="form-container">
          {/* Input fields for First Name, Last Name, Department, Courses, Units, Phone Number */}
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Department" />
          <input type="text" placeholder="Courses" />
          <input type="text" placeholder="Units" />
          <input type="text" placeholder="Phone Number" />
        </div>
        <div className="button-container">
          <button onClick={handleBack}>Back</button>
          <button onClick={handleSendRequest}>Send Access Request</button>
        </div>
      </div>
    </div>
  );
};

export default LecturerSignUp;
