"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const projects = [
  {
    title: "E-Commerce Website",
    description: "Luxurious is an elegant e-commerce platform dedicated to offering a curated selection of high-end products for discerning customers. The website features a sleek and modern design, ensuring a seamless shopping experience.",
    image: "/luxurious.png",
    link: "https://luxurious-seven.vercel.app",
  },
  {
    title: "Admin Dashboard",
    description: "A powerful dashboard for managing orders and users. Admin Luxurious is a comprehensive administrative dashboard designed to manage the Luxurious e-commerce platform efficiently. It offers a suite of tools tailored for seamless backend operations.",
    image: "/admin.png",
    link: "https://admin-luxurious.vercel.app",
  },
  {
    title: "Global Pay",
    description: "GlobalPay is a cutting-edge platform that simplifies international transactions, making global payments seamless and secure. The website boasts a user-friendly interface. Allows transactions in various currencies, including cryptocurrencies.",
    image: "/globalpay.png",
    link: "https://globalpay-ten.vercel.app",
  },
  {
    title: "Hemophilia Balochistan",
    description: "The Hemophilia Welfare Society Balochistan website serves as an informative and supportive platform dedicated to individuals affected by Hemophilia. Educational content to raise awareness about the condition. A non-profit platform providing awareness, resources, and support for individuals affected by Hemophilia.",
    image: "/hemophilia.png",
    link: "https://hemophilia-balochistan.vercel.app",
  },
];

const details = [
  {
    name: "Luxurious",
    url: "https://luxurious-seven.vercel.app/",
    description: "Luxurious is an elegant e-commerce platform dedicated to offering a curated selection of high-end products for discerning customers. The website features a sleek and modern design, ensuring a seamless shopping experience.",
    features: [
      "Home: A captivating introduction to the brand's finest collections.",
      "Shop: A diverse range of luxury products categorized for easy navigation.",
      "About: Insights into the brand's philosophy and commitment to quality.",
      "Contact: Multiple channels for customer support, including email and phone."
    ],
    technical_details: "The platform is fully responsive, ensuring optimal performance across all devices. Developed with a focus on user experience, it integrates modern web technologies to provide a fast and intuitive interface.",
    image: "/luxurious.png"
  },
  {
    name: "Admin Luxurious",
    url: "https://admin-luxurious.vercel.app/",
    description: "Admin Luxurious is a comprehensive administrative dashboard designed to manage the Luxurious e-commerce platform efficiently.",
    features: [
      "Dashboard: An overview of key metrics and performance indicators.",
      "Orders: Real-time tracking and management of customer orders.",
      "Customer Management: Access to detailed customer profiles.",
      "Product Catalog: Capabilities to add, edit, or remove products with ease."
    ],
    technical_details: "Built with Next.js and Tailwind CSS for optimal performance and modern UI/UX design patterns. Mainly focused on fetching data from the backend.",
    image: "/admin.png"
  },
  {
    name: "GlobalPay",
    url: "https://globalpay-ten.vercel.app/",
    description: "GlobalPay is a cutting-edge platform that simplifies international transactions, making global payments seamless and secure.",
    features: [
      "Global Access: Connects users worldwide for cross-border transactions.",
      "Secure Transactions: Advanced encryption for payment safety.",
      "Real-Time Updates: Instant payment tracking system.",
      "Multi-Currency Support: Support for various currencies including crypto."
    ],
    technical_details: "Developed using modern web technologies with focus on security and performance.",
    image: "/globalpay.png"
  },
  {
    name: "Hemophilia Welfare Society Balochistan",
    url: "https://hemophilia-balochistan.vercel.app/",
    description: "A non-profit platform providing awareness, resources, and support for individuals affected by Hemophilia.",
    features: [
      "About Hemophilia: Educational content and awareness resources.",
      "Achievements: Organization milestones and success stories.",
      "Services: Support programs and community resources.",
      "Donate: Contribution portal for supporters.",
      "Contact: Organization contact information."
    ],
    technical_details: "Built with accessibility in mind, featuring a responsive and user-friendly design.",
    image: "/hemophilia.png"
  }
];
const Portfolio = () => {
  return (
    <section className="py-20 bg-transparent">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        viewport={{once:true}}

      >
        <h2 className="text-4xl font-bold text-darkBlue">My Portfolio</h2>
        <p className="text-lg text-gray-400 mt-2">
          Check out some of my featured projects.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-20 px-6 max-w-6xl cursor-pointer mx-auto"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, staggerChildren: 0.2 }}
        viewport={{once:true}}

      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className=" bg-gray-900 p-6 rounded-xl shadow-lg transition-all duration-700 hover:scale-105 hover:shadow-darkBlue overflow-hidden group"

          >
            <div className="relative overflow-hidden">
              <a href={project.link}>

                <Image
                  src={project.image}
                  alt={project.title}
                  width={620}
                  height={400}
                  className=" h-40 md:h-56 object-cover rounded-lg transition-all duration-500 hover:scale-105"
                />


              </a>

            </div>

            <a href={project.link}>

              <div className="mt-4">
                <h3 className="text-2xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 mt-2">{project.description}</p>
              </div>
            </a>

            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className=" mt-3 overflow-hidden flex items-center justify-start opacity-0 translate-x-[-200px] group-hover:translate-x-4 group-hover:opacity-100 transition-all duration-1000 ease-in-out"
            >

              <FaArrowRight className="text-white" size={25} />
            </motion.a>
          </motion.div>
        ))}
      </motion.div>

<section className="mt-28 max-w-8xl mx-auto px-6">
  <motion.h2 
    className="text-4xl font-bold text-darkBlue text-center mb-12"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{once:true}}

  >
    Detailed Project Overview
  </motion.h2>
  
  <div className="grid grid-cols-1 gap-24">
    {details.map((detail, index) => (
      <motion.div
        key={index}
        className="bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-darkBlue transition-all duration-500"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: index * 0.3 }}
        viewport={{once:true}}
      >
        <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
          <div className="relative h-[330px] rounded-lg overflow-hidden shadow-2xl shadow-black">
            <Image
              src={detail.image}
              alt={detail.name}
              fill
              className="object-cover hover:scale-105 transition-all duration-500 shadow-lg shadow-white"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">{detail.name}</h3>
              <a 
                href={detail.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2"
              >
                Visit Website <FaArrowRight size={12} />
              </a>
            </div>

            <p className="text-gray-300">{detail.description}</p>

            <div>
              <h4 className="text-xl font-semibold text-white mb-3">Key Features</h4>
              <ul className="space-y-2">
                {detail.features.map((feature, i) => (
                  <li key={i} className="text-gray-300 flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-2">Technical Overview</h4>
              <p className="text-gray-300">{detail.technical_details}</p>
            </div>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</section>


    </section>
  );
};

export default Portfolio;
