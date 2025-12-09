import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  ShieldCheck,
  AlertTriangle,
  Brain,
  Cloud,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const stats = [
    {
      title: "Threats Detected",
      value: "12,489",
      change: "+9%",
      trend: "up",
      color: "from-blue-500 to-indigo-600",
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      name: "App Scan",
      route: "/features/scan",
    },
    {
      title: "Phishing Attempts Blocked",
      value: "3,276",
      change: "+4%",
      trend: "up",
      color: "from-purple-500 to-violet-600",
      icon: <AlertTriangle className="w-6 h-6 text-white" />,
      name: "Settings",
      route: "/settings",
    },
    {
      title: "AI Models Trained",
      value: "24",
      change: "+3%",
      trend: "up",
      color: "from-teal-500 to-cyan-600",
      icon: <Brain className="w-6 h-6 text-white" />,
      name: "Reports",
      route: "/features/reports",
    },
    {
      title: "Cloud Updates Delivered",
      value: "1,482",
      change: "+7%",
      trend: "up",
      color: "from-sky-400 to-blue-500",
      icon: <Cloud className="w-6 h-6 text-white" />,
      name: "Analytics",
      route: "/analytics",
    },
  ];

  return (
    <section
      id="home"
      className="
        bg-white
        w-full
        flex items-center justify-center
        px-5 sm:px-8 md:px-12 lg:px-8
        pt-8 md:pt-0 
      "
    >
      <div
        className="
          max-w-7xl
          w-full
          flex flex-col justify-center items-center
          h-full  my-12
        "
      >
        {/* 🔹 Heading */}
        <div data-aos="fade-down" className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            AppGuardAI Dashboard
          </h2>
          <p className="text-gray-600 text-sm md:text-base mt-2">
            Real-time AI-driven security insights & analytics
          </p>
        </div>

        {/* 🔹 Stats Cards Grid */}
        <div
          data-aos="fade-up"
          className="
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
            gap-4 md:gap-6 lg:gap-8
            w-full max-w-6xl
            justify-items-center
            text-center
          "
        >
          {stats.map((item, index) => (
            <div
              key={index}
              className={`
                bg-gradient-to-r ${item.color}
                p-4 md:p-5 lg:p-6
                rounded-2xl
                text-white
                shadow-md hover:shadow-2xl
                transform hover:scale-[1.05]
                transition-all duration-300
                w-full max-w-[280px] sm:max-w-[300px] md:max-w-[320px]
              `}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-sm uppercase font-semibold tracking-wide">
                  {item.title}
                </h3>
                <div className="bg-white/20 p-2 rounded-lg">{item.icon}</div>
              </div>

              <p className="text-3xl font-bold mb-1">{item.value}</p>
              <p
                className={`text-sm ${
                  item.trend === "up" ? "text-green-100" : "text-red-200"
                }`}
              >
                {item.change} <span className="opacity-80">Since last scan</span>
              </p>

              <a
                href={item.route}
                className="mt-3 inline-flex items-center text-white/90 hover:text-white text-sm font-medium"
              >
                {item.name}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
