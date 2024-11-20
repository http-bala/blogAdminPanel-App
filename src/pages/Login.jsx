import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="bg-gray-200 p-8 md:p-10 rounded-2xl shadow-neumorphism max-w-md w-full mx-4 sm:mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-700 mb-6">Login</h2>
        <form className="space-y-6">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm sm:text-base font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 sm:py-3 mt-1 text-gray-700 bg-gray-200 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm sm:text-base font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 sm:py-3 mt-1 text-gray-700 bg-gray-200 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
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
