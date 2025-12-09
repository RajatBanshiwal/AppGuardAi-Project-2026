import React, { useEffect, useState } from "react";
import logo from "../assets/logo.webp";

const Loader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // ⏱ Total 7s (logo anim + text fade + hold + fadeout)
    const timer = setTimeout(() => {
      setVisible(false);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  return (
    visible && (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-50 z-50 transition-opacity duration-1000 animate-fadeOutDelay">
        {/* 🔹 Logo */}
        <img
          src={logo}
          alt="AppGuardAi Logo"
          className="ios-logo w-28 h-28 sm:w-32 sm:h-32 object-contain rounded-2xl mb-4"
        />

        {/* 🔹 Text */}
        <h1 className="ios-text text-2xl sm:text-3xl font-semibold text-gray-800 tracking-wide">
          AppGuard<span className="text-blue-600">Ai</span>
        </h1>
      </div>
    )
  );
};

export default Loader;
