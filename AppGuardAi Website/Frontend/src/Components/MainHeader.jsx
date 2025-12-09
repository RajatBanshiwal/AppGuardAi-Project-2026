import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../assets/logo.webp";

const MainHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-out",
      once: true,
    });
  }, []);

  // ✅ Navigation items
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/aboutus" },
    { name: "Features", path: "/features" },
    { name: "Download", path: "/download" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-white sticky top-0 z-50 backdrop-blur-md bg-opacity-95 border-b border-gray-100">
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center transition-all"
        data-aos="fade-down"
      >
        {/* ---------- LOGO ---------- */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="AppGuardAI Logo"
            className="w-9 h-9 object-contain rounded-[12px] transition-transform duration-300 hover:scale-105"
          />
          <h1 className="text-lg sm:text-xl font-semibold text-gray-800 tracking-tight">
            <span className="text-blue-600">AppGuard</span>AI
          </h1>
        </Link>

        {/* ---------- DESKTOP NAVIGATION ---------- */}
        <ul className="hidden lg:flex items-center gap-8 text-sm xl:text-base font-medium text-gray-700">
          {navLinks.map(({ name, path }) => (
            <li key={name}>
              <Link
                to={path}
                className="hover:text-blue-600 transition-colors duration-200"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* ---------- RIGHT BUTTONS (DESKTOP) ---------- */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/login"
            className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-50 transition duration-300"
          >
            Log in
          </Link>
          <Link
            to="/get-started"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition duration-300"
          >
            Get Started
          </Link>
        </div>

        {/* ---------- MOBILE MENU BUTTON ---------- */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-gray-700 hover:text-blue-600 focus:outline-none transition"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* ---------- MOBILE MENU ---------- */}
      <div
        className={`lg:hidden fixed top-16 left-0 w-full bg-white border-t border-gray-100 shadow-lg transition-all duration-300 ease-in-out ${
          menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-start px-6 py-4 text-sm sm:text-base font-medium text-gray-700 space-y-4">
          {navLinks.map(({ name, path }) => (
            <li key={name} className="w-full">
              <Link
                to={path}
                onClick={() => setMenuOpen(false)}
                className="block w-full py-1 hover:text-blue-600 transition-colors duration-200"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="px-6 pb-6 mt-3 flex flex-col sm:flex-row sm:justify-start gap-3">
          <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
            className=" text-blue-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-50 transition duration-300 text-center sm:w-auto w-full"
          >
            Log in
          </Link>
          <Link
            to="/get-started"
            onClick={() => setMenuOpen(false)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium text-center transition duration-300 sm:w-auto w-full"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
