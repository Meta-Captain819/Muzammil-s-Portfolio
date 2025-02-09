"use client";

import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaDatabase, FaServer, FaRocket, FaNetworkWired } from "react-icons/fa";

const features = [
  { 
    title: "Full Stack Development", 
    description: "Building complete web apps from front-end to back-end.", 
    icon: <FaCode size={30} />
  },
  { 
    title: "Front-End Development", 
    description: "Creating beautiful, responsive, and interactive UIs.", 
    icon: <FaLaptopCode size={30} />
  },
  { 
    title: "Back-End Development", 
    description: "Developing robust server-side applications and APIs.", 
    icon: <FaServer size={30} />
  },
  { 
    title: "Database Management", 
    description: "Efficient database structuring and optimization.", 
    icon: <FaDatabase size={30} />
  },
  { 
    title: "Next.js API Routes", 
    description: "Building powerful APIs using Next.js routes.", 
    icon: <FaNetworkWired size={30} />
  },
  { 
    title: "Deployment & Scaling", 
    description: "Deploying and optimizing apps for production.", 
    icon: <FaRocket size={30} />
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-transparent">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 100 }} 
        whileDrag={{opacity:0, y:100}}

        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1.5 }}
      >
        <h2 className="text-4xl font-bold text-darkBlue">What I Offer</h2>
        <p className="text-lg text-gray-400 mt-2">Explore my services in Web Development.</p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 100 }} 
        whileInView={{ opacity: 1, y: 0 }}
        whileDrag={{opacity:0, y:100}}

        transition={{ duration: 1.5, staggerChildren: 0.2 }}
      >
        {features.map((feature, index) => (
          <motion.div 
            key={index} 
            className="p-6 bg-gradient-to-tl from-black via-gray-950 to-black rounded-xl shadow-darkBlue shadow-md flex flex-col items-center text-center transition-all duration-700 transform hover:-translate-y-1 hover:shadow-3xl cursor-pointer  "
            whileHover={{ scale: 1.05,  }}
          >
            <div className="text-darkBlue mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
            <p className="text-gray-400 mt-2">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
