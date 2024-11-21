import React, { useState } from "react";

const Settings = () => {
  const [theme, setTheme] = useState("light");
  const [notifications, setNotifications] = useState(true);

  // Handle theme toggle
  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  // Handle notifications toggle
  const toggleNotifications = () => {
    setNotifications((prev) => !prev);
  };

  return (
    <div className="p-8 bg-lightBg dark:bg-darkBg rounded-lg shadow-neumorphismLight dark:shadow-neumorphismDark">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
        Settings
      </h2>
      <div className="flex flex-col gap-6">
        {/* Profile Settings */}
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-innerLight dark:shadow-innerDark">
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
            Profile Settings
          </h3>
          <div className="flex flex-col gap-4">
            <label className="block">
              <span className="text-gray-700 dark:text-gray-300">Name</span>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full mt-2 px-4 py-2 bg-lightBg dark:bg-darkBg rounded-lg shadow-innerLight dark:shadow-innerDark focus:outline-none"
              />
            </label>
            <label className="block">
              <span className="text-gray-700 dark:text-gray-300">Email</span>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-2 px-4 py-2 bg-lightBg dark:bg-darkBg rounded-lg shadow-innerLight dark:shadow-innerDark focus:outline-none"
              />
            </label>
          </div>
        </div>

        {/* Theme Settings */}
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-innerLight dark:shadow-innerDark">
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
            Theme Settings
          </h3>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="theme"
                value="light"
                checked={theme === "light"}
                onChange={handleThemeChange}
                className="hidden"
              />
              <span
                className={`w-5 h-5 rounded-full border ${
                  theme === "light" ? "bg-blue-500" : "bg-gray-300"
                }`}
              />
              Light
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="theme"
                value="dark"
                checked={theme === "dark"}
                onChange={handleThemeChange}
                className="hidden"
              />
              <span
                className={`w-5 h-5 rounded-full border ${
                  theme === "dark" ? "bg-blue-500" : "bg-gray-300"
                }`}
              />
              Dark
            </label>
          </div>
        </div>

        {/* Account Preferences */}
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-innerLight dark:shadow-innerDark">
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
            Account Preferences
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-gray-700 dark:text-gray-300">
              Enable Notifications
            </span>
            <button
              onClick={toggleNotifications}
              className={`w-16 h-8 flex items-center rounded-full p-1 transition-colors ${
                notifications ? "bg-green-500" : "bg-red-500"
              }`}
            >
              <span
                className={`w-6 h-6 rounded-full bg-white shadow-md transform transition-transform ${
                  notifications ? "translate-x-8" : "translate-x-0"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Save Button */}
        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-neumorphismLight hover:shadow-innerLight dark:shadow-neumorphismDark dark:hover:shadow-innerDark self-end">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Settings;
