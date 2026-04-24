import React, { useState, useEffect } from "react";
import { MessageCircle, Eye, AlertCircle, X, ChevronLeft, ChevronRight } from "lucide-react";

const errorAnimationStyle = `
  @keyframes fadeInDown {
    from { opacity: 0; transform: translateY(-12px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in-down { animation: fadeInDown 0.4s ease-out; }
`;

export default function Feedback_page() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationData, setPaginationData] = useState({
    total: 0,
    per_page: 10,
    current_page: 1,
    last_page: 1,
  });

  useEffect(() => {
    fetchFeedbacks(1);
  }, []);

  const fetchFeedbacks = async (page = 1) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`https://kru-it-e-coffee-intern-main-i74iel.laravel.cloud/api/feedback?page=${page}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        // Accessing Laravel's nested data structure correctly
        const rawFeedbacks = data?.data?.data ?? [];
        const formattedFeedbacks = rawFeedbacks.map((fb) => ({
          id: `FB-${fb.id}`,
          customer: fb.user?.name || fb.customer_name || 'Anonymous',
          email: fb.user?.email || fb.email || 'N/A',
          subject: 'Customer Feedback',
          message: fb.message,
          type: fb.rating >= 4 ? 'Positive' : fb.rating === 3 ? 'Neutral' : 'Negative',
          status: 'Pending',
          date: new Date(fb.created_at).toLocaleDateString(),
          rating: fb.rating,
        }));
        
        setFeedbacks(formattedFeedbacks);
        setPaginationData({
          total: data.data.total,
          per_page: data.data.per_page,
          current_page: data.data.current_page,
          last_page: data.data.last_page,
        });
        setCurrentPage(page);
      } else {
        setError('Failed to fetch feedbacks');
      }
    } catch (err) {
      console.error('Error fetching feedbacks:', err);
      setError('Error loading feedbacks');
    } finally {
      setLoading(false);
    }
  };

  const goToPage = (page) => {
    if (page >= 1 && page <= paginationData.last_page) {
      fetchFeedbacks(page);
    }
  };

  const viewDetails = (feedback) => {
    setSelectedFeedback(feedback);
    setShowDetails(true);
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "Positive": return "bg-green-100 text-green-800";
      case "Negative": return "bg-red-100 text-red-800";
      case "Neutral": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusColor = (status) => {
    return status === "Resolved"
      ? "bg-[#f3ebe6] text-[#905E42]"
      : "bg-yellow-100 text-yellow-800";
  };

  // Helper to generate page numbers with ellipsis (...)
  const getPageNumbers = () => {
    const total = paginationData.last_page;
    const current = paginationData.current_page;
    const pages = [];

    if (total <= 7) {
      for (let i = 1; i <= total; i++) pages.push(i);
    } else {
      if (current <= 3) {
        pages.push(1, 2, 3, 4, '...', total);
      } else if (current >= total - 2) {
        pages.push(1, '...', total - 3, total - 2, total - 1, total);
      } else {
        pages.push(1, '...', current - 1, current, current + 1, '...', total);
      }
    }
    return pages;
  };

  const stats = {
    total: paginationData.total,
    positive: feedbacks.filter(f => f.type === "Positive").length, // Note: local filter only reflects current page
  };

  return (
    <div className="min-h-screen rounded-2xl bg-[#F9FAFB] p-6">
      <style>{errorAnimationStyle}</style>
      
      {/* Header */}
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Feedback Management</h1>
          <p className="text-sm text-gray-500">Total feedbacks: {paginationData.total}</p>
        </div>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex justify-between items-center animate-fade-in-down">
          <div className="flex items-center gap-3 text-red-700">
            <AlertCircle size={20} />
            <span>{error}</span>
          </div>
          <button onClick={() => fetchFeedbacks(currentPage)} className="text-red-700 font-bold hover:underline">Try Again</button>
        </div>
      )}

      {/* Feedbacks Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#905E42] text-white">
              <th className="p-4 font-semibold">#</th>
              <th className="p-4 font-semibold">Customer</th>
              <th className="p-4 font-semibold">Subject</th>
              <th className="p-4 font-semibold">Message</th>
              <th className="p-4 font-semibold">Date</th>
              <th className="p-4 font-semibold text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan="6" className="p-10 text-center text-gray-400">Loading data...</td></tr>
            ) : feedbacks.map((feedback, index) => (
              <tr key={feedback.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="p-4 text-gray-500">
                   {/* Dynamic counting number calculation */}
                   {(paginationData.current_page - 1) * paginationData.per_page + (index + 1)}
                </td>
                <td className="p-4">
                  <div className="font-bold text-gray-800">{feedback.customer}</div>
                  <div className="text-xs text-gray-400">{feedback.email}</div>
                </td>
                <td className="p-4 text-gray-600">{feedback.subject}</td>
                <td className="p-4 text-gray-600 max-w-xs truncate">{feedback.message}</td>
                <td className="p-4 text-gray-600">{feedback.date}</td>
                <td className="p-4 text-center">
                  <button onClick={() => viewDetails(feedback)} className="text-blue-500 hover:bg-blue-50 p-2 rounded-full transition-colors">
                    <Eye size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Integrated Custom Pagination Design */}
      {paginationData.last_page > 1 && (
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center bg-white p-2 rounded-full shadow-sm border border-gray-100 gap-1">
            {/* Previous Button */}
            <button
              onClick={() => goToPage(paginationData.current_page - 1)}
              disabled={paginationData.current_page === 1}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-full disabled:opacity-30 transition-colors"
            >
              Previous
            </button>

            {/* Page Numbers */}
            <div className="flex items-center gap-1">
              {getPageNumbers().map((page, idx) => (
                page === '...' ? (
                  <span key={`dots-${idx}`} className="px-3 text-gray-400">...</span>
                ) : (
                  <button
                    key={idx}
                    onClick={() => goToPage(page)}
                    className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-medium transition-all ${
                      paginationData.current_page === page
                        ? 'bg-gray-100 text-gray-900 border border-gray-200'
                        : 'text-gray-500 hover:bg-gray-50'
                    }`}
                  >
                    {page}
                  </button>
                )
              ))}
            </div>

            {/* Next Button - Black design from image */}
            <button
              onClick={() => goToPage(paginationData.current_page + 1)}
              disabled={paginationData.current_page === paginationData.last_page}
              className="ml-2 px-6 py-2 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 disabled:bg-gray-300 transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Detail Modal */}
      {showDetails && selectedFeedback && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-800">Feedback Details</h3>
              <button onClick={() => setShowDetails(false)} className="text-gray-400 hover:text-gray-600"><X size={20}/></button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">From</label>
                <p className="text-gray-800 font-medium">{selectedFeedback.customer} ({selectedFeedback.email})</p>
              </div>
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Message</label>
                <div className="mt-1 p-3 bg-gray-50 rounded-lg text-gray-700 italic border-l-4 border-[#905E42]">
                  "{selectedFeedback.message}"
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Type</label>
                  <span className={`inline-block mt-1 rounded-full px-3 py-1 text-xs font-medium ${getTypeColor(selectedFeedback.type)}`}>
                    {selectedFeedback.type}
                  </span>
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Status</label>
                  <span className={`inline-block mt-1 rounded-full px-3 py-1 text-xs font-medium ${getStatusColor(selectedFeedback.status)}`}>
                    {selectedFeedback.status}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Date</label>
                  <p className="text-gray-800">{selectedFeedback.date}</p>
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Rating</label>
                  <p className="text-gray-800"> {selectedFeedback.rating}/5</p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-gray-50 text-right">
              <button onClick={() => setShowDetails(false)} className="px-6 py-2 bg-[#905E42] text-white rounded-lg hover:bg-[#7a4e35] transition-colors">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}