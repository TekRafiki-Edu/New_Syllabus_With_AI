import React, { useState } from 'react';
import './components_styles/Curriculum.css';

const Curriculum = () => {
  const [radioValue, setRadioValue] = useState('curriculum');
  const [departmentName, setDepartmentName] = useState('');
  const [courseName, setCourseName] = useState('');
  const [documentFormat, setDocumentFormat] = useState('DOCS');

  return (
    <div className="curriculum-container">
      <div className="sidebar">
        <button className="sidebar-button">Profile</button>
        <button className="sidebar-button">School Details</button>
        <button className="sidebar-button">Curriculum</button>
        <button className="sidebar-button">Validation</button>
      </div>
      <div className="main-content">
        <div className="radio-buttons">
          <label>
            <input 
              type="radio" 
              value="curriculum" 
              checked={radioValue === 'curriculum'} 
              onChange={() => setRadioValue('curriculum')} 
            />
            Curriculum
          </label>
          <label>
            <input 
              type="radio" 
              value="department" 
              checked={radioValue === 'department'} 
              onChange={() => setRadioValue('department')} 
            />
            Department
          </label>
        </div>
        <div className="form-group">
          <label>Department Name</label>
          <input 
            type="text" 
            value={departmentName} 
            onChange={(e) => setDepartmentName(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label>Course Name</label>
          <input 
            type="text" 
            value={courseName} 
            onChange={(e) => setCourseName(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label>Document format in:</label>
          <select 
            value={documentFormat} 
            onChange={(e) => setDocumentFormat(e.target.value)}
          >
            <option value="DOCS">DOCS</option>
            <option value="DOCX">DOCX</option>
            <option value="PDF">PDF</option>
          </select>
        </div>
        <button className="upload-button">Upload Curriculum</button>
        <button className="save-button">Save</button>
      </div>
    </div>
  );
};

export default Curriculum;
