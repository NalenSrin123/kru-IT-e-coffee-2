import { useState } from "react";
import GoogleIcon from "../../assets/icons/GoogleIcon.jsx";

export default function Registerform() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="min-h-screen flex items-start sm:items-center justify-center p-3 sm:p-4 md:p-6 bg-amber-400/20 font-serif">
      {/* Card */}
      <div
        className="relative w-full max-w-3xl rounded-2xl overflow-hidden my-4 sm:my-0
        bg-amber-50/95 backdrop-blur-md
        shadow-[0_20px_60px_rgba(120,70,20,0.25),0_4px_20px_rgba(120,70,20,0.1)]
        border border-amber-300/30"
      >
        {/* Header */}
        <div className="flex justify-between items-center px-5 sm:px-8 md:px-10 pt-5 sm:pt-8 pb-1 sm:pb-2">
          <div className="font-bold tracking-widest text-amber-900 text-base sm:text-lg md:text-xl">
            K<span className="text-amber-700">O</span>FEE
          </div>
          <button className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:bg-amber-100 transition-colors text-lg cursor-pointer">
            ✕
          </button>
        </div>

        <div className="px-5 sm:px-8 md:px-10 pb-7 sm:pb-10 pt-3 sm:pt-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-amber-800 mb-4 sm:mb-5">
            Sign up
          </h1>

          {/* Form Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 md:gap-x-8 gap-y-4">
            {/* Name */}
            <div>
              <label className="block mb-1.5 text-xs text-amber-800">
                Name
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-600/60">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="example"
                  className="w-full rounded-lg pl-9 pr-4 py-3 text-sm text-amber-950 bg-white/60
                    border border-amber-600/30 outline-none transition-all
                    focus:border-amber-800 focus:ring-1 focus:ring-amber-700
                    hover:border-amber-500 placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1.5 text-xs text-amber-800">
                Email
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-600/60">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </span>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full rounded-lg pl-9 pr-4 py-3 text-sm text-amber-950 bg-white/60
                    border border-amber-600/30 outline-none transition-all
                    focus:border-amber-800 focus:ring-1 focus:ring-amber-700
                    hover:border-amber-500 placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Gender */}
            <div>
              <label className="block mb-1.5 text-xs text-amber-800">
                Gender
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-600/60 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                    />
                  </svg>
                </span>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-amber-600/60 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
                <select
                  defaultValue=""
                  className="w-full rounded-lg pl-9 pr-9 py-3 text-sm bg-white/60 text-gray-400
                  border border-amber-600/30 outline-none transition-all appearance-none
                  focus:border-amber-800 focus:ring-1 focus:ring-amber-700
                  hover:border-amber-500"
                >
                  <option value="" disabled>
                    Male / Female
                  </option>
                  <option value="male" className="text-amber-950">
                    Male
                  </option>
                  <option value="female" className="text-amber-950">
                    Female
                  </option>
                  <option value="other" className="text-amber-950">
                    Other
                  </option>
                </select>
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-1.5 text-xs text-amber-800">
                Phone Number
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-600/60">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                </span>
                <input
                  type="tel"
                  placeholder="099 999 999"
                  className="w-full rounded-lg pl-9 pr-4 py-3 text-sm text-amber-950 bg-white/60
                    border border-amber-600/30 outline-none transition-all
                    focus:border-amber-800 focus:ring-1 focus:ring-amber-700
                    hover:border-amber-500 placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block mb-1.5 text-xs text-amber-800">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-600/60">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                    />
                  </svg>
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full rounded-lg pl-9 pr-10 py-3 text-sm text-amber-950 bg-white/60
                    border border-amber-600/30 outline-none transition-all
                    focus:border-amber-800 focus:ring-1 focus:ring-amber-700
                    hover:border-amber-500 placeholder:text-gray-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-amber-600/60 hover:text-amber-800 transition-colors cursor-pointer"
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.8}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.8}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block mb-1.5 text-xs text-amber-800">
                Confirm Password
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-600/60">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                    />
                  </svg>
                </span>
                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full rounded-lg pl-9 pr-10 py-3 text-sm text-amber-950 bg-white/60
                    border border-amber-600/30 outline-none transition-all
                    focus:border-amber-800 focus:ring-1 focus:ring-amber-700
                    hover:border-amber-500 placeholder:text-gray-400"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-amber-600/60 hover:text-amber-800 transition-colors cursor-pointer"
                >
                  {showConfirm ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.8}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.8}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Sign Up Button */}
          <button
            type="button"
            className="w-full mt-6 py-3 sm:py-4 rounded-xl text-white font-semibold text-sm sm:text-base tracking-wide bg-amber-900 cursor-pointer
              shadow-lg hover:opacity-90 active:scale-[0.99] transition-all duration-200"
          >
            Sign up
          </button>

          {/* Login text */}
          <p className="mt-5 text-center text-sm text-gray-700">
            Already have an account?{" "}
            <span className="font-semibold text-blue-500 underline underline-offset-2 cursor-pointer transition-colors">
              Sign in
            </span>
          </p>

          {/* Divider */}
          <div className="flex items-center gap-4 my-4 sm:my-5">
            <div className="flex-1 h-px bg-amber-700/25" />
            <span className="text-xs text-amber-700/80 tracking-widest">
              OR
            </span>
            <div className="flex-1 h-px bg-amber-700/25" />
          </div>

          {/* Google Button */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 py-3 rounded-xl text-sm font-medium
              border border-amber-600/35 bg-white/40 text-amber-900
              hover:bg-amber-50 active:scale-[0.99] transition-all cursor-pointer"
          >
            <GoogleIcon />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
}
