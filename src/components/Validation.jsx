import React, { useState, useEffect } from 'react';
import './components_styles/Validation.css';

const Validation = () => {
    const [departments, setDepartments] = useState([]);
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [requests, setRequests] = useState([]);

    // Fetch departments (This is just a placeholder, replace with actual data fetching)
    useEffect(() => {
        const fetchedDepartments = ["Computer Science", "Mathematics", "Physics", "Chemistry"];
        setDepartments(fetchedDepartments);
    }, []);

    // Fetch requests (This is just a placeholder, replace with actual data fetching)
    useEffect(() => {
        const fetchedRequests = [
            { id: 1, name: "John Doe", department: "Computer Science" },
            { id: 2, name: "Jane Smith", department: "Mathematics" }
        ];
        setRequests(fetchedRequests);
    }, []);

    const handleDepartmentChange = (e) => {
        setSelectedDepartment(e.target.value);
    };

    return (
        <div className="validation-container">
            <h2>Validation</h2>
            <div className="validation-form-group">
                <label htmlFor="department">Select Department:</label>
                <select id="department" value={selectedDepartment} onChange={handleDepartmentChange}>
                    <option value="">--Select Department--</option>
                    {departments.map((dept, index) => (
                        <option key={index} value={dept}>{dept}</option>
                    ))}
                </select>
            </div>
            <div className="validation-requests">
                <h3>Access Requests</h3>
                <ul>
                    {requests.map(request => (
                        <li key={request.id}>
                            {request.name} - {request.department}
                            <button>Approve</button>
                            <button>Deny</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Validation;
