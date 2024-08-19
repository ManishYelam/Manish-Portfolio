import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Projects</h4>
              <ul>
                <li><a href="/">Project 1</a></li>
                <li><a href="/">Project 2</a></li>
                <li><a href="/">Project 3</a></li>
                <li><a href="/">Project 4</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact Me</h4>
              <ul>
                <li>Email:manishyelam12e@gmail.com</li>
                <li>Phone: +193 732 0525</li>
                <li>Address: 123 Street, Pune, Maharashtra, India</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Follow Me</h4>
              <div className="social-links">
                <a href="https://www.facebook.com/manish.yelamsabade/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href="https://x.com/ManishYelam" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="https://www.instagram.com/manish_yelam_/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="https://www.linkedin.com/in/manish-yelam-a6b649233/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 UnityCircle. Created by: Mr. Manish Yelam. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

         
          
