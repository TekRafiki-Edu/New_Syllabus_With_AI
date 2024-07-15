import React, { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './components_styles/Curriculum.css';

const Curriculum = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = () => {
        if (selectedFile) {
            // Handle the file upload logic here
            console.log(`Uploading: ${selectedFile.name}`);
        } else {
            console.log("No file selected.");
        }
    };

    return (
        <div className="curriculum-container">
            <h2>Curriculum Upload</h2>
            <div className="upload-section">
                <label className="upload-button" htmlFor="file-upload">
                    <FaArrowUp size={24} />
                </label>
                <input
                    type="file"
                    id="file-upload"
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                />
                {selectedFile && <span>{selectedFile.name}</span>}
                <button onClick={handleUpload} className="upload-action-button">Upload</button>
            </div>
        </div>
    );
};

export default Curriculum;
