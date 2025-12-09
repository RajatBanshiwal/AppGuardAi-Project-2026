import React, { useEffect } from "react";
import { MonitorDown } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const AppguardAiDownload = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // animation runs once
      offset: 100, // start animation earlier
    });
  }, []);

  return (
    <section
      className="bg-white text-center px-6 sm:px-8 md:px-16 lg:px-24  md:py-6"
      data-aos="fade-up"
    >
      <div className="max-w-4xl mx-auto">
        {/* HEADING */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-medium text-gray-900 leading-tight"
          data-aos="fade-down"
        >
          Download{" "}
          <span
            className="relative text-blue-600 inline-block"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            free AppGuardAI
          </span>
        </h1>

        {/* SUBHEADING */}
        <p
          className="mt-4 text-lg sm:text-xl font-semibold text-gray-800"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Award-winning virus, malware, and next-level online scam protection
        </p>

        {/* DESCRIPTION */}
        <p
          className="mt-6 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed px-2"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Download a free software for your Windows PC or laptop to help detect
          and fake, cloned, or malicious applications. Instantly analyze suspicious apps, 
          messages, or downloads with our{" "}
          <span className="font-semibold">new AI-powered AppGuard Assistant</span>.{" "}
          strengthen your defense against cyber threats while keeping your system secure and authentic.
        </p>

        {/* DOWNLOAD BUTTON */}
        <div
          className="mt-10 flex flex-col items-center"
          data-aos="zoom-in-up"
          data-aos-delay="500"
        >
          <button className="bg-blue-600 text-white font-medium text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-md hover:bg-blue-700 transition flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto">
            <MonitorDown className="w-5 h-5 sm:w-6 sm:h-6" />
            Free download
          </button>

          <p
            className="mt-4 text-gray-600 text-sm sm:text-base"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Also available for{" "}
            <a href="#" className="text-blue-600 hover:underline font-medium">
              Mac
            </a>
            ,{" "}
            <a href="#" className="text-blue-600 hover:underline font-medium">
              Android
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 hover:underline font-medium">
              iOS
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AppguardAiDownload;
