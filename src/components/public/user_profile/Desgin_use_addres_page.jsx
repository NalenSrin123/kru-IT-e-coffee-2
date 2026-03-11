import React, { useState } from "react";
import Sidebar from "./Sidebar"; // adjust path if needed
import UserOrderPage from "./uers_order_page/order_page";
import Design_checkout_page from "../checkout/Design_checkout_page";
import User_sitting from "../user_sitting/User_sitting";

const menuItems = [
  { key: "profile", icon: "../src/assets/icons/profileimage.png" },
  { key: "my orders", icon: "../src/assets/icons/myorderimage.png" },
  { key: "address", icon: "../src/assets/icons/addressimage.png" },
  { key: "payment", icon: "../src/assets/icons/paymentmethod.png" },
  { key: "wishlist", icon: "../src/assets/icons/wishlistimage.png" },
];

const addresses = [
  {
    location: "toek tla, phnom penh, cambodia",
    name: "Ms. meow meow",
    phone: "09999999",
  },
  {
    location: "street 2004, phnom penh, cambodia",
    name: "Ms. meow meow",
    phone: "09999999",
  },
  {
    location: "kamboul, phnom penh, cambodia",
    name: "Ms. meow meow",
    phone: "09999999",
  },
];

const accountStats = [
  { value: 24, label: "Total Orders", bg: "bg-[#EE8142]" },
  { value: 18, label: "Completed", bg: "bg-[#6C3346]" },
  { value: 4, label: "In Progress", bg: "bg-[#1A7721]" },
  { value: 12, label: "Wishlist items", bg: "bg-[#C00707]" },
];

const Desgin_use_addres_page = () => {
  const [active, setActive] = useState("profile");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full min-h-screen bg-[#FFEAC0]">
      <div className="w-full flex flex-col lg:flex-row bg-[#FFEAC0] items-start justify-center lg:justify-between p-4 md:p-8 lg:p-20 gap-6">

        {/* Sidebar Component */}
        <Sidebar
          menuItems={menuItems}
          active={active}
          setActive={setActive}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />

        {/* Main Content */}
        <div className="w-full lg:w-[800px] xl:w-[1000px] outline-2 outline-[#7D4729] p-4 md:p-6 bg-[#FFEAC0] rounded-2xl shadow-lg">

          {active === "address" && (
            <>
              <a
                className="flex items-center gap-2 font-bold mb-4 text-[#7D4729]"
                href="#"
              >
                <span className="text-xl">+</span>
                <p className="hover:underline">Add address</p>
              </a>

              <hr className="border-[#7D4729] mb-4" />

              <div className="flex flex-col gap-4 mb-4 max-h-[400px] overflow-y-auto">
                {addresses.map((addr, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row justify-between items-start gap-4 p-4 border-b border-gray-300 hover:bg-[#ffdca8] transition-colors duration-200 rounded-lg"
                  >
                    <div className="flex gap-3 w-full sm:w-auto">
                      <span className="text-gray-500 text-xl">📍</span>
                      <div className="flex flex-col">
                        <span className="font-semibold capitalize">
                          {addr.location}
                        </span>
                        <span>{addr.name}</span>
                        <span className="text-sm text-gray-600">
                          📞 {addr.phone}
                        </span>
                      </div>
                    </div>
                    <button className="w-full sm:w-auto bg-[#7D4729] text-white px-4 py-2 rounded-lg flex items-center justify-center gap-1 hover:bg-[#9e5e3a] transition-colors duration-200">
                      ✏️ Edit address
                    </button>
                  </div>
                ))}
              </div>

              <hr className="border-[#7D4729] mb-4" />
              <h3 className="font-bold mb-4 text-lg">Account Statistics</h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                {accountStats.map((stat, idx) => (
                  <div
                    key={idx}
                    className={`p-3 md:p-4 rounded-lg text-center text-white ${stat.bg}`}
                  >
                    <div className="text-lg md:text-xl font-bold">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {active === "profile" && <h2 className="text-xl font-bold">< User_sitting/></h2>}
          {active === "my orders" && <h2 className="text-xl font-bold">< UserOrderPage/></h2>}
          {active === "payment" && <h2 className="text-xl font-bold">< Design_checkout_page/></h2>}
          {active === "wishlist" && <h2 className="text-xl font-bold">Wishlist Page</h2>}

        </div>
      </div>
    </nav>
  );
};

export default Desgin_use_addres_page;