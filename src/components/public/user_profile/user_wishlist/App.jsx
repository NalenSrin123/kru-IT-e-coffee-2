import Sidebar from "./Sidebar";
import Wishlist from "./Wishlist";
import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <Sidebar />
      <Wishlist />
    </div>
  );
}