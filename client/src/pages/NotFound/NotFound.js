// src/pages/NotFound/NotFound.js
import React from 'react';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <div className="container">
        <h2>404 - Page Not Found</h2>
        <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <p>Go back to <a href="/">Home</a> or contact us for assistance.</p>
      </div>
    </div>
  );
};

export default NotFound;
