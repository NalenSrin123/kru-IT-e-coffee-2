import React, { useState, useEffect } from "react"; // ✅ ADDED
import { useNavigate } from "react-router-dom";
import axios from "axios"; // ✅ ADDED

function GetUser() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // ❌ REMOVE static users
  // const users = [...]

  const [users, setUsers] = useState([]); // ✅ ADDED (store API data)

  // ✅ FETCH API when page loads
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://kru-it-e-coffee-intern-main-i74iel.laravel.cloud/api/staff"
      );

      console.log("API DATA:", response.data);

      // ✅ IMPORTANT (support both structures)
      setUsers(response.data.data || response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Format date
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
  };

  // ✅ FILTER from API users
  const filteredUsers = users.filter((user) =>
    `${user.name} ${user.email}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

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
          className="w-50 p-2 sm:p-3 border rounded-lg focus:outline-none"
        />
      </div>

      {/* TABLE */}
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

                    {/* Coffee */}
                    <td className="p-3">
                      {user.coffee || "N/A"}
                    </td>

                    {/* ✅ FIX date (API uses created_at) */}
                    <td className="p-3 text-sm">
                      {formatDate(user.created_at || user.createdAt)}
                    </td>

                    <td className="p-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          user.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        {user.status || "Unknown"}
                      </span>
                    </td>

                    <td className="p-3 space-x-2">
                      <button className="bg-blue-500 text-white px-3 py-1 rounded">
                        Edit
                      </button>
                      <button className="bg-red-500 text-white px-3 py-1 rounded">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center p-6 text-gray-500">
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* MOBILE */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:hidden gap-4">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div key={user.id} className="bg-white shadow-md rounded-lg p-4">
              <p className="font-bold">{user.name}</p>
              <p>{user.email}</p>
              <p>{user.coffee || "N/A"}</p>
              <p>{formatDate(user.created_at || user.createdAt)}</p>
            </div>
          ))
        ) : (
          <div className="text-center p-6 text-gray-500">
            No users found
          </div>
        )}
      </div>
    </div>
  );
}

export default GetUser;