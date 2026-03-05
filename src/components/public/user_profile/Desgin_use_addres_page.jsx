import React, { useState } from "react";

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
  const [active, setActive] = useState("address");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full min-h-screen bg-[#FFEAC0]">
      <div className="w-full flex flex-col lg:flex-row bg-[#FFEAC0] items-start justify-center lg:justify-between p-4 md:p-8 lg:p-20 gap-6">
        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden w-full bg-[#7D4729] text-white p-3 rounded-lg flex items-center justify-between"
        >
          <span className="font-bold">Menu</span>
          <span className="text-xl">{isMobileMenuOpen ? "-" : "+"}</span>
        </button>

        {/* Sidebar Menu - Responsive */}
        <div
          className={`
          ${isMobileMenuOpen ? "block" : "hidden"} 
          lg:block 
          w-full lg:w-80 
          bg-[#FFEAC0]
          rounded-2xl 
          outline-1 
          outline-[#7D4729]
          transition-all
          duration-300
        `}
        >
          {menuItems.map((icons, index) => (
            <div key={index}>
              <div
                onClick={() => {
                  setActive(icons.key);
                  setIsMobileMenuOpen(false);
                }}
                className={`flex justify-start p-2 gap-4 m-4 rounded-lg cursor-pointer transition-colors duration-200 ${
                  active === icons.key
                    ? "bg-[#7D4729] text-white"
                    : "bg-[#FFEAC0] hover:bg-[#7D4729] hover:text-white"
                }`}
              >
                <img
                  className={`w-5 h-5 ${active === icons.key ? "filter brightness-0 invert" : ""}`}
                  src={icons.icon}
                  alt={icons.key}
                />
                <h3 className="capitalize">{icons.key}</h3>
              </div>
            </div>
          ))}

          {/* Logout button */}
          <div className="border-t-2 border-[#7D4729] pt-7 pl-3 flex items-center gap-2 cursor-pointer hover:text-red-600 text-red-500 m-4 transition-colors duration-200">
            <img
              className="w-4 h-4"
              src="../src/assets/icons/logoutimage.png"
              alt="Logout"
            />
            <span className="font-bold">Logout</span>
          </div>
        </div>

        {/* Main Content - Address Block */}
        <div className="w-full lg:w-[800] xl:w-[1000] outline-2 outline-[#7D4729] p-4 md:p-6 bg-[#FFEAC0] rounded-2xl shadow-lg">
          {/* Add address */}

          <a
            className="flex items-center gap-2 font-bold mb-4 text-[#7D4729] "
            href="#"
          >
            <span className="text-xl">+</span>
            <p className="hover:underline">Add address</p>
          </a>

          <hr className="border-[#7D4729] mb-4" />

          {/* Address list - Responsive */}
          <div className="flex flex-col gap-4 mb-4 max-h-[400] overflow-y-auto">
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
                  <span>✏️</span> Edit address
                </button>
              </div>
            ))}
          </div>

          {/* Account Statistics - Responsive Grid */}
          <hr className="border-[#7D4729] mb-4" />
          <h3 className="font-bold mb-4 text-lg">Account Statistics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {accountStats.map((stat, idx) => (
              <div
                key={idx}
                className={`p-3 md:p-4 rounded-lg text-center text-white ${stat.bg} transform hover:scale-105 transition-transform duration-200`}
              >
                <div className="text-lg md:text-xl font-bold">{stat.value}</div>
                <div className="text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Desgin_use_addres_page;
