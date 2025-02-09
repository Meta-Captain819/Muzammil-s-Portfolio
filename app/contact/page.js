"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";
import SocialLinks from "../components/Social";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white p-6">
      <motion.h2
        className="text-4xl font-bold mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h2>

      <motion.div 
        className="bg-gray-800 p-8 rounded-2xl shadow-2xl max-w-lg w-full"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <form className="flex flex-col space-y-6">
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="p-4 rounded-xl bg-gray-900 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white transition-all duration-500 cursor-pointer hover:scale-105"
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="p-4 rounded-xl bg-gray-900 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white transition-all duration-500 cursor-pointer hover:scale-105"
          />
          <motion.textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            className="p-4 rounded-xl bg-gray-900 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white transition-all duration-500 cursor-pointer hover:scale-105"
          ></motion.textarea>
          <motion.button
            type="submit"
            className="p-4 bg-blue-600 rounded-xl hover:bg-blue-500 transition-all duration-500 hover:scale-105 shadow-md hover:shadow-gray-950"
            whileTap={{ scale: 0.9 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>

      <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
        {[{
          icon: <FaEnvelope size={30} />, label: "Email", value: "muzammilmehdi52@gmail.com"
        }, {
          icon: <FaPhone size={30} />, label: "Phone", value: "+92 348 8062645"
        }, {
          icon: <FaMapMarkerAlt size={30} />, label: "Location", value: "Quetta, Pakistan"
        }].map((info, index) => (
          <motion.div 
            key={index}
            className="bg-gray-800 p-6 rounded-xl shadow-2xl flex flex-col items-center justify-center text-center space-y-3 w-64"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-blue-500" >{info.icon}</div>
            <h3 className="text-lg font-semibold">{info.label}</h3>
            <p className="text-gray-300">{info.value}</p>
          </motion.div>
        ))}
      </motion.div>

      <SocialLinks />
    </section>
  );
};

export default ContactPage;
