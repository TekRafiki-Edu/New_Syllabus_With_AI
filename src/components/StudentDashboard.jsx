import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './components_styles/StudentDashboard.css';
import logo from '../assets/images/logo2.png';
import Units from './Units'; 


const StudentProfile= () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isProfileModalOpen, setProfileModalOpen] = useState(false);
    const [isSettingsModalOpen, setSettingsModalOpen] = useState(false);
    const [isPreferencesModalOpen, setPreferencesModalOpen] = useState(false);
    const [selectedSection, setSelectedSection] = useState("Personalization");
    const [theme, setTheme] = useState("dark");
    const [profileImage, setProfileImage] = useState(null);
    const [profileImagePreview, setProfileImagePreview] = useState(null);
    const [userName, setUserName] = useState("");
    const [userInitials, setUserInitials] = useState("");
    const [showUnits, setShowUnits] = useState(false); // State for Units component visibility
    const [showChatbot, setShowChatbot] =useState(false);
    const navigate = useNavigate();

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

    const openPreferencesModal = () => {
        setPreferencesModalOpen(true);
    };

    const closePreferencesModal = () => {
        setPreferencesModalOpen(false);
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

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Preferences submitted');
    };

    const toggleUnits = () => {
        setShowUnits(!showUnits);
    };

    const goToChatbot = () => {
        navigate('/chat-bot');
    };

    return (
        <div className={`stu-container ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
            <div className="stu-sidebar">
                <div className="stu-logo-container">
                    <img src={logo} alt="Logo" style={{ width: '50px', height: 'auto' }} />
                    <span className="stu-logo-text">TekRafiki_AI</span>
                </div>
                
                <div className="stu-sidebar-item">
                    <button onClick={toggleUnits}>Units</button>
                </div>
                <div className="stu-sidebar-item">
                    <button onClick={openPreferencesModal}>Preferences</button>
                </div>
                <div className="stu-sidebar-item">
                    <button onClick={goToChatbot}>Chatbot</button>
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
                        {/* Left section content goes here */}
                        {showUnits && <Units />}
                    </div>
                    <div className="stu-right-section">
                        <div className="stu-right-upper-section">
                            <h4>Right upper section</h4>
                            {/* Right-upper section content goes here */}
                        </div>
                        <div className="stu-right-lower-section">
                            <h4>right lower section</h4>
                            {/* Right-lower section content goes here */}
                        </div>
                    </div>
                </main>
            </div>

             {/* Conditionally render Units and Chatbot components */}
             

            {/* Modals */}
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
                                    <label>First Name:</label>
                                    <input type="text" value={userName} onChange={handleNameChange} />
                                </div>
                                <div className="stu-form-group">
                                    <label>Last Name:</label>
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
                                <div className="stu-form-group">
                                    <label>Year of Study:</label>
                                    <input type="text" />
                                </div>
                                <div className="stu-form-group">
                                    <label>Semester:</label>
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

            {isPreferencesModalOpen && (
                <div className="stu-modal">
                    <div className="stu-modal-content">
                        <span className="stu-close-button" onClick={closePreferencesModal}>&times;</span>
                        <div className="stu-preferences-form">
                            <h2>Preferences</h2>
                            {/* Preferences form content goes here */}
                            <form onSubmit={handleSubmit}>
                                {/* Feedback Frequency */}
                                <div className="stu-question">
                                    <p><strong>How often would you like to receive feedback on your progress?</strong></p>
                                    <div className="stu-options">
                                        <label>
                                            <input type="radio" name="feedback" value="after_lesson" />
                                            After each lesson
                                        </label>
                                        <br />
                                        <label>
                                            <input type="radio" name="feedback" value="weekly" />
                                            Weekly
                                        </label>
                                        <br />
                                        <label>
                                            <input type="radio" name="feedback" value="monthly" />
                                            Monthly
                                        </label>
                                    </div>
                                </div>

                                {/* Assessments Preferences */}
                                <div className="stu-question">
                                    <p><strong>Which types of assessments do you prefer?</strong></p>
                                    <div className="stu-options">
                                        <label>
                                            <input type="checkbox" name="assessments" value="quizzes" />
                                            Quizzes
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" name="assessments" value="projects" />
                                            Projects
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" name="assessments" value="assignments" />
                                            Written assignments
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" name="assessments" value="code_challenges" />
                                            Code challenges
                                        </label>
                                    </div>
                                </div>

                                {/* Learning Materials Preferences */}
                                <div className="stu-question">
                                    <p><strong>What types of learning materials do you prefer?</strong></p>
                                    <div className="stu-options">
                                        <label>
                                            <input type="checkbox" name="learning_materials" value="video_tutorials" />
                                            Video tutorials
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" name="learning_materials" value="text_articles" />
                                            Text-based articles
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" name="learning_materials" value="interactive_exercises" />
                                            Interactive exercises
                                        </label>
                                    </div>
                                </div>

                                {/* Content Complexity Preferences */}
                                <div className="stu-question">
                                    <p><strong>What level of content complexity do you prefer?</strong></p>
                                    <div className="stu-options">
                                        <label>
                                            <input type="radio" name="content_complexity" value="beginner_friendly" />
                                            Beginner-friendly
                                        </label>
                                        <br />
                                        <label>
                                            <input type="radio" name="content_complexity" value="intermediate_level" />
                                            Intermediate level
                                        </label>
                                        <br />
                                        <label>
                                            <input type="radio" name="content_complexity" value="advanced_level" />
                                            Advanced level
                                        </label>
                                        <br />
                                        <label>
                                            <input type="radio" name="content_complexity" value="customizable" />
                                            Customizable based on my progress
                                        </label>
                                    </div>
                                </div>

                                {/* Study Resources Preferences */}
                                <div className="stu-question">
                                    <p><strong>Which types of study resources do you prefer?</strong></p>
                                    <div className="stu-options">
                                        <label>
                                            <input type="checkbox" name="study_resources" value="reference_books_articles" />
                                            Reference books and articles
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" name="study_resources" value="flashcards_quick_guides" />
                                            Flashcards and quick guides
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" name="study_resources" value="online_courses" />
                                            Online courses
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" name="study_resources" value="youtube_videos" />
                                            Youtube video links
                                        </label>
                                    </div>
                                </div>

                                {/* Real World Examples Preferences */}
                                <div className="stu-question">
                                    <p><strong>How helpful are real-world examples for your learning?</strong></p>
                                    <div className="stu-options">
                                        <label>
                                            <input type="radio" name="real_world_examples" value="very_helpful" />
                                            Very helpful
                                        </label>
                                        <br />
                                        <label>
                                            <input type="radio" name="real_world_examples" value="somewhat_helpful" />
                                            Somewhat helpful
                                        </label>
                                        <br />
                                        <label>
                                            <input type="radio" name="real_world_examples" value="neutral" />
                                            Neutral
                                        </label>
                                        <br />
                                        <label>
                                            <input type="radio" name="real_world_examples" value="not_helpful" />
                                            Not helpful
                                        </label>
                                    </div>
                                </div>

                                {/* Pace Adjustment Preferences */}
                                <div className="stu-question">
                                    <p><strong>Do you prefer adaptive or fixed pacing for your learning?</strong></p>
                                    <div className="stu-options">
                                        <label>
                                            <input type="radio" name="pace_adjustment" value="adaptive_pacing" />
                                            Adaptive pacing
                                        </label>
                                        <br />
                                        <label>
                                            <input type="radio" name="pace_adjustment" value="fixed_pace" />
                                            Fixed pace
                                        </label>
                                    </div>
                                </div>

                                {/* Assessment Types Preferences */}
                                <div className="stu-question">
                                    <p><strong>Which types of assessments do you prefer?</strong></p>
                                    <div className="stu-options">
                                        <label>
                                            <input type="checkbox" name="assessment_types" value="multiple_choice_quizzes" />
                                            Multiple-choice quizzes
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" name="assessment_types" value="open_ended_questions" />
                                            Open-ended questions
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" name="assessment_types" value="real_world_projects" />
                                            Real-world projects
                                        </label>
                                    </div>
                                </div>

                                {/* Support Materials Preferences */}
                                <div className="stu-question">
                                    <p><strong>Which types of support materials do you prefer?</strong></p>
                                    <div className="stu-options">
                                        <label>
                                            <input type="checkbox" name="support_materials" value="detailed_documentation" />
                                            Detailed documentation
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" name="support_materials" value="step_by_step_guides" />
                                            Step-by-step guides
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" name="support_materials" value="faqs_help_sections" />
                                            FAQs and help sections
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" name="support_materials" value="example_codes_templates" />
                                            Example codes and templates
                                        </label>
                                    </div>
                                </div>

                                {/* Button Container */}
                                <div className="stu-button-container">
                                    <button type="submit" className="stu-done-button">Done</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StudentProfile;
