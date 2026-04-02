import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';
import { ArrowUpRight, ArrowDownLeft, MoreVertical, Search, Bell, ChevronDown } from 'lucide-react';

// Register ChartJS
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Tooltip, Legend);

const CryptoDashboard = () => {
  // --- Data សម្រាប់ Line Chart ---
  const lineData = {
    labels: ['Week 01', 'Week 02', 'Week 03', 'Week 04', 'Week 05', 'Week 06', 'Week 07', 'Week 08', 'Week 09', 'Week 10'],
    datasets: [
      { label: 'ETH', data: [400, 350, 480, 450, 600, 550, 480, 748, 600, 900], borderColor: '#3b82f6', borderWidth: 3, tension: 0.4, pointRadius: 0 },
      { label: 'XMR', data: [300, 300, 310, 550, 400, 420, 500, 450, 520, 480], borderColor: '#f97316', borderWidth: 3, tension: 0.4, pointRadius: 0 },
    ],
  };

  // --- Data សម្រាប់ Arc Chart (Current Statistic) ---
  const doughnutData = {
    datasets: [{
      data: [66, 50, 11, 23],
      backgroundColor: ['#fb923c', '#3b82f6', '#4ade80', '#ec4899'],
      circumference: 180,
      rotation: 270,
      cutout: '80%',
      borderRadius: 5,
    }]
  };

  return (
    <div className="min-h-screen bg-[#f8fafd] p-4 md:p-8 text-slate-700">
      
      {/* 1. Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <h1 className="text-2xl md:text-3xl font-extrabold text-[#1e293b]">Dashboard</h1>
        <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
          <div className="bg-white px-4 py-2 rounded-xl shadow-sm text-sm text-gray-500">☁️ 21° Medan, IDN</div>
          <button className="bg-[#2d5cf7] text-white px-6 py-2 rounded-xl font-medium shadow-lg shadow-blue-100 flex-1 md:flex-none">
            Filter Periode
          </button>
        </div>
      </div>

      {/* 2. Top Stats - Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <CoinStat name="BTC" price="$984" trend="+45%" color="orange" />
        <CoinStat name="M" price="$22,567" trend="+45%" color="orange" />
        <CoinStat name="ETH" price="$168,331.09" trend="-45%" color="blue" isDown />
        <CoinStat name="LTC" price="$7,784" trend="-45%" color="blue" isDown />
      </div>

      {/* 3. Middle Section: Stats & Main Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
        {/* Current Statistic Card */}
        <div className="lg:col-span-3 bg-white p-6 rounded-[2.5rem] shadow-sm border border-gray-50">
          <h3 className="font-bold mb-6">Current Statistic</h3>
          <div className="h-40 mb-4"><Doughnut data={doughnutData} options={{ plugins: { legend: { display: false } } }} /></div>
          <div className="space-y-3">
            <StatRow label="Income (66%)" value="$167,884.21" color="bg-orange-400" />
            <StatRow label="Spends (50%)" value="$56,411.33" color="bg-blue-500" />
            <StatRow label="Installment (11%)" value="$81,981.22" color="bg-green-400" />
            <StatRow label="Invest (23%)" value="$12,432.51" color="bg-pink-400" />
          </div>
        </div>

        {/* Market Overview Card */}
        <div className="lg:col-span-9 bg-white p-6 md:p-8 rounded-[2.5rem] shadow-sm border border-gray-50">
          <div className="flex flex-col sm:flex-row justify-between mb-8 gap-4">
            <h3 className="font-bold text-lg">Market Overview</h3>
            <div className="flex items-center gap-4 text-xs font-semibold">
              <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-blue-500" /> ETH</span>
              <span className="flex items-center gap-1 text-gray-400"><div className="w-2 h-2 rounded-full bg-orange-400" /> XMR</span>
            </div>
          </div>
          <div className="h-[300px] w-full">
            <Line data={lineData} options={{ responsive: true, maintainAspectRatio: false, scales: { x: { grid: { display: false } }, y: { border: { display: false } } }, plugins: { legend: { display: false } } }} />
          </div>
        </div>
      </div>

      {/* 4. Credit Cards Section - Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <CreditCard color="bg-green-500" amount="$22,466.24" name="William Fancyson" />
        <CreditCard color="bg-blue-500" amount="$67,876.32" name="William Fancyson" />
        <CreditCard color="bg-purple-600" amount="$240.56" name="William Fancyson" />
        <CreditCard color="bg-orange-500" amount="$6,786.25" name="William Fancyson" />
      </div>

      {/* 5. Bottom Section: Activities & Orders (New!) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Recent Activities */}
        <div className="lg:col-span-6 bg-white p-6 rounded-[2.5rem] shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold">Recent Trading Activities</h3>
            <div className="bg-gray-100 p-1 rounded-xl flex text-xs font-bold">
               <button className="px-3 py-1.5 text-gray-400">Monthly</button>
               <button className="px-3 py-1.5 text-gray-400">Weekly</button>
               <button className="px-4 py-1.5 bg-blue-600 text-white rounded-lg shadow-md">Today</button>
            </div>
          </div>
          <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-2xl transition">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white"><ArrowDownLeft size={20} /></div>
              <div>
                <div className="flex items-center gap-2 font-bold text-sm"><span>🟠</span> Bitcoin</div>
                <div className="text-xs text-gray-400">06:24:45 AM</div>
              </div>
            </div>
            <div className="font-bold text-sm">+$5,553</div>
            <div className="px-4 py-1 border border-green-500 text-green-500 text-xs rounded-full font-bold">Completed</div>
          </div>
        </div>

        {/* Orders */}
        <div className="lg:col-span-3 bg-white p-6 rounded-[2.5rem] shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold">Sell Order</h3>
            <MoreVertical size={18} className="text-gray-400 cursor-pointer" />
          </div>
          <div className="bg-gray-50 p-4 rounded-2xl mb-4 flex justify-between items-center">
            <div className="flex items-center gap-2 font-bold text-sm"><span>🔵</span> Litecoin</div>
            <ChevronDown size={16} className="text-gray-400" />
          </div>
          <div className="flex justify-between text-[10px] text-gray-400 font-bold uppercase px-2">
            <span>Price</span><span>Amount</span><span>Total</span>
          </div>
        </div>

        <div className="lg:col-span-3 bg-white p-6 rounded-[2.5rem] shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold">Buy Order</h3>
            <MoreVertical size={18} className="text-gray-400 cursor-pointer" />
          </div>
          <div className="bg-gray-50 p-4 rounded-2xl mb-4 flex justify-between items-center">
            <div className="flex items-center gap-2 font-bold text-sm"><span>🟠</span> Monero</div>
            <ChevronDown size={16} className="text-gray-400" />
          </div>
          <div className="flex justify-between text-[10px] text-gray-400 font-bold uppercase px-2">
            <span>Price</span><span>Amount</span><span>Total</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Small Helper Components ---

const CoinStat = ({ name, price, trend, color, isDown }) => (
  <div className="bg-white p-4 md:p-6 rounded-[2rem] shadow-sm flex items-center gap-4 border border-gray-50">
    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white shadow-inner ${color === 'orange' ? 'bg-orange-400' : 'bg-blue-500'}`}>{name[0]}</div>
    <div>
      <div className="text-xl font-bold">{price}</div>
      <div className={`text-[11px] font-bold ${isDown ? 'text-red-400' : 'text-green-500'}`}>
        {isDown ? '↘' : '↗'} {trend} <span className="text-gray-300 font-normal">This week</span>
      </div>
    </div>
  </div>
);

const StatRow = ({ label, value, color }) => (
  <div className="flex justify-between items-center text-xs">
    <div className="flex items-center gap-2 text-gray-500"><div className={`w-2 h-2 rounded-full ${color}`} /> {label}</div>
    <div className="font-bold">{value}</div>
  </div>
);

const CreditCard = ({ color, amount, name }) => (
  <div className={`${color} p-6 rounded-[2rem] text-white shadow-lg relative overflow-hidden h-44 flex flex-col justify-between`}>
    <div className="relative z-10">
      <div className="text-[10px] opacity-80 uppercase font-semibold">Main Balance</div>
      <div className="text-2xl font-bold">{amount}</div>
    </div>
    <div className="flex justify-between items-end relative z-10">
      <div className="text-[10px] opacity-80 uppercase leading-tight font-medium">Valid Thru<br /><span className="text-sm">08/21</span></div>
      <div className="text-right text-[10px] opacity-80 uppercase leading-tight font-medium">Card Holder<br /><span className="text-sm">{name}</span></div>
    </div>
    <div className="absolute -right-6 -top-6 w-24 h-24 bg-white opacity-10 rounded-full" />
  </div>
);

export default CryptoDashboard;