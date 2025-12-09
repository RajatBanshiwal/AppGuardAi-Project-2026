import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Reports() {
  const initialReports = [
    {
      id: 1,
      name: "Banking Pro",
      file: "banking_pro_v2.3.apk",
      date: "2025-10-28 10:30:00",
      score: 85.5,
      level: "High",
      tags: ["Excessive Permissions", "Hidden API Calls", "Data Exfiltration"],
    },
    {
      id: 2,
      name: "Social Connect",
      file: "social_connect_3.1.ipa",
      date: "2025-10-28 09:15:00",
      score: 45.2,
      level: "Medium",
      tags: ["Permission Escalation", "Unsafe Network Calls"],
    },
    {
      id: 3,
      name: "Game Master",
      file: "game_master_1.5.apk",
      date: "2025-10-28 08:00:00",
      score: 12.8,
      level: "Low",
      tags: [],
    },
    {
      id: 4,
      name: "Finance Tracker",
      file: "finance_tracker_2.0.apk",
      date: "2025-10-27 16:45:00",
      score: 94.3,
      level: "Critical",
      tags: ["Code Injection", "Malware Signatures", "Fake Certificate", "Data Theft"],
    },
    {
      id: 7,
      name: "Crypto Wallet",
      file: "crypto_wallet_7.3.apk",
      date: "2025-10-26 09:10:00",
      score: 99.1,
      level: "Critical",
      tags: ["Keylogging", "Data Theft", "Root Detection Bypass"],
    },
  ];

  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Critical", "High", "Medium", "Low"];

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const filteredReports =
    activeFilter === "All"
      ? initialReports
      : initialReports.filter(
          (rep) => rep.level.toLowerCase() === activeFilter.toLowerCase()
        );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50 p-4 sm:p-6 md:p-10 text-blue-700 overflow-x-hidden">
      {/* Heading */}
      <div
        className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8"
        data-aos="fade-down"
      >
        <div>
          <h1 className="text-2xl text-left sm:text-3xl font-semibold text-blue-900">
            Analysis Reports
          </h1>
          <p className="text-gray-600 text-sm">
            View detailed threat analysis of scanned apps.
          </p>
        </div>

        <button className="flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-4 sm:px-5 py-2 rounded-lg shadow-md transition-all duration-300 text-sm sm:text-base">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16m-8-8v16" />
          </svg>
          Export All
        </button>
      </div>

      {/* Filters */}
      <div
        className="bg-white/80 backdrop-blur-md border border-blue-100 shadow-sm p-3 sm:p-4 rounded-2xl mb-8 flex flex-wrap items-center justify-between gap-3"
        data-aos="fade-up"
      >
        {/* Left side filters */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setActiveFilter(item)}
              className={`px-3 sm:px-4 py-2 rounded-lg font-medium text-sm sm:text-base transition-all duration-300 ${
                activeFilter === item
                  ? "bg-blue-700 text-white shadow-lg"
                  : "bg-blue-50 text-blue-700 hover:bg-blue-100"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Right side filter (Last 30 days) */}
        <button className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 text-sm sm:text-base">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2v-7H3v7a2 2 0 002 2z"
            />
          </svg>
          Last 30 days
        </button>
      </div>

      {/* Report Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10">
        {filteredReports.map((rep, i) => (
          <div
            key={rep.id}
            data-aos="zoom-in-up"
            data-aos-delay={i * 100}
            className="bg-white rounded-2xl shadow-md border border-blue-100 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 p-4 sm:p-6"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              {/* Left Section */}
              <div className="flex-1 w-full">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0A9 9 0 1112 3a9 9 0 019 9z"
                      />
                    </svg>
                  </div>

                  <h2 className="text-lg sm:text-xl font-semibold text-blue-900">
                    {rep.name}
                  </h2>

                  <span
                    className={`px-3 py-1 text-xs rounded-full font-semibold text-white ${
                      rep.level === "Critical"
                        ? "bg-red-600"
                        : rep.level === "High"
                        ? "bg-orange-500"
                        : rep.level === "Medium"
                        ? "bg-yellow-500"
                        : "bg-green-600"
                    }`}
                  >
                    {rep.level}
                  </span>
                </div>

                <p className="text-gray-500 text-xs sm:text-sm">{rep.file}</p>
                <p className="text-gray-500 text-xs sm:text-sm mt-1">
                  {rep.date} &nbsp; | &nbsp;
                  <span className="font-semibold text-blue-700">
                    Threat Score: {rep.score}%
                  </span>
                </p>

                {/* Tags */}
                {rep.tags.length > 0 ? (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {rep.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs sm:text-sm rounded-full border border-red-200 text-red-600 bg-red-50 flex items-center gap-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v2m0 4h.01M4.93 19h14.14a2 2 0 001.74-3l-7.07-12a2 2 0 00-3.48 0L3.19 16a2 2 0 001.74 3z"
                          />
                        </svg>
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs sm:text-sm text-gray-400 mt-3 italic">
                    No critical findings detected.
                  </p>
                )}
              </div>

              {/* Right Section (Actions) */}
              <div className="flex w-full sm:w-auto justify-start sm:justify-end gap-3">
                <button className="p-2 sm:p-3 rounded-xl bg-blue-100 text-blue-700 hover:bg-blue-200 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12s3.75-6.75 9.75-6.75S21.75 12 21.75 12s-3.75 6.75-9.75 6.75S2.25 12 2.25 12z"
                    />
                    <circle cx="12" cy="12" r="2.25" />
                  </svg>
                </button>

                <button className="p-2 sm:p-3 rounded-xl bg-green-100 text-green-700 hover:bg-green-200 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
