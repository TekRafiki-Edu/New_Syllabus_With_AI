import React, { useState, useEffect } from 'react';
import './components_styles/Validation.css';

const Validation = () => {
    const [requests, setRequests] = useState([]);

    // Fetch requests (Replace with actual data fetching for lecturer sign-ups)
    useEffect(() => {
        const fetchedRequests = [
            { id: 1, name: "John Doe", email: "john.doe@example.com" },
            { id: 2, name: "Jane Smith", email: "jane.smith@example.com" }
        ];
        setRequests(fetchedRequests);
    }, []);

    return (
        <div className="validation-container">
            <h2>Validation</h2>
            <div className="validation-requests">
                <h3>Access Requests</h3>
                <ul>
                    {requests.map(request => (
                        <li key={request.id}>
                            {request.name} - {request.email}
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
