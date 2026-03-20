import { useState } from "react";
import { ShoppingCart, X, Star, Heart, MapPin, CreditCard, Settings, LogOut, User, Package } from "lucide-react";

const wishlistData = [
  {
    id: 1,
    name: "Matcha Latte",
    description: "Perfect balance of espresso, steamed milk, and velvety foam",
    price: 4.5,
    rating: 5,
    date: "30/12/2025",
    image: "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?w=200&q=80",
    color: "#e8f5e1",
  },
  {
    id: 2,
    name: "Berry Cheesecake",
    description: "Perfect balance of espresso, steamed milk, and velvety foam",
    price: 4.5,
    rating: 5,
    date: "30/12/2025",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=200&q=80",
    color: "#fce4ec",
  },
];

const stats = [
  { label: "Total Orders", value: 24, color: "#c8a4c8" },
  { label: "Completed", value: 18, color: "#b8d4b8" },
  { label: "In Progress", value: 4, color: "#c8d4c8" },
  { label: "Wishlist Items", value: 12, color: "#d4a4a4" },
];

const navItems = [
  { icon: User, label: "My Profile" },
  { icon: Package, label: "My Order" },
  { icon: MapPin, label: "Address" },
  { icon: CreditCard, label: "Payment Methods" },
  { icon: Heart, label: "Wishlist", active: true },
  { icon: Settings, label: "Setting" },
];

export default function WishlistApp() {
  const [items, setItems] = useState(wishlistData);
  const [added, setAdded] = useState({});

  const removeItem = (id) => setItems((prev) => prev.filter((i) => i.id !== id));

  const handleAdd = (id) => {
    setAdded((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => setAdded((prev) => ({ ...prev, [id]: false })), 1500);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #f5deb3 0%, #e8c99a 40%, #d4a96a 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Georgia', serif",
      padding: "24px",
    }}>
      <div style={{
        display: "flex",
        gap: "20px",
        width: "100%",
        maxWidth: "860px",
        background: "rgba(255,248,235,0.55)",
        backdropFilter: "blur(12px)",
        borderRadius: "24px",
        padding: "24px",
        boxShadow: "0 8px 48px rgba(120,70,20,0.18)",
        border: "1px solid rgba(255,220,160,0.5)",
      }}>
        {/* Sidebar */}
        <aside style={{
          width: "200px",
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          gap: "4px",
        }}>
          {navItems.map(({ icon: Icon, label, active }) => (
            <button key={label} style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "11px 14px",
              borderRadius: "12px",
              border: "none",
              cursor: "pointer",
              background: active ? "#6b3a2a" : "transparent",
              color: active ? "#fff" : "#5a3a1a",
              fontFamily: "inherit",
              fontSize: "14px",
              fontWeight: active ? 600 : 400,
              transition: "all 0.2s",
              textAlign: "left",
            }}
              onMouseEnter={e => { if (!active) e.currentTarget.style.background = "rgba(107,58,42,0.08)"; }}
              onMouseLeave={e => { if (!active) e.currentTarget.style.background = "transparent"; }}
            >
              <Icon size={16} />
              {label}
            </button>
          ))}
          <div style={{ height: "1px", background: "rgba(107,58,42,0.15)", margin: "8px 0" }} />
          <button style={{
            display: "flex", alignItems: "center", gap: "12px",
            padding: "11px 14px", borderRadius: "12px", border: "none",
            cursor: "pointer", background: "transparent",
            color: "#c0392b", fontFamily: "inherit", fontSize: "14px",
          }}>
            <LogOut size={16} /> Logout
          </button>
        </aside>

        {/* Main */}
        <main style={{ flex: 1, display: "flex", flexDirection: "column", gap: "16px" }}>
          {/* Wishlist Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {items.length === 0 && (
              <div style={{
                textAlign: "center", padding: "48px 24px",
                color: "#9a7a5a", fontSize: "15px",
                background: "rgba(255,248,235,0.6)", borderRadius: "18px",
                border: "1.5px dashed rgba(180,130,80,0.3)",
              }}>
                <Heart size={32} style={{ marginBottom: 12, opacity: 0.4 }} />
                <div>Your wishlist is empty</div>
              </div>
            )}
            {items.map((item) => (
              <WishlistCard
                key={item.id}
                item={item}
                onRemove={() => removeItem(item.id)}
                onAdd={() => handleAdd(item.id)}
                isAdded={added[item.id]}
              />
            ))}
          </div>

          {/* Divider */}
          <div style={{ height: "1px", background: "rgba(107,58,42,0.15)" }} />

          {/* Stats */}
          <div>
            <h3 style={{ margin: "0 0 12px", fontSize: "15px", fontWeight: 600, color: "#5a3a1a" }}>
              Account Statistics
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "10px" }}>
              {stats.map((s) => (
                <div key={s.label} style={{
                  background: s.color,
                  borderRadius: "14px",
                  padding: "14px 12px",
                  textAlign: "left",
                }}>
                  <div style={{ fontSize: "22px", fontWeight: 700, color: "#fff", lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.85)", marginTop: "5px" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function WishlistCard({ item, onRemove, onAdd, isAdded }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
        background: hovered ? "rgba(255,248,235,0.9)" : "rgba(255,248,235,0.7)",
        borderRadius: "18px",
        padding: "14px",
        border: `1.5px solid ${hovered ? "rgba(180,130,80,0.35)" : "rgba(180,130,80,0.2)"}`,
        boxShadow: hovered ? "0 4px 20px rgba(120,70,20,0.12)" : "0 2px 8px rgba(120,70,20,0.06)",
        transition: "all 0.25s ease",
        position: "relative",
      }}
    >
      {/* Image */}
      <div style={{
        width: "100px",
        height: "80px",
        borderRadius: "12px",
        overflow: "hidden",
        flexShrink: 0,
        background: item.color,
      }}>
        <img src={item.image} alt={item.name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          onError={e => { e.target.style.display = "none"; }}
        />
      </div>

      {/* Info */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", gap: "2px", marginBottom: "4px" }}>
          {Array.from({ length: item.rating }).map((_, i) => (
            <Star key={i} size={13} fill="#d4a017" color="#d4a017" />
          ))}
        </div>
        <div style={{ fontSize: "15px", fontWeight: 700, color: "#3d1f0a", marginBottom: "3px" }}>
          {item.name}
        </div>
        <div style={{ fontSize: "12px", color: "#9a7a5a", lineHeight: 1.45, marginBottom: "6px" }}>
          {item.description}
        </div>
        <div style={{ fontSize: "11px", color: "#b09070" }}>date: {item.date}</div>
      </div>

      {/* Price + Add */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "10px", flexShrink: 0 }}>
        <div style={{ fontSize: "18px", fontWeight: 700, color: "#5a3a1a" }}>
          ${item.price.toFixed(2)}
        </div>
        <button onClick={onAdd} style={{
          display: "flex", alignItems: "center", gap: "6px",
          padding: "8px 16px", borderRadius: "10px", border: "none",
          background: isAdded ? "#4caf50" : "#6b3a2a",
          color: "#fff", fontSize: "13px", fontWeight: 600,
          cursor: "pointer", fontFamily: "inherit",
          transition: "all 0.2s",
          boxShadow: "0 2px 8px rgba(107,58,42,0.3)",
        }}>
          <ShoppingCart size={14} />
          {isAdded ? "Added!" : "Add"}
        </button>
      </div>

      {/* Remove */}
      <button onClick={onRemove} style={{
        position: "absolute", top: "10px", right: "10px",
        background: "none", border: "none", cursor: "pointer",
        color: "#c0a080", padding: "2px",
        transition: "color 0.2s",
      }}
        onMouseEnter={e => e.currentTarget.style.color = "#8b3a2a"}
        onMouseLeave={e => e.currentTarget.style.color = "#c0a080"}
      >
        <X size={16} />
      </button>
    </div>
  );
}