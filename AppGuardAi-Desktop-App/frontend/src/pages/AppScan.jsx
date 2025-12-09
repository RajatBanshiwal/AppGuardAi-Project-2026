import React, { useState, useEffect } from "react";
import { File, Cpu, Brain, Upload } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AppScan() {
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const handleFileSelect = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setSelectedFile(e.dataTransfer.files[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className=" bg-white min-h-screen text-blue-600 p-5">
      {/* 🔹 Page Title */}
      <div className="text-center md:text-left mb-8" data-aos="fade-up">
        <h1 className="text-3xl font-medium text-gray-900 mb-2">
          App Analysis
        </h1>
        <p className="text-gray-600 max-w-2xl text-sm mx-auto md:mx-0">
          Upload and analyze mobile applications for security threats and
          malicious behavior.
        </p>
      </div>

      {/* 🔹 Upload Container */}
      <div
        className="border-2 border-dashed border-blue-300 rounded-2xl bg-white shadow-md hover:shadow-lg transition-all duration-300 px-10 py-8 flex flex-col items-center justify-center cursor-pointer"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={() => document.getElementById("fileInput").click()}
        data-aos="zoom-in"
      >
        <div className="flex flex-col items-center text-center">
          {/* Upload Icon */}
          <div className="bg-blue-50 p-4 rounded-full mb-4">
            <Upload className="h-12 w-12 text-blue-600" strokeWidth={2} />
          </div>

          <p className="text-lg font-medium text-gray-800">
            Drop your <span className="text-blue-600">APK</span> or{" "}
            <span className="text-blue-600">IPA</span> file here
          </p>
          <p className="text-gray-400 text-sm mb-4">or click to browse</p>

          {/* Hidden Input */}
          <input
            id="fileInput"
            type="file"
            className="hidden"
            accept=".apk,.ipa"
            onChange={handleFileSelect}
          />

          {/* Button */}
          <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md transition">
            Choose File
          </button>

          {/* Selected File Display */}
          {selectedFile && (
            <p className="mt-3 text-green-600 font-medium text-sm">
              Selected: {selectedFile.name}
            </p>
          )}
        </div>
      </div>

      {/* 🔹 Analysis Sections */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {/* Static Analysis */}
        <div
          className="bg-white border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
          data-aos="fade-right"
        >
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-900">
            <File className="w-5 h-5 text-blue-500" /> Static Analysis
          </h2>
          <ul className="text-gray-600 space-y-2 text-sm">
            <li>• Manifest inspection and permissions analysis</li>
            <li>• Code obfuscation detection</li>
            <li>• Digital signature verification</li>
            <li>• Resource and asset analysis</li>
          </ul>
        </div>

        {/* Dynamic Analysis */}
        <div
          className="bg-white border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
          data-aos="zoom-in"
        >
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-900">
            <Cpu className="w-5 h-5 text-violet-500" /> Dynamic Analysis
          </h2>
          <ul className="text-gray-600 space-y-2 text-sm">
            <li>• Runtime behavior monitoring</li>
            <li>• API call tracking and analysis</li>
            <li>• Network traffic inspection</li>
            <li>• Memory and process analysis</li>
          </ul>
        </div>

        {/* ML Detection */}
        <div
          className="bg-white border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
          data-aos="fade-left"
        >
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-900">
            <Brain className="w-5 h-5 text-cyan-500" /> ML Detection
          </h2>
          <ul className="text-gray-600 space-y-2 text-sm">
            <li>• Supervised learning classification</li>
            <li>• Anomaly detection algorithms</li>
            <li>• Behavioral pattern recognition</li>
            <li>• Feature extraction from binaries</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
