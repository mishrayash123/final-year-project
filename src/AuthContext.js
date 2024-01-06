import React, { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth} from "./firebase/setup";
import {signOut} from "firebase/auth";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
       setIsLoggedIn(true)
        localStorage.setItem("useridengtrack",user.uid);
      } else {
        
        setIsLoggedIn(false)
      }
    });
  }, [auth.currentUser]);

  
  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
    signOut(auth).then(() => {
        alert("Successfully logout");
    }).catch((error) => {});
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout, setUser,
     }}>
      {children}
    </AuthContext.Provider>
  );
};