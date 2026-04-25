import { useState } from "react";
import { IoLogoFacebook } from "react-icons/io5";
import { FiInstagram } from "react-icons/fi";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { PiXLogoBold } from "react-icons/pi";


// Platform
const PLATFORMS = [
  { id: "facebook", label: "Facebook", color: "#1877F2", icon: <IoLogoFacebook /> },
  { id: "instagram", label: "Instagram", color: "#E1306C", icon: <FiInstagram /> } ,
  { id: "linkedin", label: "LinkedIn", color: "#0A66C2", icon: <RxLinkedinLogo /> },
  { id: "youtube", label: "YouTube", color: "#FF0000", icon: <FaYoutube /> },
  { id: "tiktok", label: "TikTok", color: "#010101", icon: <FaTiktok /> },
  { id: "twitter", label: "Twitter/X", color: "#1DA1F2", icon: <PiXLogoBold /> },
];

//  */Status */  
const STATUSES = [
  { value: "active", label: "Active", color: "#22c55e" },
  { value: "pending", label: "Pending", color: "#f59e0b" },
  { value: "inactive", label: "Inactive", color: "#ef4444" },
];

// ============================================================
// 🔧 CUSTOMIZE HERE — Default sample data
// ============================================================
const INITIAL_DATA = [
  { id: 1, platform: "facebook", accountName: "e-coffee", url: "fb.com/e-coffee", status: "active" },
  { id: 2, platform: "instagram", accountName: "e-coffee", url: "instagr.am/e-coffee", status: "active" },
  { id: 3, platform: "linkedin", accountName: "e-coffee", url: "lnkd.in/e-coffee", status: "pending" },
  { id: 4, platform: "youtube", accountName: "e-coffee", url: "youtube.com/@e-coffee", status: "inactive" },
  { id: 5, platform: "tiktok", accountName: "e-coffee", url: "tiktok.com/@e-coffee", status: "active" },
  { id: 6, platform: "twitter", accountName: "e-coffee", url: "x.com/e-coffee", status: "pending" },
];

// ============================================================
// 🔧 CUSTOMIZE HERE — Brand colors & fonts for Koffee project
// ============================================================
const THEME = {
  primary: "#6F4E37",       // coffee brown — change to your brand color
  primaryLight: "#C9A87C",  // lighter brown
  accent: "#FFF8F2",        // warm cream background
  cardBg: "#ffffff",
  border: "#e8ddd4",
  text: "#2d1a0e",
  textMuted: "#8B6954",
};

// ---- Utility helpers ----
const getPlatform = (id) => PLATFORMS.find((p) => p.id === id) || {};
const getStatus = (v) => STATUSES.find((s) => s.value === v) || STATUSES[0];
const nextId = (list) => (list.length ? Math.max(...list.map((r) => r.id)) + 1 : 1);

// ---- Empty form state ----
const EMPTY_FORM = { platform: "facebook", accountName: "", url: "", status: "active" };

export default function SocialMediaManager() {
  const [records, setRecords] = useState(INITIAL_DATA);
  const [form, setForm] = useState(EMPTY_FORM);
  const [editingId, setEditingId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  // ---- CRUD handlers ----
  const openAdd = () => { setForm(EMPTY_FORM); setEditingId(null); setShowModal(true); };
  const openEdit = (row) => { setForm({ platform: row.platform, accountName: row.accountName, url: row.url, status: row.status }); setEditingId(row.id); setShowModal(true); };
  const closeModal = () => setShowModal(false);

  const handleSave = () => {
    if (!form.accountName.trim() || !form.url.trim()) return alert("Please fill in all fields.");
    if (editingId) {
      setRecords((prev) => prev.map((r) => r.id === editingId ? { ...r, ...form } : r));
    } else {
      setRecords((prev) => [...prev, { id: nextId(prev), ...form }]);
    }
    closeModal();
  };

  const handleDelete = () => {
    setRecords((prev) => prev.filter((r) => r.id !== deleteId));
    setDeleteId(null);
  };

  // ---- Inline styles (no Tailwind needed) ----
  const S = {
    page: { minHeight: "100vh", background: THEME.accent, fontFamily: "'Segoe UI', sans-serif", padding: "32px 24px", color: THEME.text },
    header: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 28 },
    title: { fontSize: 24, fontWeight: 700, color: THEME.primary, margin: 0 },
    subtitle: { fontSize: 13, color: THEME.textMuted, margin: "4px 0 0" },
    addBtn: { background: THEME.primary, color: "#fff", border: "none", borderRadius: 8, padding: "10px 18px", fontSize: 14, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 },
    card: { background: THEME.cardBg, borderRadius: 12, boxShadow: "0 2px 12px rgba(111,78,55,0.08)", overflow: "hidden" },
    table: { width: "100%", borderCollapse: "collapse" },
    th: { padding: "12px 16px", textAlign: "left", fontSize: 12, fontWeight: 700, color: THEME.textMuted, textTransform: "uppercase", letterSpacing: 1, borderBottom: `1px solid ${THEME.border}`, background: "#faf5f0" },
    td: { padding: "14px 16px", fontSize: 14, borderBottom: `1px solid ${THEME.border}` },
    badge: (color) => ({ display: "inline-flex", alignItems: "center", gap: 4, background: color + "18", color: color, border: `1px solid ${color}40`, borderRadius: 20, padding: "2px 10px", fontSize: 12, fontWeight: 600 }),
    editBtn: { background: "#f0f9ff", color: "#0284c7", border: "1px solid #bae6fd", borderRadius: 6, padding: "5px 12px", fontSize: 12, cursor: "pointer", fontWeight: 600 },
    delBtn: { background: "#fff1f2", color: "#e11d48", border: "1px solid #fda4af", borderRadius: 6, padding: "5px 12px", fontSize: 12, cursor: "pointer", fontWeight: 600 },
    overlay: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.35)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100 },
    modal: { background: "#fff", borderRadius: 14, padding: 28, width: "100%", maxWidth: 420, boxShadow: "0 20px 60px rgba(0,0,0,0.2)" },
    modalTitle: { fontSize: 18, fontWeight: 700, color: THEME.primary, margin: "0 0 20px" },
    label: { display: "block", fontSize: 12, fontWeight: 700, color: THEME.textMuted, marginBottom: 4, textTransform: "uppercase", letterSpacing: 0.5 },
    input: { width: "100%", border: `1px solid ${THEME.border}`, borderRadius: 8, padding: "9px 12px", fontSize: 14, color: THEME.text, outline: "none", boxSizing: "border-box", marginBottom: 14 },
    row: { display: "flex", gap: 10, marginTop: 20, justifyContent: "flex-end" },
    cancelBtn: { background: "#f3f4f6", color: "#374151", border: "none", borderRadius: 8, padding: "9px 18px", cursor: "pointer", fontWeight: 600 },
    saveBtn: { background: THEME.primary, color: "#fff", border: "none", borderRadius: 8, padding: "9px 20px", cursor: "pointer", fontWeight: 600 },
  };

  return (
    <div style={S.page}>
      {/* Header */}
      <div style={S.header}>
        <div>
          {/* 🔧 Change the title below for your Koffee project */}
          <h1 style={S.title}>Social Media</h1>
          <p style={S.subtitle}>Check Our Social Media</p>
        </div>
        <button style={S.addBtn} onClick={openAdd}>＋ Add</button>
      </div>

      {/* Table */}
      <div style={S.card}>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>No.</th>
              <th style={S.th}>Social Media</th>
              <th style={S.th}>Account Name</th>
              <th style={S.th}>URL</th>
              <th style={S.th}>Status</th>
              <th style={S.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {records.length === 0 && (
              <tr><td colSpan={6} style={{ ...S.td, textAlign: "center", color: THEME.textMuted, padding: 40 }}>មិនមានទិន្នន័យ</td></tr>
            )}
            {records.map((row, i) => {
              const plat = getPlatform(row.platform);
              const stat = getStatus(row.status);
              return (
                <tr key={row.id} style={{ background: i % 2 === 0 ? "#fff" : "#fdfaf7" }}>
                  <td style={S.td}>{i + 1}</td>
                  <td style={S.td}>
                    <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ fontSize: 18 }}>{plat.icon}</span>
                      <span style={{ fontWeight: 600, color: plat.color }}>{plat.label}</span>
                    </span>
                  </td>
                  <td style={S.td}>{row.accountName}</td>
                  <td style={{ ...S.td, color: THEME.textMuted, fontSize: 13 }}>{row.url}</td>
                  <td style={S.td}><span style={S.badge(stat.color)}>● {stat.label}</span></td>
                  <td style={S.td}>
                    <span style={{ display: "flex", gap: 6 }}>
                      <button style={S.editBtn} onClick={() => openEdit(row)}>✏ Change</button>
                      <button style={S.delBtn} onClick={() => setDeleteId(row.id)}>🗑 Delete</button>
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Add / Edit Modal */}
      {showModal && (
        <div style={S.overlay}>
          <div style={S.modal}>
            <h2 style={S.modalTitle}>{editingId ? "Edit" : "Add"} Social Media</h2>

            <label style={S.label}>Social Platform</label>
            <select style={S.input} value={form.platform} onChange={(e) => setForm({ ...form, platform: e.target.value })}>
              {PLATFORMS.map((p) => <option key={p.id} value={p.id}>{p.icon} {p.label}</option>)}
            </select>

            <label style={S.label}>Social Media Name</label>
            <input style={S.input} placeholder="e.g. Koffee Brand" value={form.accountName} onChange={(e) => setForm({ ...form, accountName: e.target.value })} />

            <label style={S.label}>URL / Link</label>
            <input style={S.input} placeholder="e.g. fb.com/koffee" value={form.url} onChange={(e) => setForm({ ...form, url: e.target.value })} />

            <label style={S.label}>Status</label>
            <select style={S.input} value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}>
              {STATUSES.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
            </select>

            <div style={S.row}>
              <button style={S.cancelBtn} onClick={closeModal}>Remove</button>
              <button style={S.saveBtn} onClick={handleSave}>Save</button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirm Modal */}
      {deleteId && (
        <div style={S.overlay}>
          <div style={{ ...S.modal, maxWidth: 340, textAlign: "center" }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>🗑</div>
            <h3 style={{ margin: "0 0 8px", color: THEME.primary }}>Delete?</h3>
            <p style={{ color: THEME.textMuted, fontSize: 14, margin: "0 0 20px" }}>Are you sure you want to delete this data?</p>
            <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
              <button style={S.cancelBtn} onClick={() => setDeleteId(null)}>Cancel</button>
              <button style={{ ...S.saveBtn, background: "#e11d48" }} onClick={handleDelete}>Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
