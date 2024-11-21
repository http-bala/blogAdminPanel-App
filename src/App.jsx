import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddBlog from "./pages/AddBlog";
import ViewBlogList from "./pages/ViewBlogList";
import AddUser from "./pages/AddUser";
import UserList from "./pages/UserList";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import ProtectedRoute from "./auth/ProtectedRoute";
import ProtectedLayout from "./pages/ProtectedLayout ";

const App = () => {
  return (
    <Routes>
      {/* Public route for login */}
      <Route path="/" element={<Login />} />

      {/* Protected routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
              <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/add"
        element={
          <ProtectedRoute>
            <ProtectedLayout>
              <AddBlog />
            </ProtectedLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/viewBlogs"
        element={
          <ProtectedRoute>
            <ProtectedLayout>
              <ViewBlogList />
            </ProtectedLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/adduser"
        element={
          <ProtectedRoute>
            <ProtectedLayout>
              <AddUser />
            </ProtectedLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/viewuser"
        element={
          <ProtectedRoute>
            <ProtectedLayout>
              <UserList />
            </ProtectedLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/setting"
        element={
          <ProtectedRoute>
            <ProtectedLayout>
              <Settings />
            </ProtectedLayout>
          </ProtectedRoute>
        }
      />

      {/* Redirect for non-existing paths */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
