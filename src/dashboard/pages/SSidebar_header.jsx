import React, { useState } from "react";
import { useNavigate, Outlet, Link, Routes, Route } from "react-router-dom";
import {
  LayoutDashboard,
  Coffee,
  ShoppingCart,
  Wallet,
  Settings,
  Bell,
  Search,
  Globe,
  MessageCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import Transaction from "../../components/dashboard/Payment/Transaction";

import Config_Menu from "../../components/dashboard/Setting/Config_Menu";
// import Config_Menu from "./components/dashboard/Setting/Config_Menu";
export default function CoffeeDashboardLayout() {
  const [openMenu, setOpenMenu] = useState(null);
  const navigate = useNavigate();

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const navagate = useNavigate();
  const handleClick = () => {
    navagate("/customerlist");
  };
  return (
    <div className="flex h-screen bg-[#f5f7fb]">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4 flex flex-col justify-between">
        <div>
          {/* Logo */}
          <div className="flex items-center gap-2 mb-8">
            <Coffee className="text-orange-500" />
            <h1 className="text-xl font-bold">e-Coffee</h1>
          </div>

          {/* Profile */}
          <div className="flex items-center gap-3 mb-6">
            <img
              src="/download (1).png"
              alt="user"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-sm font-semibold">Admin</p>
              <p className="text-xs text-gray-400">coffee@admin.com</p>
            </div>
          </div>

          {/* Menu */}
          <nav className="flex flex-col gap-2">
            {/* Dashboard */}
            <div
              onClick={() => navigate("/dashboard")}
              className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-100"
            >
              <LayoutDashboard size={18} /> Dashboard
            </div>

            {/* Users */}
            <div
              onClick={() => navigate("/dashboard/users")}
              className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-100"
            >
              <Coffee size={18} /> Users
            </div>

            {/* Customers */}
            <div className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-100">
              <Coffee size={18} /> Customers
            </div>

            {/* Coffee Menu */}
            <div>
              <div
                onClick={() => toggleMenu("coffee")}
                className="flex justify-between items-center p-2 rounded-lg cursor-pointer hover:bg-gray-100"
              >
                <div className="flex items-center gap-3">
                  <Coffee size={18} /> Coffee Menu
                </div>
                {openMenu === "coffee" ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </div>

              {openMenu === "coffee" && (
                <div className="ml-8 text-sm text-gray-500 space-y-1">
                  <div>Lists Coffee</div>
                  <button onClick={() => navigate("categories")}>
                    Category
                  </button>
                </div>
              )}
            </div>

            {/* Orders */}
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
              <ShoppingCart size={18} /> Orders
            </div>

            {/* Wallet */}
            <div>
              <Link to={"/dashboard/transaction"}>
                <div
                  onClick={() => toggleMenu("wallet")}
                  className="flex justify-between items-center p-2 rounded-lg cursor-pointer hover:bg-gray-100"
                >
                  <div className="flex items-center gap-3">
                    <Wallet size={18} /> Transaction
                  </div>
                </div>
              </Link>
            </div>

            {/* Settings */}
            <div>
              <div
                onClick={() => toggleMenu("settings")}
                className="flex justify-between items-center p-2 rounded-lg cursor-pointer hover:bg-gray-100"
              >
                <div className="flex items-center gap-3">
                  <Settings size={18} /> Settings
                </div>
                {openMenu === "settings" ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </div>

              {openMenu === "settings" && (
                <div className="ml-8 text-sm text-gray-500 space-y-1">
                  {/* <div>Menu</div> */}
                  <Link to="/dashboard/config_menu">Menu</Link>

                  {/* <div>Category</div> */}
                </div>
              )}
            </div>
          </nav>
        </div>

        <p className="text-xs text-gray-400">© 2026 Coffee System</p>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-4 border-b bg-white">
          <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full w-1/3">
            <Search size={16} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none ml-2 w-full text-sm"
            />
          </div>

          <div className="flex items-center gap-5">
            <Globe />
            <MessageCircle />
            <Bell />
            <img
              src="/download (1).png"
              alt="user"
              className="w-9 h-9 rounded-full"
            />
          </div>
        </header>

        {/* ✅ CONTENT FIXED */}
        <main className="p-6">
          <Routes>
            <Route path="transaction" element={<Transaction />} />
            <Route path="config_menu" element={<Config_Menu />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
