import React, { use, useState } from "react";
import { Edit, Search, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
const List_Categories_Coffee = () => {
  const [categories] = useState([
    {
      id: 1,
      name: "Espresso",
      slug: "espresso",
      createdBy: "Admin Bun",
      updatedBy: "Sreyne",
      createdAt: "02/04/2026",
      status: "Publish",
    },
    {
      id: 2,
      name: "Cappuccino",
      slug: "cappuccino",
      createdBy: "Admin Bun",
      updatedBy: "Sreyne",
      createdAt: "02/04/2026",
      status: "Publish",
    },
    {
      id: 3,
      name: "Cold Brew",
      slug: "cold-brew",
      createdBy: "Admin Bun",
      updatedBy: "Admin Bun",
      createdAt: "05/04/2026",
      status: "Draft",
    },
    {
      id: 4,
      name: "Latte Art",
      slug: "latte-art",
      createdBy: "Admin Bun",
      updatedBy: "Admin Bun",
      createdAt: "10/04/2026",
      status: "Draft",
    },
  ]);
  const navigate = useNavigate();

  const handleClick = (categoryId) => {
    navigate(`/categories/edit/${categoryId}`);
  };
  const [searchTerm, setSearchTerm] = useState("");
  const [query, setQuery] = useState("");

  // 🔥 Filter (fixed)
  const filteredCategories = categories.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase().trim()),
  );

  const handleSearch = () => {
    setQuery(searchTerm);
  };

  return (
    <div className="p-6 bg-[#f5f0e6] min-h-screen font-sans text-[#5c4033]">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-[#4b2e2e]">
          All Coffee Categories
        </h1>
        <button className="flex items-center gap-2 bg-[#6f4e37] hover:bg-[#5a3e2b] text-white px-5 py-2 rounded-lg font-semibold transition shadow-sm">
          <Plus size={20} /> Add Category
        </button>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <div className="flex gap-2">
          <select className="border border-[#d6c4b6] rounded-md px-4 py-2 bg-white text-sm">
            <option>Bulk Actions</option>
            <option>Delete Selected</option>
            <option>Update Status</option>
          </select>

          <button className="bg-[#8b5e3c] hover:bg-[#6f4e37] text-white px-6 py-2 rounded-md text-sm font-medium">
            Apply
          </button>
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-[#d6c4b6] rounded-md px-4 py-2 text-sm w-72"
          />

          <button
            onClick={handleSearch}
            className="bg-[#8b5e3c] hover:bg-[#6f4e37] text-white px-6 py-2 rounded-md text-sm flex items-center gap-2"
          >
            <Search size={16} /> Search
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-[#e0d3c2] shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[#e0d3c2] bg-[#ede0d4] text-[#5c4033] uppercase text-xs font-bold">
              <th className="p-4">Name</th>
              <th className="p-4">Slug</th>
              <th className="p-4">Created By</th>
              <th className="p-4">Updated By</th>
              <th className="p-4">Created At</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredCategories.length > 0 ? (
              filteredCategories.map((item) => (
                <tr key={item.id} className="hover:bg-[#f3e9dc]">
                  <td className="p-4 font-bold text-[#6f4e37]">
                    {item.name.toUpperCase()}
                  </td>

                  <td className="p-4">{item.slug}</td>
                  <td className="p-4">{item.createdBy}</td>
                  <td className="p-4">{item.updatedBy}</td>
                  <td className="p-4">{item.createdAt}</td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded text-[10px] text-white ${
                        item.status === "Publish"
                          ? "bg-[#6f4e37]"
                          : "bg-[#a1887f]"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="p-4 text-center">
                    <button
                      onClick={() => handleClick(item.id)}
                      className="bg-[#6f4e37] text-white px-3 py-1.5 rounded-md text-xs flex items-center gap-1 mx-auto"
                    >
                      <Edit size={14} /> Edit
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="p-10 text-center text-red-400">
                  No categories found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List_Categories_Coffee;
