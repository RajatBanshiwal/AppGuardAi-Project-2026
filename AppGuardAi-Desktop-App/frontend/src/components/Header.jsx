import React, { useEffect, useState } from "react";
import { UserCircle, Menu } from "lucide-react";
import logo from "../assets/logo.webp";

const Header = ({ toggleSidebar }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 5);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 bg-white/90 backdrop-blur-md border-b transition-all duration-300 ${
        isScrolled
          ? "shadow-md border-blue-100"
          : "shadow-sm border-slate-200"
      } flex items-center justify-between px-4 md:px-6 py-3 h-16`}
    >
      {/* 🔹 Left: Logo + Name */}
      <div className="flex items-center space-x-3 min-w-0">
        {/* Mobile Menu */}
        <button
          onClick={toggleSidebar}
          className="md:hidden p-2 rounded-md hover:bg-blue-50 transition"
        >
          <Menu className="w-5 h-5 text-blue-600" />
        </button>

        {/* Logo */}
        <img
          src={logo}
          alt="AppGuard AI Logo"
          className="w-8 h-8 rounded-md object-contain"
        />

        {/* Name + Tag */}
        <div className="flex flex-wrap items-center gap-1">
          <h1 className="text-blue-700 font-semibold text-base sm:text-lg whitespace-nowrap">
            AppGuard<span className="text-blue-600">AI</span>
          </h1>
          <span className="hidden sm:inline text-[11px] sm:text-sm text-black-700/80 font-medium whitespace-nowrap">
            | Premium – Individual
          </span>
        </div>
      </div>

      {/* 🔹 Right: Account + Info */}
      <div className="flex items-center space-x-3 sm:space-x-4">
        {/* Subscription Info (hidden on mobile) */}
        <div className="hidden sm:flex bg-blue-50 text-blue-800 text-xs sm:text-sm px-3 py-1.5 rounded-md items-center gap-1 font-medium border border-blue-100">
          <span>22 days left</span>
          <button className="text-blue-600 hover:underline ml-1 transition">
            Upgrade
          </button>
        </div>

        {/* Account Button */}
        <button className="flex items-center text-blue-700 text-sm hover:text-blue-900 transition">
          <UserCircle className="w-5 h-5 mr-1" />
          <span className="hidden sm:inline text-sm font-medium">
            Account
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
