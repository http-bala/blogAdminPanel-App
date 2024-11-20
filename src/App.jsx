import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddBlog from "./pages/AddBlog";
import ViewBlogList from "./pages/ViewBlogList";

const App = () => {
  return (
      <Routes>
        {/* Default Route to Dashboard */}
        <Route path="/" element={<Dashboard />} >
        <Route
          path="add"
          element={<AddBlog />}
        />
        <Route
          path="viewBlogs"
          element={<ViewBlogList />}
        />
        </Route>

        {/* Route to Add Blog */}
        
      </Routes>
  );
};

export default App;
