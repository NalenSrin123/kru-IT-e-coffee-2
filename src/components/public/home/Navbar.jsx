import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-[#EE8542] font-semibold"
      : "text-white hover:text-[#EE8542] transition";

  const mobileLinkClass = ({ isActive }) =>
    isActive
      ? "flex items-center space-x-3 text-[#EE8542] font-semibold transition p-2 rounded-lg bg-[#6B3F23]"
      : "flex items-center space-x-3 text-white hover:text-[#EE8542] transition p-2 rounded-lg hover:bg-[#6B3F23]";

  return (
    <nav className="bg-[#905E42] shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center h-16 justify-between">
          {/* Logo */}
          <div className="flex shrink-0">
            <h1 className="text-xl font-bold text-white hover:text-[#EE8542] transition cursor-pointer">
              KOFEE
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center space-x-6">
            <NavLink to="/" className={linkClass}>
              HOME
            </NavLink>
            <NavLink to="/menu" className={linkClass}>
              MENU
            </NavLink>
            <NavLink to="/service" className={linkClass}>
              SERVICES
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              ABOUT
            </NavLink>
            <NavLink to="/contact" className={linkClass}>
              CONTACT
            </NavLink>
          </div>

          {/* Desktop Right Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink to="/cart" className={`${linkClass} flex items-center`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white hover:text-[#EE8542]"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
            </NavLink>
            <NavLink
              to="/login"
              className="bg-[#7D4729] px-4 py-2 text-white rounded hover:bg-[#6B3F23]"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="bg-[#7D4729] px-4 py-2 text-white rounded hover:bg-[#6B3F23]"
            >
              Sign Up
            </NavLink>
          </div>

          {/* Mobile Menu Button and Cart */}
          <div className="flex md:hidden items-center space-x-3">
            <NavLink to="/cart" className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white hover:text-[#EE8542]"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
            </NavLink>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none z-50 relative"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />

          {/* Side Drawer */}
          <div
            className={`fixed top-0 left-0 h-full w-80 bg-[#7D4C3B] z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="p-6 border-b border-[#9B7B64]">
                <h2 className="text-2xl font-bold text-white">KOFEE</h2>
              </div>

              {/* Menu Items */}
              <div className="flex-1 overflow-y-auto py-6 px-4 flex flex-col space-y-2">
                <NavLink
                  to="/"
                  className={mobileLinkClass}
                  onClick={() => setIsOpen(false)}
                >
                  <span>HOME</span>
                </NavLink>
                <NavLink
                  to="/menu"
                  className={mobileLinkClass}
                  onClick={() => setIsOpen(false)}
                >
                  <span>MENU</span>
                </NavLink>
                <NavLink
                  to="/service"
                  className={mobileLinkClass}
                  onClick={() => setIsOpen(false)}
                >
                  <span>SERVICES</span>
                </NavLink>
                <NavLink
                  to="/about"
                  className={mobileLinkClass}
                  onClick={() => setIsOpen(false)}
                >
                  <span>ABOUT</span>
                </NavLink>
                <NavLink
                  to="/contact"
                  className={mobileLinkClass}
                  onClick={() => setIsOpen(false)}
                >
                  <span>CONTACT</span>
                </NavLink>
              </div>

              {/* Mobile Login / SignIn */}
              <div className="flex flex-col space-y-2 pt-6 mt-6 border-t border-[#9B7B64] px-4">
                <NavLink
                  to="/login"
                  className="bg-[#7D4729] px-4 py-3 text-white rounded-lg hover:bg-[#6B3F23] text-center font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </NavLink>
                <NavLink
                  to="/signin"
                  className="bg-[#7D4729] px-4 py-3 text-white rounded-lg hover:bg-[#6B3F23] text-center font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Sign In
                </NavLink>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;