import React from 'react'

const Reset_password = () => {
  return (
    <div>
      {/* Container */}
        <div class="min-h-screen bg-[#f3e1c5] flex items-center justify-center p-4 font-sans">
          <div class="w-full max-w-2xl bg-white rounded-4xl shadow-xl overflow-hidden">
            <div class="px-8 py-4 border-b border-gray-100">
              <span class="text-sm font-bold text-gray-800 uppercase tracking-tight">Sign in with Google</span>
            </div>

            <div class="p-8 md:p-12 grid md:grid-cols-2 gap-10 ">
              <div>
                <h1 class="text-3xl font-bold text-gray-900 mb-2">Reset Password</h1>
                <p class="text-gray-400 text-sm leading-relaxed">
                  Please enter your new password to secure your account.
                </p>
              </div>

              <div class="space-y-6">
                <div class="relative">
                  <label class="absolute -top-3 left-4 bg-white px-2 text-xs font-semibold text-gray-300 z-10">New Password</label>
                  <div class="border-2 border-[#905E42] rounded-2xl px-4 py-3">
                    <input type="password" placeholder="••••••••" class="w-full bg-transparent outline-none text-gray-700 placeholder-gray-300" />
                  </div>
                </div>

                <div class="relative">
                  <label class="absolute -top-3 left-4 bg-white px-2 text-xs font-semibold text-gray-300 z-10">Confirm Password</label>
                  <div class="border-2 border-[#905E42] rounded-2xl px-4 py-3">
                    <input type="password" placeholder="••••••••" class="w-full bg-transparent outline-none text-gray-700 placeholder-gray-300" />
                  </div>
                </div>

                <button class="w-full bg-[#905E42] text-white font-bold py-4 rounded-3xl shadow-lg hover:bg-[#9c765a] transition-all transform active:scale-[0.98]">
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Reset_password
