"use client";

import React from "react";
import { motion } from "framer-motion";
import { continuousSlider } from "@/lib/animations/motion";

interface SliderProps {
  items: string[];
  className?: string;
}

const Slider: React.FC<SliderProps> = ({ items, className = "" }) => {
  // Duplicate items to ensure continuous loop
  const duplicatedItems = [...items, ...items, ...items, ...items];
  
  return (
    <div className={`w-md mx-auto overflow-hidden relative ${className}`}>
      <div className="relative w-full">
        {/* Left fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none backdrop-blur-sm"></div>
        
        <motion.div
          className="flex items-center justify-center whitespace-nowrap py-2 relative z-0"
          variants={continuousSlider}
          initial="initial"
          animate="animate"
        >
          {duplicatedItems.map((item, index) => (
            <div 
              key={index} 
              className="inline-block px-5 py-2 mx-3 bg-blue-600/20 backdrop-blur-sm rounded-full text-center min-w-max"
            >
              {item}
            </div>
          ))}
        </motion.div>
        
        {/* Right fade effect */}
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none backdrop-blur-sm"></div>
      </div>
    </div>
  );
};

export default Slider;