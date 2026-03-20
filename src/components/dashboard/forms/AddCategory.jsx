import React from "react";

const AddCategory = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#EAD7B7]">
      <div className="w-full max-w-md bg-[#fde7d8] p-8 rounded-2xl shadow-lg">
        
        <h2 className="text-2xl font-bold text-center mb-6">
          Add Category
        </h2>

        <form className="space-y-4">
          
          {/* Category Name */}
          <div>
            <label className="block text-gray-700 mb-1">
              Category Name
            </label>
            <input
              type="text"
              placeholder="Enter category name"
              className="w-full px-4 py-2 border border-[#a3531e] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 mb-1">
              Description
            </label>
            <textarea
              placeholder="Enter description"
              className="w-full px-4 py-2 border border-[#a3531e] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="3"
            ></textarea>
          </div>

          {/* Status */}
          <div>
            <label className="block text-gray-700 mb-1">
              Status
            </label>
            <select className="w-full px-4 py-2 border border-[#a3531e] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[#a3531e] text-white py-2 rounded-lg hover:bg-[#763d17] transition"
          >
            Add Category
          </button>

        </form>
      </div>
    </div>
  );
};

export default AddCategory;