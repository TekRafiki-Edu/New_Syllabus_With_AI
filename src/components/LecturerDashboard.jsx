// src/components/Lecturer.jsx
import React, { useState } from 'react';
import './components_styles/Lecturer.css';
import logo from '../assets/images/LOGO1_temp.png';

const LecturerProfile = () => {
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
    <div className="lecturer-container">
      <div className="header">
        <button className="header-button">Units</button>
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
          <span className="logo-text">TekRafiki</span>
        </div>
        <div className="profile-container" onClick={toggleDropdown}>
          <span className="profile-initials">{userInitials}</span>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <button className="dropdown-item" onClick={openProfileModal}>Profile</button>
              <button className="dropdown-item" onClick={openSettingsModal}>Settings</button>
              <button className="dropdown-item">Logout</button>
            </div>
          )}
        </div>
      </div>

      {/* Profile Modal */}
      {isProfileModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close-button" onClick={closeProfileModal}>&times;</span>
                        <div className="profile-image-container">
                            {profileImagePreview && (
                                <img src={profileImagePreview} alt="Profile" className="profile-image" />
                            )}
                            {!profileImagePreview && (
                                <div className="profile-image-placeholder">No Image</div>
                            )}
                            <input type="file" onChange={handleImageChange} />
                        </div>
                        <div className="profile-form">
                            <h2>Profile</h2>
                            <form>
                                <div className="form-group">
                                    <label>Name:</label>
                                    <input type="text" value={userName} onChange={handleNameChange} />
                                </div>
                                <div className="form-group">
                                    <label>Telephone Number:</label>
                                    <input type="tel" pattern="[0-9]*" maxLength="10" onChange={handleTelephoneChange} />
                                </div>
                                <div className="form-group">
                                    <label>Employee ID:</label>
                                    <input type="text" />
                                </div>
                                <div className="form-group">
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
                <div className="modal">
                    <div className="modal-content">
                        <span className="close-button" onClick={closeSettingsModal}>&times;</span>
                        <div className="settings-sidebar">
                            <button className={`settings-button ${selectedSection === "Personalization" ? "active" : ""}`} onClick={() => setSelectedSection("Personalization")}>Personalization</button>
                            <button className={`settings-button ${selectedSection === "Security" ? "active" : ""}`} onClick={() => setSelectedSection("Security")}>Security</button>
                            <button className={`settings-button ${selectedSection === "Account" ? "active" : ""}`} onClick={() => setSelectedSection("Account")}>Account</button>
                        </div>
                        <div className="settings-form">
                            {/* Content for personalization, security, and account goes here */}
                            {selectedSection === "Personalization" && (
                                <div className="personalization-section">
                                    <h2>Personalization</h2>
                                    <div className="theme-selection">
                                        <label>Theme:</label>
                                        <select value={theme} onChange={handleThemeChange}>
                                            <option value="dark">Dark</option>
                                            <option value="light">Light</option>
                                        </select>
                                    </div>
                                    <div className="notification-toggle">
                                        <label>Enable Notifications:</label>
                                        <input type="checkbox" />
                                    </div>
                                </div>
                            )}
                              {selectedSection === "Security" && (
                                  <div>
                                      <h2>Security</h2>
                                      <div className="form-group">
                                          <label>Password:</label>
                                          <input type="password" />
                                      </div>
                                      <button type="button">Change Password</button>
                                  </div>
                              )}
                          
                            {selectedSection === "Account" && (
                                <div className="account-section">
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

export default LecturerProfile;

