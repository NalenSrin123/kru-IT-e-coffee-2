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
      <nav className="bg-[#905E42] shadow-md relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center h-16 justify-between">
            {/* Logo */}
            <div className="flex shrink-0">
              <h1 className="text-xl font-bold text-white hover:text-[#EE8542] transition hover:cursor-pointer">
                KOFEE
              </h1>
            </div>

            {/* Desktop Menu - Hidden on Mobile */}
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

            {/* Desktop Right Menu - Hidden on Mobile */}
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
                to="/signin"
                className="bg-[#7D4729] px-4 py-2 text-white rounded hover:bg-[#6B3F23]"
              >
                Sign In
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

        {/* Overlay when menu is open */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
        <div 
          className={`fixed top-0 left-0 h-full w-80 bg-[#7D4C3B] z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Menu Header */}
            <div className="p-6 border-b border-[#9B7B64]">
              <h2 className="text-2xl font-bold text-white">KOFEE</h2>
            </div>

            {/* Menu Items */}
            <div className="flex-1 overflow-y-auto py-6 px-4">
              <div className="flex flex-col space-y-2">
                <NavLink
                  to="/"
                  className={mobileLinkClass}
                  onClick={() => setIsOpen(false)}
                >
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
                    className="lucide lucide-house"
                  >
                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  </svg>
                  <span>HOME</span>
                </NavLink>

                <NavLink
                  to="/menu"
                  className={mobileLinkClass}
                  onClick={() => setIsOpen(false)}
                >
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
                    className="lucide lucide-utensils-crossed"
                  >
                    <path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8" />
                    <path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7" />
                    <path d="m2.1 21.8 6.4-6.3" />
                    <path d="m19 5-7 7" />
                  </svg>
                  <span>MENU</span>
                </NavLink>

                <NavLink
                  to="/service"
                  className={mobileLinkClass}
                  onClick={() => setIsOpen(false)}
                >
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
                    className="lucide lucide-hand-platter"
                  >
                    <path d="M12 3V2" />
                    <path d="m15.4 17.4 3.2-2.8a2 2 0 1 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2l-1.302-1.464A1 1 0 0 0 6.151 19H5" />
                    <path d="M2 14h12a2 2 0 0 1 0 4h-2" />
                    <path d="M4 10h16" />
                    <path d="M5 10a7 7 0 0 1 14 0" />
                    <path d="M5 14v6a1 1 0 0 1-1 1H2" />
                  </svg>
                  <span>SERVICES</span>
                </NavLink>

                <NavLink
                  to="/about"
                  className={mobileLinkClass}
                  onClick={() => setIsOpen(false)}
                >
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
                    className="lucide lucide-info"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                  </svg>
                  <span>ABOUT</span>
                </NavLink>

                <NavLink
                  to="/contact"
                  className={mobileLinkClass}
                  onClick={() => setIsOpen(false)}
                >
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
                    className="lucide lucide-mail"
                  >
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                  </svg>
                  <span>CONTACT</span>
                </NavLink>
              </div>
              
              <div className="flex flex-col space-y-2 pt-6 mt-6 border-t border-[#9B7B64]">
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
        </div>
      </nav>
    );
  };

  export default Navbar;