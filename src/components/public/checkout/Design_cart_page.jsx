import React, { useState } from "react";

function Checkout() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Trendy Brown Coat",
      color: "Brown",
      size: "XXL",
      price: 75,
      quantity: 4,
      img: "https://via.placeholder.com/60", // Replace with actual image URL
    },
    {
      id: 2,
      name: "Classy Light Coat",
      color: "Cream",
      size: "XXL",
      price: 165,
      quantity: 1,
      img: "https://via.placeholder.com/60",
    },
    {
      id: 3,
      name: "Light Brown Sweater",
      color: "Light Brown",
      size: "S",
      price: 63,
      quantity: 1,
      img: "https://via.placeholder.com/60",
    },
    {
      id: 4,
      name: "Modern Brown Dress",
      color: "Brown",
      size: "S",
      price: 90,
      quantity: 2,
      img: "https://via.placeholder.com/60",
    },
  ]);

  const [coupon, setCoupon] = useState("");
  const couponDiscount = coupon === "SAVE100" ? 100 : 0;

  const handleQuantity = (id, type) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: type === "plus" ? item.quantity + 1 : Math.max(item.quantity - 1, 1) }
          : item
      )
    );
  };

  const handleRemove = id => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50">
    

      {/* Shopping Cart */}
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-2">Shopping Cart</h1>
        <p className="text-gray-500 mb-6">Home / Shopping Cart</p>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Cart Items */}
          <div className="flex-1 bg-white p-6 rounded shadow">
            <div className="grid grid-cols-4 gap-4 bg-yellow-100 p-2 font-semibold text-gray-800 rounded">
              <span>Product</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Subtotal</span>
            </div>

            {cartItems.map(item => (
              <div key={item.id} className="grid grid-cols-4 gap-4 items-center py-4 border-b">
                <div className="flex items-center gap-4">
                  <img src={item.img} alt={item.name} className="w-16 h-16 object-cover rounded" />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-gray-500 text-sm">Color: {item.color} | Size: {item.size}</p>
                  </div>
                  <button onClick={() => handleRemove(item.id)} className="text-red-500 ml-2">×</button>
                </div>
                <span>${item.price.toFixed(2)}</span>
                <div className="flex items-center gap-2">
                  <button onClick={() => handleQuantity(item.id, "minus")} className="px-2 bg-gray-200 rounded">-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantity(item.id, "plus")} className="px-2 bg-gray-200 rounded">+</button>
                </div>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}

            {/* Coupon */}
            <div className="flex mt-4 gap-2">
              <input
                type="text"
                placeholder="Coupon Code"
                value={coupon}
                onChange={e => setCoupon(e.target.value)}
                className="flex-1 p-2 border rounded"
              />
              <button onClick={() => alert("Coupon Applied!")} className="bg-brown-700 text-white px-4 rounded">Apply Coupon</button>
              <button onClick={() => setCartItems([])} className="ml-auto text-red-500">Clear Shopping Cart</button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-1/3 bg-white p-6 rounded shadow">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2"><span>Items</span><span>{cartItems.reduce((a, c) => a + c.quantity, 0)}</span></div>
            <div className="flex justify-between mb-2"><span>Sub Total</span><span>${subtotal.toFixed(2)}</span></div>
            <div className="flex justify-between mb-2"><span>Shipping</span><span>$0.00</span></div>
            <div className="flex justify-between mb-2"><span>Taxes</span><span>$0.00</span></div>
            <div className="flex justify-between mb-2"><span>Coupon Discount</span><span>${couponDiscount}</span></div>
            <div className="flex justify-between font-bold text-lg border-t pt-2 mt-2">
              <span>Total</span>
              <span>${(subtotal - couponDiscount).toFixed(2)}</span>
            </div>
            <button className="w-full mt-4 bg-brown-700 text-white py-2 rounded">Proceed to Checkout</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Checkout;