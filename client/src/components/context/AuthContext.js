// AuthContext.js

import React, { createContext, useState, useEffect, useContext, useRef } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginTime, setLoginTime] = useState(null);
  const [logoutTime, setLogoutTime] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const timeoutRef = useRef(null);

  
  const timeoutDuration = 30 * 1000;

  useEffect(() => {
    const logoutAfterTimeout = () => {
      setIsAuthenticated(false);
      localStorage.removeItem('isAuthenticated');
      const logoutTimestamp = new Date();
      setLogoutTime(logoutTimestamp);
      localStorage.setItem('logoutTime', logoutTimestamp.toString());
    };

    const resetTimeout = () => {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(logoutAfterTimeout, timeoutDuration);
    };

    if (isAuthenticated) {
      timeoutRef.current = setTimeout(logoutAfterTimeout, timeoutDuration);
    } else {
      clearTimeout(timeoutRef.current);
    }

    window.addEventListener('mousemove', resetTimeout);
    window.addEventListener('mousedown', resetTimeout);
    window.addEventListener('keypress', resetTimeout);
    window.addEventListener('touchstart', resetTimeout);

    return () => {
      window.removeEventListener('mousemove', resetTimeout);
      window.removeEventListener('mousedown', resetTimeout);
      window.removeEventListener('keypress', resetTimeout);
      window.removeEventListener('touchstart', resetTimeout);
      clearTimeout(timeoutRef.current);
    };
  }, [isAuthenticated]);

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
    const loginTimestamp = new Date();
    setLoginTime(loginTimestamp);
    localStorage.setItem('loginTime', loginTimestamp.toString());
    resetTimeout(); // Start the timeout countdown immediately after login
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
    const logoutTimestamp = new Date();
    setLogoutTime(logoutTimestamp);
    localStorage.setItem('logoutTime', logoutTimestamp.toString());
    clearTimeout(timeoutRef.current); // Clear the timeout countdown on logout
  };

  const resetTimeout = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(logout, timeoutDuration);
  };

  // Check authentication state on initial load
  useEffect(() => {
    const storedIsAuthenticated = localStorage.getItem('isAuthenticated');
    if (storedIsAuthenticated) {
      setIsAuthenticated(true);
      resetTimeout(); // Start the timeout countdown if already authenticated
    }
  }, []);

  // Live clock
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, loginTime, logoutTime, currentTime }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
