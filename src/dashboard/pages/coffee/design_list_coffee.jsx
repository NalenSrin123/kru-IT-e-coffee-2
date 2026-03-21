import React, { useState } from "react";

const coffees = [
  { id: 1, name: "Espresso", type: "Hot", price: "$2.00", createdBy: "Admin", createdAt: "10/03/2026", status: "Publish", emoji: "☕" },
  { id: 2, name: "Latte", type: "Hot", price: "$3.50", createdBy: "Admin", createdAt: "10/03/2026", status: "Publish", emoji: "🥛" },
  { id: 3, name: "Cold Brew", type: "Cold", price: "$4.00", createdBy: "Admin", createdAt: "10/03/2026", status: "Draft", emoji: "🧊" },
  { id: 4, name: "Cappuccino", type: "Hot", price: "$3.00", createdBy: "Admin", createdAt: "11/03/2026", status: "Publish", emoji: "☕" },
  { id: 5, name: "Iced Matcha", type: "Cold", price: "$4.50", createdBy: "Staff", createdAt: "12/03/2026", status: "Draft", emoji: "🍵" },
];

export default function DesignListCoffee() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([]);

  const filtered = coffees.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const toggleSelect = (id) =>
    setSelected((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);

  const toggleAll = () =>
    setSelected(selected.length === filtered.length ? [] : filtered.map((c) => c.id));

  return (
    <div className="min-h-screen bg-amber-50 p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">

        {/* Header */}
        <div className="bg-amber-800 px-8 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-white text-2xl font-bold tracking-tight">☕ Coffee Menu</h1>
            <p className="text-amber-200 text-sm mt-1">Manage your coffee catalog</p>
          </div>
          <button className="bg-amber-400 hover:bg-amber-300 text-amber-900 font-semibold text-sm px-5 py-2.5 rounded-full transition">
            + Add Coffee
          </button>
        </div>

        {/* Stats */}
        <div className="bg-amber-50 px-8 py-3 flex gap-6 border-b border-amber-100 text-sm text-amber-700">
          <span>Total: <strong>{coffees.length}</strong></span>
          <span>Published: <strong className="text-green-600">{coffees.filter(c => c.status === "Publish").length}</strong></span>
          <span>Drafts: <strong className="text-gray-500">{coffees.filter(c => c.status === "Draft").length}</strong></span>
          <span>Selected: <strong className="text-amber-900">{selected.length}</strong></span>
        </div>

        {/* Toolbar */}
        <div className="px-8 py-4 flex items-center justify-between border-b border-amber-100 flex-wrap gap-3">
          <div className="flex gap-2">
            <select className="border border-amber-200 text-amber-800 text-sm rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-amber-300">
              <option>Bulk Actions</option>
              <option>Publish</option>
              <option>Delete</option>
            </select>
            <button className="bg-amber-700 hover:bg-amber-800 text-white text-sm px-4 py-2 rounded-lg transition">Apply</button>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search coffee..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border border-amber-200 text-sm rounded-full px-4 py-2 w-52 outline-none focus:ring-2 focus:ring-amber-300 text-amber-900 placeholder-amber-300"
            />
            <button className="bg-amber-600 hover:bg-amber-700 text-white text-sm px-4 py-2 rounded-full transition">Search</button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto px-6 pb-6 pt-2">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-amber-500 uppercase text-xs tracking-wider">
                <th className="py-3 px-3 text-left">
                  <input type="checkbox" className="accent-amber-700" checked={selected.length === filtered.length && filtered.length > 0} onChange={toggleAll} />
                </th>
                <th className="py-3 px-3 text-left">Coffee</th>
                <th className="py-3 px-3 text-left">Type</th>
                <th className="py-3 px-3 text-left">Price</th>
                <th className="py-3 px-3 text-left">Created By</th>
                <th className="py-3 px-3 text-left">Created At</th>
                <th className="py-3 px-3 text-left">Status</th>
                <th className="py-3 px-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-amber-50">
              {filtered.length === 0 ? (
                <tr><td colSpan={8} className="text-center py-12 text-amber-300 text-base">☕ No coffee found</td></tr>
              ) : filtered.map((coffee) => (
                <tr key={coffee.id} className={`hover:bg-amber-50 transition rounded-xl ${selected.includes(coffee.id) ? "bg-amber-50" : ""}`}>
                  <td className="py-3 px-3">
                    <input type="checkbox" className="accent-amber-700" checked={selected.includes(coffee.id)} onChange={() => toggleSelect(coffee.id)} />
                  </td>
                  <td className="py-3 px-3">
                    <div className="flex items-center gap-3">
                      <span className="w-9 h-9 bg-amber-100 rounded-xl flex items-center justify-center text-lg">{coffee.emoji}</span>
                      <span className="font-semibold text-amber-900">{coffee.name}</span>
                    </div>
                  </td>
                  <td className="py-3 px-3">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${coffee.type === "Hot" ? "bg-red-100 text-red-600" : "bg-blue-100 text-blue-600"}`}>
                      {coffee.type === "Hot" ? "🔥" : "❄️"} {coffee.type}
                    </span>
                  </td>
                  <td className="py-3 px-3 font-bold text-amber-800">{coffee.price}</td>
                  <td className="py-3 px-3 text-amber-600">{coffee.createdBy}</td>
                  <td className="py-3 px-3 text-amber-400">{coffee.createdAt}</td>
                  <td className="py-3 px-3">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${coffee.status === "Publish" ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-500"}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${coffee.status === "Publish" ? "bg-green-500" : "bg-gray-400"}`} />
                      {coffee.status}
                    </span>
                  </td>
                  <td className="py-3 px-3">
                    <div className="flex gap-2">
                      <button className="bg-amber-700 hover:bg-amber-800 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition">Edit</button>
                      <button className="bg-red-50 hover:bg-red-100 text-red-500 text-xs font-semibold px-3 py-1.5 rounded-lg border border-red-100 transition">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="px-8 py-4 border-t border-amber-100 bg-amber-50 flex items-center justify-between">
          <p className="text-sm text-amber-600">Showing <strong className="text-amber-900">{filtered.length}</strong> of <strong className="text-amber-900">{coffees.length}</strong> items</p>
          <div className="flex gap-1">
            {["‹", "1", "2", "3", "›"].map((p) => (
              <button key={p} className={`w-8 h-8 text-sm rounded-lg font-semibold transition ${p === "1" ? "bg-amber-700 text-white" : "bg-white text-amber-700 border border-amber-200 hover:bg-amber-100"}`}>{p}</button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}