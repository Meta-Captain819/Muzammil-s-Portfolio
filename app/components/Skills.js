"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import { SiMongodb, SiFirebase, SiExpress,SiNextdotjs } from "react-icons/si";

const skills = [
  { name: "React.js", icon: <FaReact />, color: "text-blue-500" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "text-gray-800" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-600" },
  { name: "Express.js", icon: <SiExpress />, color: "text-green-600" },
  { name: "Tailwind CSS", icon: <TbBrandTailwind />, color: "text-cyan-500" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
  { name: "Firebase", icon: <SiFirebase />, color: "text-yellow-500" },
  { name: "Git", icon: <FaGitAlt />, color: "text-red-500" },
];

const SkillsSection = () => {
  return (
    <section className="py-20 ">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-darkBlue">My Skills</h2>
        <p className="text-lg text-gray-400 mt-2">Technologies I work with</p>
      </motion.div>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, staggerChildren: 0.2 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="relative bg-gray-950 p-6 rounded-xl transition-all hover:shadow-gray-900 shadow-xl flex flex-col items-center justify-center space-y-4  duration-1000 hover:scale-110 cursor-pointer group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className={`text-5xl ${skill.color} group-hover:scale-125 transition-all duration-500`}>
              {skill.icon}
            </div>
            <h3 className="text-white text-lg font-semibold">{skill.name}</h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SkillsSection;
