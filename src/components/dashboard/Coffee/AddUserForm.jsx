import React, { useEffect, useState } from "react";
import api from "../../../services/api/BaseURL/api.jsx";

const roleOptions = [
  { id: 1, name: "Super Admin" },
  { id: 2, name: "Admin" },
  { id: 3, name: "Customer" },
  { id: 4, name: "Cashier" },
];

export default function AddUserForm() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    role_id: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("success");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  useEffect(() => {
    if (!showSuccessPopup) return;

    const timeoutId = setTimeout(() => {
      setShowSuccessPopup(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [showSuccessPopup]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    const roleId = Number(form.role_id);

    if (!form.username.trim() || !form.email.trim() || !form.password.trim() || !roleId) {
      setMessageType("error");
      setMessage("Please fill all fields.");
      return;
    }

    try {
      setIsSubmitting(true);

      await api.post("/register", {
        name: form.username,
        email: form.email,
        password: form.password,
        role_id: roleId,
      });

      setMessageType("success");
      setMessage("");
      setShowSuccessPopup(true);
      setForm({
        username: "",
        email: "",
        password: "",
        role_id: "",
      });
    } catch (error) {
      const apiMessage =
        error.response?.data?.message ||
        error.response?.data?.error ||
        "Failed to create user.";
      setMessageType("error");
      setMessage(apiMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="flex justify-center items-start md:items-center min-h-[calc(100vh-64px)] p-4 bg-gray-50">
        <div className="bg-white rounded-2xl p-6 md:p-8 w-full max-w-3xl">
        <h2 className="text-2xl font-semibold mb-6 text-gray-700">
          Add New User
        </h2>

        {message && (
          <p
            className={`mb-4 text-sm ${
              messageType === "success" ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Username */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-600">Username</label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              required
              placeholder="Enter username"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-600">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Enter email"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              placeholder="Enter password"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            />
          </div>
          {/* Role */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-600">Role</label>
            <select
              name="role_id"
              value={form.role_id}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            >
              <option value="" disabled>Select role</option>
              {roleOptions.map((role) => (
                <option key={role.id} value={role.id}>
                  {role.name}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-end mt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Creating..." : "Create Account"}
            </button>
          </div>
        </form>
      </div>
      </div>

      {showSuccessPopup && (
        <div className="fixed right-4 top-4 z-50">
          <div className="rounded-lg bg-green-600 px-4 py-3 text-sm font-medium text-white shadow-lg">
            User created successfully.
          </div>
        </div>
      )}
    </>
  );
}