import React from "react";

export default function CoffeeProfile() {
  return (
    <div className="min-h-screen bg-[#f3e3cf] flex flex-col">
      {/* Header */}
      <header className="bg-[#8b5e3c] text-white px-10 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wider">KOFEE</h1>
        <nav className="flex gap-8 text-sm">
          <a className="hover:text-yellow-200 cursor-pointer">HOME</a>
          <a className="hover:text-yellow-200 cursor-pointer">MENU</a>
          <a className="hover:text-yellow-200 cursor-pointer">SERVICES</a>
          <a className="hover:text-yellow-200 cursor-pointer">ABOUT</a>
          <a className="hover:text-yellow-200 cursor-pointer">CONTACT</a>
        </nav>
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/40"
            className="rounded-full w-9 h-9 border"
          />
        </div>
      </header>

      {/* Content */}
      <div className="flex flex-1 max-w-6xl mx-auto w-full py-10 gap-6">
        {/* Sidebar */}
        <aside className="w-64 bg-[#f8ead6] p-5 rounded-2xl shadow">
          <ul className="space-y-3 text-sm">
            {[
              "My Profile",
              "My Order",
              "Address",
              "Payment Methods",
              "Wishlist",
              "Setting",
            ].map((item) => (
              <li
                key={item}
                className="px-4 py-2 rounded-lg hover:bg-[#8b5e3c] hover:text-white cursor-pointer transition"
              >
                {item}
              </li>
            ))}
          </ul>

          <button className="mt-6 text-red-500 hover:text-red-700 text-sm">
            Logout
          </button>
        </aside>

        {/* Profile Card */}
        <div className="flex-1 bg-[#f8ead6] p-8 rounded-2xl shadow">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">My Profile</h2>
            <button className="bg-[#8b5e3c] text-white px-4 py-2 rounded-lg hover:bg-[#6e472d]">
              Edit Profile
            </button>
          </div>

          <div className="flex flex-col items-center mb-6">
            <img
              src="https://i.pravatar.cc/100"
              className="rounded-full w-24 h-24 border-4 border-white shadow"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input className="p-2 rounded border" placeholder="Full Name" />
            <input className="p-2 rounded border" placeholder="Gender" />
            <input className="p-2 rounded border col-span-2" placeholder="Address" />
            <input className="p-2 rounded border" placeholder="Phone" />
            <input className="p-2 rounded border" placeholder="Email" />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 mt-8 text-center text-sm">
            <div className="bg-pink-200 p-4 rounded-xl">24<br/>Total Orders</div>
            <div className="bg-yellow-200 p-4 rounded-xl">18<br/>Completed</div>
            <div className="bg-orange-200 p-4 rounded-xl">4<br/>In Progress</div>
            <div className="bg-red-200 p-4 rounded-xl">12<br/>Wishlist</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#6e3f25] text-white mt-10">
        <div className="max-w-6xl mx-auto px-10 py-12 grid grid-cols-4 gap-8 text-sm">
          <div>
            <h3 className="font-bold text-lg mb-2">KOFEE</h3>
            <p>Match your taste. Fit your style!</p>
          </div>

          <div className="space-y-2">
            <p className="font-semibold">HOME</p>
            <p className="hover:text-yellow-200 cursor-pointer">ABOUT US</p>
            <p className="hover:text-yellow-200 cursor-pointer">SERVICES</p>
            <p className="hover:text-yellow-200 cursor-pointer">CONTACT</p>
          </div>

          <div className="space-y-2">
            <p className="font-semibold">ADDRESS</p>
            <p>Address 1, Location</p>
            <p>Address 2, Location</p>
            <p>Address 3, Location</p>
          </div>

          <div className="space-y-2">
            <p className="font-semibold">CONTACT</p>
            <p>yourinfo@gmail.com</p>
            <p>111 222 333 444</p>
          </div>
        </div>

        <div className="text-center text-xs py-4 border-t border-white/20">
          © 2025 Kofee. Designed with React + Tailwind
        </div>
      </footer>
    </div>
  );
}