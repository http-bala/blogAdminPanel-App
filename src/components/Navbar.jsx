import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = ({ toggleTheme, isDarkMode }) => {
  return (
    <nav className="flex items-center justify-between bg-lightBg dark:bg-darkBg p-4 rounded-lg shadow-neumorphismLight dark:shadow-neumorphismDark">
      {/* Search Bar */}
      <div className="flex items-center w-1/3">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 text-sm bg-lightBg dark:bg-darkBg rounded-lg shadow-innerLight dark:shadow-innerDark focus:outline-none"
        />
      </div>

      {/* Right Side Buttons */}
      <div className="flex items-center space-x-4">
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-lightBg shadow-neumorphismLight dark:bg-darkBg dark:shadow-neumorphismDark hover:shadow-innerLight dark:hover:shadow-innerDark"
        >
          {isDarkMode ? <FaSun className="text-highlight" /> : <FaMoon className="text-highlight" />}
        </button>

        {/* Logout Button */}
        <button className="px-4 py-2 bg-highlight text-white rounded-lg shadow-neumorphismLight hover:shadow-innerLight dark:shadow-neumorphismDark dark:hover:shadow-innerDark">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
