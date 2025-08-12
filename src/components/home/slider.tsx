"use client";

import React from "react";
import { motion } from "framer-motion";
import { continuousSlider } from "@/lib/animations/motion";

interface SliderProps {
  items: string[];
  className?: string;
}

const Slider: React.FC<SliderProps> = ({ items, className = "" }) => {
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div
      className={`w-full max-w-5xl mx-auto overflow-hidden relative ${className}`}
    >
      <div className="relative w-full">
        <motion.div
          className="flex items-center justify-center whitespace-nowrap py-2 relative z-0"
          //@ts-ignore
          variants={continuousSlider}
          initial="initial"
          animate="animate"
        >
          {duplicatedItems.map((item, index) => (
            <div
              key={index}
              className="inline-block px-4 py-2 mx-3 bg-blue-600/20 backdrop-blur-sm rounded-full text-center min-w-max"
            >
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Slider;
