"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, px } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaTwitter, FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiTailwindcss } from "react-icons/si";
import Features from "./components/Features";
import SkillsSection from "./components/Skills";

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent text-white px-6 sm:px-12 py-12">
      <motion.div initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}>

        <section className="flex flex-col items-center text-center space-y-6 ">
          <h3 className="text-lg font-semibold text-gray-400">Welcome to My Portfolio</h3>
          <span className="text-4xl sm:text-5xl font-extrabold text-darkBlue sm:flex gap-2">
            <h1 className="text-white">Hello, I’m </h1> Muzammil Mehdi

          </span>

          <h2 className="text-xl sm:text-4xl font-medium text-gray-500">
            <Typewriter words={["Full Stack Web Developer", "Next.js Expert", "Creative Coder"]} loop={true} cursor />
          </h2>
          <p className="text-gray-200 w-full md:w-3/4">I am a highly skilled Full Stack Web Developer specializing in Next.js, React, and Tailwind CSS, with expertise in building modern, scalable, and high-performance web applications. From front-end design to back-end architecture and database management, I create seamless, user-friendly experiences. My portfolio showcases e-commerce platforms, admin dashboards, and global payment solutions, highlighting my ability to develop efficient, secure, and responsive web solutions.</p>

          <section className="mt-16 flex flex-col lg:flex-row justify-center items-center lg:items-start gap-16 w-full max-w-5xl">

            <div className=" sm:mt-16 flex flex-col items-center rounded-lg shadow-lg ">
              <h3 className="text-xl font-semibold mb-4">Connect with Me</h3>
              <div className="flex space-x-4">
                {[
                  { href: "https://github.com/Meta-Captain819", icon: <FaGithub size={20} />, label: "GitHub" },
                  { href: "https://linkedin.com", icon: <FaLinkedin size={20} />, label: "LinkedIn" },
                  { href: "https://x.com/MetaCaptain6?t=Uq08F7EVnXqaqttcKg7Dlw&s=08", icon: <FaTwitter size={20} />, label: "Twitter" },
                ].map((link, index) => (
                  <Link key={index} href={link.href} target="_blank">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center space-x-2 px-4 py-2 shadow-black transition-all duration-500  bg-darkBlue rounded-lg shadow-xl"
                    >
                      {link.icon}
                    </motion.button>
                  </Link>
                ))}
              </div>
            </div>

            <div className="sm:mt-16 flex flex-col items-center  rounded-lg shadow-lg ">
              <h3 className="text-xl font-semibold mb-4">Expert Skills</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { name: "", icon: <SiNextdotjs size={20} /> },
                  { name: "", icon: <FaReact size={20} /> },
                  { name: "", icon: <SiTailwindcss size={20} /> },
                  { name: "", icon: <FaNodeJs size={20} /> },
                  { name: "", icon: <SiMongodb size={20} /> },
                ].map((skill, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.1, cursor: "pointer" }}
                    className="flex items-center shadow-black  px-4 py-2 transition-all duration-500 bg-gray-800 rounded-lg shadow-xl"
                  >
                    {skill.icon}
                    <span>{skill.name}</span>
                  </motion.span>
                ))}
              </div>
            </div>
          </section>
        </section>
      </motion.div>
      <div className="mt-20">

        <Features />
      </div>

      <div className="mt-12">

<SkillsSection />
</div>

<motion.div

initial={{opacity:0, y:100}}
transition={{duration:1.5}}

whileDrag={{opacity:0, y:100}}
whileInView={{opacity:1, y:5}}>

      <div className="flex flex-col justify-center items-center gap-8">
        <h1 className="text-darkBlue mx-auto text-4xl font-extrabold">Explore Portfolio</h1>
        <p className="w-3/4 text-center">
          Explore my portfolio to discover a diverse collection of websites I have built using various web development technologies, including modern frameworks, dynamic programming languages, and efficient database management systems. Each project showcases my expertise in front-end and back-end development, responsive design, and seamless user experiences.
        </p>
        <Link href="/portfolio">
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "#112cec", }}
            whileTap={{ scale: 0.2 }}
            className="px-16 py-4 bg-darkBlue text-white font-semibold rounded-lg shadow-xl shadow-black hover:shadow-darkGray transition-all duration-500"
            >
            Portfolio
          </motion.button>
        </Link>
      </div>
            </motion.div>

            

    </div>
  );
}
