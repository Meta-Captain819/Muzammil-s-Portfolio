"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaReact, FaNodeJs, FaDocker } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiFirebase, SiExpress, SiNestjs, SiVercel, SiHeroku } from "react-icons/si";


const About = () => {
    const skills = [
        {
          title: "Frontend Development",
          skills: [
            { name: "React.js", icon: <FaReact size={24} /> },
            { name: "Next.js", icon: <SiNextdotjs size={24} /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss size={24} /> },
          ],
        },
        {
          title: "Backend Development",
          skills: [
            { name: "Node.js", icon: <FaNodeJs size={24} /> },
            { name: "Express.js", icon: <SiExpress size={24} /> },
          ],
        },
        {
          title: "Database Management",
          skills: [
            { name: "MongoDB", icon: <SiMongodb size={24} /> },
            { name: "Firebase", icon: <SiFirebase size={24} /> },
          ],
        },
        {
          title: "Deployment & DevOps",
          skills: [
            { name: "Vercel", icon: <SiVercel size={24} /> },
            { name: "Heroku", icon: <SiHeroku size={24} /> },
          ],
        },
      ];

  return (
    <section className="min-h-screen px-6 py-20 md:px-12 bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Hero Section */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{opacity: 1, y: 0}}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-extrabold text-darkBlue">About Me</h1>
        <p className="text-lg text-gray-400 mt-2">
          Passionate Full-Stack Web Developer crafting seamless experiences.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col md:flex-row items-center justify-center gap-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="relative w-60 h-60 rounded-full shadow-xl overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{duration:1}}
        >
          <Image src="/me.png" alt="Profile" layout="fill" objectFit="cover" />
        </motion.div>

        <motion.div className="max-w-2xl">
          <h2 className="text-3xl font-semibold text-white mb-4">Who Am I?</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            I am a skilled Full Stack Web developer with experience in Next.js, React,
            Node.js, and MongoDB. I love building responsive and performant
            applications that provide seamless user experiences.
          </p>
        </motion.div>
      </motion.div>

      
       <div>

        <h2 className="mx-auto max-w-4xl text-4xl mt-12 text-darkBlue font-bold">Skills</h2>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-6">
        {skills.map((category, index) => (
          <motion.div
          key={index}
          className="bg-gray-900 p-6 rounded-lg shadow-2xl shadow-black hover:scale-105 transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            >
            <h3 className="text-xl font-semibold mb-4 ">{category.title}</h3>
            <div className="flex flex-wrap gap-4">
              {category.skills.map((skill, i) => (
                  <motion.div
                  key={i}
                  className="flex cursor-pointer items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg shadow-lg hover:shadow-gray-950 shadow-black hover:shadow-xl transition-all duration-500"
                  whileHover={{ scale: 1.05 }}
                  >
                  {skill.icon}
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
        </div>
      </div>

     
    </section>
  );
};

export default About;
