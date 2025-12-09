// src/pages/AnalyticsDashboard.jsx
import React, { useState } from "react";
import {
    ShieldCheck,
    Database,
    Percent,
    Users2,
    BarChart2,
    FileText,
    Zap,
    Settings,
    Info,
} from "lucide-react";

const topStats = [
    {
        id: "totalScans",
        label: "Total Scans",
        value: "18,742",
        sub: "since last month",
        colorFrom: "from-sky-400",
        colorTo: "to-blue-600",
        icon: <Database className="w-5 h-5 text-white" />,
    },
    {
        id: "threats",
        label: "Threats Detected",
        value: "1,249",
        sub: "high / medium risk",
        colorFrom: "from-rose-400",
        colorTo: "to-pink-600",
        icon: <ShieldCheck className="w-5 h-5 text-white" />,
    },
    {
        id: "accuracy",
        label: "Detection Accuracy",
        value: "94.2%",
        sub: "model v2.1",
        colorFrom: "from-teal-400",
        colorTo: "to-cyan-600",
        icon: <Percent className="w-5 h-5 text-white" />,
    },
    {
        id: "activeUsers",
        label: "Active Devices",
        value: "3,588",
        sub: "last 24 hours",
        colorFrom: "from-indigo-400",
        colorTo: "to-violet-600",
        icon: <Users2 className="w-5 h-5 text-white" />,
    },
];

const tabs = [
    { id: "overview", label: "Overview", icon: <BarChart2 className="w-4 h-4" /> },
    { id: "reports", label: "Reports", icon: <FileText className="w-4 h-4" /> },
    { id: "logs", label: "Detection Logs", icon: <Zap className="w-4 h-4" /> },
    { id: "performance", label: "Performance", icon: <BarChart2 className="w-4 h-4" /> },
    { id: "settings", label: "Settings", icon: <Settings className="w-4 h-4" /> },
];

export default function AnalyticsDashboard() {
    const [activeTab, setActiveTab] = useState("overview");
    const [query, setQuery] = useState("");

    return (
        <div className="min-h-screen main-w-screen bg-gradient-to-b from-white to-sky-50 text-slate-900 overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-10 sm:py-12">
                {/* Header */}
                <header className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="w-full lg:w-auto text-center lg:text-left">
                        <h1 className="text-xl sm:text-2xl font-medium">
                            AppGuard<span className="text-blue-600">Ai</span> Dashboard
                        </h1>
                        <p className="text-sm sm:text-base text-slate-600 mt-1">
                            Real-time insight into scans, threats & AI model performance.
                        </p>
                    </div>

                    {/* Search + Filter */}
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full lg:w-auto">
                        <input
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search apps, hashes, reports..."
                            className="w-full sm:w-72 md:w-80 bg-white border border-slate-200 rounded-md px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-300"
                        />
                        <button
                            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm shadow w-full sm:w-auto"
                            onClick={() => alert('Quick filter applied')}
                        >
                            <Info className="w-4 h-4" />
                            Quick Filter
                        </button>
                    </div>
                </header>

                {/* Stats cards */}
                <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {topStats.map((s) => (
                        <div
                            key={s.id}
                            className={`rounded-2xl shadow-sm overflow-hidden transform hover:scale-[1.02] transition bg-gradient-to-r ${s.colorFrom} ${s.colorTo} p-5 flex flex-col justify-between`}
                        >
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="text-xs text-white/90 uppercase font-medium tracking-wide">
                                        {s.label}
                                    </p>
                                    <p className="mt-2 text-2xl font-bold text-white">{s.value}</p>
                                    <p className="text-xs text-white/80 mt-1">{s.sub}</p>
                                </div>
                                <div className="p-2 bg-white/20 rounded-lg">{s.icon}</div>
                            </div>
                        </div>
                    ))}
                </section>

                {/* Tabs & content */}
                <section className="mt-8 grid grid-cols-1 xl:grid-cols-12 gap-6">
                    {/* Tab bar */}
                    <div className="xl:col-span-12">
                        <div className="bg-white border border-slate-100 rounded-xl shadow-sm p-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                            <nav className="flex flex-wrap gap-2 overflow-x-auto">
                                {tabs.map((t) => {
                                    const active = t.id === activeTab;
                                    return (
                                        <button
                                            key={t.id}
                                            onClick={() => setActiveTab(t.id)}
                                            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition ${active
                                                    ? "bg-blue-50 text-blue-700 ring-1 ring-blue-200"
                                                    : "text-slate-700 hover:bg-slate-50"
                                                }`}
                                        >
                                            {t.icon}
                                            <span>{t.label}</span>
                                        </button>
                                    );
                                })}
                            </nav>

                            {/* Right buttons */}
                            <div className="flex flex-wrap sm:flex-nowrap gap-2">
                                <button
                                    onClick={() => alert("Exporting report...")}
                                    className="text-sm inline-flex items-center gap-2 px-3 py-2 rounded-md bg-slate-50 hover:bg-slate-100 border border-slate-100 w-full sm:w-auto justify-center"
                                >
                                    Export
                                </button>
                                <button
                                    onClick={() => alert("Opening AI retrain modal...")}
                                    className="text-sm inline-flex items-center gap-2 px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 w-full sm:w-auto justify-center"
                                >
                                    Retrain Model
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Main content */}
                    <div className="xl:col-span-9">
                        <div className="bg-white border border-slate-100 rounded-2xl shadow-sm h-auto xl:h-[60vh] p-5 sm:p-6 overflow-auto">
                            {activeTab === "overview" && (
                                <div className="space-y-6">
                                    <h3 className="text-lg font-semibold">Overview</h3>

                                    {/* Two cards */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="rounded-lg border border-slate-100 p-4">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="text-sm text-slate-600">Latest Scans</p>
                                                    <p className="mt-2 font-medium text-slate-900">
                                                        No scans in queue
                                                    </p>
                                                </div>
                                                <p className="text-sm text-slate-500">—</p>
                                            </div>
                                            <p className="text-xs text-slate-500 mt-3">
                                                Scans are scheduled and processed automatically.
                                            </p>
                                        </div>

                                        <div className="rounded-lg border border-slate-100 p-4">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="text-sm text-slate-600">Model Health</p>
                                                    <p className="mt-2 font-medium text-slate-900">
                                                        94.2% (stable)
                                                    </p>
                                                </div>
                                                <p className="text-sm text-slate-500">v2.1</p>
                                            </div>
                                            <p className="text-xs text-slate-500 mt-3">
                                                Continuous learning with human-in-the-loop annotations.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Alerts */}
                                    <div>
                                        <p className="text-sm text-slate-600 mb-2">Recent Alerts</p>
                                        <div className="space-y-2">
                                            <div className="p-3 bg-slate-50 border border-slate-100 rounded-md flex items-start gap-3">
                                                <ShieldCheck className="w-5 h-5 text-rose-500 mt-1" />
                                                <div className="text-sm">
                                                    <p className="font-medium">High risk app detected</p>
                                                    <p className="text-xs text-slate-500">
                                                        App: com.fake.example — 12m ago
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="p-3 bg-slate-50 border border-slate-100 rounded-md flex items-start gap-3">
                                                <Zap className="w-5 h-5 text-amber-500 mt-1" />
                                                <div className="text-sm">
                                                    <p className="font-medium">Suspected cloning pattern</p>
                                                    <p className="text-xs text-slate-500">
                                                        Multiple near-identical signatures found
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === "reports" && (
                                <div className="text-sm text-slate-600">
                                    <h3 className="text-lg font-semibold mb-3">Reports</h3>
                                    Generated reports will appear here.
                                </div>
                            )}

                            {activeTab === "logs" && (
                                <div className="text-sm text-slate-600">
                                    <h3 className="text-lg font-semibold mb-3">Detection Logs</h3>
                                    No logs available yet.
                                </div>
                            )}

                            {activeTab === "performance" && (
                                <div className="text-sm text-slate-600">
                                    <h3 className="text-lg font-semibold mb-3">Performance</h3>
                                    Latency & model metrics will appear here.
                                </div>
                            )}

                            {activeTab === "settings" && (
                                <div className="text-sm text-slate-600">
                                    <h3 className="text-lg font-semibold mb-3">Settings</h3>
                                    Model, scanning & notification preferences.
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="xl:col-span-3 flex flex-col gap-4">
                        <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-slate-600">Active Learning Queue</p>
                                    <p className="mt-2 font-bold text-slate-900">328</p>
                                </div>
                                <p className="text-sm text-slate-500">updates</p>
                            </div>
                            <p className="text-xs text-slate-500 mt-3">
                                Human-in-the-loop samples awaiting annotation.
                            </p>
                        </div>

                        <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-slate-600">Annotation Accuracy</p>
                                    <p className="mt-2 font-bold text-slate-900">94.2%</p>
                                </div>
                                <p className="text-sm text-slate-500">v2.1</p>
                            </div>
                            <p className="text-xs text-slate-500 mt-3">
                                QA metrics from the latest labeling batch.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4 text-sm">
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-white rounded-md shadow-sm">
                                    <Info className="w-5 h-5 text-blue-600" />
                                </div>
                                <div>
                                    <p className="font-semibold text-slate-900">AI System Status</p>
                                    <p className="text-xs text-slate-700 mt-1">
                                        Model: <span className="font-medium">v2.1</span> • Last retrain:{" "}
                                        <span className="font-medium">3 days ago</span>
                                    </p>
                                    <p className="text-xs text-slate-600 mt-2">
                                        Active learning running normally.{" "}
                                        <button
                                            className="ml-1 underline text-blue-600"
                                            onClick={() => alert("Open active learning panel")}
                                        >
                                            View details
                                        </button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </aside>
                </section>
            </div>
        </div>
    );
}
