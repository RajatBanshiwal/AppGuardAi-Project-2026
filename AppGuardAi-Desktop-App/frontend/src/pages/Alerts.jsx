// src/components/AlertsPanel.jsx
import React, { useState } from "react";
import { ShieldAlert, Zap, Info, Filter, Search, X } from "lucide-react";

const sampleAlerts = [
  {
    id: 1,
    level: "High",
    title: "Malicious Clone App Detected",
    app: "com.fake.bankapp",
    time: "2m ago",
    desc: "App mimics a trusted banking app’s interface. AI confirms high clone probability.",
  },
  {
    id: 2,
    level: "Medium",
    title: "Suspicious API Behavior",
    app: "com.webguard.test",
    time: "12m ago",
    desc: "Detected access attempts to restricted system endpoints.",
  },
  {
    id: 3,
    level: "Low",
    title: "Unverified Developer Signature",
    app: "com.random.chat",
    time: "22m ago",
    desc: "App’s developer certificate not found in trusted authority registry.",
  },
  {
    id: 4,
    level: "High",
    title: "Phishing Activity Detected",
    app: "com.fake.paymentwallet",
    time: "30m ago",
    desc: "AI detected fraudulent UI patterns mimicking a payment app.",
  },
  {
    id: 5,
    level: "Medium",
    title: "Data Exfiltration Attempt",
    app: "com.unknown.transfer",
    time: "1h ago",
    desc: "Outbound data transfer exceeding normal limits detected.",
  },
  {
    id: 6,
    level: "Low",
    title: "Unsigned APK Installation",
    app: "com.user.debugtest",
    time: "2h ago",
    desc: "Installed via sideload without a valid signature.",
  },
];

export default function AlertsPanel() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [showFilter, setShowFilter] = useState(false);

  const getLevelColor = (level) => {
    switch (level) {
      case "High":
        return "border-rose-200 bg-rose-50 text-rose-700";
      case "Medium":
        return "border-amber-200 bg-amber-50 text-amber-700";
      default:
        return "border-blue-200 bg-blue-50 text-blue-700";
    }
  };

  const filteredAlerts = sampleAlerts.filter((alert) => {
    const matchQuery =
      alert.title.toLowerCase().includes(query.toLowerCase()) ||
      alert.app.toLowerCase().includes(query.toLowerCase());
    const matchFilter = filter === "All" || alert.level === filter;
    return matchQuery && matchFilter;
  });

  return (
    <section
      id="alerts"
      className="bg-gradient-to-b from-white to-sky-50 text-slate-900 flex items-center justify-center px-2 sm:px-8 md:px-12 lg:px-12 py-8 md:py-10"
    >
      <div className="relative bg-white border border-slate-100 rounded-2xl shadow-md p-5 sm:p-6 w-full max-w-full">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sticky top-16 bg-white pb-2 z-10">
          <div>
            <h2 className="text-m sm:text-2xl text-center md:text-left font-semibold text-slate-900">
              Alerts & Notifications
            </h2>
            <p className="text-sm text-slate-600">
              Real-time security alerts detected by AppGuard
              <span className="text-blue-600">Ai</span>.
            </p>
          </div>

          {/* Search + Filter */}
          <div className="flex items-center gap-2 w-full sm:w-auto relative">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-2.5 text-slate-400 w-4 h-4" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search alerts..."
                className="w-full sm:w-56 md:w-64 pl-9 pr-3 py-2 rounded-md border border-slate-200 text-sm shadow-sm focus:ring-2 focus:ring-blue-200 focus:outline-none"
              />
            </div>

            {/* Filter Button */}
            <div className="relative">
              <button
                onClick={() => setShowFilter(!showFilter)}
                className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-2 rounded-md text-sm hover:bg-blue-200 transition"
              >
                <Filter className="w-4 h-4" />
                {filter === "All" ? "Filter" : filter}
              </button>

              {/* Filter Dropdown */}
              {showFilter && (
                <div className="absolute right-0 mt-2 bg-white border border-slate-200 rounded-md shadow-md w-36 text-sm z-20">
                  {["All", "High", "Medium", "Low"].map((level) => (
                    <button
                      key={level}
                      onClick={() => {
                        setFilter(level);
                        setShowFilter(false);
                      }}
                      className={`w-full text-left px-3 py-2 hover:bg-blue-50 ${
                        filter === level ? "text-blue-600 font-medium" : "text-slate-700"
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Alerts List */}
        <div className="space-y-3 mt-3">
          {filteredAlerts.length > 0 ? (
            filteredAlerts.map((alert) => (
              <div
                key={alert.id}
                className={`p-4 rounded-xl border ${getLevelColor(
                  alert.level
                )} transition hover:shadow-md`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    {alert.level === "High" ? (
                      <ShieldAlert className="w-5 h-5 text-rose-600 mt-0.5" />
                    ) : alert.level === "Medium" ? (
                      <Zap className="w-5 h-5 text-amber-600 mt-0.5" />
                    ) : (
                      <Info className="w-5 h-5 text-blue-600 mt-0.5" />
                    )}

                    <div>
                      <div className="font-medium text-slate-900 text-left">{alert.title}</div>
                      <div className="text-xs text-slate-500 text-left">{alert.desc}</div>
                      <div className="text-xs text-slate-400 mt-1 text-left">
                        App:{" "}
                        <span className="font-medium text-slate-600">
                          {alert.app}
                        </span>{" "}
                        • {alert.time}
                      </div>
                    </div>
                  </div>

                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded-md ${getLevelColor(
                      alert.level
                    )}`}
                  >
                    {alert.level}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-slate-500 text-sm py-10">
              No alerts found for your search or filter.
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t pt-3 mt-4 text-xs text-slate-500 flex items-center gap-2">
          <Info className="w-4 h-4 text-blue-500" />
          Alerts auto-refresh every{" "}
          <span className="font-medium text-slate-700">15 seconds</span>.
        </div>
      </div>
    </section>
  );
}
