import React from "react";
import {  Routes, Route, Navigate, Outlet } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddBlog from "./pages/AddBlog";
import ViewBlogList from "./pages/ViewBlogList";
import AddUser from "./pages/AddUser";
import UserList from "./pages/UserList";
import Settings from "./pages/Settings";
import Login from "./pages/Login"; // Import Login page

const App = () => {
  return (
      <Routes>
        {/* Login page route */}
        <Route path="/login" element={<Login />} />

        {/* Protect all routes with PrivateRoute */}
        <Route path="/" element={<PrivateRoute />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="add" element={<AddBlog />} />
          <Route path="viewBlogs" element={<ViewBlogList />} />
          <Route path="adduser" element={<AddUser />} />
          <Route path="viewuser" element={<UserList />} />
          <Route path="setting" element={<Settings />} />
        </Route>

        {/* Optional: 404 route for non-existing paths */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
  );
};

// PrivateRoute Component for protecting routes
const PrivateRoute = () => {
  const isAuthenticated = localStorage.getItem("token"); // Check for token in localStorage
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />; // If authenticated, show child route, else redirect to login
};

export default App;
