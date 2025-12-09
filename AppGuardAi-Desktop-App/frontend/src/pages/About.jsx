import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Features from "../assets/Features.png";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section
      id="about"
      className="
        bg-white
        w-full
        flex items-center justify-center
        px-5 sm:px-8 md:px-12 lg:px-20
        py-8 md:py-7
      "
    >
        <div
          className="
            max-w-7xl w-full
            grid grid-cols-1 md:grid-cols-2
            gap-8 md:gap-10 lg:gap-12
            items-center
          "
        >
        {/* LEFT CONTENT */}
        <div
          data-aos="fade-right"
          className="
            space-y-2
            text-center md:text-left
            flex flex-col justify-center
            h-full
          "
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-snug">
            About Us
          </h2>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            <strong>AppGuardAI</strong> is an advanced AI-powered cybersecurity
            platform designed to detect, prevent, and eliminate fake, cloned, or
            malicious applications before they can harm users or businesses.
            AppGuardAI stands as a shield ensuring authenticity and safety
            across all devices.
          </p>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Our system uses intelligent algorithms that perform deep behavioral
            analysis, pattern recognition, and real-time monitoring to identify
            anomalies that traditional tools often miss.
          </p>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Founded with a vision to bring trust and transparency to the digital
            ecosystem, AppGuardAI is built by passionate innovators redefining
            how app security is managed.
          </p>

          <div className="flex justify-center md:justify-start mt-3">
            <a
              href="/"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-md shadow-md transition-all duration-300 text-sm"
            >
              Get Protect Now →
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          data-aos="fade-left"
          className="relative flex justify-center items-center h-full"
        >
          {/* 🔵 Gradient Circle Background */}
          <div className="absolute w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600 blur-3xl opacity-40 animate-pulse"></div>

          {/* 🧠 Foreground Image */}
          <img
            src={Features}
            alt="AppGuardAI Security"
            className="relative z-10 w-[200px] md:w-[250px] lg:w-[280px] object-contain transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
