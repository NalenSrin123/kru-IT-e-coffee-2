import React from "react";

function Sidebar({
  menuItems,
  active,
  setActive,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) {
  return (
    <>
      {/* Mobile Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden w-full bg-[#7D4729] text-white p-3 rounded-lg flex items-center justify-between"
      >
        <span className="font-bold">Menu</span>
        <span className="text-xl">{isMobileMenuOpen ? "-" : "+"}</span>
      </button>

      {/* Sidebar */}
      <div
        className={`
          ${isMobileMenuOpen ? "block" : "hidden"}
          lg:block
          w-full lg:w-80
          bg-[#FFEAC0]
          rounded-2xl
          outline outline-[#7D4729] 
        `}
      >
        {menuItems.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              setActive(item.key);
              setIsMobileMenuOpen(false);
            }}
            className={`flex items-center gap-4 p-3 m-4 rounded-lg cursor-pointer transition ${
              active === item.key
                ? "bg-[#7D4729] text-white"
                : "hover:bg-[#7D4729] hover:text-white"
            }`}
          >
            <img
              src={item.icon}
              alt={item.key}
              className={`w-5 h-5 ${
                active === item.key ? "filter brightness-0 invert" : ""
              }`}
            />
            <span className="capitalize">{item.key}</span>
          </div>
        ))}

        {/* Logout */}
        <div className="border-t border-[#7D4729] m-4 pt-4 text-red-500 font-bold cursor-pointer">
          {/* <Navlink to="/login">Logout</Navlink> */}
        </div>
      </div>
    </>
  );
}

export default Sidebar;