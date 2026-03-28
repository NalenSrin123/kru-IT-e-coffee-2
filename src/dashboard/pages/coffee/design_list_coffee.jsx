import React, { useState, useEffect, useCallback } from "react";

const BASE = "https://kru-it-e-coffee-intern-main-i74iel.laravel.cloud/api/v1";
const token = () => localStorage.getItem("token");
const api = (path, opts = {}) =>
  fetch(`${BASE}${path}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...(token() ? { Authorization: `Bearer ${token()}` } : {}),
    },
    ...opts,
  });

// ── Helpers ────────────────────────────────────────────────────────────────
const toSlug   = (s) => s.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
const fmtDate  = (s) => s ? new Date(s).toLocaleDateString("en-GB") : "—";
const getType  = (p) => /(cold|iced)/i.test(p.category?.name) ? "Cold" : "Hot";
const getStatus= (p) => p.is_active && p.is_available ? "Publish" : "Draft";
const getPrice = (p) => p.sizes?.[0]?.price ? `$${p.sizes[0].price}` : p.price ? `$${p.price}` : "—";
const getEmoji = (n="") => /matcha/i.test(n) ? "🍵" : /(cold|iced)/i.test(n) ? "🧊" : /latte/i.test(n) ? "🥛" : "☕";
const toArray  = (j) => {
  if (Array.isArray(j)) return j;
  if (Array.isArray(j?.data)) return j.data;
  if (Array.isArray(j?.data?.data)) return j.data.data;
  return Object.values(j || {}).find(Array.isArray) ?? [];
};

const cls = (err) =>
  `w-full border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 text-amber-900 ${err ? "border-red-400 focus:ring-red-200" : "border-amber-200 focus:ring-amber-300"}`;

const EMPTY = { name:"", slug:"", sku:"", description:"", image_url:"", category_id:"", is_available:true, is_active:true };

// ── Toast ──────────────────────────────────────────────────────────────────
function Toast({ msg, ok, hide }) {
  useEffect(() => { if (msg) { const t = setTimeout(hide, 3000); return () => clearTimeout(t); } }, [msg]);
  if (!msg) return null;
  return (
    <div className={`fixed top-5 right-5 z-[100] flex items-center gap-3 px-5 py-3 rounded-xl shadow-xl text-sm font-semibold ${ok ? "bg-green-600" : "bg-red-600"} text-white`}>
      {ok ? "✅" : "❌"} {msg}
      <button onClick={hide} className="ml-2 opacity-70 hover:opacity-100">✕</button>
    </div>
  );
}

// ── Confirm ────────────────────────────────────────────────────────────────
function Confirm({ open, msg, onOk, onNo }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
        <p className="text-amber-900 font-semibold mb-5">{msg}</p>
        <div className="flex gap-3 justify-end">
          <button onClick={onNo}  className="px-4 py-2 rounded-lg border border-amber-200 text-amber-700 text-sm hover:bg-amber-50">Cancel</button>
          <button onClick={onOk} className="px-5 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-semibold">Delete</button>
        </div>
      </div>
    </div>
  );
}

// ── Modal ──────────────────────────────────────────────────────────────────
function Modal({ open, onClose, onSaved, initial }) {
  const [form, setForm]       = useState(EMPTY);
  const [errs, setErrs]       = useState({});
  const [msg, setMsg]         = useState("");
  const [saving, setSaving]   = useState(false);
  const [cats, setCats]       = useState([]);
  const isEdit = Boolean(initial?.id);

  useEffect(() => {
    if (!open) return;
    api("/categories").then(r => r.json()).then(j => setCats(toArray(j))).catch(() => {});
  }, [open]);

  useEffect(() => {
    setForm(initial ? { ...EMPTY, ...initial, category_id: initial.category_id ?? initial.category?.id ?? "" } : EMPTY);
    setErrs({}); setMsg("");
  }, [initial, open]);

  if (!open) return null;

  const onChange = ({ target: { name, value, type, checked } }) => {
    setErrs(p => ({ ...p, [name]: undefined }));
    setForm(p => {
      const n = { ...p, [name]: type === "checkbox" ? checked : value };
      if (name === "name" && !isEdit) n.slug = toSlug(value);
      return n;
    });
  };

  const submit = async () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.category_id) e.category_id = "Category is required.";
    if (Object.keys(e).length) return setErrs(e);

    setSaving(true); setErrs({}); setMsg("");
    const payload = Object.fromEntries(
      Object.entries({ ...form, slug: form.slug || toSlug(form.name), category_id: Number(form.category_id) })
        .filter(([, v]) => v !== "" && v !== undefined)
    );
    try {
      const res  = await api(isEdit ? `/products/${initial.id}` : "/products", { method: isEdit ? "PUT" : "POST", body: JSON.stringify(payload) });
      const json = await res.json().catch(() => null);
      if (!res.ok) {
        if (res.status === 422 && json?.errors)
          setErrs(Object.fromEntries(Object.entries(json.errors).map(([k,v]) => [k, Array.isArray(v)?v[0]:v])));
        setMsg(json?.message || `Error ${res.status}`);
        return;
      }
      onSaved(isEdit ? "Updated!" : "Created!");
    } catch (err) {
      setMsg(`Network error: ${err.message}`);
    } finally { setSaving(false); }
  };

  const F = ({ label, name, req, full, children, ...rest }) => (
    <div className={full ? "col-span-2" : ""}>
      <label className="block text-amber-700 font-medium mb-1 text-sm">{label} {req && <span className="text-red-500">*</span>}</label>
      {children ?? <input name={name} value={form[name]} onChange={onChange} className={cls(errs[name])} {...rest} />}
      {errs[name] && <p className="mt-1 text-xs text-red-500">{errs[name]}</p>}
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-amber-900">{isEdit ? "✏️ Edit" : "➕ Add"} Coffee</h2>
          <button onClick={onClose} className="text-amber-400 hover:text-amber-700 text-xl">✕</button>
        </div>
        {msg && <div className="mb-4 bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-3">⚠️ {msg}</div>}
        <div className="grid grid-cols-2 gap-3">
          <F label="Name"      name="name"      req placeholder="e.g. Espresso" />
          <F label="Slug"      name="slug"          placeholder="auto-filled" />
          <F label="SKU"       name="sku"           placeholder="e.g. ESP-001" />
          <div>
            <label className="block text-amber-700 font-medium mb-1 text-sm">Category <span className="text-red-500">*</span></label>
            {cats.length > 0
              ? <select name="category_id" value={form.category_id} onChange={onChange} className={cls(errs.category_id)}>
                  <option value="">— Select —</option>
                  {cats.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
              : <input name="category_id" type="number" min="1" value={form.category_id} onChange={onChange} placeholder="e.g. 1" className={cls(errs.category_id)} />}
            {errs.category_id && <p className="mt-1 text-xs text-red-500">{errs.category_id}</p>}
          </div>
          <F label="Image URL" name="image_url" full placeholder="https://..." />
          <div className="col-span-2">
            <label className="block text-amber-700 font-medium mb-1 text-sm">Description</label>
            <textarea name="description" value={form.description} onChange={onChange} rows={3}
              placeholder="Short description…" className={`${cls(errs.description)} resize-none`} />
          </div>
          {["is_available","is_active"].map(k => (
            <div key={k} className="flex items-center gap-2">
              <input type="checkbox" id={k} name={k} checked={form[k]} onChange={onChange} className="accent-amber-700 w-4 h-4" />
              <label htmlFor={k} className="text-amber-800 text-sm capitalize">{k.replace("is_","")}</label>
            </div>
          ))}
        </div>
        <div className="flex gap-3 mt-6 justify-end">
          <button onClick={onClose} className="px-4 py-2 rounded-lg border border-amber-200 text-amber-700 text-sm hover:bg-amber-50">Cancel</button>
          <button onClick={submit} disabled={saving} className="px-5 py-2 rounded-lg bg-amber-700 hover:bg-amber-800 text-white text-sm font-semibold disabled:opacity-60">
            {saving ? "Saving…" : isEdit ? "Update" : "Create"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Main ───────────────────────────────────────────────────────────────────
export default function DesignListCoffee() {
  const [products, setProducts]       = useState([]);
  const [loading, setLoading]         = useState(true);
  const [apiErr, setApiErr]           = useState("");
  const [search, setSearch]           = useState("");
  const [q, setQ]                     = useState("");
  const [selected, setSelected]       = useState([]);
  const [bulk, setBulk]               = useState("");
  const [modalOpen, setModalOpen]     = useState(false);
  const [editing, setEditing]         = useState(null);
  const [toast, setToast]             = useState({ msg:"", ok:true });
  const [dlg, setDlg]                 = useState({ open:false, msg:"", fn:null });
  const [page, setPage]               = useState(1);
  const PER = 10;

  const notify = (msg, ok=true) => setToast({ msg, ok });
  const confirm = (msg, fn) => setDlg({ open:true, msg, fn });
  const closeDlg = () => setDlg({ open:false, msg:"", fn:null });

  const load = useCallback(async () => {
    setLoading(true); setApiErr("");
    try {
      const res = await api("/products");
      if (res.status === 401) { setApiErr("Unauthorized. Please log in."); return; }
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setProducts(toArray(await res.json()));
      setPage(1);
    } catch (e) { setApiErr(`Failed: ${e.message}`); }
    finally { setLoading(false); }
  }, []);

  useEffect(() => { load(); }, [load]);

  const del = (id) => confirm("Delete this coffee?", async () => {
    closeDlg();
    try {
      const res = await api(`/products/${id}`, { method:"DELETE" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setProducts(p => p.filter(x => x.id !== id));
      setSelected(p => p.filter(x => x !== id));
      notify("Deleted!");
    } catch (e) { notify(e.message, false); }
  });

  const bulkDel = () => {
    if (bulk !== "Delete" || !selected.length) return;
    confirm(`Delete ${selected.length} item(s)?`, async () => {
      closeDlg();
      await Promise.all(selected.map(id => api(`/products/${id}`, { method:"DELETE" })));
      load(); setSelected([]); setBulk(""); notify(`${selected.length} deleted!`);
    });
  };

  const filtered   = products.filter(p => p.name?.toLowerCase().includes(search.toLowerCase()));
  const totalPages = Math.max(1, Math.ceil(filtered.length / PER));
  const rows       = filtered.slice((page-1)*PER, page*PER);
  const pages      = Array.from({ length: totalPages }, (_, i) => i+1);

  const toggle    = (id) => setSelected(p => p.includes(id) ? p.filter(x=>x!==id) : [...p,id]);
  const toggleAll = () => setSelected(selected.length === rows.length && rows.length ? [] : rows.map(p=>p.id));

  const onSaved = (msg) => { setModalOpen(false); load(); notify(msg); };
  const pubCount = products.filter(p => getStatus(p)==="Publish").length;

  const PgBtn = ({ n }) => (
    <button onClick={() => setPage(n)} className={`w-9 h-9 text-sm rounded-lg font-semibold ${n===page ? "bg-amber-700 text-white" : "bg-white text-amber-700 border border-amber-200 hover:bg-amber-100"}`}>{n}</button>
  );

  return (
    <div className="w-full">
      <Toast msg={toast.msg} ok={toast.ok} hide={() => setToast({msg:"",ok:true})} />
      <Confirm open={dlg.open} msg={dlg.msg} onOk={dlg.fn} onNo={closeDlg} />
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} onSaved={onSaved} initial={editing} />

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

        {/* Header */}
        <div className="bg-amber-800 px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <h1 className="text-white text-xl sm:text-2xl font-bold">☕ Coffee Menu</h1>
            <p className="text-amber-200 text-sm mt-1">Manage your coffee catalog</p>
          </div>
          <button onClick={() => { setEditing(null); setModalOpen(true); }}
            className="w-full sm:w-auto bg-amber-400 hover:bg-amber-300 text-amber-900 font-semibold text-sm px-5 py-2.5 rounded-full transition">
            + Add Coffee
          </button>
        </div>

        {/* Stats */}
        <div className="bg-amber-50 px-5 sm:px-8 py-3 flex flex-wrap gap-x-5 gap-y-1 border-b border-amber-100 text-sm text-amber-700">
          {[["Total",products.length,""],["Published",pubCount,"text-green-600"],["Drafts",products.length-pubCount,"text-gray-500"],["Selected",selected.length,"text-amber-900"]]
            .map(([l,v,c]) => <span key={l}>{l}: <strong className={c}>{v}</strong></span>)}
        </div>

        {/* Toolbar */}
        <div className="px-5 sm:px-8 py-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between border-b border-amber-100 gap-3">
          <div className="flex gap-2">
            <select value={bulk} onChange={e=>setBulk(e.target.value)} className="border border-amber-200 text-amber-800 text-sm rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-amber-300">
              <option value="">Bulk Actions</option>
              <option value="Delete">Delete</option>
            </select>
            <button onClick={bulkDel} disabled={!bulk||!selected.length}
              className="bg-amber-700 hover:bg-amber-800 text-white text-sm px-4 py-2 rounded-lg disabled:opacity-40">Apply</button>
          </div>
          <div className="flex gap-2">
            <input value={q} onChange={e=>setQ(e.target.value)} onKeyDown={e=>e.key==="Enter"&&(setSearch(q),setPage(1))}
              placeholder="Search coffee..." className="border border-amber-200 text-sm rounded-full px-4 py-2 flex-1 outline-none focus:ring-2 focus:ring-amber-300 text-amber-900 placeholder-amber-300" />
            <button onClick={()=>{setSearch(q);setPage(1);}} className="bg-amber-600 hover:bg-amber-700 text-white text-sm px-4 py-2 rounded-full">Search</button>
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex items-center justify-center py-20 text-amber-400 gap-2">
            <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
            </svg>
            Loading…
          </div>
        )}

        {/* Error */}
        {apiErr && !loading && (
          <div className="mx-5 sm:mx-8 my-4 bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-3 flex items-center gap-2">
            ⚠️ {apiErr}
            <button onClick={load} className="ml-auto underline text-red-500">Retry</button>
          </div>
        )}

        {/* Table */}
        {!loading && !apiErr && (
          <div className="hidden sm:block overflow-x-auto px-4 pb-4 pt-2">
            <table className="w-full text-sm min-w-[640px]">
              <thead>
                <tr className="text-amber-500 uppercase text-xs tracking-wider">
                  <th className="py-3 px-3 text-left">
                    <input type="checkbox" className="accent-amber-700"
                      checked={selected.length===rows.length&&rows.length>0} onChange={toggleAll}/>
                  </th>
                  {["Coffee","Type","Price","Created By","Created At","Status","Action"].map(h=>(
                    <th key={h} className="py-3 px-3 text-left">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-amber-50">
                {rows.length===0
                  ? <tr><td colSpan={8} className="text-center py-12 text-amber-300">☕ No coffee found</td></tr>
                  : rows.map(p => {
                    const type=getType(p), status=getStatus(p), price=getPrice(p);
                    return (
                      <tr key={p.id} className={`hover:bg-amber-50 transition ${selected.includes(p.id)?"bg-amber-50":""}`}>
                        <td className="py-3 px-3"><input type="checkbox" className="accent-amber-700" checked={selected.includes(p.id)} onChange={()=>toggle(p.id)}/></td>
                        <td className="py-3 px-3">
                          <div className="flex items-center gap-3">
                            {p.image_url
                              ? <img src={p.image_url} alt={p.name} className="w-9 h-9 rounded-xl object-cover bg-amber-100" onError={e=>{e.target.style.display="none"}}/>
                              : <span className="w-9 h-9 bg-amber-100 rounded-xl flex items-center justify-center text-lg">{getEmoji(p.name)}</span>}
                            <div>
                              <span className="font-semibold text-amber-900 block">{p.name}</span>
                              {p.sku && <span className="text-xs text-amber-400">{p.sku}</span>}
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-3">
                          <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${type==="Hot"?"bg-red-100 text-red-600":"bg-blue-100 text-blue-600"}`}>
                            {type==="Hot"?"🔥":"❄️"} {type}
                          </span>
                        </td>
                        <td className="py-3 px-3 font-bold text-amber-800">{price}</td>
                        <td className="py-3 px-3 text-amber-600">{p.created_by??p.user?.name??"—"}</td>
                        <td className="py-3 px-3 text-amber-400">{fmtDate(p.created_at)}</td>
                        <td className="py-3 px-3">
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${status==="Publish"?"bg-green-100 text-green-600":"bg-gray-100 text-gray-500"}`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${status==="Publish"?"bg-green-500":"bg-gray-400"}`}/> {status}
                          </span>
                        </td>
                        <td className="py-3 px-3">
                          <div className="flex gap-2">
                            <button onClick={()=>{setEditing(p);setModalOpen(true);}} className="bg-amber-700 hover:bg-amber-800 text-white text-xs font-semibold px-3 py-1.5 rounded-lg">Edit</button>
                            <button onClick={()=>del(p.id)} className="bg-red-50 hover:bg-red-100 text-red-500 text-xs font-semibold px-3 py-1.5 rounded-lg border border-red-100">Delete</button>
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
        {!loading && !apiErr && (
          <div className="sm:hidden px-4 py-3 space-y-3">
            {rows.length===0
              ? <p className="text-center py-8 text-amber-300">☕ No coffee found</p>
              : rows.map(p => {
                const type=getType(p), status=getStatus(p), price=getPrice(p);
                return (
                  <div key={p.id} className={`rounded-xl border border-amber-100 p-4 ${selected.includes(p.id)?"bg-amber-50 border-amber-300":"bg-white"}`}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <input type="checkbox" className="accent-amber-700" checked={selected.includes(p.id)} onChange={()=>toggle(p.id)}/>
                        {p.image_url
                          ? <img src={p.image_url} alt={p.name} className="w-10 h-10 rounded-xl object-cover" onError={e=>{e.target.style.display="none"}}/>
                          : <span className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-xl">{getEmoji(p.name)}</span>}
                        <div>
                          <p className="font-semibold text-amber-900">{p.name}</p>
                          <p className="text-xs text-amber-400">{fmtDate(p.created_at)} · {p.created_by??p.user?.name??"—"}</p>
                        </div>
                      </div>
                      <span className="font-bold text-amber-800">{price}</span>
                    </div>
                    <div className="flex gap-2 flex-wrap mb-3">
                      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${type==="Hot"?"bg-red-100 text-red-600":"bg-blue-100 text-blue-600"}`}>
                        {type==="Hot"?"🔥":"❄️"} {type}
                      </span>
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${status==="Publish"?"bg-green-100 text-green-600":"bg-gray-100 text-gray-500"}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${status==="Publish"?"bg-green-500":"bg-gray-400"}`}/> {status}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={()=>{setEditing(p);setModalOpen(true);}} className="flex-1 bg-amber-700 hover:bg-amber-800 text-white text-sm font-semibold py-2 rounded-lg">Edit</button>
                      <button onClick={()=>del(p.id)} className="flex-1 bg-red-50 hover:bg-red-100 text-red-500 text-sm font-semibold py-2 rounded-lg border border-red-100">Delete</button>
                    </div>
                  </div>
                );
              })}
          </div>
        )}

        {/* Footer / Pagination */}
        <div className="px-5 sm:px-8 py-4 border-t border-amber-100 bg-amber-50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-amber-600">
            Showing <strong className="text-amber-900">{rows.length}</strong> of <strong className="text-amber-900">{filtered.length}</strong> items
          </p>
          {totalPages > 1 && (
            <div className="flex gap-1 flex-wrap justify-center">
              <button onClick={()=>setPage(p=>Math.max(1,p-1))} disabled={page===1}
                className="w-9 h-9 text-sm rounded-lg bg-white text-amber-700 border border-amber-200 hover:bg-amber-100 disabled:opacity-40">‹</button>
              {pages.map(n => <PgBtn key={n} n={n}/>)}
              <button onClick={()=>setPage(p=>Math.min(totalPages,p+1))} disabled={page===totalPages}
                className="w-9 h-9 text-sm rounded-lg bg-white text-amber-700 border border-amber-200 hover:bg-amber-100 disabled:opacity-40">›</button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}