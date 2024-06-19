import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';

const Homepage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [role, setRole] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignUp = () => {
    if (email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
      setErrorMessage('Please fill in all required fields.');
    } else if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
    } else if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
    } else {
      if (role === 'student') {
        if (registrationNumber.trim() === '') {
          setErrorMessage('Please enter your registration number.');
          return;
        }
        navigate('/student-signup');
      } else if (role === 'lecturer') {
        if (employeeId.trim() === '') {
          setErrorMessage('Please enter your employee ID.');
          return;
        }
        navigate('/lecturer-signup');
      } else {
        setErrorMessage('Please select a role.');
      }
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="homepage-container">
      <div className="homepage-content">
        <h2>Welcome to TekRafiki</h2>
        <p>Please sign up to access our platform.</p>
        <div className="radio-container">
          <input
            type="radio"
            id="student"
            name="role"
            value="student"
            onChange={(e) => setRole(e.target.value)}
          />
          <label htmlFor="student">Student</label>
          <input
            type="radio"
            id="lecturer"
            name="role"
            value="lecturer"
            onChange={(e) => setRole(e.target.value)}
          />
          <label htmlFor="lecturer">Lecturer</label>
        </div>
        
        {role === 'student' && (
          <input
            type="text"
            placeholder="Enter your registration number *"
            value={registrationNumber}
            onChange={(e) => {
              setRegistrationNumber(e.target.value);
              setErrorMessage('');
            }}
          />
        )}
        {role === 'lecturer' && (
          <input
            type="text"
            placeholder="Enter your employee ID *"
            value={employeeId}
            onChange={(e) => {
              setEmployeeId(e.target.value);
              setErrorMessage('');
            }}
          />
        )}
        <input
          type="email"
          placeholder="Enter your email *"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setErrorMessage('');
          }}
        />
        <br />
        <div className="password-container">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password *"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="toggle-password" onClick={toggleShowPassword}>
            {showPassword ? '🙈' : '👁️'}
          </span>
        </div>
        <br />
        <div className="password-container">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Confirm your password *"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <span className="toggle-password" onClick={toggleShowPassword}>
            {showPassword ? '🙈' : '👁️'}
          </span>
        </div>
        <br />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="button-container">
          <button onClick={handleSignUp}>Sign Up</button>
        </div>
        <p className="login-prompt">
          Already have an account?{' '}
          <a href="/student-login">Student Login</a> or{' '}
          <a href="/lecturer-login">Lecturer Login</a>.
        </p>
      </div>
    </div>
  );
};

export default Homepage;
