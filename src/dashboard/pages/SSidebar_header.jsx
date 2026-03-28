// dashboard/pages/SSidebar_header.jsx
// KEY CHANGES:
//  • <Outlet /> renders child routes inside the main content area — sidebar never unmounts.
//  • Header is position:sticky (top-0 z-10) so it stays above content on scroll.
//  • Sidebar is hidden on mobile (hidden lg:flex) with a hamburger toggle.
//  • Main content has pt-0 because the sticky header already sits above it inside the flex column.
//  • FIX: SidebarContent moved outside CoffeeDashboardLayout to avoid re-mounting on every render
//    (defining a component inside another component's render body violates React rules).

import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import {
  LayoutDashboard, Coffee, ShoppingCart, Wallet,
  Settings, Bell, Search, Globe, MessageCircle,
  ChevronDown, ChevronUp, Menu, X,
} from "lucide-react";

// ── Reusable nav-link class helper (active highlight) ──────────────────────
const navItem = (isActive) =>
  `flex justify-between items-center p-2 rounded-lg cursor-pointer transition-colors ${
    isActive
      ? "bg-orange-50 text-orange-600 font-semibold"
      : "hover:bg-gray-100"
  }`;

// ── SidebarContent extracted as a top-level component ─────────────────────
// Props:
//   openMenu      – which collapsible is currently open (string | null)
//   toggleMenu    – function(menuName) to open/close a collapsible
//   onClose       – optional callback (used by mobile drawer's X button)
function SidebarContent({ openMenu, toggleMenu, onClose }) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto">

        {/* Logo */}
        <div className="flex items-center gap-2 mb-8">
          <Coffee className="text-orange-500" />
          <h1 className="text-xl font-bold">e-Coffee</h1>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-orange-200 flex items-center justify-center font-bold text-orange-700">
            A
          </div>
          <div>
            <p className="text-sm font-semibold">Admin</p>
            <p className="text-xs text-gray-400">coffee@admin.com</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-1">

          {/* Dashboard */}
          <NavLink to="/dashboard" end>
            {({ isActive }) => (
              <div className={navItem(isActive)}>
                <div className="flex items-center gap-3">
                  <LayoutDashboard size={18} /> Dashboard
                </div>
              </div>
            )}
          </NavLink>

          {/* Users */}
          <div className={navItem(false)}>
            <div className="flex items-center gap-3">
              <Coffee size={18} /> Users
            </div>
          </div>

          {/* Customers */}
          <div className={navItem(false)}>
            <div className="flex items-center gap-3">
              <Coffee size={18} /> Customers
            </div>
          </div>

          {/* Coffee Menu (collapsible) */}
          <div>
            <div
              onClick={() => toggleMenu("coffee")}
              className={navItem(false)}
            >
              <div className="flex items-center gap-3">
                <Coffee size={18} /> Coffee Menu
              </div>
              {openMenu === "coffee" ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
            {openMenu === "coffee" && (
              <div className="ml-8 text-sm text-gray-500 space-y-1 mt-1">
                <NavLink
                  to="/dashboard/coffee-list"
                  className={({ isActive }) =>
                    `block py-1 px-2 rounded-lg transition-colors ${
                      isActive
                        ? "text-orange-600 font-semibold bg-orange-50"
                        : "hover:text-orange-500"
                    }`
                  }
                >
                  Lists Coffee
                </NavLink>
                <div className="py-1 px-2 rounded-lg hover:text-orange-500 cursor-pointer">
                  Category
                </div>
              </div>
            )}
          </div>

          {/* Orders */}
          <div className={navItem(false)}>
            <div className="flex items-center gap-3">
              <ShoppingCart size={18} /> Orders
            </div>
          </div>

          {/* Transaction */}
          <div className={navItem(false)}>
            <div className="flex items-center gap-3">
              <Wallet size={18} /> Transaction
            </div>
          </div>

          {/* Settings (collapsible) */}
          <div>
            <div
              onClick={() => toggleMenu("settings")}
              className={navItem(false)}
            >
              <div className="flex items-center gap-3">
                <Settings size={18} /> Settings
              </div>
              {openMenu === "settings" ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
            {openMenu === "settings" && (
              <div className="ml-8 text-sm text-gray-500 space-y-1 mt-1">
                <div className="py-1 px-2 rounded-lg hover:text-orange-500 cursor-pointer">
                  Menu
                </div>
              </div>
            )}
          </div>

        </nav>
      </div>

      <p className="text-xs text-gray-400 pt-4 border-t">© 2026 Coffee System</p>
    </div>
  );
}

// ── Main layout ────────────────────────────────────────────────────────────
export default function CoffeeDashboardLayout() {
  const [openMenu,    setOpenMenu]    = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleMenu = (menu) =>
    setOpenMenu((prev) => (prev === menu ? null : menu));

  return (
    <div className="flex h-screen bg-[#f5f7fb] overflow-hidden">

      {/* ── DESKTOP Sidebar (always visible on lg+) ── */}
      <aside className="hidden lg:flex w-64 bg-white shadow-md p-4 flex-col flex-shrink-0">
        <SidebarContent openMenu={openMenu} toggleMenu={toggleMenu} />
      </aside>

      {/* ── MOBILE Sidebar drawer ── */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-40 flex">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setSidebarOpen(false)}
          />
          {/* Drawer */}
          <aside className="relative w-64 bg-white shadow-xl p-4 flex flex-col z-50 h-full">
            <button
              className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100"
              onClick={() => setSidebarOpen(false)}
            >
              <X size={18} />
            </button>
            <SidebarContent
              openMenu={openMenu}
              toggleMenu={toggleMenu}
              onClose={() => setSidebarOpen(false)}
            />
          </aside>
        </div>
      )}

      {/* ── Right Column (header + content) ── */}
      <div className="flex-1 flex flex-col min-w-0">

        {/*
          STICKY HEADER — stays at the top of the right column.
          sticky + top-0 + z-10 pins it without pushing content behind a fixed overlay.
        */}
        <header className="sticky top-0 z-10 flex items-center justify-between px-4 lg:px-6 py-3 border-b bg-white shadow-sm flex-shrink-0">

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-full hover:bg-gray-100 mr-2"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={20} />
          </button>

          {/* Search bar */}
          <div className="flex items-center bg-gray-100 px-3 py-2 rounded-full flex-1 max-w-xs lg:max-w-sm">
            <Search size={15} className="text-gray-400 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search coffee, orders..."
              className="bg-transparent outline-none ml-2 w-full text-sm"
            />
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-3 ml-3">
            <div className="hidden sm:flex items-center gap-2">
              <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                <Globe size={15} />
              </button>
              <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                <MessageCircle size={15} />
              </button>
            </div>
            <div className="relative p-2 bg-gray-100 rounded-full hover:bg-gray-200 cursor-pointer">
              <Bell size={15} />
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                3
              </span>
            </div>
            <div className="w-8 h-8 rounded-full bg-orange-200 flex items-center justify-center font-bold text-orange-700 text-sm flex-shrink-0">
              A
            </div>
          </div>
        </header>

        {/*
          MAIN CONTENT AREA
          overflow-y-auto here (not on the outer div) so the sidebar never scrolls with content.
        */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          <Outlet />
        </main>

      </div>
    </div>
  );
}