import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiEye, FiEyeOff } from "react-icons/fi";

const AddUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Validate the form
  const validateForm = () => {
    const { name, email, password } = formData;
    if (!name.trim()) {
      toast.error("Name is required!");
      return false;
    }
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      toast.error("Valid email is required!");
      return false;
    }
    if (!password.trim() || password.length < 6) {
      toast.error("Password must be at least 6 characters long!");
      return false;
    }
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setLoading(true); // Show loading indicator
      try {
        const response = await axios.post(
          "https://your-api-url.com/api/users",
          formData
        );

        if (response.status === 201) {
          toast.success("User added successfully!");
          setFormData({
            name: "",
            email: "",
            password: "",
          });
        }
      } catch (error) {
        console.error("Error adding user:", error);
        toast.error("Failed to add user. Please try again.");
      } finally {
        setLoading(false); // Hide loading indicator
      }
    }
  };

  return (
    <div className="flex items-center justify-left h-auto bg-lightBg dark:bg-darkBg">
      <div className="bg-lightBg dark:bg-darkBg p-8 rounded-lg shadow-neumorphismLight dark:shadow-neumorphismDark w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
          Add User
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Name */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-lightBg dark:bg-darkBg rounded-lg shadow-innerLight dark:shadow-innerDark focus:outline-none"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-lightBg dark:bg-darkBg rounded-lg shadow-innerLight dark:shadow-innerDark focus:outline-none"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-lightBg dark:bg-darkBg rounded-lg shadow-innerLight dark:shadow-innerDark focus:outline-none"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 dark:text-gray-300"
              >
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full px-4 py-2 text-white rounded-lg shadow-neumorphismLight hover:shadow-innerLight dark:shadow-neumorphismDark dark:hover:shadow-innerDark ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-highlight"
            }`}
          >
            {loading ? "Adding User..." : "Add User"}
          </button>
        </form>

        {/* Toast Notifications */}
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </div>
  );
};

export default AddUser;
