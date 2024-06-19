import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LecturerLogin.css';

const LecturerLogin = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (employeeId.trim() === '' || password.trim() === '') {
      setErrorMessage('Please fill in all required fields.');
    } else {
      // Handle the login logic here
      navigate('/lecturer-dashboard');
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="lecturer-login-container">
      <div className="lecturer-login-content">
        <h2>Lecturer Login</h2>
        <input
          type="text"
          placeholder="Employee ID"
          value={employeeId}
          onChange={(e) => {
            setEmployeeId(e.target.value);
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
          <a href="/forgot-password-lecturer">Forgot Password?</a>
        </p>
      </div>
    </div>
  );
};

export default LecturerLogin;
