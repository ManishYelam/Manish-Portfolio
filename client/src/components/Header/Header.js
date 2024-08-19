import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import AdminLogo from '../AdminLogo/AdminLogo';
import ThemeToggle from '../Theme/ThemeToggle';

const Header = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = (mode) => {
    setTheme(mode);
    document.body.classList.toggle('dark-mode', mode === 'dark');
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <ThemeToggle toggleTheme={toggleTheme} currentTheme={theme} />
          <Link to="/">@ManishYelam$Portfolio!</Link> 
        </div>
        <nav className={`nav`}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/experiences">Experiences</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>  
        </nav><AdminLogo />
      </div>
      
    </header>
  );
};

export default Header;
