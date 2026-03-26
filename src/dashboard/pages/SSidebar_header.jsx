import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import {
  LayoutDashboard, Coffee, ShoppingCart, Wallet, Settings, Bell, Search, Globe, MessageCircle, ChevronDown, ChevronUp,
  User
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import Transaction from "../../components/dashboard/Payment/Transaction";

import Config_Menu from "../../components/dashboard/Setting/Config_Menu";
// import Config_Menu from "./components/dashboard/Setting/Config_Menu";
export default function CoffeeDashboardLayout() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const navagate = useNavigate();
  const handleClick = () => {
    navagate("/customerlist");
  }
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
            <div>
              <div
                onClick={() => toggleMenu("dashboard")}
                className="flex justify-between items-center p-2 rounded-lg cursor-pointer hover:bg-gray-100"
              >
                <div className="flex items-center gap-3">
                  <LayoutDashboard size={18} /> Dashboard
                </div>
                
              </div>

          
            </div>

            {/* Coffee Menu */}
            <div>
              <div
           
                className="flex justify-between items-center p-2 rounded-lg cursor-pointer hover:bg-gray-100"
              >
                <div className="flex items-center gap-3">
                  <Coffee size={18} /> Users
                </div>
                
              </div>

            </div>
            <div>
              <button 
              onClick={handleClick}
           
                className="flex justify-between items-center p-2 rounded-lg cursor-pointer hover:bg-gray-100"
              >
                <div className="flex items-center gap-3">
                 
                  <User size={18} /> Customers
                </div>
                
              </button>

            </div>
            <div>
              <div
                onClick={() => toggleMenu("coffee")}
                className="flex justify-between items-center p-2 rounded-lg cursor-pointer hover:bg-gray-100"
              >
                <div className="flex items-center gap-3">
                  <Coffee size={18} /> Coffee Menu
                </div>
                <span>{openMenu === "coffee" ? (<ChevronUp size={16} />) : (<ChevronDown size={16} />)}</span>

              </div>

             {openMenu === "coffee" && (
                <div className="ml-8 text-sm text-gray-500 space-y-1">
                  <div>Lists Coffee</div>
                  <div>Category</div>
                </div>
              )}
            </div>

            {/* Orders */}
            <div>
              <div
                onClick={() => toggleMenu("orders")}
                className="flex justify-between items-center p-2 rounded-lg cursor-pointer hover:bg-gray-100"
              >
                <div className="flex items-center gap-3">
                  <ShoppingCart size={18} /> Orders
                </div>
     
              </div>

            
            </div>

            {/* Wallet */}
            <div>
              <Link to={'/dashboard/transaction'}>
                <div
                onClick={() => toggleMenu("wallet")}
                className="flex justify-between items-center p-2 rounded-lg cursor-pointer hover:bg-gray-100">
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
                  <span>{openMenu === "settings" ? (<ChevronUp size={16} />) : (<ChevronDown size={16} />)}</span>
                </div>
              </div>

             {openMenu === "settings" && (
                <div className="ml-8 text-sm text-gray-500 space-y-1">
                  {/* <div>Menu</div> */}
                  <Link to="/dashboard/config_menu">
                    Menu
                  </Link>
              
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
              placeholder="Search coffee, orders..."
              className="bg-transparent outline-none ml-2 w-full text-sm"
            />
          </div>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gray-100 rounded-full">
                <Globe size={16} />
              </div>
              <div className="p-2 bg-gray-100 rounded-full">
                <MessageCircle size={16} />


              </div>
              <div className="relative p-2 bg-gray-100 rounded-full">
                <Bell size={16} />
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                  3
                </span>
              </div>
            </div>

            <img
              src="/download (1).png"
              alt="user"
              className="w-9 h-9 rounded-full"
            />
          </div>
        </header>

        {/* Content */}
        <main className="p-6">
          <Routes>
            <Route path="transaction" element={<Transaction/>}/>
             <Route path="config_menu" element={<Config_Menu/>} />
          </Routes>
        </main>
      </div>
    </div>
  );
}