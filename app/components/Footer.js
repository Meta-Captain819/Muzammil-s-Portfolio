"use client"
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative backdrop-blur-md text-white py-8 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        
        <div className="text-center md:text-left">
          <motion.h2 
            whileHover={{ scale: 1.1 }}
            className="text-2xl font-bold text-darkBlue"
          >
            Muzammil Mehdi
          </motion.h2>
          <p className="text-gray-400 text-sm mt-2">&copy; 2025 All Rights Reserved</p>
        </div>

       

        <div className="mt-6 md:mt-0 flex space-x-4">
          {[
            { icon: <FaGithub size={24} />, link: "https://github.com/Meta-Captain819" },
            { icon: <FaLinkedin size={24} />, link: "https://www.linkedin.com/in/muzammil-mehdi-502a91226/" },
            { icon: <FaTwitter size={24} />, link: "https://x.com/MetaCaptain6?t=Uq08F7EVnXqaqttcKg7Dlw&s=08" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 10 }}
              className="p-3 bg-gray-800 rounded-full shadow-lg hover:bg-blue-500 transition duration-300"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
