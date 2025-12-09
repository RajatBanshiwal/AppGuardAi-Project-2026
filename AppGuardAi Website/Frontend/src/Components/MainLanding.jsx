import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  ShieldCheck,
  Cpu,
  Lock,
  Brain,
  Smartphone,
  Globe,
  File,
  Activity,
} from "lucide-react";
import logo from "../assets/logo.webp";
import ByTheNumbers from "./bythenumber";
import AppguardAiDownload from "./AppguardAiDownload";

const MainLanding = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  // ---------- WHY APPGUARDAI FEATURES ----------
  const features = [
    {
      id: 1,
      icon: <Smartphone size={28} />,
      title: "App Threat Defense (ATD)",
      desc: "Protects apps and enterprises from phishing, malware, and AI-powered cloning threats using adaptive machine learning.",
    },
    {
      id: 2,
      icon: <ShieldCheck size={28} />,
      title: "App Integrity Protection (AIP)",
      desc: "Secures developer apps against tampering, reverse engineering, and unauthorized data access across mobile and web ecosystems.",
    },
    {
      id: 3,
      icon: <Brain size={28} />,
      title: "AI Behavior Analysis (ABA)",
      desc: "Leverages deep learning models to analyze app behavior, detect anomalies, and block emerging zero-day threats in real time.",
    },
  ];

  // ---------- MULTI-LAYERED SECURITY ----------
  const securityLayers = [
    {
      id: 1,
      icon: <ShieldCheck size={28} className="text-blue-600" />,
      title: "App Threat Defense",
      desc: "Scans and detects cloned or malicious apps before they can harm your system, ensuring safe app usage at all times.",
      tag: "New",
    },
    {
      id: 2,
      icon: <Globe size={28} className="text-blue-600" />,
      title: "Web Guard",
      desc: "Blocks phishing and malicious domains using AI-based web scanning and real-time threat analysis.",
    },
    {
      id: 3,
      icon: <Brain size={28} className="text-blue-600" />,
      title: "AI Smart Scan",
      desc: "Performs deep scans to identify vulnerabilities, permissions misuse, and behavior anomalies.",
    },
    {
      id: 4,
      icon: <File size={28} className="text-blue-600" />,
      title: "File Integrity Shield",
      desc: "Analyzes uploaded or downloaded files to detect hidden malicious code or injected payloads.",
    },
    {
      id: 5,
      icon: <Activity size={28} className="text-blue-600" />,
      title: "Behavioral Shield",
      desc: "Monitors app actions in real time to detect abnormal or suspicious patterns instantly.",
    },
    {
      id: 6,
      icon: <Lock size={28} className="text-blue-600" />,
      title: "Quarantine Mode",
      desc: "Isolates potentially harmful apps or files and prevents system-level compromise.",
    },
  ];

  return (
    <main>
      {/* ---------- HERO SECTION ---------- */}
      <section className="bg-white flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-16 gap-12 px-6">
        {/* Left Section */}
        <div className="flex-1 text-center md:text-left" data-aos="fade-right">
          <h1 className="text-4xl md:text-5xl font-medium text-gray-900 leading-tight mb-12 mt-10">
            Detect Fake & Clone Apps with{" "}
            <span className="text-blue-600">AI Precision</span>
          </h1>

          <p className="text-gray-600 text-base md:text-lg mb-6">
            <strong>AppGuardAI</strong> is an AI-powered system designed to
            identify and prevent fake, cloned, or malicious applications. Using
            advanced machine learning models, behavioral analysis, and real-time
            threat detection, we ensure user safety and data integrity across
            platforms.
          </p>

          {/* Features Row */}
          <div
            className="flex flex-wrap justify-center md:justify-start gap-4 mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex items-center gap-2 text-gray-700">
              <ShieldCheck className="text-blue-600" size={22} />
              <span>AI Security Analysis</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Cpu className="text-blue-600" size={22} />
              <span>ML-Based Detection</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Lock className="text-blue-600" size={22} />
              <span>Data & User Protection</span>
            </div>
          </div>

          {/* Buttons */}
          <div
            className="flex flex-wrap justify-center md:justify-start gap-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <a
              href="#"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
            >
              Get Protection Now
            </a>
            <a
              href="#"
              className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div
          className="flex-1 flex justify-center items-center relative"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <div className="overflow-hidden rounded-2xl shadow-xl w-[90%] md:w-[95%] lg:w-full max-w-2xl">
            <img
              src="https://thisisglance.com/hubfs/article-images/how-do-i-plan-for-ios-and-android-updates-affecting-my-app-featured.webp"
              alt="AI App Security Illustration"
              className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* ---------- WHY APPGUARDAI SECTION ---------- */}
      <section className="bg-white py-16 md:py-20">
  <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 flex flex-col md:flex-row items-start gap-10">
    {/* LEFT CONTENT */}
    <div className="flex-1" data-aos="fade-right">
      <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
        <img
          src={logo}
          alt="AppGuardAI Logo"
          className="w-8 h-8 rounded-[12px] shadow-sm transition-transform duration-300 hover:scale-105"
        />
        <span className="text-sm font-semibold text-blue-600 tracking-wide">
          Why AppGuardAI
        </span>
      </div>

      <h2 className="text-center md:text-left text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 leading-snug mb-6">
        Comprehensive AI Security <br className="hidden sm:block" />
        Against Fake & Clone <br className="hidden sm:block" />
        Application Threats
      </h2>

      <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-center md:text-left mb-4">
        Cybercriminals are adopting AI-powered cloning and phishing strategies,
        making mobile and web applications primary attack targets. Traditional
        protection isn’t enough — organizations and developers need intelligent
        AI defense.
      </p>

      <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-center md:text-left mb-8">
        <strong>AppGuardAI</strong> provides cutting-edge, AI-driven threat
        detection to proactively identify, analyze, and block malicious or
        cloned applications before they compromise your system.
      </p>

      <div className="flex justify-center md:justify-start">
        <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition-all duration-300 shadow-md hover:shadow-lg">
          WHY APPGUARDAI
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>

    {/* RIGHT FEATURE BOXES */}
    <div
      className="flex-1 flex flex-col gap-6 w-full"
      data-aos="fade-left"
    >
      {features.map((feature) => (
        <div
          key={feature.id}
          className="bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition p-5 sm:p-6 flex items-start gap-4"
        >
          <div className="bg-blue-100 text-blue-600 p-3 rounded-lg flex-shrink-0">
            {feature.icon}
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-snug">
              {feature.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

                  <AppguardAiDownload />

      {/* ---------- MULTI-LAYERED SECURITY SECTION ---------- */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2
            className="text-3xl md:text-4xl font-medium text-gray-900 mb-4"
            data-aos="fade-up"
          >
            Multi-layered AI Security Comes as Standard
          </h2>
          <p
            className="text-gray-600 mb-12 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            More layers mean stronger protection. Scan apps, detect threats, and
            quarantine malicious files using AppGuardAI’s adaptive AI system.
          </p>

          {/* Security Layer Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityLayers.map((layer, index) => (
              <div
                key={layer.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-blue-50 hover:bg-blue-100 transition rounded-2xl p-6 shadow-sm hover:shadow-md text-left"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-xl shadow-sm">
                    {layer.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {layer.title}
                      </h3>
                      {layer.tag && (
                        <span className="bg-yellow-400 text-xs font-bold px-2 py-1 rounded-md">
                          {layer.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 mt-2 leading-snug">
                      {layer.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- STATS / BY THE NUMBERS ---------- */}
      <ByTheNumbers />
    </main>
  );
};

export default MainLanding;
