import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './components_styles/kickoff.css';
import logo from '../assets/images/logo2.png';
import about from '../assets/images/about us.jpg';
import student from '../assets/images/students photo.webp';
import jhub from  '../assets/images/JHUB Africa.png';
import jkuat from  '../assets/images/JKUAT.png';
import logo2 from  '../assets/images/logo2.png';

const Kickoff = () => {
  return (
    <div className="kickoff-container">
      <header className="kickoff-header">
        <div className="logo-container">
          <img src={logo} alt="Tekrafiki Logo" className="kickoff-logo" />
          <h1 className="kickoff-title">TEKRAFIKI_A1</h1>
        </div>
        <nav className="kickoff-nav">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About Us</a>
          <a href="#team" className="nav-link">Team</a>
        </nav>
      </header>
      <main className="kickoff-main">
        <div className="kickoff-image-container">
          <img src="/path/to/your/image.png" alt="AI Assistant" className="kickoff-image" />
        </div>
        <div className="kickoff-content">
          <h2 className="kickoff-heading">YOUR NO.1 AI ASSISTANT</h2>
          <p className="kickoff-description">Improving the implementation of the syllabus in the Department of Computing</p>
          <div className="kickoff-buttons">
            <button className="kickoff-button">Login</button>
            <button className="kickoff-button">Sign Up</button>
          </div>
        </div>
      </main>
      <section className="about-us-section" id="about">
        <h2 className="about-us-heading">ABOUT US</h2>
        <div className="about-us-content">
          <p className="about-us-description">
            We are a robust AI-driven platform that streamlines curriculum design processes and enhances educational content. It involves leveraging Large Language Models to develop an AI-driven platform that will assist in curriculum design by suggesting relevant topics, subtopics, and detailed content coverage. It will also analyze current technological trends and educational standards to ensure the syllabus remains cutting-edge and comprehens
          </p>
          <div className="about-us-images">
            <img src="/path/to/about_image1.png" alt="Curriculum Design" className="about-us-image" />
            <img src="/path/to/about_image2.png" alt="Technological Trends" className="about-us-image" />
          </div>
        </div>
      </section>
      <section className="customer-service-section">
        <h2 className="customer-service-heading">OUR CUSTOMER SERVICE</h2>
        <div className="customer-service-content">
          <div className="customer-service-card">
            <img src={student} alt="Students" className="customer-service-image" />
            <h3>STUDENTS</h3>
            <p>Offer up to date learning resources for Lecturers using AI</p>
          </div>
          <div className="customer-service-card">
            <img src="/mnt/data/cap5.PNG" alt="Lecturers" className="customer-service-image" />
            <h3>LECTURERS</h3>
            <p>Offer personalized learning and AI support for Students</p>
          </div>
          <div className="customer-service-card">
            <img src="/mnt/data/cap5.PNG" alt="Academic Institutions" className="customer-service-image" />
            <h3>ACADEMIC INSTITUTIONS</h3>
            <p>Introduce AI Assistants to Students and Lecturers for efficiency in teaching and learning</p>
          </div>
        </div>
      </section>
      <section className="team-section" id="team">
        <h2 className="team-heading">TEAM MEMBERS</h2>
        <div className="team-content">
          <div className="team-card">
            <img src="/mnt/data/cap6.PNG" alt="Team Member" className="team-image" />
            <h3>Dr. Lawrence Nderu</h3>
            <p>Principal Administrator</p>
          </div>
          <div className="team-card">
            <img src="/mnt/data/cap6.PNG" alt="Team Member" className="team-image" />
            <h3>Erenest Kiprop</h3>
            <p>Research Advisor</p>
          </div>
          <div className="team-card">
            <img src="/mnt/data/cap6.PNG" alt="Team Member" className="team-image" />
            <h3>Teresiah Njeri</h3>
            <p>Project Manager/Front-end Developer</p>
          </div>
          <div className="team-card">
            <img src="/mnt/data/cap6.PNG" alt="Team Member" className="team-image" />
            <h3>Joel Ng'ang'a</h3>
            <p>Front-end Developer</p>
          </div>
          <div className="team-card">
            <img src="/mnt/data/cap6.PNG" alt="Team Member" className="team-image" />
            <h3>Vanessa Kalondu</h3>
            <p>UI/UX Designer</p>
          </div>
          <div className="team-card">
            <img src="/mnt/data/cap6.PNG" alt="Team Member" className="team-image" />
            <h3>Viona Njenga</h3>
            <p>UI/UX Designer</p>
          </div>
          <div className="team-card">
            <img src="/mnt/data/cap6.PNG" alt="Team Member" className="team-image" />
            <h3>Nimrod Mutisya</h3>
            <p>Backend Developer</p>
          </div>
          <div className="team-card">
            <img src="/mnt/data/cap6.PNG" alt="Team Member" className="team-image" />
            <h3>Richard Karanu</h3>
            <p>Backend Developer</p>
          </div>
        </div>
      </section>
      <section className="contact-section">
        <h2 className="contact-heading">GET IN TOUCH TODAY!</h2>
        <div className="contact-content">
          <p>tekrafiki@gmail.com</p>
          <div className="contact-logos">
            <img src="/mnt/data/cap7.PNG" alt="Logo 1" className="contact-logo" />
            <img src="/mnt/data/cap7.PNG" alt="Logo 2" className="contact-logo" />
            <img src="/mnt/data/cap7.PNG" alt="Logo 3" className="contact-logo" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kickoff;
