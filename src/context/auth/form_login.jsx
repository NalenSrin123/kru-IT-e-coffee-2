import { useState } from "react";
import { Link } from "react-router-dom";
export default function CoffeeLogin() {
  const [show, setShow] = useState(false);

  return (
    
 <div className="min-h-screen flex items-center justify-center bg-amber-400/20 font-serif shadow-[0_20px_60px_rgba(120,70,20,0.25),0_4px_20px_rgba(120,70,20,0.1)]border border-amber-300/30">
      <div className="w-full max-w-3xl bg-transparent sm:rounded-2xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-2">
        {/* LEFT */}
        <div className="p-6 sm:p-10 flex flex-col justify-center relative bg-[#f9f7f3]  ">
          <button className="absolute right-4 top-4 sm:right-6 sm:top-6 text-gray-600 hover:text-black text-xl font-bold">
            ×
          </button>

          <h1 className="text-2xl sm:text-3xl font-bold tracking-wide text-[#6B4226] mb-1 sm:mb-2">E-Coffee</h1>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Login</h2>

          {/* SIGNUP TEXT */}
          <p className="text-xs sm:text-sm mb-4 sm:mb-6">
            Don’t have an account?{' '}
            <span className="text-blue-600 cursor-pointer hover:underline">
              <Link to="/register">Create Now</Link>
            </span>
          </p>

          {/* EMAIL */}

          <label className="text-xs sm:text-sm mb-1">E-mail</label>
          <input
            type="email"
            placeholder="example@gmail.com"
            className="mb-3 sm:mb-4 px-3 sm:px-4 py-2 rounded-lg border border-gray-400 bg-transparent outline-none focus:ring-2 focus:ring-[#6B4226] text-sm"
          />

          {/* PASSWORD */}
          <label className="text-xs sm:text-sm mb-1">Password</label>
          <div className="relative mb-3 sm:mb-4">
            <input
              type={show ? "text" : "password"}
              placeholder="Enter password"
              className="w-full px-3 sm:px-4 py-2 rounded-lg border border-gray-400 bg-transparent outline-none focus:ring-2 focus:ring-[#6B4226] text-sm"
            />

            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute right-3 top-2.5"
            >
              {show ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9-7-9-7a18.735 18.735 0 012.442-3.362M6.223 6.223A9.956 9.956 0 0112 5c5 0 9 7 9 7a18.733 18.733 0 01-4.293 5.774M6.223 6.223L3 3m3.223 3.223l11.314 11.314" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </button>
          </div>

          {/* OPTIONS */}
          <div className="flex items-center justify-between text-xs sm:text-sm mb-4 sm:mb-6">
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Remember me
            </label>
            <span className="text-blue-600 cursor-pointer hover:underline">
              <Link to="/send-reset-password">Forgot Password?</Link>
            </span>
          </div>

          {/* LOGIN BUTTON */}
          
          <button className="bg-[#6B4226] text-white py-2 rounded-xl font-medium hover:opacity-90 transition mb-4 sm:mb-6 text-sm sm:text-base">
            <Link to='/'>Login</Link>
          </button>

          {/* DIVIDER */}
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="flex-1 h-px bg-gray-400" />
            <span className="text-xs sm:text-sm">OR</span>
            <div className="flex-1 h-px bg-gray-400" />
          </div>

          {/* SOCIAL BUTTONS */}
          <div className="space-y-2 sm:space-y-3">
            <button className="w-full border rounded-xl py-2 flex items-center justify-center gap-3 hover:bg-white/40 text-sm">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-4 sm:w-5" />
              Continue with Google
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden md:block relative">
          <img
            src="https://i.pinimg.com/1200x/6f/ec/7d/6fec7dc6f451d9047c140df88536019e.jpg"
            alt="coffee"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
       
  );
}