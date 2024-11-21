import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false); // Step 1: State to toggle password visibility
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post(
        "https://blog-api-one-mocha.vercel.app/api/auth/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );
  
      const data = response.data;
  
      // Save token and redirect on success
      localStorage.setItem("token", data.token);
      navigate("/dashboard"); // Redirect to dashboard

    } catch (err) {
      if (err.response) {
        setError(err.response.data.message || "Invalid credentials");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200 ">
      <div className="bg-gray-200 p-8 md:p-10 rounded-2xl shadow-neumorphismLight max-w-md w-full mx-4 sm:mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-700 mb-6">Login</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {loading && (
          <div className="flex justify-center mb-4">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-purple-600 border-solid"></div>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm sm:text-base font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 sm:py-3 mt-1 text-gray-700 bg-gray-200 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email"
              required
            />
          </div>
          
          <div className="relative">
            <label htmlFor="password" className="block text-sm sm:text-base font-medium text-gray-600">
              Password
            </label>
            <input
              type={passwordVisible ? "text" : "password"} // Step 2: Toggle the input type based on state
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 sm:py-3 mt-1 text-gray-700 bg-gray-200 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your password"
              required
            />
            {/* Step 3: Eye icon to toggle password visibility */}
            <span
              onClick={() => setPasswordVisible(!passwordVisible)} // Toggle the password visibility
              className="absolute right-4 top-14 transform -translate-y-1/2 cursor-pointer"
            >
              {passwordVisible ? <FaEyeSlash className="text-gray-600 text-xl" /> : <FaEye className="text-gray-600 text-xl" />}
            </span>
          </div>

          <button
            type="submit"
            className="w-full py-2 sm:py-3 mt-6 text-white bg-purple-600 rounded-lg shadow-neumorphism hover:shadow-inner transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-purple-400"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
