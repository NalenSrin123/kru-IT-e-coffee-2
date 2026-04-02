import React from "react";

export default function CustomerList() {
  return (
    <div className="p-4 md:p-6 bg-gray-100 min-h-screen">

      <div className="bg-white rounded-lg shadow p-4 md:p-6">

        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 mb-6">
          <h1 className="text-lg md:text-xl font-semibold">All Customers</h1>

          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full md:w-auto">
            Add Customer
          </button>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between gap-3 mb-4">

          <div className="flex gap-2">
            <select className="border rounded px-3 py-2 text-sm w-full md:w-auto">
              <option>Bulk Actions</option>
              <option>Delete</option>
            </select>

            <button className="bg-teal-500 text-white px-4 py-2 rounded text-sm">
              Apply
            </button>
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search by name"
              className="border px-3 py-2 rounded text-sm w-full md:w-64"
            />

            <button className="bg-teal-500 text-white px-4 py-2 rounded text-sm">
              Search
            </button>
          </div>

        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[700px]">

            <thead>
              <tr className="border-b text-gray-600 text-sm">
                <th className="p-3">
                  <input type="checkbox" />
                </th>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Phone</th>
                <th className="p-3">Address</th>
                <th className="p-3">Created</th>
                <th className="p-3">Status</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>

            <tbody className="text-sm">

              <tr className="border-b hover:bg-gray-50">
                <td className="p-3"><input type="checkbox" /></td>
                <td className="p-3 text-blue-600">John Doe</td>
                <td className="p-3">john@example.com</td>
                <td className="p-3">012345678</td>
                <td className="p-3">Phnom Penh</td>
                <td className="p-3">02/04/2026</td>
                <td className="p-3">
                  <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">
                    Active
                  </span>
                </td>
                <td className="p-3">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded text-xs">
                    Edit
                  </button>
                </td>
              </tr>

              <tr className="border-b hover:bg-gray-50">
                <td className="p-3"><input type="checkbox" /></td>
                <td className="p-3 text-blue-600">Jane Smith</td>
                <td className="p-3">jane@example.com</td>
                <td className="p-3">098765432</td>
                <td className="p-3">Phnom Penh</td>
                <td className="p-3">02/04/2026</td>
                <td className="p-3">
                  <span className="bg-gray-500 text-white px-2 py-1 rounded text-xs">
                    Inactive
                  </span>
                </td>
                <td className="p-3">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded text-xs">
                    Edit
                  </button>
                </td>
              </tr>

            </tbody>

          </table>
        </div>

      </div>

    </div>
  );
}
