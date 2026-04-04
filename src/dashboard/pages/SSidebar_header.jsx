import React, { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import {
  Bell,
  ChevronDown,
  ChevronUp,
  CupSoda,
  Globe,
  LayoutDashboard,
  MessageCircle,
  Search,
  Settings,
  ShoppingCart,
  Users,
  Wallet,
  Coffee,
} from "lucide-react";

export default function CoffeeDashboardLayout() {
  const [openMenu, setOpenMenu] = useState(null);
  const location = useLocation();

  const toggleMenu = (menu) => {
    setOpenMenu((currentMenu) => (currentMenu === menu ? null : menu));
  };

  const linkClassName = ({ isActive }) =>
    `flex items-center gap-3 rounded-lg p-2 transition ${
      isActive
        ? "bg-[#f3ebe6] text-[#905E42] font-medium"
        : "text-gray-700 hover:bg-gray-100"
    }`;

  const coffeeMenuOpen =
    openMenu === "coffee" ||
    location.pathname === "/dashboard/coffee-menu" ||
    location.pathname.startsWith("/dashboard/categories");
  const settingsOpen =
    openMenu === "settings" ||
    location.pathname.startsWith("/dashboard/config_menu");

  return (
    <div className="flex h-screen bg-[#f5f7fb]">
      <aside className="w-64 bg-white shadow-md p-4 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-8">
            <Coffee className="text-orange-500" />
            <h1 className="text-xl font-bold">e-Coffee</h1>
          </div>

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

          <nav className="flex flex-col gap-2">
            <NavLink to="/dashboard" end className={linkClassName}>
              <LayoutDashboard size={18} /> Dashboard
            </NavLink>

            <NavLink to="/dashboard/users" className={linkClassName}>
              <Users size={18} /> Users
            </NavLink>

            <NavLink to="/dashboard/customers" className={linkClassName}>
              <Users size={18} /> Customers
            </NavLink>

            <div>
              <button
                type="button"
                onClick={() => toggleMenu("coffee")}
                className={`flex w-full justify-between items-center rounded-lg p-2 transition ${
                  coffeeMenuOpen
                    ? "bg-[#f3ebe6] text-[#905E42] font-medium"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <span className="flex items-center gap-3">
                  <CupSoda size={18} /> Coffee Menu
                </span>
                {coffeeMenuOpen ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </button>

              {coffeeMenuOpen && (
                <div className="ml-8 mt-1 flex flex-col gap-1 text-sm">
                  <NavLink
                    to="/dashboard/coffee-menu"
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#905E42] font-medium"
                        : "text-gray-500 hover:text-[#905E42]"
                    }
                  >
                    Lists Coffee
                  </NavLink>
                  <NavLink
                    to="/dashboard/categories"
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#905E42] font-medium"
                        : "text-gray-500 hover:text-[#905E42]"
                    }
                  >
                    Category
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink to="/dashboard/orders" className={linkClassName}>
              <ShoppingCart size={18} /> Orders
            </NavLink>

            <NavLink to="/dashboard/transaction" className={linkClassName}>
              <Wallet size={18} /> Transaction
            </NavLink>

            <div>
              <button
                type="button"
                onClick={() => toggleMenu("settings")}
                className={`flex w-full justify-between items-center rounded-lg p-2 transition ${
                  settingsOpen
                    ? "bg-[#f3ebe6] text-[#905E42] font-medium"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <span className="flex items-center gap-3">
                  <Settings size={18} /> Settings
                </span>
                {settingsOpen ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </button>

              {settingsOpen && (
                <div className="ml-8 mt-1 flex flex-col gap-1 text-sm">
                  <NavLink
                    to="/dashboard/config_menu"
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#905E42] font-medium"
                        : "text-gray-500 hover:text-[#905E42]"
                    }
                  >
                    Menu
                  </NavLink>
                </div>
              )}
            </div>
          </nav>
        </div>

        <p className="text-xs text-gray-400">(c) 2026 Coffee System</p>
      </aside>

      <div className="flex-1 flex flex-col">
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

        <main className="p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
