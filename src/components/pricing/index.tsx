import React from "react";
import PricingCard from "./PricingCard";
import { Button } from "../ui/button";

const Pricing = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-white px-4">
      {/* Animated Button */}
      <Button className="text-white font-semibold rounded-4xl py-2 px-6 transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 hover:text-gray-800 max-w-xs sm:max-w-md lg:max-w-lg mx-auto">
        Plans
      </Button>

      {/* Animated Heading & Description */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white animate-text mt-6 max-w-4xl mx-auto">
        Flexible plans for growth
      </h1>
      <p className="text-base sm:text-lg lg:text-xl text-center max-w-3xl mx-auto opacity-80 transform transition duration-500 hover:opacity-100 mt-4">
        Transparent pricing designed to fit your requirements.
      </p>

      {/* Pricing Cards */}
      <PricingCard />
    </div>
  );
};

export default Pricing;
