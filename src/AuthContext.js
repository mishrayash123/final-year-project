import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const authToken = localStorage.getItem("engtracktoken");
    const id = localStorage.getItem("useridengtrack");

  useEffect(() => {
    
    if (authToken) {
      if (authToken) {
        setIsLoggedIn(true);
      }
    } else {
      setIsLoggedIn(false);
    }
  }, [authToken]);
  
  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("engtracktoken");
    localStorage.removeItem("useridengtrack");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout, setUser,
     }}>
      {children}
    </AuthContext.Provider>
  );
};