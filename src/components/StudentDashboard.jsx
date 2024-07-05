import React, { useState } from 'react';
import './components_styles/StudentDashboard.css';
import logo from '../assets/images/logo2.png';
import Preference from './Preference';

const StudentDashboard = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isProfileModalOpen, setProfileModalOpen] = useState(false);
    const [isSettingsModalOpen, setSettingsModalOpen] = useState(false);
    const [isPreferenceModalOpen, setPreferenceModalOpen] = useState(false); // State to control Preference modal visibility
    const [selectedSection, setSelectedSection] = useState("Personalization");
    const [theme, setTheme] = useState("dark");
    const [profileImage, setProfileImage] = useState(null);
    const [profileImagePreview, setProfileImagePreview] = useState(null);
    const [userName, setUserName] = useState("");
    const [userInitials, setUserInitials] = useState("");

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
        setSelectedSection("Personalization");
        setDropdownOpen(false);
    };

    const closeSettingsModal = () => {
        setSettingsModalOpen(false);
    };

    const openPreferenceModal = () => {
        setPreferenceModalOpen(true);
    };

    const closePreferenceModal = () => {
        setPreferenceModalOpen(false);
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
        setUserInitials(e.target.value.split(' ').map(name => name[0]).join(''));
    };

    const handleTelephoneChange = (e) => {
        const input = e.target.value.substring(0, 10);
        const digitsOnly = input.replace(/\D/g, '');
        e.target.value = digitsOnly;
    };

    const handleThemeChange = (e) => {
        setTheme(e.target.value);
    };

    return (
        <div className={`stu-container ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
            <div className="stu-sidebar">
                <div className="stu-logo-container">
                    <img src={logo} alt="Logo" style={{ width: '50px', height: 'auto' }} />
                    <span className="stu-logo-text">TekRafiki_AI</span>
                </div>
                
                <div className="stu-sidebar-item">
                    <button>Units</button>
                </div>
                <div className="stu-sidebar-item">
                    <button onClick={openPreferenceModal}>Preferences</button>
                </div>
                <div className="stu-sidebar-item">
                    <button>Chatbot</button>
                </div>
            </div>
            
            <div className="stu-main-content">
                <header className="stu-header">
                    <div className="stu-profile-container" onClick={toggleDropdown}>
                        <div className="stu-profile-initials">{userInitials}</div>
                        {isDropdownOpen && (
                            <div className="stu-dropdown-menu">
                                <button className="stu-dropdown-item" onClick={openProfileModal}>Profile</button>
                                <button className="stu-dropdown-item" onClick={openSettingsModal}>Settings</button>
                                <button className="stu-dropdown-item">Log Out</button>
                            </div>
                        )}
                    </div>
                </header>
                <main className="stu-main-content-area">
                    <div className="stu-left-section">
                        <h4>Left section</h4>
                        <div>
                            <img src={logo} alt="" style={{ width: 'auto', height: '100px' }} />
                            <p></p>
                        </div>
                    </div>
                    <div className="stu-right-section">
                        <div className="stu-right-upper-section">
                            <h4>Right upper section</h4>
                        </div>
                        <div className="stu-right-lower-section">
                            <h4>Right lower section</h4>
                        </div>
                    </div>
                </main>
            </div>

            {isProfileModalOpen && (
                <div className="stu-modal">
                    <div className="stu-modal-content">
                        <span className="stu-close-button" onClick={closeProfileModal}>&times;</span>
                        <div className="stu-profile-image-container">
                            {profileImagePreview && (
                                <img src={profileImagePreview} alt="Profile" className="stu-profile-image" />
                            )}
                            {!profileImagePreview && (
                                <div className="stu-profile-image-placeholder">No Image</div>
                            )}
                            <input type="file" onChange={handleImageChange} />
                        </div>
                        <div className="stu-profile-form">
                            <h2>Profile</h2>
                            <form>
                                <div className="stu-form-group">
                                    <label>Name:</label>
                                    <input type="text" value={userName} onChange={handleNameChange} />
                                </div>
                                <div className="stu-form-group">
                                    <label>Telephone Number:</label>
                                    <input type="tel" pattern="[0-9]*" maxLength="10" onChange={handleTelephoneChange} />
                                </div>
                                <div className="stu-form-group">
                                    <label>Registration Number:</label>
                                    <input type="text" />
                                </div>
                                <div className="stu-form-group">
                                    <label>Department:</label>
                                    <input type="text" />
                                </div>
                                <button type="submit">Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {isSettingsModalOpen && (
                <div className="stu-modal">
                    <div className="stu-modal-content">
                        <span className="stu-close-button" onClick={closeSettingsModal}>&times;</span>
                        <div className="stu-settings-sidebar">
                            <button className={`stu-settings-button ${selectedSection === "Personalization" ? "active" : ""}`} onClick={() => setSelectedSection("Personalization")}>Personalization</button>
                            <button className={`stu-settings-button ${selectedSection === "Security" ? "active" : ""}`} onClick={() => setSelectedSection("Security")}>Security</button>
                            <button className={`stu-settings-button ${selectedSection === "Account" ? "active" : ""}`} onClick={() => setSelectedSection("Account")}>Account</button>
                        </div>
                        <div className="stu-settings-form">
                            {selectedSection === "Personalization" && (
                                <div className="stu-personalization-section">
                                    <h2>Personalization</h2>
                                    <div className="stu-theme-selection">
                                        <label>Theme:</label>
                                        <select value={theme} onChange={handleThemeChange}>
                                            <option value="dark">Dark</option>
                                            <option value="light">Light</option>
                                        </select>
                                    </div>
                                    <div className="stu-notification-toggle">
                                        <label>Enable Notifications:</label>
                                        <input type="checkbox" />
                                    </div>
                                </div>
                            )}
                            {selectedSection === "Security" && (
                                <div>
                                    <h2>Security</h2>
                                    <div className="stu-form-group">
                                        <label>Password:</label>
                                        <input type="password" />
                                    </div>
                                    <button type="button">Change Password</button>
                                </div>
                            )}
                            {selectedSection === "Account" && (
                                <div className="stu-account-section">
                                    <h2>Account</h2>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {isPreferenceModalOpen && (
                <div className="stu-modal">
                    <div className="stu-modal-content">
                        <span className="stu-close-button" onClick={closePreferenceModal}>&times;</span>
                        <Preference />
                    </div>
                </div>
            )}
        </div>
    );
};

export default StudentDashboard;
