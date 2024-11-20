import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Assuming you are using React Router for navigation
import { toast, ToastContainer  } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ViewBlogList = () => {
  const [blogs, setBlogs] = useState([]); // To store the list of blogs
  const [currentPage, setCurrentPage] = useState(1); // Current page for pagination
  const [blogsPerPage] = useState(5); // Number of blogs to show per page

  // Sample data for blogs (You can replace this with an API call)
  useEffect(() => {
    const fetchBlogs = () => {
      // Mock data, replace this with a real API call
      const mockBlogs = [
        {
          id: 1,
          title: "Blog Title 1",
          postBy: "John Doe",
          date: "2024-11-15",
          image: "https://via.placeholder.com/50",
        },
        {
          id: 2,
          title: "Blog Title 2",
          postBy: "Jane Smith",
          date: "2024-11-16",
          image: "https://via.placeholder.com/50",
        },
        // Add more blogs as needed
      ];
      setBlogs(mockBlogs);
    };

    fetchBlogs();
  }, []);

  // Handle Delete Blog
  const handleDelete = (id) => {
    // Call an API to delete the blog, for now it's just mocked
    setBlogs(blogs.filter((blog) => blog.id !== id));
    toast.success("Blog deleted successfully!");
  };

  // Get current blogs to display on this page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate the total number of pages
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  return (
    <div className="container mx-auto p-8 bg-lightBg dark:bg-darkBg rounded-lg shadow-neumorphismLight dark:shadow-neumorphismDark">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Blog List</h2>
        <Link
          to="/add-blog" // Navigate to the AddBlog component
          className="text-white bg-highlight px-4 py-2 rounded-lg shadow-neumorphismLight dark:shadow-neumorphismDark hover:shadow-innerLight dark:hover:shadow-innerDark"
        >
          Create Blog
        </Link>
      </div>

      {/* Blog Table with Border */}
      <table className="min-w-full table-auto border-collapse border border-gray-300 mb-4">
  <thead>
    <tr>
      <th className="px-4 py-2 text-left border border-gray-300 dark:text-gray-200">Sr No</th>
      <th className="px-4 py-2 text-left border border-gray-300 dark:text-gray-200">Image</th>
      <th className="px-4 py-2 text-left border border-gray-300 dark:text-gray-200">Title</th>
      <th className="px-4 py-2 text-left border border-gray-300 dark:text-gray-200">Post By</th>
      <th className="px-4 py-2 text-left border border-gray-300 dark:text-gray-200">Date</th>
      <th className="px-4 py-2 text-left border border-gray-300 dark:text-gray-200">Actions</th>
    </tr>
  </thead>
  <tbody>
    {currentBlogs.map((blog, index) => (
      <tr key={blog.id} className="hover:bg-gray-100 dark:hover:bg-gray-800">
        <td className="px-4 py-2 border border-gray-300 dark:text-gray-300">{indexOfFirstBlog + index + 1}</td>
        <td className="px-4 py-2 border border-gray-300">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-12 h-12 object-cover rounded-full"
          />
        </td>
        <td className="px-4 py-2 border border-gray-300 dark:text-gray-300">{blog.title}</td>
        <td className="px-4 py-2 border border-gray-300 dark:text-gray-300">{blog.postBy}</td>
        <td className="px-4 py-2 border border-gray-300 dark:text-gray-300">{blog.date}</td>
        <td className="px-4 py-2 border border-gray-300">
          {/* Edit and Remove Buttons with Neumorphism */}
          <Link
            to={`/edit-blog/${blog.id}`}
            className="text-white  mx-2 p-2 bg-emerald-500 dark:bg-emerald-600 rounded-lg shadow-neumorphismLight dark:shadow-neumorphismDark hover:shadow-innerLight dark:hover:shadow-innerDark"
          >
            Edit
          </Link>
          <button
            onClick={() => handleDelete(blog.id)}
            className="text-white  mx-2 p-2 bg-rose-500 dark:bg-rose-700 rounded-lg shadow-neumorphismLight dark:shadow-neumorphismDark hover:shadow-innerLight dark:hover:shadow-innerDark"
          >
            Remove
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>


      {/* Pagination on the Left Side */}
      <div className="flex justify-start items-center space-x-4 mb-6">
        <button
          onClick={() => paginate(currentPage - 1)}
          className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50 shadow-neumorphismLight dark:shadow-neumorphismDark"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-gray-700 dark:text-gray-300">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => paginate(currentPage + 1)}
          className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50 shadow-neumorphismLight dark:shadow-neumorphismDark"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      {/* Toast Notifications */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default ViewBlogList;
