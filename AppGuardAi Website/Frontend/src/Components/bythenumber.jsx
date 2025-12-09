import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";

const ByTheNumbers = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const stats = [
    {
      title: "Mobile Breach",
      percentage: 90,
      desc: "of organizations experienced a breach in the last year.",
      color: "text-blue-600",
    },
    {
      title: "Phishing Attacks",
      percentage: 83,
      desc: "now specifically target mobile devices.",
      color: "text-red-500",
    },
    {
      title: "Mobile Malware",
      percentage: 150,
      desc: "surge in attacks; a number expected to continually rise.",
      color: "text-green-600",
    },
  ];

  return (
    <section className="bg-white text-gray-900 pt-6 pb-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center relative z-10">
        {/* Subtle gradient background for light mode */}
        <div className="absolute inset-0  bg-white to-gray-100 pointer-events-none" />

        {/* Heading */}
        <h2
          className="uppercase text-sm font-semibold text-blue-600 tracking-widest mb-2"
          data-aos="fade-up"
        >
          By the Numbers
        </h2>
        <h3
          className="text-3xl md:text-4xl font-medium text-gray-900 mb-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          The Mobile-First Attack Reality
        </h3>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x">
          {stats.map((item, index) => (
            <div
              key={index}
              className="p-10 flex flex-col items-center justify-center bg-white hover:bg-gray-50 transition"
              data-aos="zoom-in"
              data-aos-delay={index * 150}
            >
              <h4 className="text-xl font-semibold text-gray-700 mb-6">
                {item.title}
              </h4>
              <div
                className={`text-6xl md:text-7xl font-semibold ${item.color} mb-4 drop-shadow-[0_0_10px_rgba(0,0,0,0.05)]`}
              >
                <CountUp start={0} end={item.percentage} duration={2.5} />%
              </div>
              <p className="text-gray-600 text-m max-w-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ByTheNumbers;
