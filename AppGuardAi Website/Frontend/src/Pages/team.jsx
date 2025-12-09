import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Team = () => {
  const members = [
    {
      name: "Rajat Banshiwal",
      role: "CEO & Web Developer",
      description:
        "Rajat drives the technical strategy, architecture, and AI innovation behind the AppGuardAI platform and ecosystem.",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
      linkedin: "https://www.linkedin.com/in/rajat-banshiwal/",
      github: "https://github.com/rajatbanshiwal",
    },
    {
      name: "Musraf Khan",
      role: "CTO",
      description:
        "Jese leads the technical growth and AI-driven architecture of the AppGuardAI ecosystem.",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
      linkedin: "#",
      github: "#",
    },
    {
      name: "Vineet Kashyap",
      role: "Senior Front-end Developer",
      description:
        "Michael manages the UI/UX architecture and visual design for AppGuardAI’s user platform.",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
      linkedin: "#",
      github: "#",
    },
    {
      name: "Lana Byrd",
      role: "Marketing & Sales",
      description:
        "Lana leads digital marketing, partnerships, and global outreach for AppGuardAI.",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png",
      linkedin: "#",
      github: "#",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-12 px-4 mx-auto max-w-[88rem] lg:py-20 lg:px-6">
        {/* ---- Header ---- */}
        <div className="mx-auto max-w-screen-sm text-center mb-12 lg:mb-20">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Meet Our Team
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            The passionate individuals driving innovation, AI, and security at{" "}
            <span className="text-blue-600 font-semibold">AppGuardAI</span>.
          </p>
        </div>

        {/* ---- Team Members ---- */}
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2">
          {members.map((member, index) => (
            <motion.div
              key={index}
              className="flex flex-col sm:flex-row items-center bg-gray-50 rounded-2xl shadow-lg dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.03 }}
            >
              {/* Image */}
              <img
                className="w-full sm:w-48 sm:h-56 object-cover rounded-t-2xl sm:rounded-none sm:rounded-l-2xl"
                src={member.image}
                alt={member.name}
              />

              {/* Info */}
              <div className="p-6 text-center sm:text-left">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <span className="block text-gray-500 dark:text-gray-400">
                  {member.role}
                </span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  {member.description}
                </p>

                {/* Social Icons */}
                <div className="flex justify-center sm:justify-start space-x-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-600 transition-colors duration-300"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
