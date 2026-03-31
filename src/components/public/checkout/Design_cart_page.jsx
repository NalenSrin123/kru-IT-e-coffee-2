import React, { useState } from "react";

export default function App() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Cappuccino",
      price: 4,
      quantity: 2,
      image: "https://i.pinimg.com/736x/f0/65/5f/f0655f2737da76be9b4ac435c65e3d9b.jpg"
    },
    {
      id: 2,
      name: "Latte",
      price: 5,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93"
    },
    {
      id: 3,
      name: "Americano",
      price: 3,
      quantity: 3,
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
    },
    {
      id: 4,
      name: "Mocha",
      price: 6,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735"
    }
  ]);

  const increase = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrease = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-6xl w-full grid md:grid-cols-3 gap-10">

        {/* LEFT SIDE: Cart Table */}
        <div className="md:col-span-2 bg-white shadow rounded">

          {/* Table Header */}
          <div className="grid grid-cols-4 bg-amber-900 text-white p-4 font-semibold">
            <div>Coffee</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Total</div>
          </div>

          {/* Products */}
          {cart.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-4 items-center p-4 border-b hover:bg-gray-50 transition"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  className="w-14 h-14 rounded object-cover"
                  alt={item.name}
                />
                <span className="font-medium">{item.name}</span>
              </div>

              <div>${item.price}</div>

              <div className="flex items-center border w-fit rounded">
                <button
                  onClick={() => decrease(item.id)}
                  className="px-3 py-1 hover:bg-gray-200"
                >
                  -
                </button>

                <span className="px-4">{item.quantity}</span>

                <button
                  onClick={() => increase(item.id)}
                  className="px-3 py-1 hover:bg-gray-200"
                >
                  +
                </button>
              </div>

              <div className="font-semibold">${item.price * item.quantity}</div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE: Order Summary */}
        <div className="bg-white p-6 shadow rounded h-fit">

          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          <div className="flex justify-between mb-3">
            <span>Items</span>
            <span>{cart.length}</span>
          </div>

          <div className="flex justify-between mb-3">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>

          <div className="flex justify-between mb-3">
            <span>Shipping</span>
            <span>$2</span>
          </div>

          <hr className="my-3" />

          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>${subtotal + 2}</span>
          </div>

          <button className="w-full mt-6 bg-amber-900 text-white py-3 rounded hover:bg-amber-800 transition">
            Checkout Coffee
          </button>

        </div>
      </div>
    </div>
  );
}