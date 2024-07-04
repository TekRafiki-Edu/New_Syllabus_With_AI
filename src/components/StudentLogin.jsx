import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './components_styles/StudentLogin.css';

const StudentLogin = () => {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (registrationNumber.trim() === '' || password.trim() === '') {
      setErrorMessage('Please fill in all required fields.');
    } else {
      // Handle the login logic here
      navigate('/student-dashboard');
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
        {/*<Link to="/forgot-password-student" relative="path"></Link>*/}
        </p>
      </div>
    </div>
  );
};

export default StudentLogin;
