import React, { useState } from "react";
import { Outlet } from "react-router-dom"; // Placeholder for routed content
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className={`flex h-screen bg-lightBg dark:bg-darkBg`}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 rounded-lg shadow-neumorphismLight dark:shadow-neumorphismDark ">
        {/* Navbar */}
        <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />

        {/* Routed Content */}
        <div className="mt-6 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
