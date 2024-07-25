import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import api from '../utils/axios'; // Corrected import path
import './components_styles/Homepage.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [role, setRole] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignUp = async () => {
    setErrorMessage('');
    setSuccessMessage('');

    if (email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    if (role === 'student' && registrationNumber.trim() === '') {
      setErrorMessage('Please enter your registration number.');
      return;
    }

    if (role === 'lecturer' && employeeId.trim() === '') {
      setErrorMessage('Please enter your employee ID.');
      return;
    }

    const userData = {
      email,
      user_type: role,
      password,
      student_id: role === 'student' ? registrationNumber : undefined,
      employee_id: role === 'lecturer' ? employeeId : undefined,
    };
    console.log(userData);

    try {
      const response = await api.post('/api/users/register/', userData);
      if (response.data.success) {
        setSuccessMessage('User registered successfully.');
        navigate(role === 'student' ? '/student-profile' : '/lecturer-signup');
      }
    } catch (error) {
      if (error.response && error.response.data.error) {
        setErrorMessage(error.response.data.error);
      } else {
        setErrorMessage('An error occurred. Please try again.');
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
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter your registration number *"
              value={registrationNumber}
              onChange={(e) => {
                setRegistrationNumber(e.target.value);
                setErrorMessage('');
              }}
            />
          </div>
        )}
        {role === 'lecturer' && (
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter your employee ID *"
              value={employeeId}
              onChange={(e) => {
                setEmployeeId(e.target.value);
                setErrorMessage('');
              }}
            />
          </div>
        )}
        <div className="form-group">
          <input
            type="email"
            placeholder="Enter your email *"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrorMessage('');
            }}
          />
        </div>
        <div className="form-group password-container">
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
        <div className="form-group password-container">
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
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <div className="button-container">
          <button onClick={handleSignUp}>Sign Up</button>
        </div>
        <p className="login-prompt">
          Already have an account?{' '}
          <Link to="/student-login">Log in as Student</Link>
          <p>  OR </p>
          <a href="/lecturer-login">Lecturer Login</a>.
        </p>
      </div>
    </div>
  );
};

export default Signup;
