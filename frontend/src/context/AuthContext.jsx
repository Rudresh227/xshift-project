import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

// Create AuthContext
const AuthContext = createContext();

// Auth Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Check if user is already logged in (from local storage)
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  // Login function
  const login = (email, password) => {
    if (!email || !password) return alert("Please enter all fields");

    // Simulate authentication (Replace with API later)
    const fakeUser = { email };
    localStorage.setItem("user", JSON.stringify(fakeUser));
    setUser(fakeUser);
    navigate("/home");
  };

  // Signup function
  const signup = (email, password) => {
    if (!email || !password) return alert("Please enter all fields");

    // Simulate user creation (Replace with API later)
    alert("Account created! Now login.");
    navigate("/login");
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
