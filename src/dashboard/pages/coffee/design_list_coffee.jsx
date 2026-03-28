import React, { useState } from 'react';
import { Edit, Search, Plus, Trash2 } from 'lucide-react';

const List_Categories_Coffee = () => {
  // 1. State for our coffee categories
  const [categories, setCategories] = useState([
    { id: 1, name: 'Espresso', slug: 'espresso', createdBy: 'Admin Bun', updatedBy: 'Sreyne', createdAt: '02/04/2026', status: 'Publish' },
    { id: 2, name: 'Cappuccino', slug: 'cappuccino', createdBy: 'Admin Bun', updatedBy: 'Sreyne', createdAt: '02/04/2026', status: 'Publish' },
    { id: 3, name: 'Cold Brew', slug: 'cold-brew', createdBy: 'Admin Bun', updatedBy: 'Admin Bun', createdAt: '05/04/2026', status: 'Draft' },
    { id: 4, name: 'Latte Art', slug: 'latte-art', createdBy: 'Admin Bun', updatedBy: 'Admin Bun', createdAt: '10/04/2026', status: 'Draft' },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  // 2. Filter logic for the search bar
  const filteredCategories = categories.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen font-sans text-slate-700">
      
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-slate-800">All Coffee Categories</h1>
        <button className="flex items-center gap-2 bg-[#1a73e8] hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold transition shadow-sm">
          <Plus size={20} /> Add Category
        </button>
      </div>

      {/* Control Bar (Bulk Actions & Search) */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <div className="flex gap-2">
          <select className="border border-gray-300 rounded-md px-4 py-2 bg-white text-sm focus:ring-2 focus:ring-blue-500 outline-none">
            <option>Bulk Actions</option>
            <option>Delete Selected</option>
            <option>Update Status</option>
          </select>
          <button className="bg-[#2eb8b8] hover:bg-[#259393] text-white px-6 py-2 rounded-md text-sm font-medium transition">
            Apply
          </button>
        </div>
        
        <div className="flex gap-2">
          <input 
            type="text" 
            placeholder="Search by name" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 text-sm w-72 focus:ring-2 focus:ring-blue-500 outline-none shadow-sm"
          />
          <button className="bg-[#2eb8b8] hover:bg-[#259393] text-white px-6 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition">
            <Search size={16} /> Search
          </button>
        </div>
      </div>
      {/* Table Container */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50/50 text-slate-600 uppercase text-xs font-bold tracking-wider">
              <th className="p-4 w-12"><input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" /></th>
              <th className="p-4">Name</th>
              <th className="p-4">Slug</th>
              <th className="p-4">Created By</th>
              <th className="p-4">Updated By</th>
              <th className="p-4">Created At</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredCategories.length > 0 ? (
              filteredCategories.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50/80 transition-colors group">
                  <td className="p-4"><input type="checkbox" className="w-4 h-4 rounded border-gray-300" /></td>
                  <td className="p-4 font-bold text-[#1a73e8] hover:underline cursor-pointer">
                    {item.name.toUpperCase()}
                  </td>
                  <td className="p-4 text-gray-500 text-sm">{item.slug}</td>
                  <td className="p-4 text-gray-600">{item.createdBy}</td>
                  <td className="p-4 text-gray-600">{item.updatedBy}</td>
                  <td className="p-4 text-gray-500 text-sm">{item.createdAt}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded text-[10px] font-bold uppercase tracking-tight text-white ${
                      item.status === 'Publish' ? 'bg-[#4caf50]' : 'bg-[#757575]'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <button className="bg-[#1a73e8] hover:bg-blue-700 text-white px-3 py-1.5 rounded-md text-xs flex items-center gap-1.5 mx-auto transition-all shadow-sm active:scale-95">
                      <Edit size={14} /> Edit
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="p-10 text-center text-gray-400 italic">No categories found matching your search.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List_Categories_Coffee;