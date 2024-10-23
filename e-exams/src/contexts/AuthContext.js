// src/contexts/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState("");

  // Effect to check for stored userName on initial load
  useEffect(() => {
    const storedUserName = localStorage.getItem("userName");
    const storedIsAuthenticated = localStorage.getItem("isAuthenticated") === "true";

    if (storedUserName) {
      setUserName(storedUserName);
    }
    setIsAuthenticated(storedIsAuthenticated);
  }, []);

  const login = (name) => {
    setIsAuthenticated(true);
    setUserName(name);
    localStorage.setItem("userName", name); // Store username in localStorage
    localStorage.setItem("isAuthenticated", true); // Store authentication state
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserName("");
    localStorage.removeItem("userName"); // Clear username from localStorage
    localStorage.removeItem("isAuthenticated"); // Clear authentication state
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userName, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
