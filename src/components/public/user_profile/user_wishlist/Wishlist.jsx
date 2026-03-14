import { useState } from "react";
import products from "./data";
import WishlistItem from "./WishlistItem";

export default function Wishlist() {
  const [items, setItems] = useState(products);
  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
  return (
    <div className="wishlist">
      {items.map((item) => (
        <WishlistItem key={item.id} item={item} removeItem={removeItem} />
      ))}

      <div className="stats">
        <div className="box">24<br />Total Orders</div>
        <div className="box">18<br />Completed</div>
        <div className="box">4<br />In Progress</div>
        <div className="box">12<br />Wishlist Items</div>
      </div>
    </div>
  );
}