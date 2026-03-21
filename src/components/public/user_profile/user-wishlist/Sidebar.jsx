export default function Sidebar() {
  return (
    <div className="sidebar">
      <h3>Menu</h3>

      <ul>
        <li>My Profile</li>
        <li>My Order</li>
        <li>Address</li>
        <li>Payment Methods</li>
        <li className="active">Wishlist</li>
        <li>Setting</li>
      </ul>

      <button className="logout">Logout</button>
    </div>
  );
}