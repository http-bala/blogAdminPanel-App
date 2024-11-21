import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const isAuthenticated = localStorage.getItem("token"); // Check for token in localStorage
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />; // If authenticated, show child route, else redirect to login
};

export default ProtectedRoute;
