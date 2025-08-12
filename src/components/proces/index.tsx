"use client";
import React from "react";
import { motion } from "framer-motion";
import AnimatedCards from "./Card";
import { Button } from "../ui/button";

const ServiceCards = () => {
  return (
    <div className=" py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1.0],
            delay: 0.2,
          }}
          className="mb-4 flex justify-center"
        >
          <Button className="rounded-full text-white font-semibold py-2 px-6 transition-all duration-300 hover:scale-105">
            Process
          </Button>
        </motion.div>

        {/* Centered Text */}
        <div className="flex flex-col items-center justify-center text-center mb-8">
          <p className="text-white text-5xl max-w-xl">
            Your path to excellence
            <br />
            <span className="text-base font-normal">
              A simple, effective approach to deliver excellence.
            </span>
          </p>
        </div>

        {/* Cards Grid */}
        <AnimatedCards />
      </div>
    </div>
  );
};

export default ServiceCards;
