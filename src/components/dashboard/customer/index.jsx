import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CustomerList() {
  const [search, setSearch] = useState("");
  const [customers, setCustomer] = useState([]);
  const [paginate, setPaginate] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const [api, setApi] = useState(
    "https://kru-it-e-coffee-intern-main-i74iel.laravel.cloud/api/v1/customers"
  );

  const TOKEN =
    "Bearer 131|Iae1p4lvknIvwCCbAnIPwHLQfNT18LWQ7VPLFcYMd85b81bc";

  // ✅ FETCH DATA (with pagination support)
  useEffect(() => {
    const getCustomers = async () => {
      try {
        setLoading(true);

        const res = await axios.get(api, {
          headers: {
            Authorization: TOKEN,
          },
        });

        setCustomer(res.data.data.data);
        setPaginate(res.data.data.links);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getCustomers();
  }, [api]); // ✅ IMPORTANT FIX

  // ✅ FORMAT DATE
  const formatDate = (date) => {
    if (!date) return "-";
    return new Date(date).toLocaleDateString();
  };

  // ✅ SEARCH FILTER
  const filteredUsers = customers.filter((customer) =>
    [customer.name, customer.email]
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // ✅ DELETE FUNCTION
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure to delete?");
    if (!confirmDelete) return;

    try {
      await axios.delete(
        `https://kru-it-e-coffee-intern-main-i74iel.laravel.cloud/api/v1/customers/${id}`,
        {
          headers: {
            Authorization: TOKEN,
          },
        }
      );

      // refresh list
      setCustomer((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Customer List</h1>
      </div>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 p-2 border rounded w-60"
      />

      {/* LOADING */}
      {loading && <p className="mb-4">Loading...</p>}

      {/* TABLE */}
      <div className="bg-white shadow rounded overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-[#905E42] text-white">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Provider</th>
              <th className="p-3">Created</th>
              <th className="p-3">Last Login</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((customer) => (
                <tr key={customer.id} className="border-b">
                  <td className="p-3">{customer.id}</td>
                  <td className="p-3">{customer.name}</td>
                  <td className="p-3">{customer.email}</td>
                  <td className="p-3">{customer.provider}</td>
                  <td className="p-3">
                    {formatDate(customer.created_at)}
                  </td>
                  <td className="p-3">
                    {formatDate(customer.last_login_at)}
                  </td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded text-xs ${
                        customer.is_active
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {customer.is_active ? "Active" : "Inactive"}
                    </span>
                  </td>

                  <td className="p-3 space-x-2">
                    <button
                      onClick={() =>
                        navigate(`/dashboard/customers/${customer.id}`)
                      }
                      className="bg-blue-500 text-white px-2 py-1 rounded"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(customer.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              !loading && (
                <tr>
                  <td colSpan="8" className="text-center p-4">
                    No users found
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>

      {/* ✅ PAGINATION */}
      <div className="flex flex-wrap gap-2 mt-6">
        {paginate.map((val, index) => (
          <button
            key={index}
            disabled={!val.url}
            onClick={() => val.url && setApi(val.url)}
            className={`px-3 py-1 rounded border text-sm ${
              val.active
                ? "bg-[#905E42] text-white"
                : "bg-white text-gray-700"
            } ${
              !val.url
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-100"
            }`}
            dangerouslySetInnerHTML={{ __html: val.label }}
          />
        ))}
      </div>
    </div>
  );
}

export default CustomerList;