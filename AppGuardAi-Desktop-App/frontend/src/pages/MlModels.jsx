import React from "react";
import { RefreshCcw } from "lucide-react"; // updated refresh icon

export default function MlModels() {
  const topStats = [
    { title: "Active Models", value: "6", icon: "🤖" },
    { title: "Avg Accuracy", value: "97.8%", icon: "📈" },
    { title: "Predictions/Day", value: "15.2K", icon: "🔍" },
    { title: "Training Data", value: "2.4M", icon: "🧠" },
  ];

  const mlModels = [
    {
      name: "Random Forest Classifier",
      type: "Supervised Learning",
      accuracy: "98.7%",
      precision: "97.8%",
      recall: "98.9%",
      f1: "98.3%",
      features: ["Permissions", "API Calls", "Code Patterns"],
      trained: "2025-10-25",
      status: "ACTIVE",
    },
    {
      name: "Deep Neural Network",
      type: "Deep Learning",
      accuracy: "99.2%",
      precision: "98.5%",
      recall: "99.1%",
      f1: "98.8%",
      features: ["Bytecode Analysis", "Control Flow", "Data Flow"],
      trained: "2025-10-26",
      status: "ACTIVE",
    },
    ...Array.from({ length: 8 }).map((_, i) => ({
      name: `Model ${i + 3}`,
      type: i % 2 === 0 ? "Supervised Learning" : "Deep Learning",
      accuracy: `${95 + Math.random() * 5}%`,
      precision: `${95 + Math.random() * 5}%`,
      recall: `${95 + Math.random() * 5}%`,
      f1: `${95 + Math.random() * 5}%`,
      features: ["Static Analysis", "Behavior Graphs"],
      trained: "2025-10-20",
      status: i % 2 === 0 ? "ACTIVE" : "TRAINING",
    })),
  ];

  const performanceRows = [
    {
      model: "Random Forest Classifier",
      type: "Supervised Learning",
      accuracy: "98.7%",
      precision: "97.8%",
      recall: "98.9%",
      f1: "98.3%",
    },
    {
      model: "Deep Neural Network",
      type: "Deep Learning",
      accuracy: "99.2%",
      precision: "98.5%",
      recall: "99.1%",
      f1: "98.8%",
    },
    ...Array.from({ length: 8 }).map((_, i) => ({
      model: `Model ${i + 3}`,
      type: i % 2 === 0 ? "Ensemble Learning" : "Unsupervised Learning",
      accuracy: `${95 + Math.random() * 4}%`,
      precision: `${95 + Math.random() * 4}%`,
      recall: `${95 + Math.random() * 4}%`,
      f1: `${95 + Math.random() * 4}%`,
    })),
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-4 sm:px-6 md:px-10 py-10 text-blue-700">
      {/* PAGE TITLE */}
      <div className="mb-8 text-center md:text-left">
        <h1 className="text-3xl font-bold text-blue-900">🧠 ML Models</h1>
        <p className="text-gray-500">
          Machine learning models powering AppGuardAi’s fraud and clone detection.
        </p>
      </div>

      {/* TOP CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        {topStats.map((stat, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-white to-blue-50 border border-blue-100 shadow-sm hover:shadow-md rounded-2xl p-5 flex items-center gap-4 transition-all"
          >
            <div className="text-3xl">{stat.icon}</div>
            <div>
              <p className="text-gray-500 text-sm">{stat.title}</p>
              <p className="text-2xl font-bold text-blue-900">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ML MODEL CARDS */}
      <div className="space-y-6 mb-12">
        {mlModels.map((model, i) => (
          <div
            key={i}
            className="bg-white border border-blue-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex flex-col md:flex-row justify-between gap-4 items-start">
              {/* LEFT SIDE */}
              <div className="flex-1 flex flex-col gap-3 text-blue-800">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="h-10 w-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl">
                    ⚙️
                  </div>
                  <h2 className="text-lg font-semibold">{model.name}</h2>
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full text-white ${
                      model.status === "ACTIVE"
                        ? "bg-green-600"
                        : "bg-yellow-500"
                    }`}
                  >
                    {model.status}
                  </span>
                </div>

                <p className="text-gray-500 text-sm text-left">{model.type}</p>

                {/* Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-3">
                  <div>
                    <p className="text-gray-500 text-sm">Accuracy</p>
                    <p className="font-semibold">{model.accuracy}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Precision</p>
                    <p className="font-semibold">{model.precision}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Recall</p>
                    <p className="font-semibold">{model.recall}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">F1 Score</p>
                    <p className="font-semibold">{model.f1}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="mt-3">
                  <p className="text-sm text-gray-500 mb-1 text-left">Features Used:</p>
                  <div className="flex flex-wrap gap-2">
                    {model.features.map((ft, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                      >
                        {ft}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-gray-500 text-sm mt-2 text-left">
                  Last trained: <span className="text-blue-600">{model.trained}</span>
                </p>
              </div>

              {/* REFRESH ICON */}
              <div className="text-2xl cursor-pointer text-blue-600 hover:text-blue-800 self-start">
                <RefreshCcw />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* PERFORMANCE COMPARISON TABLE */}
      <div className="bg-white border border-blue-100 rounded-2xl shadow-sm p-5 mb-20 overflow-x-auto">
        <h2 className="text-xl font-semibold text-blue-900 mb-4">📊 Performance Comparison</h2>

        <table className="w-full text-sm min-w-[600px]">
          <thead className="bg-blue-50 text-blue-900">
            <tr>
              <th className="py-3 px-4 text-left">Model</th>
              <th className="py-3 px-4 text-left">Type</th>
              <th className="py-3 px-4 text-left">Accuracy</th>
              <th className="py-3 px-4 text-left">Precision</th>
              <th className="py-3 px-4 text-left">Recall</th>
              <th className="py-3 px-4 text-left">F1 Score</th>
            </tr>
          </thead>
          <tbody>
            {performanceRows.map((row, i) => (
              <tr key={i} className="border-b hover:bg-blue-50 transition-all">
                <td className="py-3 px-4 font-medium text-blue-800 text-left">{row.model}</td>
                <td className="py-3 px-4 text-gray-600 text-left">{row.type}</td>
                <td className="py-3 px-4 font-semibold text-green-600 text-left">{row.accuracy}</td>
                <td className="py-3 px-4 text-gray-700 text-left">{row.precision}</td>
                <td className="py-3 px-4 text-gray-700 text-left">{row.recall}</td>
                <td className="py-3 px-4 text-gray-700 text-left">{row.f1}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
