import React from "react";

export default function ThreatIntelligence() {
  return (
    <div className="p-4 md:p-10 bg-gradient-to-b from-white to-sky-50 min-h-screen text-blue-900">

      {/* === PAGE HEADER === */}
      <header className="mb-8 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl pb-2 font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          Threat Intelligence
        </h1>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Real-time AI-driven security insights and live threat monitoring
        </p>
      </header>

      {/* === TOP STATS === */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-10">
        {[
          { label: "Active Threats", value: "1,247", change: "+23", color: "from-blue-500 to-indigo-600", trend: "▲" },
          { label: "Indicators of Compromise", value: "3,582", change: "+156", color: "from-purple-500 to-violet-600", trend: "▲" },
          { label: "Known Malware Families", value: "489", change: "+12", color: "from-teal-500 to-cyan-600", trend: "▲" },
        ].map((card, i) => (
          <div
            key={i}
            className={`bg-gradient-to-r ${card.color} text-white p-5 rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1`}
          >
            <p className="text-xs md:text-sm uppercase tracking-wide opacity-90">{card.label}</p>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">{card.value}</h2>
            <p className="text-xs md:text-sm mt-1 flex items-center gap-1 text-white/90">
              <span>{card.trend}</span> {card.change} since last scan
            </p>
          </div>
        ))}
      </div>

      {/* === ANALYTICS SECTION === */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">

        {/* TOP THREAT CATEGORIES */}
        <div className="bg-white rounded-2xl shadow-md border border-blue-100 p-5 hover:shadow-lg transition">
          <h2 className="text-lg font-semibold text-blue-700 mb-4 text-center md:text-left">
            Top Threat Categories
          </h2>
          {[
            { label: "Banking Trojans", count: 342, color: "bg-red-500" },
            { label: "Spyware", count: 289, color: "bg-orange-500" },
            { label: "Adware", count: 234, color: "bg-yellow-500" },
            { label: "Ransomware", count: 187, color: "bg-blue-500" },
            { label: "Fake Apps", count: 195, color: "bg-teal-500" },
          ].map((item, i) => (
            <div key={i} className="mb-5">
              <div className="flex justify-between text-xs md:text-sm mb-1 text-gray-700">
                <span>{item.label}</span>
                <span>{item.count} detections</span>
              </div>
              <div className="h-2 w-full bg-blue-100 rounded-full overflow-hidden">
                <div
                  className={`h-full ${item.color} rounded-full`}
                  style={{ width: `${(item.count / 400) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* DETECTION METHODS */}
        <div className="bg-white rounded-2xl shadow-md border border-blue-100 p-5 hover:shadow-lg transition">
          <h2 className="text-lg font-semibold text-blue-700 mb-4 flex items-center justify-center md:justify-start gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0A9 9 0 1112 3a9 9 0 019 9z" />
            </svg>
            Detection Methods
          </h2>
          {[
            { label: "Signature-Based Detection", percent: "94.2%" },
            { label: "ML Pattern Recognition", percent: "98.7%" },
            { label: "Behavioral Analysis", percent: "91.5%" },
            { label: "Heuristic Analysis", percent: "87.3%" },
          ].map((method, i) => (
            <div key={i} className="mb-5">
              <div className="flex justify-between text-xs md:text-sm text-gray-700 mb-1">
                <span>{method.label}</span>
                <span className="text-green-500">{method.percent}</span>
              </div>
              <div className="h-2 bg-blue-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-500 rounded-full"
                  style={{ width: method.percent }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* === LIVE THREAT FEED === */}
      <div className="bg-white rounded-2xl shadow-md border border-blue-100 p-5 hover:shadow-lg transition">
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-6 gap-2">
          <h2 className="text-lg font-semibold text-blue-700 text-center sm:text-left">
            Live Threat Feed
          </h2>
          <div className="flex justify-center sm:justify-end items-center gap-2 text-green-500 text-sm">
            <span className="h-2 w-2 bg-green-500 rounded-full"></span> Live
          </div>
        </div>

        {/* THREAT LIST */}
        <div className="space-y-4">
          {[
            {
              name: "Fake PayPal Clone",
              severity: "critical",
              type: "Banking Trojan",
              desc: "Detected credential stealing activity",
              time: "Just now",
            },
            {
              name: "Chat Monitor Pro",
              severity: "high",
              type: "Spyware",
              desc: "Unauthorized data collection detected",
              time: "2 min ago",
            },
            {
              name: "Speed Booster",
              severity: "medium",
              type: "Adware",
              desc: "Aggressive ad injection found",
              time: "5 min ago",
            },
          ].map((feed, i) => (
            <div
              key={i}
              className="p-4 border border-blue-100 rounded-xl bg-gradient-to-r from-white to-blue-50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 hover:shadow-md transition"
            >
              {/* LEFT SIDE - DETAILS */}
              <div className="flex items-start gap-3">
                {/* ICON */}
                <div
                  className={`p-2 rounded-full flex items-center justify-center ${
                    feed.severity === "critical"
                      ? "bg-red-100 text-red-600"
                      : feed.severity === "high"
                      ? "bg-orange-100 text-orange-600"
                      : "bg-yellow-100 text-yellow-600"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v2m0 4h.01M4.93 19h14.14a2 2 0 001.74-3l-7.07-12a2 2 0 00-3.48 0L3.19 16a2 2 0 001.74 3z"
                    />
                  </svg>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-semibold text-blue-900">{feed.name}</h3>
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full capitalize text-white ${
                        feed.severity === "critical"
                          ? "bg-red-600"
                          : feed.severity === "high"
                          ? "bg-orange-500"
                          : "bg-yellow-500"
                      }`}
                    >
                      {feed.severity}
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm text-left font-medium">{feed.type}</p>
                  <p className="text-gray-500 text-sm">{feed.desc}</p>
                </div>
              </div>

              {/* RIGHT SIDE - TIME */}
              <div className="text-xs text-blue-600 font-medium sm:w-20 text-left sm:text-right">
                {feed.time}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
