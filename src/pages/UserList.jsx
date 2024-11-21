import React, { useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", active: true },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", active: false },
  ]);

  // Toggle Active Status
  const toggleActive = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  return (
    <div className="p-8 bg-lightBg dark:bg-darkBg rounded-lg shadow-neumorphismLight dark:shadow-neumorphismDark">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          User List
        </h2>
        <div className="flex gap-4">
          <button className="text-white bg-highlight px-4 py-2 rounded-lg shadow-neumorphismLight dark:shadow-neumorphismDark hover:shadow-innerLight dark:hover:shadow-innerDark">
            Create User
          </button>
        </div>
      </div>

      {/* User Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300 mb-4">
          <thead >
            <tr>
              <th className="px-4 py-2 text-left border border-gray-300 dark:text-gray-200">Name</th>
              <th className="px-4 py-2 text-left border border-gray-300 dark:text-gray-200">Email</th>
              <th className="px-4 py-2 text-left border border-gray-300 dark:text-gray-200">Role</th>
              <th className="px-4 py-2 text-left border border-gray-300 dark:text-gray-200">Active</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user.id}
                className={`border-b hover:bg-gray-100 dark:hover:bg-gray-800`}
              >
                
                <td className="px-4 py-2 border border-gray-300 dark:text-gray-300">{user.name}</td>
                <td className="px-4 py-2 border border-gray-300 dark:text-gray-300">{user.email}</td>
                <td className="px-4 py-2 border border-gray-300 dark:text-gray-300">{user.role}</td>
                <td className="px-4 py-2 border border-gray-300 dark:text-gray-300">
                  <button
                    onClick={() => toggleActive(user.id)}
                    className={`w-16 h-8 flex items-center rounded-full p-1 transition-colors ${
                      user.active ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    <span
                      className={`w-6 h-6 rounded-full bg-white shadow-md transform transition-transform ${
                        user.active ? "translate-x-8" : "translate-x-0"
                      }`}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
