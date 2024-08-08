// ThemeToggle.js

import React, { useState } from 'react';
import './ThemeToggle.css';

const ThemeToggle = ({ toggleTheme }) => {
  const [isColor, setIsColor] = useState(false);

  const toggleMode = () => {
    setIsColor(!isColor);
    toggleTheme(isColor ? 'light' : 'dark');
  };

  return (
    <div className="theme-toggle" onClick={toggleMode}>
      <div className={`toggle-button ${isColor ? 'dark' : 'light'}`}>
        <div className="toggle-circle"></div>
      </div>
    </div>
  );
};

export default ThemeToggle;
