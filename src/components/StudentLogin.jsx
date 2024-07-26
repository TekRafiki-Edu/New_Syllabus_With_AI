import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/axios';  // Ensure you have the correct import
import './components_styles/StudentLogin.css';

const StudentLogin = () => {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (registrationNumber.trim() === '' || password.trim() === '') {
      setErrorMessage('Please fill in all required fields.');
    } else {
      try {
        const response = await api.post('/api/users/login/student/', {
          registration_number: registrationNumber,
          password,
        });

        if (response.data.success) {
          // Navigate to student dashboard or other relevant page
          navigate('/student-dashboard');
        } else {
          setErrorMessage(response.data.error || 'An error occurred. Please try again.');
        }
      } catch (error) {
        if (error.response && error.response.data.error) {
          setErrorMessage(error.response.data.error);
        } else {
          setErrorMessage('An error occurred. Please try again.');
        }
      }
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="student-login-container">
      <div className="student-login-content">
        <h2>Student Login</h2>
        <input
          type="text"
          placeholder="Registration Number"
          value={registrationNumber}
          onChange={(e) => {
            setRegistrationNumber(e.target.value);
            setErrorMessage('');
          }}
        />
        <br />
        <div className="password-container">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="toggle-password" onClick={toggleShowPassword}>
            {showPassword ? '🙈' : '👁️'}
          </span>
        </div>
        <br />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="button-container">
          <button onClick={handleLogin}>Login</button>
        </div>
        <p className="forgot-password">
          <a href="/forgot-password-student">Forgot Password?</a>
        </p>
      </div>
    </div>
  );
};

export default StudentLogin;
