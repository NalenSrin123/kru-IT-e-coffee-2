import React, { useState } from 'react';

const SendResetPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending reset link to:", email);
    // Logic for API call goes here
  };

  return (
    <div className="min-h-screen bg-[#FDF5E6] flex items-start sm:items-center justify-center p-3 sm:p-4 md:p-6 font-sans">
      {/* Main Card Container */}
      <div className="relative w-full max-w-md my-4 sm:my-0 bg-[#FFFBF0] rounded-2xl shadow-sm border border-[#F3E1C5] px-5 sm:px-8 md:px-10 pb-7 sm:pb-10 pt-5 sm:pt-8">
        
        {/* Top Right Close Icon */}
        <button 
          aria-label="Close"
          className="absolute top-5 sm:top-8 right-5 sm:right-8 text-[#C4A484] hover:text-[#6F3C1E] transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Branding */}
        <div className="mb-8">
          <h2 className="text-[#6F3C1E] font-bold text-lg tracking-[0.2em] mb-4 uppercase">Kofee</h2>
          <h1 className="text-[#6F3C1E] text-4xl font-serif font-extrabold tracking-tight">Forgot Password</h1>
        </div>

        {/* Form Description */}
        <p className="text-[#A67C52] text-sm mb-10 leading-relaxed max-w-[90%]">
          Enter your email address below and we'll send you a link to reset your password and
          get you back to your account.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Email Input */}
          <div className="space-y-2">
            <label 
              htmlFor="email-address"
              className="text-[#6F3C1E] text-xs font-semibold ml-1 uppercase tracking-wider"
            >
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#E3CBA3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <input 
                id="email-address"
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@gmail.com" 
                className="w-full bg-white border border-[#F3E1C5] rounded-xl py-4 pl-12 pr-4 text-gray-700 placeholder-[#E3CBA3] outline-none focus:ring-2 focus:ring-[#6F3C1E]/20 focus:border-[#6F3C1E] transition-all" 
              />
            </div>
          </div>

          {/* Primary Action Button */}
          <button 
            type="submit"
            className="w-full bg-[#6F3C1E] text-white font-bold py-4 rounded-xl shadow-lg hover:bg-[#5a3118] transition-all transform active:scale-[0.98] text-lg"
          >
            Send Verification Email
          </button>

          {/* Bottom Navigation */}
          <div className="text-center pt-2">
            <p className="text-[#A67C52] text-sm">
              Remember your password? 
              <button type="button" className="text-[#3182CE] hover:underline font-semibold ml-1">
                Sign in
              </button>
            </p>
          </div>

          {/* Divider */}
          <div className="relative flex items-center py-4">
          </div>
        </form>
      </div>
    </div>
  );
};

export default SendResetPassword;