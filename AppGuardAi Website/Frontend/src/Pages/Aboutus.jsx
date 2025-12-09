import React, { useEffect } from "react";
import { ShieldCheck, Eye, CheckCircle2 } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <section className="bg-white py-24 px-6 md:px-16" id="about">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                {/* LEFT CONTENT */}
                <div data-aos="fade-right">
                    <p className="text-blue-600 uppercase font-semibold tracking-wider mb-3">
                        About Us
                    </p>
                    <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6 leading-snug">
                        <span className="block mb-4">Securing the Digital World</span>
                        with{" "}
                        <span className="relative text-blue-600">
                            AI Intelligence
                            <span className="absolute left-0 bottom-1 w-full h-3 bg-blue-100 -z-10 rounded-full"></span>
                        </span>
                    </h2>

                    <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                        At <strong>AppGuardAI</strong>, we’re dedicated to protecting users
                        and organizations from the growing threat of fake, cloned, and malicious
                        applications. Our AI-powered detection engine continuously analyzes
                        application behavior, permissions, and authenticity to ensure your
                        digital ecosystem stays 100% secure.
                    </p>

                    {/* Mission & Vision Cards */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {/* Mission */}
                        <div
                            className="p-6 rounded-xl shadow-md border hover:shadow-lg transition bg-white"
                            data-aos="fade-up"
                        >
                            <div className="bg-blue-50 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                                <ShieldCheck className="w-7 h-7 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Our Mission
                            </h3>
                            <p className="text-gray-600 text-base mb-4">
                                To eliminate fake and cloned apps using next-generation
                                AI models that ensure trust, safety, and authenticity in every
                                digital experience.
                            </p>
                            <div className="space-y-2 text-gray-700">
                                <p className="flex items-center gap-2">
                                    <CheckCircle2 className="text-blue-500 w-5 h-5" />
                                    Trusted by early adopters & testers.
                                </p>
                                <p className="flex items-center gap-2">
                                    <CheckCircle2 className="text-blue-500 w-5 h-5" />
                                    Scanning apps with 98% accuracy.
                                </p>
                            </div>
                        </div>

                        {/* Vision */}
                        <div
                            className="p-6 rounded-xl shadow-md border hover:shadow-lg transition bg-white"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <div className="bg-blue-50 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                                <Eye className="w-7 h-7 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Our Vision
                            </h3>
                            <p className="text-gray-600 text-base mb-4">
                                To transform mobile and desktop security through real-time
                                AI-driven protection, ensuring every app you use is authentic,
                                verified, and safe.
                            </p>
                            <div className="space-y-2 text-gray-700">
                                <p className="flex items-center gap-2">
                                    <CheckCircle2 className="text-blue-500 w-5 h-5" />
                                    Empowering digital trust globally.
                                </p>
                                <p className="flex items-center gap-2">
                                    <CheckCircle2 className="text-blue-500 w-5 h-5" />
                                    Built with transparency & innovation.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Button */}
                    <div className="mt-10">
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-full shadow-md transition"
                        >
                            Contact Us →
                        </a>
                    </div>
                </div>

                {/* RIGHT IMAGES */}
                <div
                    className="grid grid-cols-2 gap-6"
                    data-aos="fade-left"
                    data-aos-delay="200"
                >
                    <img
                        src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51"
                        alt="Team collaboration"
                        className="rounded-2xl shadow-lg object-cover w-full h-[250px]"
                    />
                    <img
                        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                        alt="Security discussion"
                        className="rounded-2xl shadow-lg object-cover w-full h-[250px] mt-10"
                    />
                    <img
                        src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9"
                        alt="Developers working"
                        className="rounded-2xl shadow-lg object-cover w-full h-[250px]"
                    />
                    <img
                        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
                        alt="AI research"
                        className="rounded-2xl shadow-lg object-cover w-full h-[250px] mt-10"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
