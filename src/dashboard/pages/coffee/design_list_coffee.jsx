// dashboard/pages/coffee/design_list_coffee.jsx
import React, { useState, useEffect, useCallback } from "react";

const BASE = "https://kru-it-e-coffee-intern-main-i74iel.laravel.cloud/api/v1";
const api = (path, opts = {}) =>
  fetch(`${BASE}${path}`, { headers: { Accept: "application/json", "Content-Type": "application/json" }, ...opts });

const toSlug = (s) => s.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
const formatDate = (s) => s ? new Date(s).toLocaleDateString("en-GB") : "—";
const getType = (p) => /(cold|iced)/i.test(p.category?.name) ? "Cold" : "Hot";
const getStatus = (p) => p.is_active && p.is_available ? "Publish" : "Draft";
const getPrice = (p) => p.sizes?.[0]?.price ? `$${p.sizes[0].price}` : p.price ? `$${p.price}` : "—";
const getEmoji = (name = "") => /matcha/i.test(name) ? "🍵" : /(cold|iced)/i.test(name) ? "🧊" : /(latte)/i.test(name) ? "🥛" : "☕";

const EMPTY = { name: "", slug: "", sku: "", description: "", image_url: "", category_id: "", is_available: true, is_active: true };

const inputCls = (err) =>
  `w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 text-amber-900 text-sm ${err ? "border-red-400 focus:ring-red-200" : "border-amber-200 focus:ring-amber-300"}`;

// ── Modal ──────────────────────────────────────────────────────────────────
function CoffeeModal({ open, onClose, onSaved, initial }) {
  const [form, setForm] = useState(EMPTY);
  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState({});
  const [serverMsg, setServerMsg] = useState("");
  const [categories, setCategories] = useState([]);
  const isEdit = Boolean(initial?.id);

  useEffect(() => {
    api("/categories").then((r) => r.json()).then((j) => setCategories(Array.isArray(j) ? j : j.data ?? [])).catch(() => {});
  }, []);

  useEffect(() => {
    setForm(initial ? { ...EMPTY, ...initial } : EMPTY);
    setErrors({}); setServerMsg("");
  }, [initial, open]);

  if (!open) return null;

  const handleChange = ({ target: { name, value, type, checked } }) => {
    setErrors((p) => ({ ...p, [name]: undefined }));
    setForm((p) => {
      const next = { ...p, [name]: type === "checkbox" ? checked : value };
      if (name === "name" && !isEdit) next.slug = toSlug(value);
      return next;
    });
  };

  const handleSubmit = async () => {
    if (!form.name.trim()) return setErrors({ name: "Name is required." });
    setSaving(true); setErrors({}); setServerMsg("");

    const payload = Object.fromEntries(
      Object.entries({ ...form, slug: form.slug || toSlug(form.name), category_id: form.category_id ? Number(form.category_id) : undefined })
        .filter(([, v]) => v !== "" && v !== undefined)
    );

    try {
      const res = await api(isEdit ? `/products/${initial.id}` : "/products", {
        method: isEdit ? "PUT" : "POST", body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => null);
      if (!res.ok) {
        if (res.status === 422 && json?.errors) {
          setErrors(Object.fromEntries(Object.entries(json.errors).map(([k, v]) => [k, Array.isArray(v) ? v[0] : v])));
          setServerMsg(json.message || "Please fix the errors below.");
        } else setServerMsg(json?.message || `Server error (HTTP ${res.status}).`);
        return;
      }
      onSaved();
    } catch (err) {
      setServerMsg(`Network error: ${err.message}`);
    } finally {
      setSaving(false);
    }
  };

  const Field = ({ label, name, required, fullWidth, children, ...rest }) => (
    <div className={fullWidth ? "col-span-2" : ""}>
      <label className="block text-amber-700 font-medium mb-1 text-sm">{label} {required && <span className="text-red-500">*</span>}</label>
      {children ?? <input name={name} value={form[name]} onChange={handleChange} className={inputCls(errors[name])} {...rest} />}
      {errors[name] && <p className="mt-1 text-xs text-red-500">{errors[name]}</p>}
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 max-h-[90vh] overflow-y-auto">
        <h2 className="text-lg font-bold text-amber-900 mb-4">{isEdit ? "✏️ Edit Coffee" : "➕ Add Coffee"}</h2>

        {serverMsg && <div className="mb-4 bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-3">⚠️ {serverMsg}</div>}

        <div className="grid grid-cols-2 gap-3">
          <Field label="Name" name="name" required placeholder="e.g. Espresso" />
          <Field label="Slug" name="slug" placeholder="auto-filled" />
          <Field label="SKU" name="sku" placeholder="e.g. ESP-001" />

          <div>
            <label className="block text-amber-700 font-medium mb-1 text-sm">Category</label>
            {categories.length > 0 ? (
              <select name="category_id" value={form.category_id} onChange={handleChange} className={inputCls(errors.category_id)}>
                <option value="">— Select —</option>
                {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>
            ) : (
              <input name="category_id" type="number" min="1" value={form.category_id} onChange={handleChange} placeholder="e.g. 1" className={inputCls(errors.category_id)} />
            )}
            {errors.category_id && <p className="mt-1 text-xs text-red-500">{errors.category_id}</p>}
          </div>

          <Field label="Image URL" name="image_url" fullWidth placeholder="https://..." />

          <div className="col-span-2">
            <label className="block text-amber-700 font-medium mb-1 text-sm">Description</label>
            <textarea name="description" value={form.description} onChange={handleChange} rows={3}
              placeholder="Short description…" className={`${inputCls(errors.description)} resize-none`} />
            {errors.description && <p className="mt-1 text-xs text-red-500">{errors.description}</p>}
          </div>

          {["is_available", "is_active"].map((key) => (
            <div key={key} className="flex items-center gap-2">
              <input type="checkbox" id={key} name={key} checked={form[key]} onChange={handleChange} className="accent-amber-700 w-4 h-4" />
              <label htmlFor={key} className="text-amber-800 font-medium text-sm capitalize">{key.replace("is_", "")}</label>
            </div>
          ))}
        </div>

        <div className="flex gap-3 mt-6 justify-end">
          <button onClick={onClose} className="px-4 py-2 rounded-lg border border-amber-200 text-amber-700 text-sm hover:bg-amber-50 transition">Cancel</button>
          <button onClick={handleSubmit} disabled={saving}
            className="px-5 py-2 rounded-lg bg-amber-700 hover:bg-amber-800 text-white text-sm font-semibold transition disabled:opacity-60">
            {saving ? "Saving…" : isEdit ? "Update" : "Create"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Main ───────────────────────────────────────────────────────────────────
export default function DesignListCoffee() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState("");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([]);
  const [bulkAction, setBulkAction] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editProduct, setEditProduct] = useState(null);

  const fetchProducts = useCallback(async () => {
    setLoading(true); setApiError("");
    try {
      const res = await api("/products");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      setProducts(Array.isArray(json) ? json : json.data ?? []);
    } catch (err) {
      setApiError(`Failed to load products: ${err.message}`);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchProducts(); }, [fetchProducts]);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this coffee?")) return;
    try {
      const res = await api(`/products/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setProducts((p) => p.filter((x) => x.id !== id));
      setSelected((p) => p.filter((x) => x !== id));
    } catch (err) { alert(`Delete failed: ${err.message}`); }
  };

  const handleBulkApply = async () => {
    if (bulkAction === "Delete" && selected.length > 0) {
      if (!window.confirm(`Delete ${selected.length} item(s)?`)) return;
      await Promise.all(selected.map((id) => api(`/products/${id}`, { method: "DELETE" })));
      await fetchProducts(); setSelected([]);
    }
  };

  const filtered = products.filter((p) => p.name?.toLowerCase().includes(search.toLowerCase()));
  const toggleSelect = (id) => setSelected((p) => p.includes(id) ? p.filter((x) => x !== id) : [...p, id]);
  const toggleAll = () => setSelected(selected.length === filtered.length ? [] : filtered.map((p) => p.id));
  const openAdd = () => { setEditProduct(null); setModalOpen(true); };
  const openEdit = (p) => { setEditProduct(p); setModalOpen(true); };
  const onSaved = () => { setModalOpen(false); fetchProducts(); };

  const publishCount = products.filter((p) => getStatus(p) === "Publish").length;

  // Shared row/card data builder
  const rowData = (p) => ({ type: getType(p), status: getStatus(p), price: getPrice(p) });

  return (
    <div className="w-full">
      <CoffeeModal open={modalOpen} onClose={() => setModalOpen(false)} onSaved={onSaved} initial={editProduct} />

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

        {/* Header */}
        <div className="bg-amber-800 px-5 sm:px-8 py-5 sm:py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <h1 className="text-white text-xl sm:text-2xl font-bold tracking-tight">☕ Coffee Menu</h1>
            <p className="text-amber-200 text-sm mt-1">Manage your coffee catalog</p>
          </div>
          <button onClick={openAdd} className="w-full sm:w-auto bg-amber-400 hover:bg-amber-300 text-amber-900 font-semibold text-sm px-5 py-2.5 rounded-full transition text-center">
            + Add Coffee
          </button>
        </div>

        {/* Stats */}
        <div className="bg-amber-50 px-5 sm:px-8 py-3 flex flex-wrap gap-x-5 gap-y-1 border-b border-amber-100 text-sm text-amber-700">
          {[["Total", products.length, ""], ["Published", publishCount, "text-green-600"], ["Drafts", products.length - publishCount, "text-gray-500"], ["Selected", selected.length, "text-amber-900"]].map(([label, val, cls]) => (
            <span key={label}>{label}: <strong className={cls}>{val}</strong></span>
          ))}
        </div>

        {/* Toolbar */}
        <div className="px-5 sm:px-8 py-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between border-b border-amber-100 gap-3">
          <div className="flex gap-2">
            <select value={bulkAction} onChange={(e) => setBulkAction(e.target.value)}
              className="border border-amber-200 text-amber-800 text-sm rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-amber-300">
              <option value="">Bulk Actions</option>
              <option value="Delete">Delete</option>
            </select>
            <button onClick={handleBulkApply} className="bg-amber-700 hover:bg-amber-800 text-white text-sm px-4 py-2 rounded-lg transition">Apply</button>
          </div>
          <div className="flex gap-2">
            <input type="text" placeholder="Search coffee..." value={search} onChange={(e) => setSearch(e.target.value)}
              className="border border-amber-200 text-sm rounded-full px-4 py-2 flex-1 outline-none focus:ring-2 focus:ring-amber-300 text-amber-900 placeholder-amber-300" />
            <button className="bg-amber-600 hover:bg-amber-700 text-white text-sm px-4 py-2 rounded-full transition">Search</button>
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex items-center justify-center py-20 text-amber-400 gap-2">
            <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
            Loading products…
          </div>
        )}

        {/* API Error */}
        {apiError && !loading && (
          <div className="mx-5 sm:mx-8 my-4 bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-3 flex items-center gap-2">
            ⚠️ {apiError}
            <button onClick={fetchProducts} className="ml-auto underline text-red-500 hover:text-red-700">Retry</button>
          </div>
        )}

        {/* Desktop Table */}
        {!loading && !apiError && (
          <div className="hidden sm:block overflow-x-auto px-4 pb-6 pt-2">
            <table className="w-full text-sm min-w-[640px]">
              <thead>
                <tr className="text-amber-500 uppercase text-xs tracking-wider">
                  <th className="py-3 px-3 text-left">
                    <input type="checkbox" className="accent-amber-700"
                      checked={selected.length === filtered.length && filtered.length > 0} onChange={toggleAll} />
                  </th>
                  {["Coffee", "Type", "Price", "Created By", "Created At", "Status", "Action"].map((h) => (
                    <th key={h} className="py-3 px-3 text-left">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-amber-50">
                {filtered.length === 0 ? (
                  <tr><td colSpan={8} className="text-center py-12 text-amber-300">☕ No coffee found</td></tr>
                ) : filtered.map((p) => {
                  const { type, status, price } = rowData(p);
                  return (
                    <tr key={p.id} className={`hover:bg-amber-50 transition ${selected.includes(p.id) ? "bg-amber-50" : ""}`}>
                      <td className="py-3 px-3">
                        <input type="checkbox" className="accent-amber-700" checked={selected.includes(p.id)} onChange={() => toggleSelect(p.id)} />
                      </td>
                      <td className="py-3 px-3">
                        <div className="flex items-center gap-3">
                          {p.image_url
                            ? <img src={p.image_url} alt={p.name} className="w-9 h-9 rounded-xl object-cover bg-amber-100" />
                            : <span className="w-9 h-9 bg-amber-100 rounded-xl flex items-center justify-center text-lg">{getEmoji(p.name)}</span>}
                          <span className="font-semibold text-amber-900">{p.name}</span>
                        </div>
                      </td>
                      <td className="py-3 px-3">
                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${type === "Hot" ? "bg-red-100 text-red-600" : "bg-blue-100 text-blue-600"}`}>
                          {type === "Hot" ? "🔥" : "❄️"} {type}
                        </span>
                      </td>
                      <td className="py-3 px-3 font-bold text-amber-800">{price}</td>
                      <td className="py-3 px-3 text-amber-600">{p.created_by ?? p.user?.name ?? "—"}</td>
                      <td className="py-3 px-3 text-amber-400">{formatDate(p.created_at)}</td>
                      <td className="py-3 px-3">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${status === "Publish" ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-500"}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${status === "Publish" ? "bg-green-500" : "bg-gray-400"}`} /> {status}
                        </span>
                      </td>
                      <td className="py-3 px-3">
                        <div className="flex gap-2">
                          <button onClick={() => openEdit(p)} className="bg-amber-700 hover:bg-amber-800 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition">Edit</button>
                          <button onClick={() => handleDelete(p.id)} className="bg-red-50 hover:bg-red-100 text-red-500 text-xs font-semibold px-3 py-1.5 rounded-lg border border-red-100 transition">Delete</button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* Mobile Cards */}
        {!loading && !apiError && (
          <div className="sm:hidden px-4 py-3 space-y-3">
            {filtered.length === 0
              ? <p className="text-center py-8 text-amber-300">☕ No coffee found</p>
              : filtered.map((p) => {
                const { type, status, price } = rowData(p);
                return (
                  <div key={p.id} className={`rounded-xl border border-amber-100 p-4 transition ${selected.includes(p.id) ? "bg-amber-50 border-amber-300" : "bg-white"}`}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <input type="checkbox" className="accent-amber-700" checked={selected.includes(p.id)} onChange={() => toggleSelect(p.id)} />
                        {p.image_url
                          ? <img src={p.image_url} alt={p.name} className="w-10 h-10 rounded-xl object-cover" />
                          : <span className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-xl">{getEmoji(p.name)}</span>}
                        <div>
                          <p className="font-semibold text-amber-900">{p.name}</p>
                          <p className="text-xs text-amber-400">{formatDate(p.created_at)} · {p.created_by ?? p.user?.name ?? "—"}</p>
                        </div>
                      </div>
                      <span className="font-bold text-amber-800">{price}</span>
                    </div>
                    <div className="flex gap-2 flex-wrap mb-3">
                      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${type === "Hot" ? "bg-red-100 text-red-600" : "bg-blue-100 text-blue-600"}`}>
                        {type === "Hot" ? "🔥" : "❄️"} {type}
                      </span>
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${status === "Publish" ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-500"}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${status === "Publish" ? "bg-green-500" : "bg-gray-400"}`} /> {status}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => openEdit(p)} className="flex-1 bg-amber-700 hover:bg-amber-800 text-white text-sm font-semibold py-2 rounded-lg transition">Edit</button>
                      <button onClick={() => handleDelete(p.id)} className="flex-1 bg-red-50 hover:bg-red-100 text-red-500 text-sm font-semibold py-2 rounded-lg border border-red-100 transition">Delete</button>
                    </div>
                  </div>
                );
              })}
          </div>
        )}

        {/* Footer */}
        <div className="px-5 sm:px-8 py-4 border-t border-amber-100 bg-amber-50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-amber-600">
            Showing <strong className="text-amber-900">{filtered.length}</strong> of <strong className="text-amber-900">{products.length}</strong> items
          </p>
          <div className="flex gap-1">
            {["‹", "1", "2", "3", "›"].map((p) => (
              <button key={p} className={`w-9 h-9 text-sm rounded-lg font-semibold transition ${p === "1" ? "bg-amber-700 text-white" : "bg-white text-amber-700 border border-amber-200 hover:bg-amber-100"}`}>{p}</button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}