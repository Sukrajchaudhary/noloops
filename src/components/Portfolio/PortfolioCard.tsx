"use client"; 
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const PortfolioCard = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  
  const data = [
    {
      id: "1",
      url: "/assets/images/or.png",
    },
    {
      id: "2",
      url: "/assets/images/jpn.png",
    },
    {
      id: "3",
      url: "/assets/images/p1.png",
    },
    {
      id: "4",
      url: "/assets/images/p2.png",
    },
    {
      id: "5",
      url: "/assets/images/p3.png",
    },
  ];

  // Create a perfect loop by duplicating the data multiple times
  const duplicatedData = [...data, ...data, ...data, ...data, ...data, ...data];

  const handleMouseMove = (e:any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div 
      className="relative overflow-hidden w-full py-8 cursor-none"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Left gradient overlay */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
      
      {/* Right gradient overlay */}
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none"></div>

      {/* Custom cursor that follows mouse */}
      {isHovered && (
        <motion.div 
          className="absolute backdrop-blur-md bg-white/20 border border-white/30 rounded-full px-4 py-2 text-white font-medium shadow-lg flex items-center gap-2 z-20 pointer-events-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            x: mousePosition.x - 70, // Center the button on cursor
            y: mousePosition.y - 20
          }}
          transition={{ 
            duration: 0.1,
            type: "spring",
            stiffness: 800,
            damping: 30
          }}
        >
          <span>View Project</span>
          <ArrowUpRight size={16} className="text-white" />
        </motion.div>
      )}

      <motion.div
        className="flex gap-4 md:gap-6 lg:gap-8"
        animate={{
          x: [0, -100 * data.length * 3], // Move by the width of more original items for smoother loop
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "mirror", // Using mirror instead of loop to prevent glitches
            duration: 60, // Even slower for smoother animation
            ease: "linear",
          },
        }}
        style={{
          width: `calc(100% * ${duplicatedData.length / 2})`, // Make width responsive
        }}
      >
        {duplicatedData.map((item, index) => (
          <motion.div
            key={`${item.id}-${index}`}
            className="relative w-64 sm:w-72 md:w-80 h-48 sm:h-52 md:h-60 flex-shrink-0 overflow-hidden rounded-lg shadow-lg"
            whileHover={{
              scale: 1.05,
              y: -10,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            <div className="relative w-full h-full">
              <Image
                src={item.url}
                fill 
                style={{ objectFit: "cover" }}
                alt={`Portfolio item ${item.id}`}
                className="rounded-lg"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PortfolioCard;