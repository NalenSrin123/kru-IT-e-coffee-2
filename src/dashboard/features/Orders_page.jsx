import React from "react";

const orders = [
  {
    id: "ORD-1001",
    customer: "John Doe",
    item: "Latte",
    quantity: 2,
    total: "$7.00",
    status: "Preparing",
  },
  {
    id: "ORD-1002",
    customer: "Sok Dara",
    item: "Cappuccino",
    quantity: 1,
    total: "$3.50",
    status: "Completed",
  },
  {
    id: "ORD-1003",
    customer: "Kim Ly",
    item: "Americano",
    quantity: 3,
    total: "$12.00",
    status: "Pending",
  },
];

export default function OrdersPage() {
  return (
    <div className="min-h-screen rounded-2xl bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Orders</h1>
          <p className="mt-1 text-sm text-gray-500">
            Track order activity from the dashboard.
          </p>
        </div>
        <button className="rounded-lg bg-[#905E42] px-4 py-2 text-sm font-medium text-white">
          View Reports
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl bg-[#f8f3ef] p-4">
          <p className="text-sm text-gray-500">Pending</p>
          <p className="mt-2 text-2xl font-bold text-[#905E42]">12</p>
        </div>
        <div className="rounded-xl bg-[#f8f3ef] p-4">
          <p className="text-sm text-gray-500">Preparing</p>
          <p className="mt-2 text-2xl font-bold text-[#905E42]">8</p>
        </div>
        <div className="rounded-xl bg-[#f8f3ef] p-4">
          <p className="text-sm text-gray-500">Completed Today</p>
          <p className="mt-2 text-2xl font-bold text-[#905E42]">24</p>
        </div>
      </div>

      <div className="mt-6 overflow-hidden rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#905E42] text-white">
            <tr>
              <th className="p-3">Order ID</th>
              <th className="p-3">Customer</th>
              <th className="p-3">Item</th>
              <th className="p-3">Qty</th>
              <th className="p-3">Total</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t border-gray-200">
                <td className="p-3 font-medium text-gray-800">{order.id}</td>
                <td className="p-3">{order.customer}</td>
                <td className="p-3">{order.item}</td>
                <td className="p-3">{order.quantity}</td>
                <td className="p-3">{order.total}</td>
                <td className="p-3">
                  <span className="rounded-full bg-[#f3ebe6] px-3 py-1 text-xs font-medium text-[#905E42]">
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
