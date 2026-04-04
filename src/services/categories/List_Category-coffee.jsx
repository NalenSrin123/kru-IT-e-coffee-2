import React, { useState } from "react";
import { Edit, Search, Plus, Trash2, X } from "lucide-react";

const today = () => {
  const d = new Date();
  return `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}/${d.getFullYear()}`;
};

const slugify = (s) =>
  s.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

const Toast = ({ message }) =>
  message ? (
    <div className="fixed bottom-6 right-6 bg-[#4b2e2e] text-[#f5f0e6] px-5 py-3 rounded-lg text-sm shadow-lg z-50 transition-opacity">
      {message}
    </div>
  ) : null;

const Modal = ({ title, children, onClose }) => (
  <div
    className="fixed inset-0 bg-black/30 z-40 flex items-center justify-center"
    onClick={(e) => e.target === e.currentTarget && onClose()}
  >
    <div className="bg-white rounded-xl border border-[#e0d3c2] p-6 w-[420px] max-w-[94vw]">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-base font-semibold text-[#4b2e2e]">{title}</h2>
        <button onClick={onClose} className="text-[#a1887f] hover:text-[#6f4e37]">
          <X size={18} />
        </button>
      </div>
      {children}
    </div>
  </div>
);

const Field = ({ label, children }) => (
  <div className="mb-4">
    <label className="block text-xs font-medium text-[#8d6e63] mb-1">{label}</label>
    {children}
  </div>
);

const inputCls =
  "w-full border border-[#d6c4b6] rounded-md px-3 py-2 text-sm text-[#4b2e2e] bg-[#faf7f4] focus:outline-none focus:border-[#6f4e37]";

const List_Categories_Coffee = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: "Espresso", slug: "espresso", createdBy: "Admin Tom", updatedBy: "Sivnean", createdAt: "02/04/2026", status: "Publish" },
    { id: 2, name: "Cappuccino", slug: "cappuccino", createdBy: "Admin Tom", updatedBy: "Sivnean", createdAt: "02/04/2026", status: "Publish" },
    { id: 3, name: "Cold Brew", slug: "cold-brew", createdBy: "Admin Keo", updatedBy: "Admin Sreynich", createdAt: "05/04/2026", status: "Draft" },
    { id: 4, name: "Latte Art", slug: "latte-art", createdBy: "Admin Keo", updatedBy: "Admin Sreynich", createdAt: "10/04/2026", status: "Draft" },
  ]);

  const [nextId, setNextId] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [bulkAction, setBulkAction] = useState("");
  const [selected, setSelected] = useState(new Set());
  const [toast, setToast] = useState("");
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(null); // { ids, label }
  const [addForm, setAddForm] = useState({ name: "", slug: "", createdBy: "", status: "Publish" });
  const [editForm, setEditForm] = useState({ id: null, name: "", slug: "", updatedBy: "", status: "Publish" });

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2200);
  };

  const filtered = categories.filter((c) => {
    const matchQ = c.name.toLowerCase().includes(query.toLowerCase().trim());
    const matchS = statusFilter ? c.status === statusFilter : true;
    return matchQ && matchS;
  });

  const doSearch = () => setQuery(searchTerm);

  // --- Select ---
  const toggleAll = (checked) =>
    setSelected(checked ? new Set(filtered.map((c) => c.id)) : new Set());

  const toggleRow = (id, checked) => {
    const next = new Set(selected);
    checked ? next.add(id) : next.delete(id);
    setSelected(next);
  };

  // --- Add ---
  const openAdd = () => {
    setAddForm({ name: "", slug: "", createdBy: "", status: "Publish" });
    setShowAdd(true);
  };

  const handleAddNameChange = (val) => {
    setAddForm((f) => ({ ...f, name: val, slug: f.slugManual ? f.slug : slugify(val) }));
  };

  const saveAdd = () => {
    const name = addForm.name.trim();
    if (!name) return;
    const slug = addForm.slug || slugify(name);
    const creator = addForm.createdBy.trim() || "Admin";
    setCategories((prev) => [
      ...prev,
      { id: nextId, name, slug, createdBy: creator, updatedBy: creator, createdAt: today(), status: addForm.status },
    ]);
    setNextId((n) => n + 1);
    setShowAdd(false);
    showToast("Category added");
  };

  // --- Edit ---
  const openEdit = (id) => {
    const c = categories.find((x) => x.id === id);
    if (!c) return;
    setEditForm({ id: c.id, name: c.name, slug: c.slug, updatedBy: c.updatedBy, status: c.status });
    setShowEdit(true);
  };

  const saveEdit = () => {
    const name = editForm.name.trim();
    if (!name) return;
    setCategories((prev) =>
      prev.map((c) =>
        c.id === editForm.id
          ? { ...c, name, slug: editForm.slug || slugify(name), updatedBy: editForm.updatedBy || c.updatedBy, status: editForm.status }
          : c
      )
    );
    setShowEdit(false);
    showToast("Category updated");
  };

  // --- Delete ---
  const deleteIds = (ids) => {
    setCategories((prev) => prev.filter((c) => !ids.includes(c.id)));
    setSelected((prev) => {
      const next = new Set(prev);
      ids.forEach((id) => next.delete(id));
      return next;
    });
  };

  const handleConfirmDelete = () => {
    deleteIds(confirmDelete.ids);
    setConfirmDelete(null);
    showToast("Deleted");
  };

  // --- Bulk ---
  const applyBulk = () => {
    if (!bulkAction || !selected.size) {
      showToast(selected.size ? "Pick an action first" : "Select items first");
      return;
    }
    const ids = [...selected];
    if (bulkAction === "delete") {
      setConfirmDelete({ ids, label: `Delete ${ids.length} selected categor${ids.length > 1 ? "ies" : "y"}?` });
    } else {
      const status = bulkAction === "publish" ? "Publish" : "Draft";
      setCategories((prev) => prev.map((c) => (selected.has(c.id) ? { ...c, status } : c)));
      setSelected(new Set());
      showToast(`Status set to ${status}`);
    }
    setBulkAction("");
  };

  return (
    <div className="p-6 bg-white min-h-screen font-sans text-[#5c4033]">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-[#4b2e2e]">All Coffee Categories</h1>
        <button
          onClick={openAdd}
          className="flex items-center gap-2 bg-[#6f4e37] hover:bg-[#5a3e2b] text-white px-5 py-2 rounded-lg font-semibold transition shadow-sm"
        >
          <Plus size={18} /> Add Category
        </button>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <div className="flex gap-2">
          <select
            className="border border-[#d6c4b6] rounded-md px-4 py-2 bg-white text-sm"
            value={bulkAction}
            onChange={(e) => setBulkAction(e.target.value)}
          >
            <option value="">Bulk Actions</option>
            <option value="delete">Delete Selected</option>
            <option value="publish">Set Publish</option>
            <option value="draft">Set Draft</option>
          </select>
          <button
            onClick={applyBulk}
            className="bg-[#8b5e3c] hover:bg-[#6f4e37] text-white px-6 py-2 rounded-md text-sm font-medium"
          >
            Apply
          </button>
        </div>

        <div className="flex gap-2">
          <select
            className="border border-[#d6c4b6] rounded-md px-4 py-2 bg-white text-sm"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="">All Status</option>
            <option value="Publish">Publish</option>
            <option value="Draft">Draft</option>
          </select>
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && doSearch()}
            className="border border-[#d6c4b6] rounded-md px-4 py-2 text-sm w-60"
          />
          <button
            onClick={doSearch}
            className="bg-[#8b5e3c] hover:bg-[#6f4e37] text-white px-5 py-2 rounded-md text-sm flex items-center gap-2"
          >
            <Search size={15} /> Search
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-[#e0d3c2] shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="border-b border-[#e0d3c2] bg-[#ede0d4] text-[#5c4033] uppercase text-xs font-bold">
              <th className="p-4">
                <input
                  type="checkbox"
                  checked={selected.size > 0 && filtered.every((c) => selected.has(c.id))}
                  onChange={(e) => toggleAll(e.target.checked)}
                />
              </th>
              <th className="p-4">Name</th>
              <th className="p-4">Slug</th>
              <th className="p-4">Created By</th>
              <th className="p-4">Updated By</th>
              <th className="p-4">Created At</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length > 0 ? (
              filtered.map((item) => (
                <tr key={item.id} className="hover:bg-[#f3e9dc] border-b border-[#f0e4d4]">
                  <td className="p-4">
                    <input
                      type="checkbox"
                      checked={selected.has(item.id)}
                      onChange={(e) => toggleRow(item.id, e.target.checked)}
                    />
                  </td>
                  <td className="p-4 font-bold text-[#6f4e37]">{item.name.toUpperCase()}</td>
                  <td className="p-4 text-[#a1887f]">{item.slug}</td>
                  <td className="p-4">{item.createdBy}</td>
                  <td className="p-4">{item.updatedBy}</td>
                  <td className="p-4">{item.createdAt}</td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded text-[10px] text-white ${
                        item.status === "Publish" ? "bg-[#6f4e37]" : "bg-[#a1887f]"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex gap-2 justify-center">
                      <button
                        onClick={() => openEdit(item.id)}
                        className="bg-[#6f4e37] text-white px-3 py-1.5 rounded-md text-xs flex items-center gap-1 hover:bg-[#5a3e2b]"
                      >
                        <Edit size={13} /> Edit
                      </button>
                      <button
                        onClick={() => setConfirmDelete({ ids: [item.id], label: `Delete "${item.name}"?` })}
                        className="bg-[#a32d2d] text-white px-3 py-1.5 rounded-md text-xs flex items-center gap-1 hover:bg-[#791f1f]"
                      >
                        <Trash2 size={13} /> Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="p-10 text-center text-red-400">
                  No categories found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add Modal */}
      {showAdd && (
        <Modal title="Add Category" onClose={() => setShowAdd(false)}>
          <Field label="Name">
            <input
              className={inputCls}
              value={addForm.name}
              onChange={(e) => handleAddNameChange(e.target.value)}
              placeholder="e.g. Flat White"
              autoFocus
            />
          </Field>
          <Field label="Slug">
            <input
              className={inputCls}
              value={addForm.slug}
              onChange={(e) => setAddForm((f) => ({ ...f, slug: e.target.value, slugManual: true }))}
              placeholder="e.g. flat-white"
            />
          </Field>
          <Field label="Created By">
            <input
              className={inputCls}
              value={addForm.createdBy}
              onChange={(e) => setAddForm((f) => ({ ...f, createdBy: e.target.value }))}
              placeholder="Admin name"
            />
          </Field>
          <Field label="Status">
            <select className={inputCls} value={addForm.status} onChange={(e) => setAddForm((f) => ({ ...f, status: e.target.value }))}>
              <option>Publish</option>
              <option>Draft</option>
            </select>
          </Field>
          <div className="flex gap-2 justify-end mt-5">
            <button onClick={() => setShowAdd(false)} className="border border-[#c4a882] text-[#6f4e37] px-4 py-2 rounded-md text-sm hover:bg-[#ede0d4]">Cancel</button>
            <button onClick={saveAdd} className="bg-[#6f4e37] text-white px-5 py-2 rounded-md text-sm hover:bg-[#5a3e2b]">Save Category</button>
          </div>
        </Modal>
      )}

      {/* Edit Modal */}
      {showEdit && (
        <Modal title="Edit Category" onClose={() => setShowEdit(false)}>
          <Field label="Name">
            <input className={inputCls} value={editForm.name} onChange={(e) => setEditForm((f) => ({ ...f, name: e.target.value }))} autoFocus />
          </Field>
          <Field label="Slug">
            <input className={inputCls} value={editForm.slug} onChange={(e) => setEditForm((f) => ({ ...f, slug: e.target.value }))} />
          </Field>
          <Field label="Updated By">
            <input className={inputCls} value={editForm.updatedBy} onChange={(e) => setEditForm((f) => ({ ...f, updatedBy: e.target.value }))} />
          </Field>
          <Field label="Status">
            <select className={inputCls} value={editForm.status} onChange={(e) => setEditForm((f) => ({ ...f, status: e.target.value }))}>
              <option>Publish</option>
              <option>Draft</option>
            </select>
          </Field>
          <div className="flex gap-2 justify-end mt-5">
            <button onClick={() => setShowEdit(false)} className="border border-[#c4a882] text-[#6f4e37] px-4 py-2 rounded-md text-sm hover:bg-[#ede0d4]">Cancel</button>
            <button onClick={saveEdit} className="bg-[#6f4e37] text-white px-5 py-2 rounded-md text-sm hover:bg-[#5a3e2b]">Update</button>
          </div>
        </Modal>
      )}

      {/* Confirm Delete Modal */}
      {confirmDelete && (
        <Modal title="Confirm Delete" onClose={() => setConfirmDelete(null)}>
          <p className="text-sm text-[#8d6e63] mb-5">{confirmDelete.label}</p>
          <div className="flex gap-2 justify-end">
            <button onClick={() => setConfirmDelete(null)} className="border border-[#c4a882] text-[#6f4e37] px-4 py-2 rounded-md text-sm hover:bg-[#ede0d4]">Cancel</button>
            <button onClick={handleConfirmDelete} className="bg-[#a32d2d] text-white px-5 py-2 rounded-md text-sm hover:bg-[#791f1f]">Delete</button>
          </div>
        </Modal>
      )}

      <Toast message={toast} />
    </div>
  );
};

export default List_Categories_Coffee;