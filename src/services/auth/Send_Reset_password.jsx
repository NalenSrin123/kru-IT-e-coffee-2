import React from 'react';

const Send_Reset_password = () => {
  return (
    <div className="min-h-screen bg-[#FDF5E6] flex items-center justify-center p-6 font-'DM_Sans',_sans-serif">
      {/* Container matches the Sign-up card curvature and color */}
      <div className="w-full max-w-135 bg-[#FFFBF0] rounded-2xl shadow-sm border border-[#F3E1C5] p-10 md:p-14 relative">
        
        {/* Top Right Close Icon */}
        <button className="absolute top-8 right-8 text-[#C4A484] hover:text-[#6F3C1E] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Branding */}
        <div className="mb-8">
          <h2 className="text-[#6F3C1E] font-bold text-lg tracking-[0.2em] mb-4">KOFEE</h2>
          <h1 className="text-[#6F3C1E] text-4xl font-serif font-extrabold tracking-tight">Forgot Password</h1>
        </div>

        {/* Form Description */}
        <p className="text-[#A67C52] text-sm mb-10 leading-relaxed max-w-[90%]">
          Enter your email address below and we'll send you a link to reset your password and
          get you back to your account.
        </p>

        <form className="space-y-8">
          {/* Email Input - Styled exactly like the "Name/Email" fields in your image */}
          <div className="space-y-2">
            <label className="text-[#6F3C1E] text-xs font-semibold font-DM_Sans ml-1 uppercase tracking-wider"> &nbsp; Email Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#E3CBA3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <input 
                type="email" 
                placeholder="example@gmail.com" 
                className="w-full bg-white border border-[#F3E1C5] rounded-xl py-4 pl-12 pr-4 text-gray-700 placeholder-[#E3CBA3] outline-none focus:ring-1 focus:ring-[#6F3C1E] transition-all" 
              />
            </div>
          </div>

          {/* Primary Action Button */}
          <button className="w-full bg-[#6F3C1E] text-white font-bold py-4 rounded-xl shadow-lg hover:bg-[#5a3118] transition-all transform active:scale-[0.98] text-lg">
            Send Verification Email
          </button>

          {/* Bottom Navigation */}
          <div className="text-center pt-2">
            <p className="text-[#A67C52] text-sm">
              Remember your password? <button className="text-[#3182CE] hover:underline font-semibold ml-1">Sign in</button>
            </p>
          </div>

          {/* Divider style from original form */}
          <div className="relative flex items-center py-4">
            <div className="grow border-t border-[#F3E1C5]"></div>
            <span className="shrink mx-4 text-[#E3CBA3] text-[10px] font-bold tracking-widest">OR</span>
            <div className="grow border-t border-[#F3E1C5]"></div>
          </div>

          {/* Secondary Action */}
          <button className="w-full bg-white border border-[#F3E1C5] text-[#6F3C1E] font-bold py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 48 48">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.64 24.55c0-1.65-.15-3.23-.42-4.75H24v9h12.75c-.55 2.87-2.18 5.3-4.63 6.91l7.41 5.74c4.34-4 6.85-9.9 6.85-16.9z"/><path fill="#FBBC05" d="M10.54 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24s.92 7.54 2.56 10.78l7.98-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.41-5.74c-2.11 1.41-4.8 2.25-8.48 2.25-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
            </svg>
            Continue with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Send_Reset_password;