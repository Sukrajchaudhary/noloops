"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Linkedin, Twitter, Instagram, Facebook, Dribbble } from "lucide-react";

const Footer = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(sectionRef, { margin: "-20% 0px -20% 0px", amount: 0.2, once: true });

  const logoControls = useAnimation();
  const contentControls = useAnimation();
  const linksControls = useAnimation();

  useEffect(() => {
    if (!inView) return;
    (async () => {
      await logoControls.start("visible");
      await contentControls.start("visible");
      await linksControls.start("visible");
    })();
  }, [inView, logoControls, contentControls, linksControls]);

  const logoVariants = {
    hidden: { opacity: 0, y: -24 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1] 
      } 
    },
  } as const;

  const contentVariants = {
    hidden: { opacity: 0, x: -40, scale: 0.98 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 16,
        mass: 0.9,
        delay: 0.2,
      },
    },
  } as const;

  const linksVariants = {
    hidden: { opacity: 0, x: 40, scale: 0.98 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 110,
        damping: 18,
        delay: 0.4,
      },
    },
  } as const;

  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.6 + index * 0.1,
      },
    }),
  } as const;

  const socialIcons = [
    { icon: Linkedin, label: "LinkedIn" },
    { icon: Twitter, label: "Twitter" },
    { icon: Instagram, label: "Instagram" },
    { icon: Facebook, label: "Facebook" },
    { icon: Dribbble, label: "Behance" },
  ];

  return (
    <div 
      ref={sectionRef}
      className="relative  text-white py-20 px-6 md:px-40 overflow-hidden"
    >
      {/* Narrow Diagonal Gradient Beam */}
      <div
        className="absolute left-1/4 top-1/2 w-[600px] h-[120px] -rotate-[20deg] rounded-full opacity-40"
        style={{
          background: "linear-gradient(90deg, transparent, #512FEB, transparent)",
          filter: "blur(60px)",
        }}
      />

      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Mobile Layout */}
        <div className="block md:hidden w-full">
          {/* Logo Section */}
          <motion.div 
            className="relative z-10 mb-8"
            variants={contentVariants}
            initial="hidden"
            animate={contentControls}
            style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
          >
            <motion.div 
              className="flex items-center mb-6"
              variants={logoVariants}
              initial="hidden"
              animate={logoControls}
            >
              <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center mr-2">
                <span className="text-black font-bold text-lg">N</span>
              </div>
              <span className="text-xl font-bold">NOLOOPS</span>
            </motion.div>
            
            <p className="text-sm text-zinc-300 leading-relaxed mb-6">
              Your trusted partner in digital innovation — building smarter websites, apps,
              designs, and marketing strategies for smarter businesses..
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3 mb-8">
              {socialIcons.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.div
                    key={social.label}
                    custom={index}
                    variants={socialIconVariants}
                    initial="hidden"
                    animate={contentControls}
                    className="bg-zinc-800 hover:bg-zinc-700 p-2 rounded-lg cursor-pointer transition-colors group"
                    whileHover={{ 
                      scale: 1.1, 
                      transition: { type: "spring", stiffness: 300, damping: 20 } 
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent className="w-4 h-4 group-hover:text-purple-400 transition-colors" />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div 
            className="relative z-10 grid grid-cols-2 gap-8"
            variants={linksVariants}
            initial="hidden"
            animate={linksControls}
            style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
          >
            <div>
              <h4 className="font-semibold mb-4 text-white">Sections</h4>
              <ul className="space-y-2 text-zinc-300 text-sm">
                {["Process", "Services", "Benefits", "Plans", "Contact"].map((item, index) => (
                  <motion.li
                    key={item}
                    className="hover:text-white cursor-pointer transition-colors"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      transition: { 
                        delay: 0.8 + index * 0.1,
                        type: "spring",
                        stiffness: 200,
                        damping: 20
                      }
                    }}
                    whileHover={{ 
                      x: 5, 
                      color: "#ffffff",
                      transition: { type: "spring", stiffness: 300, damping: 20 } 
                    }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Pages</h4>
              <ul className="space-y-2 text-zinc-300 text-sm">
                {["Home", "Coming soon", "404"].map((item, index) => (
                  <motion.li
                    key={item}
                    className="hover:text-white cursor-pointer transition-colors"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      transition: { 
                        delay: 0.8 + index * 0.1,
                        type: "spring",
                        stiffness: 200,
                        damping: 20
                      }
                    }}
                    whileHover={{ 
                      x: 5, 
                      color: "#ffffff",
                      transition: { type: "spring", stiffness: 300, damping: 20 } 
                    }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Desktop Layout */}
        <motion.div 
          className="hidden md:block relative z-10 max-w-sm"
          variants={contentVariants}
          initial="hidden"
          animate={contentControls}
          style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
        >
          {/* Logo */}
          <motion.div 
            className="flex items-center mb-6"
            variants={logoVariants}
            initial="hidden"
            animate={logoControls}
          >
            <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center mr-2">
              <span className="text-black font-bold text-lg">N</span>
            </div>
            <span className="text-xl font-bold">NOLOOPS</span>
          </motion.div>
          
          <p className="text-sm text-zinc-300 leading-relaxed mb-6">
            Your trusted partner in digital innovation — building smarter websites, apps,
            designs, and marketing strategies for smarter businesses..
          </p>
          
          {/* Social Icons */}
          <div className="flex gap-3">
            {socialIcons.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.div
                  key={social.label}
                  custom={index}
                  variants={socialIconVariants}
                  initial="hidden"
                  animate={contentControls}
                  className="bg-zinc-800 hover:bg-zinc-700 p-2 rounded-lg cursor-pointer transition-colors group"
                  whileHover={{ 
                    scale: 1.1, 
                    transition: { type: "spring", stiffness: 300, damping: 20 } 
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent className="w-4 h-4 group-hover:text-purple-400 transition-colors" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
        
        {/* Right Side - Desktop */}
        <motion.div 
          className="hidden md:flex relative z-10 gap-16"
          variants={linksVariants}
          initial="hidden"
          animate={linksControls}
          style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
        >
          <div>
            <h4 className="font-semibold mb-4 text-white">Sections</h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              {["Process", "Services", "Benefits", "Plans", "Contact"].map((item, index) => (
                <motion.li
                  key={item}
                  className="hover:text-white cursor-pointer transition-colors"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    transition: { 
                      delay: 0.8 + index * 0.1,
                      type: "spring",
                      stiffness: 200,
                      damping: 20
                    }
                  }}
                  whileHover={{ 
                    x: 5, 
                    color: "#ffffff",
                    transition: { type: "spring", stiffness: 300, damping: 20 } 
                  }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Pages</h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              {["Home", "Coming soon", "404"].map((item, index) => (
                <motion.li
                  key={item}
                  className="hover:text-white cursor-pointer transition-colors"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    transition: { 
                      delay: 0.8 + index * 0.1,
                      type: "spring",
                      stiffness: 200,
                      damping: 20
                    }
                  }}
                  whileHover={{ 
                    x: 5, 
                    color: "#ffffff",
                    transition: { type: "spring", stiffness: 300, damping: 20 } 
                  }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;