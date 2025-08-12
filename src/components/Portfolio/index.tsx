import React from "react";
import { Button } from "../ui/button";
import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
      <div className="flex flex-col justify-center items-center gap-y-6 text-white">
        {/* Animated Button */}
        <Button className="text-white font-semibold rounded-4xl py-2 px-6 transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 hover:text-gray-800">
          Portfolio
        </Button>

        {/* Animated Heading & Description */}
        <h1 className="text-4xl font-bold text-center text-white animate-text">
          Showcasing Noloops’ Pioneering Works
        </h1>
        <p className="text-base text-center max-w-2xl mx-auto opacity-80 transform transition duration-500 hover:opacity-100">
          Showcasing innovation outside the cycle — from web and app development to design and marketing.
        </p>
      </div>

      {/* Portfolio Card with animation */}
      <div className="mt-10 flex justify-center items-center animate__animated animate__fadeIn">
        <PortfolioCard />
      </div>
    </div>
  );
};

export default Portfolio;
