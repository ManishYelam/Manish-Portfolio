import React, { createContext, useState, useEffect, useContext, useRef, useCallback } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginTime, setLoginTime] = useState(null);
  const [logoutTime, setLogoutTime] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const timeoutRef = useRef(null);

  const timeoutDuration = 30 * 1000;

  const logoutAfterTimeout = useCallback(() => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
    const logoutTimestamp = new Date();
    setLogoutTime(logoutTimestamp);
    localStorage.setItem('logoutTime', logoutTimestamp.toString());
  }, []);

  const resetTimeout = useCallback(() => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(logoutAfterTimeout, timeoutDuration);
  }, [logoutAfterTimeout, timeoutDuration]);

  useEffect(() => {
    if (isAuthenticated) {
      resetTimeout();
    } else {
      clearTimeout(timeoutRef.current);
    }

    const handleUserActivity = () => {
      if (isAuthenticated) {
        resetTimeout();
      }
    };

    window.addEventListener('mousemove', handleUserActivity);
    window.addEventListener('mousedown', handleUserActivity);
    window.addEventListener('keypress', handleUserActivity);
    window.addEventListener('touchstart', handleUserActivity);

    return () => {
      window.removeEventListener('mousemove', handleUserActivity);
      window.removeEventListener('mousedown', handleUserActivity);
      window.removeEventListener('keypress', handleUserActivity);
      window.removeEventListener('touchstart', handleUserActivity);
      clearTimeout(timeoutRef.current);
    };
  }, [isAuthenticated, resetTimeout]);

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

  // Check authentication state on initial load
  useEffect(() => {
    const storedIsAuthenticated = localStorage.getItem('isAuthenticated');
    if (storedIsAuthenticated === 'true') {
      setIsAuthenticated(true);
      resetTimeout(); // Start the timeout countdown if already authenticated
    }
  }, [resetTimeout]);

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
