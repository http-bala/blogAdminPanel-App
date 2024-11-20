import React, { useState } from "react";
import ReactQuill from "react-quill";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-quill/dist/quill.snow.css";

const AddBlog = () => {
  const [formData, setFormData] = useState({
    title: "",
    postBy: "",
    content: "",
    image: null,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleContentChange = (value) => {
    setFormData({
      ...formData,
      content: value,
    });
  };

  const validateForm = () => {
    const { title, postBy, content, image } = formData;
    if (!title.trim()) {
      toast.error("Title is required!");
      return false;
    }
    if (!postBy.trim()) {
      toast.error("Author (Post By) is required!");
      return false;
    }
    if (!content.trim()) {
      toast.error("Content is required!");
      return false;
    }
    if (!image) {
      toast.error("Image is required!");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setLoading(true); // Show loading indicator
      const { title, postBy, content, image } = formData;

      const data = new FormData();
      data.append("title", title);
      data.append("postBy", postBy);
      data.append("content", content);
      data.append("image", image);

      try {
        const response = await axios.post(
          "https://blog-api-one-mocha.vercel.app/api/blogs/",
          data,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (response.status === 201) {
          toast.success("Blog created successfully!");
          setFormData({
            title: "",
            postBy: "",
            content: "",
            image: null,
          });
        }
      } catch (error) {
        console.error("Error creating blog:", error);
        toast.error("Failed to create blog. Please try again.");
      } finally {
        setLoading(false); // Hide loading indicator
      }
    }
  };

  return (
    <div className="flex items-start justify-left h-auto bg-lightBg dark:bg-darkBg">
      <div className="bg-lightBg dark:bg-darkBg p-8 rounded-lg shadow-neumorphismLight dark:shadow-neumorphismDark w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">Add Blog</h2>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-8">
          {/* Left Column */}
          <div className="flex flex-col w-full md:w-1/2 gap-4">
            {/* Title */}
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-lightBg dark:bg-darkBg rounded-lg shadow-innerLight dark:shadow-innerDark focus:outline-none"
                placeholder="Enter the blog title"
              />
            </div>

            {/* Post By */}
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Post By</label>
              <input
                type="text"
                name="postBy"
                value={formData.postBy}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-lightBg dark:bg-darkBg rounded-lg shadow-innerLight dark:shadow-innerDark focus:outline-none"
                placeholder="Author's name"
              />
            </div>

            {/* Image */}
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Image</label>
              <input
                type="file"
                name="image"
                onChange={handleChange}
                accept="image/*"
                className="w-full px-4 py-2 bg-lightBg dark:bg-darkBg rounded-lg shadow-innerLight dark:shadow-innerDark focus:outline-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full px-4 py-2 text-white rounded-lg shadow-neumorphismLight hover:shadow-innerLight dark:shadow-neumorphismDark dark:hover:shadow-innerDark ${
                loading ? "bg-gray-400 cursor-not-allowed" : "bg-highlight"
              }`}
            >
              {loading ? "Adding Blog..." : "Add Blog"}
            </button>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Content</label>
            <ReactQuill
              value={formData.content}
              onChange={handleContentChange}
              className="bg-lightBg dark:bg-darkBg rounded-lg shadow-innerLight dark:shadow-innerDark focus:outline-none h-80 custom-quill"
              theme="snow"
              modules={{
                toolbar: [
                  [{ header: [1, 2, false] }],
                  ["bold", "italic", "underline", "strike"],
                  [{ color: [] }, { background: [] }],
                  [{ align: [] }],
                  ["blockquote", "code-block"],
                  [{ list: "ordered" }, { list: "bullet" }],
                  ["link", "image"],
                  ["clean"],
                ],
              }}
              formats={[
                "header",
                "bold",
                "italic",
                "underline",
                "strike",
                "color",
                "background",
                "align",
                "blockquote",
                "code-block",
                "list",
                "bullet",
                "link",
                "image",
              ]}
            />
          </div>
        </form>

        {/* Toast Notifications */}
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </div>
  );
};

export default AddBlog;
