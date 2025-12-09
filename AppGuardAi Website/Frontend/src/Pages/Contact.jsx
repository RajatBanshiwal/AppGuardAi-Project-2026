import React from "react";
import { Headphones, PhoneCall, Building2, MessageSquare } from "lucide-react";

const Contact = () => {
  const contactCards = [
    {
      title: "AI Helpline",
      description:
        "Get instant assistance through our AI-powered chat support available 24/7 for queries, bug reports, or product help.",
      icon: <Headphones className="w-10 h-10 text-blue-600" />,
      action: "Start Chat",
      link: "#",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      title: "Contact Support",
      description:
        "Reach our support team for technical or business inquiries related to AppGuardAI solutions.",
      icon: <PhoneCall className="w-10 h-10 text-purple-600" />,
      action: "Call Now",
      link: "#",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      title: "Head Office",
      description:
        "Government Engineering College Ajmer, Rajasthan, India — our main hub for innovation and development.",
      icon: <Building2 className="w-10 h-10 text-blue-700" />,
      action: "View on Map",
      link: "#",
      gradient: "from-blue-700 to-cyan-600",
    },
    {
      title: "Feedback & Suggestions",
      description:
        "We value your feedback. Share your ideas and help us improve AppGuardAI’s security intelligence platform.",
      icon: <MessageSquare className="w-10 h-10 text-green-600" />,
      action: "Send Feedback",
      link: "#",
      gradient: "from-green-500 to-emerald-600",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 via-white to-gray-50">
      <div className="mx-auto max-w-7.5xl px-4 sm:px-6 lg:px-8">
        {/* ----- Header Section ----- */}
        <div className="md:flex gap-x-24 md:mb-20 mb-10 items-start">
          {/* Left Content */}
          <div className="md:mb-0 mb-6">
            <h2 className="text-gray-900 font-manrope text-4xl font-bold leading-tight mb-5 md:text-left text-center">
              Get In Touch With{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AppGuardAI
              </span>
            </h2>
            <p className="text-gray-600 text-lg leading-7 mb-7 md:text-left text-center">
              Have questions about clone detection, app verification, or
              cybersecurity? We’re always ready to assist you — anytime, anywhere.
            </p>
            <div className="flex md:justify-start justify-center">
              <button className="w-40 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 hover:from-blue-700 hover:to-purple-700 shadow-md text-white text-base font-semibold">
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Info Section */}
          <div className="border-l-2 md:border-blue-600 border-gray-200 px-10 py-6">
            <div className="mb-8 text-center md:text-left">
              <h6 className="text-gray-500 text-sm font-medium pb-3">
                Email Address
              </h6>
              <h3 className="text-gray-900 text-xl font-semibold leading-8">
                appguardai@gmail.com
              </h3>
            </div>
            <div className="text-center md:text-left">
              <h6 className="text-gray-500 text-sm font-medium pb-3">
                Phone Number
              </h6>
              <h3 className="text-gray-900 text-xl font-semibold leading-8">
                +91 000 800 050 2090
              </h3>
            </div>
          </div>
        </div>

        {/* ----- Contact Options Grid ----- */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
          {contactCards.map((card, index) => (
            <div
              key={index}
              className="relative group rounded-2xl overflow-hidden shadow-md hover:shadow-xl bg-white border border-gray-100 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition duration-500 rounded-2xl"
                style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}
              ></div>

              <div className="p-8 text-center flex flex-col items-center h-full justify-between">
                <div className="flex flex-col items-center space-y-4">
                  {card.icon}
                  <h5 className="text-gray-900 text-xl font-semibold">
                    {card.title}
                  </h5>
                  <p className="text-gray-600 text-base leading-6">
                    {card.description}
                  </p>
                </div>

                <button
                  className={`mt-6 w-36 py-2 rounded-full text-white font-semibold text-sm bg-gradient-to-r ${card.gradient} transition duration-500 hover:opacity-90`}
                >
                  {card.action}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
