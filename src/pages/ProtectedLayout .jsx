import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";


const ProtectedLayout = ({ children }) => {
  
    const [isDarkMode, setIsDarkMode] = useState(false);
  
    const toggleTheme = () => {
      setIsDarkMode(!isDarkMode);
      document.documentElement.classList.toggle("dark");
    }
  
  return (
    <div className={`flex h-screen bg-lightBg dark:bg-darkBg`}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 p-6 rounded-lg shadow-neumorphismLight dark:shadow-neumorphismDark">
        {/* Navbar */}
        <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />

        {/* Page Content */}
        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
};

export default ProtectedLayout;
