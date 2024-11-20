import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-toastify/dist/ReactToastify.css";
import "react-loading-skeleton/dist/skeleton.css";

const ViewBlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(5);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://blog-api-one-mocha.vercel.app/api/blogs"
        );
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        toast.error("Failed to fetch blogs!");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      await axios.delete(`https://blog-api-one-mocha.vercel.app/api/blogs/${id}`);
      setBlogs(blogs.filter((blog) => blog._id !== id));
      toast.success("Blog deleted successfully!");
    } catch (error) {
      console.error("Error deleting blog:", error);
      toast.error("Failed to delete blog!");
    } finally {
      setLoading(false);
    }
  };

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  return (
    <div className="container mx-auto p-8 bg-lightBg dark:bg-darkBg rounded-lg shadow-neumorphismLight dark:shadow-neumorphismDark">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Blog List</h2>
        <Link
          to="/add"
          className="text-white bg-highlight px-4 py-2 rounded-lg shadow-neumorphismLight dark:shadow-neumorphismDark hover:shadow-innerLight dark:hover:shadow-innerDark"
        >
          Create Blog
        </Link>
      </div>

      {loading ? (
        <div>
          {[...Array(blogsPerPage)].map((_, index) => (
            <div key={index} className="flex items-center mb-4">
              <Skeleton circle={true} height={50} width={50} className="mr-4" />
              <div className="flex-grow">
                <Skeleton width="60%" />
                <Skeleton width="40%" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
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
                <tr key={blog._id} className="hover:bg-gray-100 dark:hover:bg-gray-800">
                  <td className="px-4 py-2 border border-gray-300 dark:text-gray-300">
                    {indexOfFirstBlog + index + 1}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    <img
                      src={blog.image || "https://via.placeholder.com/50"}
                      alt={blog.title}
                      className="w-12 h-12 object-cover rounded-full"
                    />
                  </td>
                  <td className="px-4 py-2 border border-gray-300 dark:text-gray-300">{blog.title}</td>
                  <td className="px-4 py-2 border border-gray-300 dark:text-gray-300">{blog.postBy}</td>
                  <td className="px-4 py-2 border border-gray-300 dark:text-gray-300">{blog.date}</td>
                  <td className="px-4 py-2 border border-gray-300">
                    <Link
                      to={`/edit-blog/${blog._id}`}
                      className="text-white mx-2 p-2 bg-emerald-500 dark:bg-emerald-600 rounded-lg shadow-neumorphismLight dark:shadow-neumorphismDark hover:shadow-innerLight dark:hover:shadow-innerDark"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(blog._id)}
                      className="text-white mx-2 p-2 bg-rose-500 dark:bg-rose-700 rounded-lg shadow-neumorphismLight dark:shadow-neumorphismDark hover:shadow-innerLight dark:hover:shadow-innerDark"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

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
        </>
      )}

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default ViewBlogList;
