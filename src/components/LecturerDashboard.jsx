import React, { useState } from 'react';
import './components_styles/LecturerDashboard.css';
import leclogo from '../assets/images/lec-logo.png';

const LecturerDashboard = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isProfileModalOpen, setProfileModalOpen] = useState(false);
    const [isSettingsModalOpen, setSettingsModalOpen] = useState(false);
    const [selectedSection, setSelectedSection] = useState("Personalization");
    const [theme, setTheme] = useState("dark");
    const [profileImage, setProfileImage] = useState(null);
    const [profileImagePreview, setProfileImagePreview] = useState(null);
    const [userName, setUserName] = useState(""); // State to hold the user's name
    const [userInitials, setUserInitials] = useState(""); // State to hold the user's initials

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const openProfileModal = () => {
        setProfileModalOpen(true);
        setDropdownOpen(false);
    };

    const closeProfileModal = () => {
        setProfileModalOpen(false);
    };

    const openSettingsModal = () => {
        setSettingsModalOpen(true);
        setSelectedSection("Personalization"); // Open the personalization section by default
        setDropdownOpen(false);
    };

    const closeSettingsModal = () => {
        setSettingsModalOpen(false);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfileImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleNameChange = (e) => {
        setUserName(e.target.value);
        // Update user initials if a new name is provided
        setUserInitials(e.target.value.split(' ').map(name => name[0]).join(''));
    };

    const handleTelephoneChange = (e) => {
        // Limit input to 10 characters
        const input = e.target.value.substring(0, 10);
        // Remove any non-digit characters
        const digitsOnly = input.replace(/\D/g, '');
        // Update the value in the input field
        e.target.value = digitsOnly;
    };

    const handleThemeChange = (e) => {
        setTheme(e.target.value);
    };

    return (
        <div className="lec-container">
            <div className="lec-header">
                <button className="lec-header-button">Units</button>
                <div className="lec-logo-container">
                    <img src={leclogo} alt="Logo" className="lec-logo" />
                    <span className="lec-logo-text">TekRafiki_AI</span>
                </div>
                <div className="lec-profile-container" onClick={toggleDropdown}>
                    <span className="lec-profile-initials">{userInitials}</span>
                    {isDropdownOpen && (
                        <div className="lec-dropdown-menu">
                            <button className="lec-dropdown-item" onClick={openProfileModal}>Profile</button>
                            <button className="lec-dropdown-item" onClick={openSettingsModal}>Settings</button>
                            <button className="lec-dropdown-item">Logout</button>
                        </div>
                    )}
                </div>
            </div>
            {/* Main Content Area */}
            <div className="lec-main-content">
                {/* Replace this with your actual main content */}
                <h1>Welcome to the Lecturer Dashboard</h1>
                <p>Here is where the main content will appear.</p>
            </div>
            {/* Profile Modal */}
            {isProfileModalOpen && (
                <div id="lec-modal">
                    <div id="lec-modal-content">
                        <span id="lec-close-button" onClick={closeProfileModal}>&times;</span>
                        <div id="lec-profile-image-container">
                            {profileImagePreview && (
                                <img src={profileImagePreview} alt="Profile" id="lec-profile-image" />
                            )}
                            {!profileImagePreview && (
                                <div id="lec-profile-image-placeholder">No Image</div>
                            )}
                            <input type="file" onChange={handleImageChange} />
                        </div>
                        <div id="lec-profile-form">
                            <h2>Profile</h2>
                            <form>
                                <div id="lec-form-group">
                                    <label>Name:</label>
                                    <input type="text" value={userName} onChange={handleNameChange} />
                                </div>
                                <div id="lec-form-group">
                                    <label>Telephone Number:</label>
                                    <input type="tel" pattern="[0-9]*" maxLength="10" onChange={handleTelephoneChange} />
                                </div>
                                <div id="lec-form-group">
                                    <label>Employee ID:</label>
                                    <input type="text" />
                                </div>
                                <div id="lec-form-group">
                                    <label>Department:</label>
                                    <input type="text" />
                                </div>
                                <button type="submit">Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* Settings Modal */}
            {isSettingsModalOpen && (
                <div id="lec-modal">
                    <div id="lec-modal-content">
                        <span id="lec-close-button" onClick={closeSettingsModal}>&times;</span>
                        <div id="lec-settings-sidebar">
                            <button className={`lec-settings-button ${selectedSection === "Personalization" ? "active" : ""}`} onClick={() => setSelectedSection("Personalization")}>Personalization</button>
                            <button className={`lec-settings-button ${selectedSection === "Security" ? "active" : ""}`} onClick={() => setSelectedSection("Security")}>Security</button>
                            <button className={`lec-settings-button ${selectedSection === "Account" ? "active" : ""}`} onClick={() => setSelectedSection("Account")}>Account</button>
                        </div>
                        <div id="lec-settings-form">
                            {/* Content for personalization, security, and account goes here */}
                            {selectedSection === "Personalization" && (
                                <div id="lec-personalization-section">
                                    <h2>Personalization</h2>
                                    <div id="lec-theme-selection">
                                        <label>Theme:</label>
                                        <select value={theme} onChange={handleThemeChange}>
                                            <option value="dark">Dark</option>
                                            <option value="light">Light</option>
                                        </select>
                                    </div>
                                    <div id="lec-notification-toggle">
                                        <label>Enable Notifications:</label>
                                        <input type="checkbox" />
                                    </div>
                                </div>
                            )}
                            {selectedSection === "Security" && (
                                <div>
                                    <h2>Security</h2>
                                    <div id="lec-form-group">
                                        <label>Password:</label>
                                        <input type="password" />
                                    </div>
                                    <button type="button">Change Password</button>
                                </div>
                            )}
                            {selectedSection === "Account" && (
                                <div id="lec-account-section">
                                    <h2>Account</h2>
                                    {/* Account settings go here */}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LecturerDashboard;
