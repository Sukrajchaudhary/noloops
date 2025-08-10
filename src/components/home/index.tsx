"use client";

import React, { Fragment } from "react";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { particlesInit, particlesConfig } from "@/lib/animations/particles";
import { 
  fadeIn, 
  fadeInUp, 
  fadeInDown, 
  buttonHover, 
  arrowAnimation,
  getStaggeredFadeIn,
  getStaggeredFadeInUp
} from "@/lib/animations/motion";
import Slider from "./slider";

const Homepage = () => {

  return (
    <Fragment>
      {/* Reduced blue gradient in top left */}
      <div className="fixed top-0 left-0 w-[35vw] h-[35vh] bg-gradient-to-br from-blue-600 via-blue-400 to-transparent opacity-20 rounded-full blur-3xl z-0"></div>
      
      {/* Reduced blue gradient in bottom right */}
      <div className="fixed bottom-0 right-0 w-[35vw] h-[35vh] bg-gradient-to-tl from-blue-600 via-blue-400 to-transparent opacity-20 rounded-full blur-3xl z-0"></div>
      
      {/* Particles background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
        className="absolute inset-0 z-0"
      />
      
      <div className="text-white relative h-[90vh] w-full flex items-center justify-center px-4">
        <motion.div 
          {...fadeInUp}
          className="text-center max-w-7xl gap-y-3 mx-auto w-full z-10 relative"
        >
          {/* Button */}
          <motion.div
            {...fadeInDown}
          >
            <Button className="mb-4 md:mb-6 text-sm md:text-base rounded-full px-3 md:px-5">
              Noloops-Innovations Outside the Cycle
            </Button>
          </motion.div>
          {/* Reverse prismatic text layout - first line large, second smaller, third smallest */}
          <div className="flex flex-col items-center justify-center gap-2">
            <motion.h1 
              {...getStaggeredFadeIn(0.4)}
              className="text-4xl sm:text-5xl md:text-7xl tracking-wide max-w-[95vw] sm:max-w-[85vw] md:max-w-[75vw] lg:max-w-[70vw] mx-auto font-bold leading-tight"
            >
              Building the future with 
            </motion.h1>
            <motion.h2 
              {...getStaggeredFadeIn(0.5)}
              className="text-3xl sm:text-4xl md:text-6xl tracking-wide max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[65vw] mx-auto font-bold leading-tight"
            >
              next-level digital solutions
            </motion.h2>
            <motion.p 
              {...getStaggeredFadeIn(0.6)}
              className="text-base sm:text-lg md:text-xl tracking-wide max-w-[85vw] sm:max-w-[65vw] md:max-w-[45vw] lg:max-w-[35vw] mx-auto leading-relaxed mb-3 md:mb-4"
            >
              From sleek websites to powerful apps, engaging designs to smart
              marketing — we bring innovation outside the cycle to grow your
              business.
            </motion.p>
          </div>

          {/* Buttons - responsive layout */}
          <motion.div 
            {...getStaggeredFadeInUp(0.8)}
            className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-5 mt-4 md:mt-5 justify-center items-center"
          >
            <motion.div {...buttonHover}>
              <Button className="bg-blue-700 flex justify-center items-center text-sm md:text-base rounded-full px-4 md:px-6 py-2 md:py-3 w-full sm:w-auto">
                Our Services
                <motion.div
                  {...arrowAnimation}
                >
                  <ArrowUpRight className="ml-1" />
                </motion.div>
              </Button>
            </motion.div>
            <motion.div {...buttonHover}>
              <Button className="bg-blue-700 flex justify-center items-center text-sm md:text-base rounded-full px-4 md:px-6 py-2 md:py-3 w-full sm:w-auto">
                See Plans
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Slider component */}
          <motion.div
            {...getStaggeredFadeInUp(1.0)}
            className="mt-10 flex justify-center"
          >
            <Slider 
              className="py-2"
              items={[
                "Web Development", 
                "Mobile Apps", 
                "UI/UX Design", 
                "Digital Marketing", 
                "Cloud Solutions", 
                "AI Integration", 
                "Blockchain"
              ]}
            />
          </motion.div>
        </motion.div>
      </div>
    </Fragment>
  );
};

export default Homepage;
