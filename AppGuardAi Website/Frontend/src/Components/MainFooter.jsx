import React, { useEffect } from "react";
import { Mail, MapPin, Twitter, Linkedin, Github } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../assets/logo.webp";

const MainFooter = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-out",
      once: true,
      offset: 40,
    });
  }, []);

  // ✅ Quick Links Array
  const quickLinks = [
    { name: "About us", path: "/aboutus" },
    { name: "Features", path: "/features" },
    { name: "Download", path: "/download" },
    { name: "Reports & Alerts", path: "/reports" },
    { name: "Team Members", path: "/team" },
    { name: "Contact Us", path: "/contact" },
  ];

  // ✅ Contact Information Array
  const contacts = [
    { icon: <Mail size={16} className="mt-1 text-blue-600" />, info: "project.appguardai@gmail.com" },
    { icon: <Mail size={16} className="mt-1 text-blue-600" />, info: "supervisor@ecajmer.ac.in" },
    {
      icon: <MapPin size={16} className="mt-1 text-blue-600" />,
      info: "NH-8, Baliya Circle, Ajmer – 305025, Rajasthan",
    },
  ];

  // ✅ Social Media Links Array
  const socials = [
    { icon: <Twitter size={22} />, link: "https://twitter.com" },
    { icon: <Linkedin size={22} />, link: "https://linkedin.com" },
    { icon: <Github size={22} />, link: "https://github.com" },
  ];

  return (
    <footer className="bg-gray-50 text-gray-800 py-10 border-t border-gray-200">
      <div
        className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 pb-8"
        data-aos="fade-up"
      >
        {/* ✅ Left Section */}
        <div data-aos="fade" data-aos-delay="100">
          <div className="flex items-center gap-3 mb-4">
            <img
              src={logo}
              alt="AppGuardAI Logo"
              className="w-12 h-12 rounded-[12px] shadow-sm transition-transform duration-300 hover:scale-105"
            />
            <h3 className="text-2xl font-bold text-gray-900">
              <span className="text-blue-600">AppGuard</span>AI
            </h3>
          </div>

          <p className="text-sm leading-relaxed text-gray-600">
            AI-powered advanced system for detecting and mitigating clone and
            fake applications. Protect users, developers, and enterprises from
            malicious or cloned apps through real-time scanning, sandbox
            analysis, and behavioral fingerprinting.
          </p>
        </div>

        {/* ✅ Middle Section (Quick Links) */}
        <div data-aos="fade" data-aos-delay="200">
          <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {quickLinks.map(({ name, path }, index) => (
              <li key={index}>
                <a
                  href={path}
                  className="hover:text-blue-600 transition duration-200"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ✅ Right Section (Contact & Socials) */}
        <div data-aos="fade" data-aos-delay="300">
          <h4 className="font-semibold text-gray-900 mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            {contacts.map(({ icon, info }, index) => (
              <li key={index} className="flex gap-2 items-start">
                {icon}
                <span>{info}</span>
              </li>
            ))}
          </ul>

          <div className="flex gap-4 mt-5" data-aos="fade" data-aos-delay="400">
            {socials.map(({ icon, link }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition duration-200"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ Bottom Note */}
      <div
        className="text-center text-xs text-gray-500 mt-6"
        data-aos="fade"
        data-aos-delay="300"
      >
        © {new Date().getFullYear()}{" "}
        <span className="font-medium text-gray-700">AppGuardAI</span> | Developed
        By Rajat Banshiwal at{" "}
        <span className="font-medium text-blue-600">
          Government Engineering College Ajmer
        </span>
        <br />
        Domain: Artificial Intelligence • Machine Learning • Cybersecurity
      </div>
    </footer>
  );
};

export default MainFooter;
