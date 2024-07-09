import React from 'react';
import './components_styles/Units.css'; // Add your styling for Units component

const Units = () => {
    const units = [
        { id: 1, name: 'Unit 1: Introduction to Computing' },
        { id: 2, name: 'Unit 2: Algorithms and Data Structures' },
        { id: 3, name: 'Unit 3: Web Development' },
        // Add more units as needed
    ];

    const handleUnitSelect = (unit) => {
        // Handle unit selection logic here (e.g., navigate to unit details)
        console.log(`Selected Unit: ${unit.name}`);
    };

    return (
        <div className="units-container">
            <h2>Units</h2>
            <ul className="units-list">
                {units.map(unit => (
                    <li key={unit.id} onClick={() => handleUnitSelect(unit)}>{unit.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Units;
