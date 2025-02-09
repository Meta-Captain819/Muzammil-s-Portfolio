"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="fixed sm:sticky top-0 left-0 w-full flex justify-between items-center px-8 py-4 backdrop-blur-md text-white z-50"
        >
            <div className="flex items-center space-x-4">
                <Image
                    src="/me.png"
                    alt="Profile"
                    width={40}
                    height={40}
                    className="rounded-full"
                />
                <span className="text-xl font-bold text-darkBlue ">Muzammil Mehdi</span>

            </div>
            <div className="md:hidden ml-56">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-white focus:outline-none"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>

            <div
                className={`lg:flex ${isMenuOpen ? "max-h-[300px] absolute top-full left-0 right-0 opacity-100 bg-black" : "max-h-0 opacity-0"} 
                    lg:max-h-full lg:opacity-100 transition-all duration-500 ease-in-out 
                       py-4 px-8 space-y-4`}
            >
                <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 text-lg font-medium items-center">
                    <li className="hover:scale-125 transition-all duration-500">
                        <Link
                            href="/"
                            className="hover:text-darkBlue  transition-all duration-300"
                        >
                            Home
                        </Link>
                    </li>
                    <li className="hover:scale-125 transition-all duration-500">
                        <Link
                            href="/about"
                            className="hover:text-darkBlue  transition-all duration-300"
                        >
                            About
                        </Link>
                    </li>
                    <li className="hover:scale-125 transition-all duration-500">
                        <Link
                            href="/contact"
                            className="hover:text-darkBlue  transition-all duration-300"
                        >
                            Contact
                        </Link>
                    </li>

                    <Link href="/portfolio">
                        <motion.button
                            whileHover={{ scale: 1.1, backgroundColor: "#112cec" }}
                            whileTap={{ scale: 0.2 }}
                            className="px-5 py-2 bg-darkBlue text-white font-semibold rounded-lg shadow-lg hover:shadow-darkGray transition-all duration-500 text-[13px]"
                        >
                            Portfolio
                        </motion.button>
                    </Link>
                </ul>
            </div>
        </motion.nav>
    );
};

export default Navbar;
