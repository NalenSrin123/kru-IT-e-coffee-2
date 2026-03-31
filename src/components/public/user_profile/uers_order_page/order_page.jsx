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
  const accountStats = [
  { value: 24, label: "Total Orders", bg: "bg-[#EE8142]" },
  { value: 18, label: "Completed", bg: "bg-[#6C3346]" },
  { value: 4, label: "In Progress", bg: "bg-[#1A7721]" },
  { value: 12, label: "Wishlist items", bg: "bg-[#C00707]" },
];

  return (
    <div className="min-h-screen  flex ">
      {/* Sidebar */}
      

      {/* Main Content */}
      <div className="flex-1  rounded-2xl  ">
        <h1 className="text-2xl font-bold mb-6">Order finished</h1>

        {/* Order Cards */}
        <div className="space-y-6">
  {orders.map((order) => (
    <div
      key={order.id}
      className="hover:bg-[#EBD7B4] duration-300 border border-[#d9a066] rounded-3xl p-6 shadow-sm"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        
        {/* LEFT SIDE */}
        <div className="flex gap-6 items-start">
          <img
            src={order.image}
            alt={order.name}
            className="w-28 h-28 object-cover rounded-2xl"
          />

          <div>
            {/* Stars */}
            <div className="flex text-orange-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="orange" />
              ))}
            </div>

            <h2 className="text-xl font-semibold">
              {order.name}
            </h2>

            <p className="text-sm text-gray-700 max-w-xs">
              Perfect balance of espresso, steamed milk, and velvety foam
            </p>

            <p className="text-sm mt-3 font-medium">
              Total 1 items <br />
              date: {order.date}
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex md:flex-col items-center md:items-end gap-4">
          <p className="text-2xl font-bold text-[#8b5e3c]">
            {order.price}
          </p>

          <button className="bg-[#8b5e3c] text-white px-6 py-2 rounded-full hover:bg-[#6f472d] transition">
            Order again
          </button>
        </div>

      </div>
    </div>
  ))}
</div>

        {/* Account Statistics */}
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
      </div>
    </div>
  );
}
