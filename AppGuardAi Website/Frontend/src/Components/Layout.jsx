// 🔷 File: src/Components/Layout.jsx
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";

const Layout = () => {
  const location = useLocation();

  return (
    <div className="overflow-x-hidden">
      {/* 🔹 Header Section */}
      <MainHeader />

      {/* 🔹 Main Content Area */}
      <main className="max-w-[1560px]">
        <Outlet />
      </main>

      {/* 🔹 Footer Section */}
      <MainFooter />
    </div>
  );
};

export default Layout;
