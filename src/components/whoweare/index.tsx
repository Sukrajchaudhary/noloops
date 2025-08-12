"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const WhoWeAre = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [revealedWords, setRevealedWords] = useState(0);
  const sectionRef = useRef(null); // Ref to track the section visibility
  
  const text = "We are Noloops — helping businesses like yours innovate outside the cycle with cutting-edge web, app, design, and marketing solutions.";
  const words = text.split(" ");
  
  // IntersectionObserver to detect when the component comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once it's visible
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let currentIndex = 0;
      
      const revealNextWord = () => {
        if (currentIndex < words.length) {
          setRevealedWords(currentIndex + 1);
          currentIndex++;
          
          let delay;
          if (currentIndex < 5) {
            delay = 100;
          } else if (currentIndex < 10) {
            delay = 120;
          } else {
            delay = 140;
          }
          
          setTimeout(revealNextWord, delay);
        }
      };
      
      setTimeout(revealNextWord, 50);
    }
  }, [isVisible, words.length]);
  
  return (
    <div 
      ref={sectionRef} 
      className="flex flex-col justify-center items-center py-16 px-4 text-white"
    >
      <div className="w-full flex justify-center mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            ease: [0.25, 0.1, 0.25, 1.0],
            delay: 0.2
          }}
        >
          <Button 
            className="rounded-full text-white font-semibold py-2 px-6 transition-all duration-300 hover:scale-105"
          >
            Who We Are
          </Button>
        </motion.div>
      </div>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-3xl font-semibold leading-relaxed text-center md:max-w-[45vw] max-w-full mx-auto text-white"
      >
        {words.map((word, index) => (
          <span
            key={index}
            className={`inline-block mr-1 transition-all duration-300 ${
              index < revealedWords 
                ? 'blur-none opacity-100 translate-y-0' 
                : 'blur-sm opacity-20 translate-y-1'
            }`}
            style={{
              transitionDelay: `${index * 0.02}s`,
              transitionTimingFunction: "cubic-bezier(0.4, 0.0, 0.2, 1)"
            }}
          >
            {word}
          </span>
        ))}
      </motion.p>
    </div>
  );
};

export default WhoWeAre;
