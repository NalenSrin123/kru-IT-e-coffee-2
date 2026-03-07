import React from 'react'

function Reset_Password_In_Email() {
  return (
     <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center pt-0 font-sans">
      <div className="w-2xl h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-400" />
      <div className="mt-4 mb-2">
      </div>
      <div className="bg-white w-full max-w-2xl px-12 py-10 shadow-sm">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Reset Your Password</h1>

        <p className="text-gray-800 text-base mb-2">Hi Jane,</p>
        <p className="text-gray-800 text-base leading-relaxed mb-8">
          Tap the button below to reset your customer account password.<br />
          If you didn't request a new password, you can safely delete this email.
        </p>

        <div className="flex justify-center mb-10">
          <a
            href="#"
            className="bg-indigo-500 hover:bg-indigo-600 text-white text-base font-normal px-24 py-4 rounded transition-colors duration-200"
            style={{ minWidth: 340, textAlign: "center", textDecoration: "none", display: "inline-block" }}
          >
            Reset Password
          </a>
        </div>

        <p className="text-gray-500 text-sm mb-1">If that doesn't work, copy and paste the following link in your browser:</p>
        <p className="text-gray-900 font-bold text-base mt-8">The Spry Team.</p>
      </div>

      <div className="w-full max-w-2xl h-px bg-gradient-to-r from-indigo-300 via-blue-200 to-indigo-300" />
      <div className="w-full max-w-2xl bg-white px-12 py-6">
        <p className="text-gray-400 text-xs leading-relaxed">
          You received this email because we received a request for [type_of_action] for your account. If you didn't request [type_of_action] you can safely delete this email.
        </p>
      </div>

    </div>
  )
}

export default Reset_Password_In_Email