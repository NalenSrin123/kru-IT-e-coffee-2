import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateCustomer() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    is_active: true, // <-- required by backend
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Fetch customer data
  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const res = await axios.get(
          `https://kru-it-e-coffee-intern-main-i74iel.laravel.cloud/api/v1/customers/${id}`,
          {
            headers: {
              Authorization:
                "Bearer 131|Iae1p4lvknIvwCCbAnIPwHLQfNT18LWQ7VPLFcYMd85b81bc",
            },
          }
        );

        const customer = res.data.data;

        setFormData({
          email: customer.email || "",
          password: "",
          is_active: customer.is_active ?? true, // set current status
        });
      } catch (error) {
        console.error("Fetch error:", error.response?.data || error.message);
        setMessage("Failed to load customer data ❌");
      }
    };

    fetchCustomer();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      const res = await axios.patch(
        `https://kru-it-e-coffee-intern-main-i74iel.laravel.cloud/api/v1/customers/${id}`,
        formData,
        {
          headers: {
            Authorization:
              "Bearer 131|Iae1p4lvknIvwCCbAnIPwHLQfNT18LWQ7VPLFcYMd85b81bc",
          },
        }
      );

      console.log("Response:", res.data);
      setMessage("Update successful ✅");
      setIsLoading(false);
      setFormData((prev) => ({ ...prev, password: "" }));

      setTimeout(() => navigate("/dashboard/customers"), 1500);
    } catch (error) {
      console.error("Update error:", error.response?.data || error.message);
      const backendMsg =
        error.response?.data?.message ||
        error.response?.data?.errors?.is_active?.[0] ||
        "Update failed ❌";
      setMessage(backendMsg);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Update Account
        </h2>

        {message && (
          <div
            className={`mb-4 p-3 rounded text-sm text-center ${
              message.includes("✅")
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="name@gmail.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block mb-1 text-sm font-semibold text-gray-600">
              New Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-xs font-bold text-gray-400 hover:text-blue-500"
            >
              {showPassword ? "HIDE" : "SHOW"}
            </button>
          </div>

          {/* Is Active */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="is_active"
              checked={formData.is_active}
              onChange={handleChange}
              className="w-4 h-4 accent-blue-500"
            />
            <label className="text-sm font-medium text-gray-700">
              Active User
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full text-white font-bold py-3 rounded-lg transition-colors ${
              isLoading
                ? "bg-blue-300 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 shadow-md"
            }`}
          >
            {isLoading ? "Updating..." : "Update Settings"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateCustomer;