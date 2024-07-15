import React, { useState } from 'react';
import './components_styles/AdminDashboard.css';
import logo from '../assets/images/logo2.png';
import SchoolDetails from './SchoolDetails';


const AdminDashboard = () => {
    const [isProfileModalOpen, setProfileModalOpen] = useState(false);
    const [activeContent, setActiveContent] = useState('school');
    const [name, setName] = useState("");
    const [telephone, setTelephone] = useState("");
    const [department, setDepartment] = useState("");
    const [employeeId, setEmployeeId] = useState("");

    const openProfileModal = () => {
        setProfileModalOpen(true);
    };

    const closeProfileModal = () => {
        setProfileModalOpen(false);
    };

    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <div className="admin-logo-container">
                    <img src={logo} alt="Logo" style={{ width: '50px', height: 'auto' }} />
                    <span className="admin-logo-text">TekRafiki_Admin</span>
                </div>
                <div className="admin-sidebar-item">
                    <button onClick={() => setActiveContent('school')}>School Details</button>
                </div>
                <div className="admin-sidebar-item">
                    <button onClick={() => setActiveContent('curriculum')}>Curriculum</button>
                </div>
                <div className="admin-sidebar-item">
                    <button onClick={() => setActiveContent('validation')}>Validation</button>
                </div>
            </div>
            
            <div className="admin-main-content">
                <header className="admin-header">
                    <div className="admin-profile-container" onClick={openProfileModal}>
                        <div className="admin-profile-circle">
                            <span className="admin-profile-initials">{name ? name.charAt(0) : "A"}</span>
                        </div>
                    </div>
                </header>
                <main className="admin-main-content-area">
                    {activeContent === 'school' && <SchoolDetails />}
                    {/* Add other content components as needed */}
                </main>
            </div>

            {isProfileModalOpen && (
                <div className="admin-modal">
                    <div className="admin-modal-content">
                        <span className="admin-close-button" onClick={closeProfileModal}>&times;</span>
                        <div className="admin-profile-form">
                            <h2>Admin Profile</h2>
                            <form>
                                <div className="admin-form-group">
                                    <label>Name:</label>
                                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="admin-form-group">
                                    <label>Telephone Number:</label>
                                    <input type="tel" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
                                </div>
                                <div className="admin-form-group">
                                    <label>Department:</label>
                                    <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} />
                                </div>
                                <div className="admin-form-group">
                                    <label>Employee ID:</label>
                                    <input type="text" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} />
                                </div>
                                <button type="button" onClick={closeProfileModal}>Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;
