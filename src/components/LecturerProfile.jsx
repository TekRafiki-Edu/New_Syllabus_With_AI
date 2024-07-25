// src/components/LecturerSignUp.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './components_styles/LecturerProfile.css';

const LecturerProfile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [department, setDepartment] = useState('');
  const [courses, setCourses] = useState('');
  const [units, setUnits] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (
      firstName.trim() === '' ||
      lastName.trim() === '' ||
      department.trim() === '' ||
      courses.trim() === '' ||
      units.trim() === '' ||
      phoneNumber.trim() === ''
    ) {
      setErrorMessage('Please fill in all required fields.');
    } else {
      try {
        const lecturerData = {
          firstName,
          lastName,
          department,
          courses,
          units,
          phoneNumber,
        };
      } catch (error) {
        setErrorMessage('Registration failed. Please try again.');
      }
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="lecturer-signup-container">
      <div className="lecturer-signup-content">
        <h2>Lecturer Sign Up</h2>
        {/* Input fields */}
        <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <input type="text" placeholder="Department" value={department} onChange={(e) => setDepartment(e.target.value)} />
        <input type="text" placeholder="Courses" value={courses} onChange={(e) => setCourses(e.target.value)} />
        <input type="text" placeholder="Units" value={units} onChange={(e) => setUnits(e.target.value)} />
        <input type="text" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="button-container">
          <button onClick={handleBack}>Back</button>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default LecturerProfile;
