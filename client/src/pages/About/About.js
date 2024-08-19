import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import ProfileViewer from '../../components/Profile/profileViewer';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <h2 className="about-heading">About Me</h2>
        <div className="about-content">
          <ProfileViewer className="profile-viewer" />
          <div className="about-text">
            <p>
              Hello! I'm <strong>Manish Yelam</strong>, a passionate MERN Stack developer with a love for creating dynamic and responsive web applications. With a background in Computer Science, I have developed a strong foundation in various programming languages and technologies.
            </p>
            <p>
              Over the years, I have worked on numerous projects that have helped me hone my skills in frontend and backend development. My expertise includes working with technologies like HTML, CSS, JavaScript, React, Node.js, and more.
            </p>
            <p>
              I am constantly learning and keeping up with the latest industry trends to ensure that I can provide the best solutions to my clients and projects. When I'm not coding, I enjoy <strong>Reading Books</strong> and <strong>Playing Cricket</strong>.
            </p>
            <p>
              Feel free to browse through my portfolio to see some of my work, and don't hesitate to reach out if you'd like to collaborate or have any questions!
            </p>
            <div className="about-buttons">
              <Link to="/contact" className="btn">Contact Me</Link>
              <Link to="/resume-viewer" className="btn btn-secondary">Resume / CV</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
