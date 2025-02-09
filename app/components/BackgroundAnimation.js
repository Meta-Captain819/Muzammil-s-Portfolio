"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const BackgroundAnimation = () => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        const generateStars = () => {
            const newStars = Array.from({ length: 40 }, (_, i) => ({
                id: i,
                x: Math.random() * 120,
                delay: Math.random() * 4,
                size: Math.random() * 3 + 3, 
            }));
            setStars(newStars);
        };

        generateStars();
    }, []);

    return (
        <div className="fixed top-0 left-16 w-full h-full overflow-hidden pointer-events-none ">
            {stars.map((star) => (
                <motion.div
                    key={star.id}
                    initial={{ y: "-10%", opacity: 0 }}
                    animate={{ y: "100vh", opacity: 1 }}
                    transition={{
                        duration: Math.random() * 4 + 3, 
                        repeat: Infinity,
                        delay: star.delay,
                        ease: "linear",
                    }}
                    className="absolute bg-white rounded-full shadow-lg"
                    style={{
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        left: `${star.x}vw`,
                    }}
                />
            ))}
        </div>
    );
};

export default BackgroundAnimation;
