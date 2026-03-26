import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function CoffeeLogin() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

 const handleLogin = async (e) => {
  if (e) e.preventDefault();
  try {
    const res = await axios.post(
      "https://kru-it-e-coffee-intern-main-i74iel.laravel.cloud/api/login",
      { email, password },
      { headers: { Accept: "application/json" } }
    );

    console.log("Login Response:", res.data);

    if (res.data.status === "success") {
      
     
      const token = res.data.data.token; 
      localStorage.setItem("token", token);

      alert("Login success!");
      
     
      navigate("/", { replace: true });
      
    } else {
      alert(res.data.message || "Login failed");
    }
  } catch (error) {
    console.error("Error logic:", error);
    alert("Something went wrong!");
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-900 p-4 sm:p-6">
      <div className="w-full max-w-6xl bg-transparent sm:rounded-2xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-2">
        
        {/* LEFT SECTION (Form) */}
        <div className="bg-[#E8D3A8] p-6 sm:p-10 flex flex-col justify-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#6B4226] mb-2">KOFEE</h1>
          <h2 className="text-xl sm:text-2xl font-semibold mb-6">Login</h2>

          <p className="text-sm mb-6">
            Don’t have an account?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              Create Now
            </Link>
          </p>

          <form onSubmit={handleLogin} className="flex flex-col">
            {/* EMAIL */}
            <label className="text-sm mb-1 font-medium">E-mail</label>
            <input
              type="email"
              required
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-4 px-4 py-2 rounded-lg border border-gray-400 bg-transparent outline-none focus:ring-2 focus:ring-[#6B4226]"
            />

            {/* PASSWORD */}
            <label className="text-sm mb-1 font-medium">Password</label>
            <div className="relative mb-4">
              <input
                type={show ? "text" : "password"}
                required
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-400 bg-transparent outline-none focus:ring-2 focus:ring-[#6B4226]"
              />
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute right-3 top-2 text-sm font-semibold text-gray-600"
              >
                {show ? "Hide" : "Show"}
              </button>
            </div>

            {/* OPTIONS */}
            <div className="flex items-center justify-between text-sm mb-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-[#6B4226]" /> Remember me
              </label>
              {/* i delete university */}
              <Link to="/send-reset-password"  className="text-blue-600 hover:underline">
                Forgot Password?
              </Link>
            </div>

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className={`bg-[#6B4226] text-white py-2 rounded-xl font-medium transition mb-6 ${
                loading ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"
              }`}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>

        {/* RIGHT SECTION (Image) */}
        <div className="hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
            alt="coffee"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </div>
  );
}