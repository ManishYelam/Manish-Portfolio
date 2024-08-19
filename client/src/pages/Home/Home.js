// client/src/pages/Home/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import TypedAnimation from '../../components/TypedAnimation/TypedAnimation';
import ProfileViewer from '../../components/Profile/profileViewer';
import Projects from '../Projects/Projects';
import SkillList from '../../components/SkillList/SkillList';

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <div className="intro">
          <ProfileViewer />
          <h1>Hi, I'm Manish Yelam</h1>
          <p className="tagline"><TypedAnimation/></p>
          
          <p>Hello, I'm Manish Yelam, a passionate web developer with a keen interest in creating responsive and user-friendly websites. My journey in the world of web development began a smart and beautiful. I am always eager to learn and adapt to new technologies. My goal is to evelop a career in IT sector and make webs</p>
          <h4>Follow Me</h4>
              <div className="social-links">
                <a href="https://www.facebook.com/manish.yelamsabade/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href="https://x.com/ManishYelam" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="https://www.instagram.com/manish_yelam_/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="https://www.linkedin.com/in/manish-yelam-a6b649233/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>
              </div>
          <div className="home-buttons">
            <Link to="/projects" className="btn">View My Work</Link>
            <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
            <Link to="/resume-viewer" className="btn btn-secondary">Resume / CV</Link>
          </div>
        </div>
        <div className="skills">
          <SkillList />
        </div>
        <div className="projects-preview">
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default Home;
