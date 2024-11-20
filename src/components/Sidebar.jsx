import React from "react";
import { FaPlus, FaEye, FaUserPlus, FaUsers, FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="bg-lightBg dark:bg-darkBg w-64 h-screen p-4 rounded-lg shadow-neumorphismLight dark:shadow-neumorphismDark">
      <nav className="space-y-4">
        {/* Add Blog */}
        <Link
          to="/add"
          className="flex items-center space-x-3 w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 bg-lightBg dark:bg-darkBg rounded-lg shadow-neumorphismLight dark:shadow-neumorphismDark hover:shadow-innerLight dark:hover:shadow-innerDark"
        >
          <FaPlus />
          <span>Add Blog</span>
        </Link>

        {/* View Blog */}
        <Link
          to="/viewBlogs"
          className="flex items-center space-x-3 w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 bg-lightBg dark:bg-darkBg rounded-lg shadow-neumorphismLight dark:shadow-neumorphismDark hover:shadow-innerLight dark:hover:shadow-innerDark"
        >
          <FaEye />
          <span>View Blog</span>
        </Link>

        {/* Placeholder options */}
        <button className="flex items-center space-x-3 w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 bg-lightBg dark:bg-darkBg rounded-lg shadow-neumorphismLight dark:shadow-neumorphismDark hover:shadow-innerLight dark:hover:shadow-innerDark">
          <FaUserPlus />
          <span>Add User</span>
        </button>

        <button className="flex items-center space-x-3 w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 bg-lightBg dark:bg-darkBg rounded-lg shadow-neumorphismLight dark:shadow-neumorphismDark hover:shadow-innerLight dark:hover:shadow-innerDark">
          <FaUsers />
          <span>List of Users</span>
        </button>

        <button className="flex items-center space-x-3 w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 bg-lightBg dark:bg-darkBg rounded-lg shadow-neumorphismLight dark:shadow-neumorphismDark hover:shadow-innerLight dark:hover:shadow-innerDark">
          <FaCog />
          <span>Settings</span>
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
