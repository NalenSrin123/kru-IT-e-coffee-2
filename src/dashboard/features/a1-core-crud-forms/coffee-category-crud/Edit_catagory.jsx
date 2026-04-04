// Edit_catagory.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../../../services/api/BaseURL/api";

const Edit_catagory = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    description: "",
    is_active: true,
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    if (id) {
      fetchCategoryData();
    }
  }, [id]);

  const fetchCategoryData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch category by ID
      const response = await api.get(`/v1/categories/${id}`);
      const data = response.data.data || response.data;

      setFormData({
        id: data.id,
        name: data.name,
        description: data.description || "",
        is_active: data.is_active,
      });
    } catch (err) {
      setError(err.response?.data?.message || "Failed to load category data");
      console.error("Error fetching category:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError(null);
    setSuccess(null);

    try {
      // Prepare data for API
      const updateData = {
        name: formData.name,
        description: formData.description,
        is_active: formData.is_active,
      };

      // Update category using PUT
      await api.put(`/v1/categories/${id}`, updateData);

      setSuccess("Category updated successfully!");

      // Redirect after 2 seconds
      setTimeout(() => {
        navigate("/categories");
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to update category");
      console.error("Error updating category:", err);
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    navigate("/categories");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#EAD7B7]">
        <div className="w-full max-w-md bg-[#fde7d8] p-8 rounded-2xl shadow-lg text-center">
          <div className="flex justify-center items-center space-x-2">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#a3531e]"></div>
            <p className="text-gray-600">Loading category data...</p>
          </div>
        </div>
      </div>
    );
  }
  <button
    onClick={() => handleClick(item.id)}
    className="bg-[#6f4e37] text-white px-3 py-1.5 rounded-md text-xs flex items-center gap-1 mx-auto"
  >
    <Edit size={14} /> Edit
  </button>;
  const handleClick = (categoryId) => {
    navigate(`/categories/edit/${categoryId}`);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#EAD7B7]">
      <div className="w-full max-w-md bg-[#fde7d8] p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Edit Category</h2>

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
            <strong>Error:</strong> {error}
          </div>
        )}

        {/* Success Message */}
        {success && (
          <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg text-sm">
            <strong>Success!</strong> {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Category ID (Read-only) */}
          <div>
            <label className="block text-gray-700 mb-1">Category ID</label>
            <input
              type="text"
              value={formData.id}
              disabled
              className="w-full px-4 py-2 border border-[#a3531e] rounded-lg bg-gray-100 text-gray-600 cursor-not-allowed"
            />
          </div>

          {/* Category Name */}
          <div>
            <label className="block text-gray-700 mb-1">
              Category Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter category name"
              required
              className="w-full px-4 py-2 border border-[#a3531e] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a3531e] focus:border-transparent"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Enter description"
              className="w-full px-4 py-2 border border-[#a3531e] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a3531e] focus:border-transparent"
              rows="3"
            />
          </div>

          {/* Status */}
          <div>
            <label className="block text-gray-700 mb-1">Status</label>
            <select
              name="is_active"
              value={formData.is_active}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-[#a3531e] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a3531e] focus:border-transparent"
            >
              <option value={true}>Active</option>
              <option value={false}>Inactive</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              type="submit"
              disabled={saving}
              className={`flex-1 bg-[#a3531e] text-white py-2 rounded-lg hover:bg-[#763d17] transition ${
                saving ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {saving ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  Updating...
                </span>
              ) : (
                "Update Category"
              )}
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="flex-1 bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit_catagory;
