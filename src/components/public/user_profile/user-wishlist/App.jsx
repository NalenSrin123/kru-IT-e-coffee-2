import Sidebar from "./Sidebar";
import Wishlist from "./WishList";
// import "./styles.css";

export default function Apps() {
  return (
    <div className="container">
      <Sidebar />
      <Wishlist />
    </div>
  );
}