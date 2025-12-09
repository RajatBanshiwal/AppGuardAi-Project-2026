import React from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Info,
  ShieldCheck,
  BarChart,
  Settings,
  LogOut,
  Bell,
  X,
  Power,
} from "lucide-react";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const menuItems = [
    { name: "Home", path: "/", icon: <Home className="w-5 h-5" /> },
    { name: "About", path: "/about", icon: <Info className="w-5 h-5" /> },
    { name: "App Scan", path: "/features/scan", icon: <ShieldCheck className="w-5 h-5" /> },
    { name: "Reports", path: "/features/reports", icon: <BarChart className="w-5 h-5" /> },
    { name: "Threat Intelligence", path: "/features/threat-intelligence", icon: <BarChart className="w-5 h-5" /> },
    { name: "Alerts", path: "/features/alerts", icon: <Bell className="w-5 h-5" /> },
    { name: "Analytics", path: "/analytics", icon: <BarChart className="w-5 h-5" /> },
    { name: "Ml Models", path: "/ml-models", icon: <BarChart className="w-5 h-5" /> },
    { name: "Settings", path: "/settings", icon: <Settings className="w-5 h-5" /> },
    { name: "Exit", action: () => window.electron.closeApp(), icon: <Power className="w-5 h-5" /> },
  ];

  return (
    <>
      {/* 🔹 Overlay for Mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-[1px] z-[39] md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* 🔹 Sidebar */}
      <aside
        className={`fixed left-0 top-16
          h-[calc(100vh-64px)]
          w-64 md:w-56 lg:w-64
          bg-white/80 backdrop-blur-xl border-r border-white/30 shadow-lg
          z-[40] flex flex-col transition-transform duration-500 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        {/* 🔹 Cross Button (Visible on Mobile) */}
        <div className="absolute top-3 right-3 md:hidden z-[41]">
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-2 rounded-md bg-white/80 hover:bg-white shadow-sm"
          >
            <X className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {/* 🔹 Menu List */}
        <nav className="flex-1 overflow-y-auto px-3 mt-12 md:mt-3 hide-scrollbar">
          <ul className="space-y-2">
            {menuItems.map((item, i) => (
              <li key={i}>
                {item.path ? (
                  <Link
                    to={item.path}
                    onClick={() => setSidebarOpen(false)}
                    className="flex items-center gap-3 px-3 py-2 rounded-xl 
                               text-gray-700 hover:text-blue-700 hover:bg-white/60 
                               transition-all duration-300 hover:scale-[1.06] active:scale-[0.98]"
                  >
                    <div className="p-2 bg-white/70 rounded-lg shadow-sm">
                      {item.icon}
                    </div>
                    <span className="font-medium text-sm">{item.name}</span>
                  </Link>
                ) : (
                  <button
                    onClick={item.action}
                    className="flex items-center gap-3 w-full text-left px-3 py-2 
                               rounded-xl text-gray-700 hover:text-red-600 hover:bg-red-50/70 
                               transition-all duration-300 hover:scale-[1.06] active:scale-[0.98]"
                  >
                    <div className="p-2 bg-white/70 rounded-lg shadow-sm">
                      {item.icon}
                    </div>
                    <span className="font-medium text-m">{item.name}</span>
                  </button>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* 🔹 Footer */}
        <footer className="mt-auto py-4 px-4 text-center text-[11px] text-gray-500">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-gray-700">AppGuardAI</span>
          <br />
          Developed by{" "}
          <span className="text-blue-600 font-medium">Rajat Banshiwal</span>
          <br />
          GECA | AI • ML • Cybersecurity
        </footer>

        {/* 🔹 Hide Scrollbar */}
        <style>{`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </aside>
    </>
  );
}
