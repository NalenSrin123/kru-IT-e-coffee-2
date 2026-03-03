import React from "react";
import { Home, Package, MapPin, CreditCard, Heart, Settings, LogOut, Star } from "lucide-react";

export default function UserOrderPage() {
  const orders = [
    {
      id: 1,
      name: "Cappuccino",
      price: "$4.50",
      date: "30/12/2025",
      image: "https://www.eatandwalkitaly.it/wp-content/uploads/2019/11/cappuccino.jpg",
    },
    {
      id: 2,
      name: "Cappuccino",
      price: "$4.50",
      date: "30/12/2025",
      image: "https://www.eatandwalkitaly.it/wp-content/uploads/2019/11/cappuccino.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f3e2c7] flex p-6">
      {/* Sidebar */}
      <div className="w-64 bg-[#f6e7cd] rounded-2xl shadow-md p-6 border border-[#c8a97e]">
        <h2 className="text-lg font-semibold mb-6">My Profile</h2>

        <nav className="space-y-4 text-sm">
          <div className="flex items-center gap-3 cursor-pointer hover:text-brown-700">
            <Home size={18} /> My Profile
          </div>

          <div className="flex items-center gap-3 bg-[#8b5e3c] text-white px-3 py-2 rounded-lg cursor-pointer">
            <Package size={18} /> My Order
          </div>

          <div className="flex items-center gap-3 cursor-pointer">
            <MapPin size={18} /> Address
          </div>

          <div className="flex items-center gap-3 cursor-pointer">
            <CreditCard size={18} /> Payment Methods
          </div>

          <div className="flex items-center gap-3 cursor-pointer">
            <Heart size={18} /> Wishlist
          </div>

          <div className="flex items-center gap-3 cursor-pointer">
            <Settings size={18} /> Setting
          </div>

          <hr className="my-4 border-[#c8a97e]" />

          <div className="flex items-center gap-3 text-red-500 cursor-pointer">
            <LogOut size={18} /> Logout
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-8 bg-[#f6e7cd] rounded-2xl shadow-lg border-2 border-[#8b5e3c] p-8">
        <h1 className="text-2xl font-bold mb-6">Order finished</h1>

        {/* Order Cards */}
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="flex items-center justify-between bg-[#f3e2c7] border border-[#d9a066] rounded-3xl p-6 shadow-sm"
            >
              <div className="flex gap-6 items-center">
                <img
                  src={order.image}
                  alt={order.name}
                  className="w-28 h-32 object-cover rounded-xl"
                />

                <div>
                  <div className="flex text-orange-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="orange" />
                    ))}
                  </div>

                  <h2 className="text-lg font-semibold">{order.name}</h2>
                  <p className="text-sm text-gray-600 max-w-xs">
                    Perfect balance of espresso, steamed milk, and velvety foam
                  </p>

                  <p className="text-xs mt-3">
                    Total 1 items <br /> date: {order.date}
                  </p>
                </div>
              </div>

              <div className="text-right space-y-4">
                <p className="text-xl font-bold text-[#8b5e3c]">{order.price}</p>
                <button className="bg-[#8b5e3c] text-white px-5 py-2 rounded-full text-sm hover:bg-[#6f472d] transition">
                  Order again
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Account Statistics */}
        <div className="mt-10">
          <h2 className="font-semibold mb-4">Account Statistics</h2>

          <div className="grid grid-cols-4 gap-4">
            <div className="bg-[#d9a5a5] rounded-xl p-4 text-center">
              <p className="text-2xl font-bold">24</p>
              <p className="text-sm">Total Orders</p>
            </div>

            <div className="bg-[#e6c79c] rounded-xl p-4 text-center">
              <p className="text-2xl font-bold">18</p>
              <p className="text-sm">Completed</p>
            </div>

            <div className="bg-[#f1d3b3] rounded-xl p-4 text-center">
              <p className="text-2xl font-bold">4</p>
              <p className="text-sm">In Progress</p>
            </div>

            <div className="bg-[#e58f7c] rounded-xl p-4 text-center">
              <p className="text-2xl font-bold">12</p>
              <p className="text-sm">Wishlist Items</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
