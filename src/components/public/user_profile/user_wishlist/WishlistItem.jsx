export default function WishlistItem({ item, removeItem }) {
  return (
    <div className="card">
      <img src={item.image} alt={item.name} />

      <div className="info">
        <h3>{item.name}</h3>
        <p>Perfect balance of espresso, steamed milk, and velvety foam</p>
        <span>date: {item.date}</span>
      </div>

      <div className="price">
        <h3>${item.price}</h3>
        <button>Add</button>
      </div>

      <button className="remove" onClick={() => removeItem(item.id)}>
        ✕
      </button>
    </div>
  );
}