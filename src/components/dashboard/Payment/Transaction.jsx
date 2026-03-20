export default function Transaction() {
  return (
    <div className="min-h-screen bg-gray-50">

      <div className="px-6 py-6">

        {/* Page Header */}
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-2xl font-medium text-gray-900">All Transactions</h1>
          <div className="flex gap-2.5">
            <button className="flex items-center gap-1.5 px-4 py-2 bg-amber-700 text-white text-sm font-medium rounded-lg">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 2v8M5 7l3 3 3-3M3 12h10" />
              </svg>
              Export
            </button>
            <button className="flex items-center gap-1.5 px-4 py-2 bg-gray-200 text-gray-700 text-sm font-medium rounded-lg">
              Reset
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white border border-gray-200 rounded-xl px-5 py-4 mb-5 flex flex-wrap items-end gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Select Date Range</label>
            <div className="flex items-center gap-2 h-9 px-3 border border-gray-300 rounded-lg text-sm text-gray-700 min-w-[220px]">
              <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth={1.5}>
                <rect x="2" y="3" width="12" height="11" rx="1.5" />
                <path d="M5 1v2M11 1v2M2 7h12" strokeLinecap="round" />
              </svg>
              February 1, 2026 – February 24, 2026
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Coffee Item</label>
            <select className="h-9 px-3 border border-gray-300 rounded-lg text-sm text-gray-700 bg-white w-40 focus:outline-none focus:ring-2 focus:ring-amber-700">
              <option>All Items</option>
              <option>Espresso</option>
              <option>Cappuccino</option>
              <option>Latte</option>
              <option>Cold Brew</option>
              <option>Americano</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Payment</label>
            <select className="h-9 px-3 border border-gray-300 rounded-lg text-sm text-gray-700 bg-white w-36 focus:outline-none focus:ring-2 focus:ring-amber-700">
              <option>All</option>
              <option>Cash</option>
              <option>ABA</option>
              <option>Cash</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Search</label>
            <input
              type="text"
              placeholder="Search..."
              className="h-9 px-3 border border-gray-300 rounded-lg text-sm text-gray-700 w-48 focus:outline-none focus:ring-2 focus:ring-amber-700"
            />
          </div>

          <button className="flex items-center gap-1.5 h-9 px-5 ring-amber-700 text-white text-sm font-medium rounded-lg">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round">
              <circle cx="7" cy="7" r="4.5" />
              <path d="M10.5 10.5L14 14" />
            </svg>
            Filter
          </button>
        </div>

        {/* Table */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  {["Date & Time", "Customer Name", "Coffee Item", "Qty", "Total Amount", "Payment Method"].map((h) => (
                    <th key={h} className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">

                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3.5 text-gray-500 text-xs whitespace-nowrap">2026-02-24 08:14 AM</td>
                  <td className="px-4 py-3.5 font-medium text-gray-800">Vouchnim Lim</td>
                  <td className="px-4 py-3.5 font-medium text-gray-800">Cappuccino</td>
                  <td className="px-4 py-3.5 text-gray-500">2</td>
                  <td className="px-4 py-3.5 font-medium text-gray-800">$7.00</td>
                  <td className="px-4 py-3.5"><span className="text-xs text-gray-500 bg-gray-100 border border-gray-200 px-2 py-1 rounded-md">Cash</span></td>
                </tr>

                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3.5 text-gray-500 text-xs whitespace-nowrap">2026-02-24 09:02 AM</td>
                  <td className="px-4 py-3.5 font-medium text-gray-800">Chanra Sok</td>
                  <td className="px-4 py-3.5 font-medium text-gray-800">Cold Brew</td>
                  <td className="px-4 py-3.5 text-gray-500">1</td>
                  <td className="px-4 py-3.5 font-medium text-gray-800">$5.50</td>
                  <td className="px-4 py-3.5"><span className="text-xs text-gray-500 bg-gray-100 border border-gray-200 px-2 py-1 rounded-md">ABA</span></td>
                </tr>

                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3.5 text-gray-500 text-xs whitespace-nowrap">2026-02-24 10:30 AM</td>
                  <td className="px-4 py-3.5 font-medium text-gray-800">Sophea Keo</td>
                  <td className="px-4 py-3.5 font-medium text-gray-800">Latte</td>
                  <td className="px-4 py-3.5 text-gray-500">3</td>
                  <td className="px-4 py-3.5 font-medium text-gray-800">$16.50</td>
                  <td className="px-4 py-3.5"><span className="text-xs text-gray-500 bg-gray-100 border border-gray-200 px-2 py-1 rounded-md">Cash</span></td>
                </tr>

                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3.5 text-gray-500 text-xs whitespace-nowrap">2026-02-24 11:15 AM</td>
                  <td className="px-4 py-3.5 font-medium text-gray-800">Dara Phal</td>
                  <td className="px-4 py-3.5 font-medium text-gray-800">Espresso</td>
                  <td className="px-4 py-3.5 text-gray-500">2</td>
                  <td className="px-4 py-3.5 font-medium text-gray-800">$6.00</td>
                  <td className="px-4 py-3.5"><span className="text-xs text-gray-500 bg-gray-100 border border-gray-200 px-2 py-1 rounded-md">Cash</span></td>
                </tr>

                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3.5 text-gray-500 text-xs whitespace-nowrap">2026-02-24 12:45 PM</td>
                  <td className="px-4 py-3.5 font-medium text-gray-800">Ratha Meng</td>
                  <td className="px-4 py-3.5 font-medium text-gray-800">Americano</td>
                  <td className="px-4 py-3.5 text-gray-500">1</td>
                  <td className="px-4 py-3.5 font-medium text-gray-800">$4.00</td>
                  <td className="px-4 py-3.5"><span className="text-xs text-gray-500 bg-gray-100 border border-gray-200 px-2 py-1 rounded-md">ABA</span></td>
                </tr>

                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3.5 text-gray-500 text-xs whitespace-nowrap">2026-02-24 14:10 PM</td>
                  <td className="px-4 py-3.5 font-medium text-gray-800">Bopha Srun</td>
                  <td className="px-4 py-3.5 font-medium text-gray-800">Cold Brew</td>
                  <td className="px-4 py-3.5 text-gray-500">4</td>
                  <td className="px-4 py-3.5 font-medium text-gray-800">$22.00</td>
                  <td className="px-4 py-3.5"><span className="text-xs text-gray-500 bg-gray-100 border border-gray-200 px-2 py-1 rounded-md">Cash</span></td>
                </tr>

                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3.5 text-gray-500 text-xs whitespace-nowrap">2026-02-24 15:55 PM</td>
                  <td className="px-4 py-3.5 font-medium text-gray-800">Kimheng Nuth</td>
                  <td className="px-4 py-3.5 font-medium text-gray-800">Cappuccino</td>
                  <td className="px-4 py-3.5 text-gray-500">2</td>
                  <td className="px-4 py-3.5 font-medium text-gray-800">$7.00</td>
                  <td className="px-4 py-3.5"><span className="text-xs text-gray-500 bg-gray-100 border border-gray-200 px-2 py-1 rounded-md">Cash</span></td>
                </tr>

              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between px-5 py-3.5 border-t border-gray-100">
            <span className="text-sm text-gray-500">Showing 1–7 of 7 transactions</span>
            <div className="flex gap-1">
              <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-100 text-sm">‹</button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg border bg-amber-700 text-white text-sm font-medium">1</button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-100 text-sm">2</button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-100 text-sm">3</button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-100 text-sm">›</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}