import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './components_styles/Login.css';

const Login = () => {
  const [role, setRole] = useState('student'); // Default to 'student'

  return (
    <div className="login-container">
      <div className="login-content">
        <h1 className="login-title">Login</h1>
        <div className="login-toggle">
          <button
            className={`login-toggle-button ${role === 'student' ? 'active' : ''}`}
            onClick={() => setRole('student')}
          >
            Student
          </button>
          <button
            className={`login-toggle-button ${role === 'lecturer' ? 'active' : ''}`}
            onClick={() => setRole('lecturer')}
          >
            Lecturer
          </button>
        </div>
        <div className="login-form">
          <form>
            {role === 'student' && (
              <>
                <div className="form-group">
                  <label htmlFor="regNo">Registration Number:</label>
                  <input type="text" id="regNo" placeholder="Enter your registration number" />
                </div>
                <div className="form-group">
                  <label htmlFor="studentPassword">Password:</label>
                  <input type="password" id="studentPassword" placeholder="Enter your password" />
                </div>
              </>
            )}
            {role === 'lecturer' && (
              <>
                <div className="form-group">
                  <label htmlFor="empNo">Employee Number:</label>
                  <input type="text" id="empNo" placeholder="Enter your employee number" />
                </div>
                <div className="form-group">
                  <label htmlFor="lecturerPassword">Password:</label>
                  <input type="password" id="lecturerPassword" placeholder="Enter your password" />
                </div>
              </>
            )}
            <button type="submit" className="login-button">Login</button>
            <Link to="/signup" className="signup-link">Don't have an account? Sign Up</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
