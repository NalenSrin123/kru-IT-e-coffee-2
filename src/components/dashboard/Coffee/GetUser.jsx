import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function GetUser() {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await axios.get("/api/staff");

      console.log("API Response:", response);
      console.log("API DATA:", response.data);
      console.log("Data type:", typeof response.data);
      console.log("Is array:", Array.isArray(response.data));
      
      // Handle different response structures
      let userData = response.data;
      
      // If response has a 'data' property, use that
      if (response.data && response.data.data) {
        userData = response.data.data;
        console.log("Using response.data.data:", userData);
      }
      
      // Ensure userData is an array
      if (!Array.isArray(userData)) {
        console.error("API did not return an array:", userData);
        setError("Invalid data format received from API");
        setUsers([]);
        return;
      }
      
      console.log("Final users array:", userData);
      console.log("Number of users:", userData.length);
      
      setUsers(userData);
    } catch (error) {
      console.error("Error fetching users:", error);
      console.error("Error details:", {
        message: error.message,
        status: error.response?.status,
        statusText: error.response?.statusText,
        data: error.response?.data
      });
      setError(error.message || "Failed to fetch users");
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (date) => {
    if (!date) return "N/A";
    try {
      return new Date(date).toLocaleDateString();
    } catch (e) {
      return "Invalid Date";
    }
  };

  const filteredUsers = users.filter((user) => {
    const searchLower = search.toLowerCase();
    const name = (user.name || "").toLowerCase();
    const email = (user.email || "").toLowerCase();
    return name.includes(searchLower) || email.includes(searchLower);
  });

  return (
    <div className="p-3 sm:p-4 md:p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
          Coffee User List
        </h1>

        <button
          onClick={() => navigate("/dashboard/add-user")}
          className="bg-[#905E42] text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-amber-700"
        >
          + Add User
        </button>
      </div>



      {/* Search */}
      <div className="mb-4 sm:mb-6">
        <input
          type="text"
          placeholder="Search user..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-64 p-2 sm:p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#905E42]"
        />
      </div>

      {/* Loading State */}
      {loading && (
        <div className="text-center p-12">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-[#905E42] border-t-transparent"></div>
          <p className="mt-4 text-gray-600">Loading users...</p>
        </div>
      )}

      {/* Error State */}
      {!loading && error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <p className="text-red-600 font-medium mb-2">Error loading users</p>
          <p className="text-red-500 text-sm mb-4">{error}</p>
          <button 
            onClick={fetchUsers}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Try Again
          </button>
        </div>
      )}

      {/* TABLE */}
      {!loading && !error && (
        <div className="hidden md:block bg-white shadow-md rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#905E42] text-white">
                <tr>
                  <th className="p-3">ID</th>
                  <th className="p-3">Name</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Favorite Coffee</th>
                  <th className="p-3">Created At</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredUsers.length > 0 ? (
                  filteredUsers.map((user) => (
                    <tr key={user.id} className="border-b hover:bg-gray-50">
                      <td className="p-3">{user.id}</td>
                      <td className="p-3 font-medium">{user.name}</td>
                      <td className="p-3 text-sm text-gray-600">
                        {user.email}
                      </td>

                      <td className="p-3">
                        {user.coffee || user.favorite_coffee || "N/A"}
                      </td>

                      <td className="p-3 text-sm">
                        {formatDate(user.created_at || user.createdAt)}
                      </td>

                      <td className="p-3">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            user.status === "Active" || user.status === "active"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-600"
                          }`}
                        >
                          {user.status || "Unknown"}
                        </span>
                      </td>

                      <td className="p-3 space-x-2">
                        <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                          Edit
                        </button>
                        <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center p-6 text-gray-500">
                      {users.length === 0 
                        ? "No users available. Click 'Retry Fetch' to load data."
                        : "No users match your search criteria."}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* MOBILE */}
      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:hidden gap-4">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <div key={user.id} className="bg-white shadow-md rounded-lg p-4">
                <p className="font-bold">{user.name}</p>
                <p className="text-gray-600">{user.email}</p>
                <p className="text-sm mt-2">
                  <span className="font-medium">Coffee:</span> {user.coffee || user.favorite_coffee || "N/A"}
                </p>
                <p className="text-sm">
                  <span className="font-medium">Joined:</span> {formatDate(user.created_at || user.createdAt)}
                </p>
                <div className="mt-2">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      user.status === "Active" || user.status === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {user.status || "Unknown"}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center p-6 text-gray-500 col-span-full">
              {users.length === 0 
                ? "No users available. Click 'Retry Fetch' to load data."
                : "No users match your search criteria."}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default GetUser;
