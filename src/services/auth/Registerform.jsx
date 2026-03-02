import { useState } from "react";
import { Link } from "react-router-dom";
import GoogleIcon from "../../assets/icons/GoogleIcon.jsx";
import EyeIcon from "../../assets/icons/EyeIcon.jsx";

const InputField = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
}) => (
  <div>
    <label className="block mb-1.5 text-xs text-amber-800">{label}</label>
    <input
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      className="w-full rounded-lg px-4 py-3 text-sm text-amber-950 bg-white/60
        border border-amber-600/30 outline-none transition-all
        focus:border-amber-800 focus:ring-1 focus:ring-amber-700
        hover:border-amber-500 placeholder:text-gray-400"
    />
  </div>
);

const PasswordField = ({ label, name, value, onChange, show, onToggle }) => (
  <div>
    <label className="block mb-1.5 text-xs text-amber-800">{label}</label>
    <div className="relative">
      <input
        name={name}
        value={value}
        onChange={onChange}
        type={show ? "text" : "password"}
        className="w-full rounded-lg px-4 py-3 pr-10 text-sm text-amber-950 bg-white/60
          border border-amber-600/30 outline-none transition-all
          focus:border-amber-800 focus:ring-1 focus:ring-amber-700
          hover:border-amber-500 placeholder:text-gray-400"
      />
      <button
        type="button"
        onClick={onToggle}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-amber-700 opacity-60 hover:opacity-100 transition-opacity"
      >
        <EyeIcon open={show} />
      </button>
    </div>
  </div>
);

export default function Registerform() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [remember, setRemember] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    gender: "",
    phone: "",
    password: "",
    confirm: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="min-h-screen flex items-start sm:items-center justify-center p-3 sm:p-4 md:p-6 bg-gradient-to-br from-amber-100 via-amber-200 to-amber-300 font-serif">
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
          <button className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:bg-amber-100 transition-colors text-lg">
            ✕
          </button>
        </div>

        <div className="px-5 sm:px-8 md:px-10 pb-7 sm:pb-10 pt-3 sm:pt-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-amber-950 mb-4 sm:mb-5">
            Sign up
          </h1>

          {/* Form Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 md:gap-x-8 gap-y-4">
            <InputField
              label="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="example"
            />
            <InputField
              label="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              type="email"
            />

            {/* Gender */}
            <div>
              <label className="block mb-1.5 text-xs text-amber-800">
                Gender
              </label>
              <select
                name="gender"
                value={form.gender}
                onChange={handleChange}
                className="w-full rounded-lg px-4 py-3 text-sm bg-white/60
                  border border-amber-600/30 outline-none transition-all appearance-none
                  focus:border-amber-800 focus:ring-1 focus:ring-amber-700
                  hover:border-amber-500
                  text-gray-400 [&:not([value=''])]:text-amber-950"
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

            <InputField
              label="Phone Number"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="099 999 999"
              type="tel"
            />

            <PasswordField
              label="Password"
              name="password"
              value={form.password}
              onChange={handleChange}
              show={showPassword}
              onToggle={() => setShowPassword(!showPassword)}
            />

            <PasswordField
              label="Confirm Password"
              name="confirm"
              value={form.confirm}
              onChange={handleChange}
              show={showConfirm}
              onToggle={() => setShowConfirm(!showConfirm)}
            />
          </div>

          {/* Remember me & Forgot Password */}
          <div className="flex items-center justify-between sm:justify-end sm:gap-6 mt-4 sm:mt-5 mb-5">
            <label
              className="flex items-center gap-2 cursor-pointer select-none"
              onClick={() => setRemember(!remember)}
            >
              <div
                className={`w-4 h-4 rounded flex items-center justify-center flex-shrink-0 transition-all border-2
                ${remember ? "bg-amber-900 border-amber-900" : "bg-transparent border-amber-500"}`}
              >
                {remember && (
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M1.5 5L4 7.5L8.5 2"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
              <span className="text-xs text-amber-800">Remember me</span>
            </label>
            <button
              type="button"
              className="text-xs font-semibold underline underline-offset-2 text-amber-900 flex-shrink-0 whitespace-nowrap"
            >
              Forgot Password?
            </button>
          </div>

          {/* Sign Up Button */}
          <button
            type="button"
            className="w-full py-3 cursor-pointer sm:py-4 rounded-xl text-white font-semibold text-sm sm:text-base tracking-wide
              bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700
              shadow-lg hover:opacity-90 active:scale-[0.99] transition-all duration-200"
          >
            Sign up
          </button>

          {/* Login link */}
          <p className="mt-5 text-center text-sm text-amber-800">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-amber-900 underline underline-offset-2 hover:text-amber-700 transition-colors"
            >
              Sign in
            </Link>
          </p>

          {/* Divider */}
          <div className="flex items-center gap-4 my-4 sm:my-5">
            <div className="flex-1 h-px bg-amber-700/25" />
            <span className="text-xs text-amber-700/80 tracking-widest">
              OR
            </span>
            <div className="flex-1 h-px bg-amber-700/25" />
          </div>

          {/* Social Buttons */}
          <div className="flex flex-col md:flex-row gap-3">
            <button
              type="button"
              className="flex-1 flex items-center justify-center gap-3 py-3 rounded-xl text-sm font-medium
                border border-amber-600/35 bg-white/40 text-amber-900
                hover:bg-amber-50 active:scale-[0.99] transition-all"
            >
              <GoogleIcon />
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
