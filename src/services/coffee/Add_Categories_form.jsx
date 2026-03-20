import React, { useState } from "react";

function CoffeeCategories() {
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Espresso",
      slug: "espresso",
      createdBy: "Admin",
      updatedBy: "Admin",
      createdAt: "20/03/2026",
      status: "Publish",
    },
    {
      id: 2,
      name: "Latte",
      slug: "latte",
      createdBy: "Admin",
      updatedBy: "Admin",
      createdAt: "20/03/2026",
      status: "Publish",
    },
    {
      id: 3,
      name: "Cappuccino",
      slug: "cappuccino",
      createdBy: "Admin",
      updatedBy: "Admin",
      createdAt: "20/03/2026",
      status: "Draft",
    },
    {
      id: 4,
      name: "Mocha",
      slug: "mocha",
      createdBy: "Admin",
      updatedBy: "Admin",
      createdAt: "20/03/2026",
      status: "Draft",
    },
  ]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Coffee Categories</h2>

      {/* Top Controls */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
        <div>
          <select>
            <option>Bulk Actions</option>
            <option>Delete</option>
          </select>
          <button style={{ marginLeft: "10px" }}>Apply</button>
        </div>

        <div>
          <input type="text" placeholder="Search by name" />
          <button style={{ marginLeft: "10px" }}>Search</button>
          <button style={{ marginLeft: "10px", backgroundColor: "blue", color: "#fff" }}>
            Add Category
          </button>
        </div>
      </div>

      {/* Table */}
      <table border="1" width="100%" cellPadding="10">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Slug</th>
            <th>Created By</th>
            <th>Updated By</th>
            <th>Created At</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {categories.map((cat) => (
            <tr key={cat.id}>
              <td><input type="checkbox" /></td>
              <td>{cat.name}</td>
              <td>{cat.slug}</td>
              <td>{cat.createdBy}</td>
              <td>{cat.updatedBy}</td>
              <td>{cat.createdAt}</td>
              <td>
                <span
                  style={{
                    color: "#fff",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    backgroundColor: cat.status === "Publish" ? "green" : "gray",
                  }}
                >
                  {cat.status}
                </span>
              </td>
              <td>
                <button style={{ backgroundColor: "blue", color: "#fff" }}>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CoffeeCategories;