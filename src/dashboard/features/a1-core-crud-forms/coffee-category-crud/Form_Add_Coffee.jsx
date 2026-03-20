import React, { useState } from "react";

const Form_Add_Coffee = () => {
  const [formData, setFormData] = useState({
    rating: 5,
    name: "",
    description: "",
    price: "",
    discount: "",
    image: null,
  });

  const [imagePreview, setImagePreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRatingChange = (rating) => {
    setFormData((prev) => ({
      ...prev,
      rating,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        image: file,
      }));

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const calculateDiscountedPrice = () => {
    const originalPrice = parseFloat(formData.price) || 0;
    const discountPercent = parseFloat(formData.discount) || 0;

    if (originalPrice > 0 && discountPercent > 0) {
      const discounted =
        originalPrice - (originalPrice * discountPercent) / 100;
      return discounted.toFixed(2);
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const discountedPrice = calculateDiscountedPrice();

    const menuItem = {
      rating: formData.rating,
      ratingStars:
        "★".repeat(formData.rating) + "☆".repeat(5 - formData.rating),
      name: formData.name,
      description: formData.description,
      originalPrice: formData.price
        ? `$${parseFloat(formData.price).toFixed(2)}`
        : null,
      discount: formData.discount ? `${formData.discount}%` : null,
      finalPrice: discountedPrice ? `$${discountedPrice}` : null,
      image: formData.image,
      imagePreview: imagePreview,
    };

    console.log("New menu item:", menuItem);
    alert("Menu item added! Check console for details.");
  };

  const discountedPrice = calculateDiscountedPrice();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-4 sm:py-8 px-3 sm:px-4">
      <div className="max-w-3xl mx-auto">
        {/* Main Form Card */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-amber-600 to-amber-700 px-4 sm:px-6 py-4 sm:py-5">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Add New Menu Item
            </h2>
            <p className="text-amber-100 text-xs sm:text-sm mt-1">
              Fill in the details below
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="px-4 sm:px-6 py-4 sm:py-6 space-y-4"
          >
            {/* Image Upload */}
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

            {/* Rating */}
            <div className="space-y-2">
              <label className="block text-xs sm:text-sm font-semibold text-gray-700">
                Rating
              </label>
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleRatingChange(star)}
                      className="focus:outline-none"
                    >
                      <svg
                        className={`w-6 h-6 sm:w-7 sm:h-7 ${
                          star <= formData.rating
                            ? "text-amber-400"
                            : "text-gray-300"
                        } transition-colors hover:text-amber-400`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </button>
                  ))}
                </div>
                <span className="text-xs sm:text-sm text-gray-500">
                  {formData.rating}/5
                </span>
              </div>
            </div>

            {/* Product Name */}
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

            {/* Description */}
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
                rows="2"
                placeholder="Describe your product..."
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition resize-none"
              />
            </div>

            {/* Price and Discount */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label
                  htmlFor="price"
                  className="block text-xs sm:text-sm font-semibold text-gray-700"
                >
                  Price ($)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2 text-gray-500 text-sm">
                    $
                  </span>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    required
                    min="0"
                    step="0.01"
                    placeholder="0.00"
                    className="w-full pl-7 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="discount"
                  className="block text-xs sm:text-sm font-semibold text-gray-700"
                >
                  Discount (%)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    id="discount"
                    name="discount"
                    value={formData.discount}
                    onChange={handleInputChange}
                    min="0"
                    max="100"
                    step="1"
                    placeholder="0"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition pr-8"
                  />
                  <span className="absolute right-3 top-2 text-gray-500 text-sm">
                    %
                  </span>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 text-sm sm:text-base mt-4"
            >
              Add to Menu
            </button>
          </form>
        </div>

        {/* Live Preview Card - This appears UNDER the form on all screen sizes */}
        {(formData.name ||
          formData.description ||
          formData.price ||
          imagePreview) && (
          <div className="mt-6 sm:mt-8">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden border-2 border-amber-100">
              {/* Preview Header */}
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-4 sm:px-6 py-3 sm:py-4">
                <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  Live Preview
                </h3>
                <p className="text-purple-100 text-xs mt-1">
                  See how your item will look on the menu
                </p>
              </div>

              {/* Preview Content */}
              <div className="p-4 sm:p-6">
                {/* Menu Card Preview */}
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl border-2 border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
                  {/* Image Section */}
                  <div className="relative h-40 sm:h-48 bg-gray-100">
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        alt={formData.name || "Menu item"}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                        <svg
                          className="w-12 h-12 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    )}

                    {/* Discount Badge */}
                    {formData.discount && parseFloat(formData.discount) > 0 && (
                      <div className="absolute top-2 right-2 bg-red-500 text-white text-xs sm:text-sm font-bold px-2 py-1 rounded-full shadow-lg">
                        {formData.discount}% OFF
                      </div>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="p-4 sm:p-5">
                    {/* Rating Stars */}
                    <div className="flex items-center gap-1 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 sm:w-5 sm:h-5 ${
                              i < formData.rating
                                ? "text-amber-400"
                                : "text-gray-300"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">
                        ({formData.rating}/5)
                      </span>
                    </div>

                    {/* Product Name */}
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                      {formData.name || "Product Name"}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-gray-600 mb-3 line-clamp-2">
                      {formData.description || "Description will appear here"}
                    </p>

                    {/* Price Section */}
                    <div className="flex items-baseline gap-2 flex-wrap">
                      {discountedPrice ? (
                        <>
                          <span className="text-xl sm:text-2xl font-bold text-amber-600">
                            ${discountedPrice}
                          </span>
                          <span className="text-sm sm:text-base text-gray-400 line-through">
                            ${parseFloat(formData.price || 0).toFixed(2)}
                          </span>
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">
                            Save $
                            {(
                              parseFloat(formData.price) -
                              parseFloat(discountedPrice)
                            ).toFixed(2)}
                          </span>
                        </>
                      ) : (
                        <span className="text-xl sm:text-2xl font-bold text-amber-600">
                          ${parseFloat(formData.price || 0).toFixed(2)}
                        </span>
                      )}
                    </div>

                    {/* Add to Cart Button (Preview) */}
                    <button className="w-full mt-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-4 rounded-lg text-sm transition transform hover:scale-[1.02]">
                      Add to Cart
                    </button>
                  </div>
                </div>

                {/* Preview Info Summary */}
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                  <div className="bg-gray-50 p-2 rounded-lg">
                    <span className="font-semibold text-gray-700">Rating:</span>
                    <span className="ml-1 text-gray-600">
                      {formData.rating}/5
                    </span>
                  </div>
                  <div className="bg-gray-50 p-2 rounded-lg">
                    <span className="font-semibold text-gray-700">Price:</span>
                    <span className="ml-1 text-gray-600">
                      ${formData.price || "0.00"}
                    </span>
                  </div>
                  <div className="bg-gray-50 p-2 rounded-lg col-span-2 sm:col-span-1">
                    <span className="font-semibold text-gray-700">
                      Discount:
                    </span>
                    <span className="ml-1 text-gray-600">
                      {formData.discount || "0"}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form_Add_Coffee;
