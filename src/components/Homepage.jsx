import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';

const Homepage = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (email.trim() === '') {
      setErrorMessage('Please enter your email');
    } else {
      // Navigate to student sign-up page
      navigate('/student-signup');
    }
  };

  const handleLogin = () => {
    // Add login functionality
    console.log('Login clicked');
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="homepage-container">
      <div className="homepage-content">
        <h2>Welcome to TekRafiki</h2>
        <div className="radio-container">
          <input type="radio" id="student" name="role" value="student" />
          <label htmlFor="student">Student</label>
          <input type="radio" id="lecturer" name="role" value="lecturer" />
          <label htmlFor="lecturer">Lecturer</label>
        </div>
        <input type="email" placeholder="Enter your email" value={email} onChange={handleChange} />
        <br />
        <input type="password" placeholder="Enter your password" />
        <br />
        <input type="password" placeholder="Confirm your password" />
        <br />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="button-container">
          <button onClick={handleSignUp}>Sign Up</button>
          </div>
          <div>
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
