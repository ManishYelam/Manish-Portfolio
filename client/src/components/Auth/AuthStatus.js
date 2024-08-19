// AuthStatus.js

import React from 'react';
import { useAuth } from '../context/AuthContext';
import './AuthStatus.css';

const AuthStatus = () => {
  const { isAuthenticated, loginTime, logoutTime, currentTime } = useAuth();

  return (
    <div className="auth-status">
      <h2>Current Time: {currentTime}</h2>
      {isAuthenticated ? (
        <>
          <h3 className="status-logged-in">Status: Logged In</h3>
          {loginTime && (
            <p className="time-info">Login Time: {new Date(loginTime).toLocaleString()}</p>
          )}
        </>
      ) : (
        <>
          <h3 className="status-logged-out">Status: Logged Out</h3>
          {logoutTime && (
            <p className="time-info">Logout Time: {new Date(logoutTime).toLocaleString()}</p>
          )}
        </>
      )}
    </div>
  );
};

export default AuthStatus;
