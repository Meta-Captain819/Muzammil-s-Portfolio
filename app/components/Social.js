"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socialLinks = [
  {
    name: "GitHub",
    icon: <FaGithub size={40} className="text-white" />,
    url: "https://github.com/Meta-Captain819",
    bg: "bg-gray-900",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={40} className="text-white" />,
    url: "https://linkedin.com/in/your-profile",
    bg: "bg-blue-600",
  },
  {
    name: "Twitter",
    icon: <FaTwitter size={40} className="text-white" />,
    url: "https://x.com/MetaCaptain6?t=Uq08F7EVnXqaqttcKg7Dlw&s=08",
    bg: "bg-blue-400",
  },
];

const SocialLinks = () => {
  return (
    <section className="py-16 bg-transparent">
      <motion.div 
        className="text-center mb-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-white">Connect With Me</h2>
        <p className="text-lg text-gray-400 mt-2">Find me on these platforms</p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-6 px-6">
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            whileHover={{scale:1.1}}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative flex flex-col items-center justify-center w-40 h-40 ${link.bg} rounded-2xl shadow-xl transition-all duration-500  hover:shadow-darkGray hover:scale-125`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1 }}
          >
            {link.icon}
            <span className="text-white mt-3 text-lg font-semibold">{link.name}</span>
            <motion.div
              className="absolute inset-0 bg-white opacity-10 rounded-2xl"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.2 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default SocialLinks;
