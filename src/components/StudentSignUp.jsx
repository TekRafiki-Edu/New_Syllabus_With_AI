import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerStudent } from '../services/studentService'; // Import the service
import './components_styles/StudentSignUp.css';

const StudentSignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [department, setDepartment] = useState('');
  const [course, setCourse] = useState('');
  const [yearOfStudy, setYearOfStudy] = useState('');
  const [semester, setSemester] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleContinue = async () => {
    if (
      firstName.trim() === '' ||
      lastName.trim() === '' ||
      department.trim() === '' ||
      course.trim() === '' ||
      yearOfStudy.trim() === '' ||
      semester.trim() === '' ||
      phoneNumber.trim() === ''
    ) {
      setErrorMessage('Please fill in all required fields.');
    } else {
      try {
        const studentData = {
          firstName,
          lastName,
          department,
          course,
          yearOfStudy,
          semester,
          phoneNumber
        };
        await registerStudent(studentData); // Call the API service
        navigate('/student-dashboard');
      } catch (error) {
        setErrorMessage('Failed to register. Please try again.');
      }
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="student-signup-container">
      <div className="student-signup-content">
        <h2>Student Sign Up</h2>
        <input
          type="text"
          placeholder="First Name *"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
            setErrorMessage('');
          }}
        />
        <input
          type="text"
          placeholder="Last Name *"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
            setErrorMessage('');
          }}
        />
        <input
          type="text"
          placeholder="Department *"
          value={department}
          onChange={(e) => {
            setDepartment(e.target.value);
            setErrorMessage('');
          }}
        />
        <input
          type="text"
          placeholder="Course *"
          value={course}
          onChange={(e) => {
            setCourse(e.target.value);
            setErrorMessage('');
          }}
        />
        <input
          type="text"
          placeholder="Year of Study *"
          value={yearOfStudy}
          onChange={(e) => {
            setYearOfStudy(e.target.value);
            setErrorMessage('');
          }}
        />
        <input
          type="text"
          placeholder="Semester *"
          value={semester}
          onChange={(e) => {
            setSemester(e.target.value);
            setErrorMessage('');
          }}
        />
        <input
          type="text"
          placeholder="Phone Number *"
          value={phoneNumber}
          onChange={(e) => {
            setPhoneNumber(e.target.value);
            setErrorMessage('');
          }}
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="button-container">
          <button onClick={handleBack}>Back</button>
          <button onClick={handleContinue}>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default StudentSignUp;
