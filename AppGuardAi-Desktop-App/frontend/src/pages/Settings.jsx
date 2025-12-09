import React, { useState } from "react";
import { ShieldCheck, Bell, Folder, Zap } from "lucide-react";

export default function Settings() {
  // ✅ Checkbox States (Analysis Configuration)
  const [staticAnalysis, setStaticAnalysis] = useState(true);
  const [dynamicAnalysis, setDynamicAnalysis] = useState(true);
  const [mlDetection, setMlDetection] = useState(true);

  // ✅ Checkbox States (Notifications)
  const [threatAlerts, setThreatAlerts] = useState(true);
  const [analysisComplete, setAnalysisComplete] = useState(true);
  const [weeklyReports, setWeeklyReports] = useState(false);

  // ✅ Data & Storage States
  const [retentionPeriod, setRetentionPeriod] = useState("90 days");
  const [autoDelete, setAutoDelete] = useState(true);

  // ✅ Performance States
  const [analysisTimeout, setAnalysisTimeout] = useState("10 minutes");
  const [maxConcurrent, setMaxConcurrent] = useState("3");

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50 px-6 md:px-10 py-10 text-blue-700">
      {/* HEADER */}
      <div className="mb-10 text-center md:text-left">
        <h1 className="text-3xl font-medium text-blue-900">Settings</h1>
        <p className="text-gray-500">
          Customize AppGuardAi’s behavior, alerts, and performance preferences.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* ------------------- ANALYSIS CONFIGURATION ------------------- */}
        <div className="bg-white border border-blue-100 rounded-2xl shadow-sm hover:shadow-md transition-all p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 bg-blue-100 text-blue-600 flex items-center justify-center rounded-xl">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-semibold text-blue-900">
              Analysis Configuration
            </h2>
          </div>

          <div className="space-y-5">
            {[
              {
                title: "Enable Static Analysis",
                desc: "Analyze app manifest and code structure",
                state: staticAnalysis,
                setter: setStaticAnalysis,
              },
              {
                title: "Enable Dynamic Analysis",
                desc: "Monitor runtime behavior in sandbox",
                state: dynamicAnalysis,
                setter: setDynamicAnalysis,
              },
              {
                title: "Enable ML Detection",
                desc: "Use AI models for risk classification",
                state: mlDetection,
                setter: setMlDetection,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between bg-gradient-to-r from-white to-blue-50 p-4 rounded-xl border border-blue-100 hover:shadow-sm transition"
              >
                <div>
                  <p className="font-medium text-left">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
                <input
                  type="checkbox"
                  checked={item.state}
                  onChange={() => item.setter(!item.state)}
                  className="h-5 w-5 accent-blue-600"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ------------------- NOTIFICATIONS ------------------- */}
        <div className="bg-white border border-blue-100 rounded-2xl shadow-sm hover:shadow-md transition-all p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 bg-blue-100 text-blue-600 flex items-center justify-center rounded-xl">
              <Bell className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-semibold text-blue-900">
              Notifications
            </h2>
          </div>

          <div className="space-y-5">
            {[
              {
                title: "Threat Alerts",
                desc: "Notify when high-risk threats are detected",
                state: threatAlerts,
                setter: setThreatAlerts,
              },
              {
                title: "Analysis Complete",
                desc: "Notify when app analysis is finished",
                state: analysisComplete,
                setter: setAnalysisComplete,
              },
              {
                title: "Weekly Reports",
                desc: "Receive weekly security summaries",
                state: weeklyReports,
                setter: setWeeklyReports,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between bg-gradient-to-r from-white to-blue-50 p-4 rounded-xl border border-blue-100 hover:shadow-sm transition"
              >
                <div>
                  <p className="font-medium text-left">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
                <input
                  type="checkbox"
                  checked={item.state}
                  onChange={() => item.setter(!item.state)}
                  className="h-5 w-5 accent-blue-600"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ------------------- DATA & STORAGE ------------------- */}
        <div className="bg-white border border-blue-100 rounded-2xl shadow-sm hover:shadow-md transition-all p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 bg-green-100 text-green-600 flex items-center justify-center rounded-xl">
              <Folder className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-semibold text-blue-900">
              Data & Storage
            </h2>
          </div>

          <div className="space-y-5">
            <div>
              <label className="block mb-2 text-blue-700 text-left font-medium">
                Data Retention Period
              </label>
              <select
                value={retentionPeriod}
                onChange={(e) => setRetentionPeriod(e.target.value)}
                className="w-full p-3 border rounded-lg bg-gray-50 text-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              >
                <option>30 days</option>
                <option>60 days</option>
                <option>90 days</option>
              </select>
            </div>

            <div className="flex items-center justify-between bg-gradient-to-r from-white to-blue-50 p-4 rounded-xl border border-blue-100 hover:shadow-sm transition">
              <div>
                <p className="font-medium text-left">Auto-delete Old Reports</p>
                <p className="text-sm text-gray-500">
                  Delete reports older than the retention period
                </p>
              </div>
              <input
                type="checkbox"
                checked={autoDelete}
                onChange={() => setAutoDelete(!autoDelete)}
                className="h-5 w-5 accent-blue-600"
              />
            </div>
          </div>
        </div>

        {/* ------------------- PERFORMANCE ------------------- */}
        <div className="bg-white border border-blue-100 rounded-2xl shadow-sm hover:shadow-md transition-all p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 bg-yellow-100 text-yellow-600 flex items-center justify-center rounded-xl">
              <Zap className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-semibold text-left text-blue-900">
              Performance
            </h2>
          </div>

          <div className="space-y-5">
            <div>
              <label className="block mb-2 text-blue-700 text-left font-medium">
                Analysis Timeout
              </label>
              <select
                value={analysisTimeout}
                onChange={(e) => setAnalysisTimeout(e.target.value)}
                className="w-full p-3 border rounded-lg  bg-gray-50 text-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              >
                <option>5 minutes</option>
                <option>10 minutes</option>
                <option>20 minutes</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 text-blue-700 text-left font-medium">
                Maximum Concurrent Analyses
              </label>
              <select
                value={maxConcurrent}
                onChange={(e) => setMaxConcurrent(e.target.value)}
                className="w-full p-3 border rounded-lg bg-gray-50 text-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              >
                <option>1</option>
                <option>3</option>
                <option>5</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* SAVE BUTTON */}
      <div className="text-center md:text-right mt-10">
        <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-xl shadow hover:bg-blue-700 transition">
          💾 Save Settings
        </button>
      </div>
    </div>
  );
}
