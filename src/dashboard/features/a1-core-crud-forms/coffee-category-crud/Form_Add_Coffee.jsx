import React, { useEffect, useState } from "react";

const API = "https://kru-it-e-coffee-intern-main-i74iel.laravel.cloud/api";

const init = {
  category_id: "",
  name: "",
  sku: "",
  description: "",
  is_available: true,
  is_active: true,
  image: null,
};

export default function Form_Add_Coffee() {
  const [categories, setCategories] = useState([]),
    [categoryLoading, setCategoryLoading] = useState(true),
    [categoryError, setCategoryError] = useState(""),
    [formData, setFormData] = useState(init),
    [imagePreview, setImagePreview] = useState(null),
    [isSubmitting, setIsSubmitting] = useState(false),
    [feedback, setFeedback] = useState({ type: "", text: "" });

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${API}/v1/categories`),
          result = await response.json().catch(() => ({}));
        if (!response.ok)
          throw new Error(
            result.message || result.error || "Failed to load categories",
          );
        const list = result?.data?.data || result?.data || result || [];
        setCategories(Array.isArray(list) ? list : []);
      } catch (error) {
        setCategoryError(error.message || "Failed to load categories");
      } finally {
        setCategoryLoading(false);
      }
    })();
  }, []);

  const handleInputChange = (e) =>
    setFormData((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    }));
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setFormData((prev) => ({ ...prev, image: file }));
    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);
  };
  const resetForm = () => {
    setFormData(init);
    setImagePreview(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback({ type: "", text: "" });
    try {
      const payload = {
        category_id: Number(formData.category_id),
        name: formData.name.trim(),
        sku: formData.sku.trim(),
        description: formData.description.trim(),
        is_available: formData.is_available,
        is_active: formData.is_active,
      };
      const productResponse = await fetch(`${API}/v1/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const productResult = await productResponse.json().catch(() => ({}));
      if (!productResponse.ok)
        throw new Error(
          productResult.message ||
            productResult.error ||
            "Failed to create product",
        );
      const productId = productResult?.data?.id ?? productResult?.id;
      if (formData.image && productId) {
        const imageFormData = new FormData();
        imageFormData.append("image", formData.image);
        const imageResponse = await fetch(
          `${API}/v1/products/${productId}/image`,
          { method: "POST", body: imageFormData },
        );
        const imageResult = await imageResponse.json().catch(() => ({}));
        if (!imageResponse.ok)
          throw new Error(
            imageResult.message ||
              imageResult.error ||
              "Product saved but image upload failed",
          );
      }
      setFeedback({ type: "success", text: "Product added successfully." });
      resetForm();
    } catch (error) {
      setFeedback({
        type: "error",
        text: error.message || "Failed to add product.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-4 sm:py-8 px-3 sm:px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-linear-to-r from-amber-600 to-amber-700 px-4 sm:px-6 py-4 sm:py-5">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Add New Product
            </h2>
            <p className="text-amber-100 text-xs sm:text-sm mt-1">
              Creates a product with the documented API and uploads its image
              separately.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="px-4 sm:px-6 py-4 sm:py-6 space-y-4"
          >
            {feedback.text && (
              <div
                className={`rounded-lg px-4 py-3 text-sm font-medium ${feedback.type === "success" ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"}`}
              >
                {feedback.text}
              </div>
            )}
            <div className="space-y-1">
              <label
                htmlFor="category_id"
                className="block text-xs sm:text-sm font-semibold text-gray-700"
              >
                Category
              </label>
              <select
                id="category_id"
                name="category_id"
                value={formData.category_id}
                onChange={handleInputChange}
                required
                disabled={categoryLoading || categories.length === 0}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
              >
                <option value="">
                  {categoryLoading
                    ? "Loading categories..."
                    : "Select a category"}
                </option>
                {categories.map((category) => {
                  const categoryId = category.id ?? category.category_id;
                  const categoryName =
                    category.name ?? category.title ?? `Category ${categoryId}`;
                  return (
                    <option key={categoryId} value={categoryId}>
                      {categoryName}
                    </option>
                  );
                })}
              </select>
              {categoryError && (
                <p className="text-xs text-red-600">{categoryError}</p>
              )}
            </div>
            <div className="space-y-1">
              <label
                htmlFor="name"
                className="block text-xs sm:text-sm font-semibold text-gray-700"
              >
                Product Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="e.g., Cappuccino"
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
              />
            </div>
            <div className="space-y-1">
              <label
                htmlFor="sku"
                className="block text-xs sm:text-sm font-semibold text-gray-700"
              >
                SKU
              </label>
              <input
                type="text"
                id="sku"
                name="sku"
                value={formData.sku}
                onChange={handleInputChange}
                required
                placeholder="e.g., CAP001"
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
              />
            </div>
            <div className="space-y-1">
              <label
                htmlFor="description"
                className="block text-xs sm:text-sm font-semibold text-gray-700"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows="3"
                placeholder="Hot coffee"
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition resize-none"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label className="flex items-center gap-3 rounded-lg border border-gray-300 px-4 py-3">
                <input
                  type="checkbox"
                  name="is_available"
                  checked={formData.is_available}
                  onChange={handleInputChange}
                  className="h-4 w-4 accent-amber-600"
                />
                <span className="text-sm font-medium text-gray-700">
                  Available
                </span>
              </label>
              <label className="flex items-center gap-3 rounded-lg border border-gray-300 px-4 py-3">
                <input
                  type="checkbox"
                  name="is_active"
                  checked={formData.is_active}
                  onChange={handleInputChange}
                  className="h-4 w-4 accent-amber-600"
                />
                <span className="text-sm font-medium text-gray-700">
                  Active
                </span>
              </label>
            </div>
            <div className="space-y-2">
              <label className="block text-xs sm:text-sm font-semibold text-gray-700">
                Product Image
              </label>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="shrink-0">
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="h-20 w-20 sm:h-24 sm:w-24 object-cover rounded-lg border-2 border-amber-200"
                    />
                  ) : (
                    <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-lg bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
                      <svg
                        className="h-6 w-6 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <label className="cursor-pointer w-full sm:w-auto bg-white py-2 px-4 border border-gray-300 rounded-lg shadow-sm text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition text-center">
                  <span>Choose image</span>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </label>
              </div>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-amber-300 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 text-sm sm:text-base mt-4"
            >
              {isSubmitting ? "Saving..." : "Add Product"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
