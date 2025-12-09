import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Brain, Wifi, Bell, Lock, Cloud } from "lucide-react";
import Features from "../assets/Features.png"

const features = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
    title: "Real-Time Threat Detection",
    desc: "AppGuard AI continuously monitors your system and isolates threats before they can harm your data or performance.",
    color: "bg-blue-100",
  },
  {
    icon: <Brain className="w-6 h-6 text-purple-600" />,
    title: "AI-Powered Protection",
    desc: "Our intelligent models learn from every interaction, adapting to new types of cyberattacks and phishing patterns instantly.",
    color: "bg-purple-100",
  },
  {
    icon: <Wifi className="w-6 h-6 text-green-600" />,
    title: "Secure Wi-Fi Monitoring",
    desc: "Detect unsafe Wi-Fi connections and protect your data when browsing, streaming, or working remotely.",
    color: "bg-green-100",
  },
  {
    icon: <Bell className="w-6 h-6 text-orange-600" />,
    title: "Instant Scam Alerts",
    desc: "Get AI-driven alerts for suspicious messages, emails, or offers — before you fall into a digital trap.",
    color: "bg-orange-100",
  },
  {
    icon: <Lock className="w-6 h-6 text-red-600" />,
    title: "Privacy Lockdown",
    desc: "AppGuard AI prevents unauthorized access, blocks trackers, and ensures your private data remains yours alone.",
    color: "bg-red-100",
  },
  {
    icon: <Cloud className="w-6 h-6 text-teal-600" />,
    title: "Cloud-Based Updates",
    desc: "Stay protected with automatic, lightweight cloud updates that ensure your defense is always one step ahead.",
    color: "bg-teal-100",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE - TEXT + FEATURES */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 leading-snug">
            Smart Security, <br />
            Powered by <span className="text-blue-600">AI Precision</span>
          </h2>
          <p className="text-gray-600 mb-10 text-lg leading-relaxed">
            AppGuard AI combines advanced machine learning with real-time
            protection to secure your devices, networks, and personal data.
            Experience seamless security designed for the modern digital world.
          </p>

          <div className="space-y-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <div
                  className={`p-3 rounded-full flex items-center justify-center ${feature.color}`}
                >
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE - BIGGER MOBILE IMAGE MOCKUP */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center relative"
        >
          {/* Soft background glow */}
          <div className="absolute -inset-16 bg-blue-100/60 blur-3xl rounded-full animate-pulse"></div>
          
          {/* iPhone image (BIGGER) */}
          <img
            src={Features}
            alt="AppGuard AI Mobile Mockup"
            className="relative z-10 w-[320px] md:w-[400px] lg:w-[460px] drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
