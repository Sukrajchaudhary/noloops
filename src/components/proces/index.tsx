"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  staggerContainer, 
  getDirectionalAnimation,
  getScaleIn
} from "@/lib/animations/motion";

const ServiceCards = () => {
  const services = [
    {
      id: 1,
      title: "Discovery & Analysis",
      description:
        "We dive deep into your needs, exploring ideas and defining strategies for long-term success.",
      image:
        "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
      date: "Strategy Phase",
      category: "Analysis",
    },
    {
      id: 2,
      title: "Design & Development",
      description:
        "We create stunning, functional designs and develop robust solutions tailored to your business requirements.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=764&q=80",
      date: "Creation Phase",
      category: "Development",
    },
    {
      id: 3,
      title: "Launch & Optimization",
      description:
        "We ensure smooth deployment and continuous optimization for maximum performance and user engagement.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=764&q=80",
      date: "Launch Phase",
      category: "Optimization",
    },
  ];

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer(0.1, 0.05)}
        >
          <motion.h2 
            variants={getScaleIn(0.05)}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            whileInView={{ 
              textShadow: "0 0 8px rgba(255,255,255,0.3)",
              transition: { delay: 0.3, duration: 0.5 }
            }}
          >
            Our Process
          </motion.h2>
          <motion.p 
            variants={getDirectionalAnimation('bottom', 0.2)}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            whileInView={{ 
              opacity: [null, 0.8, 1],
              transition: { times: [0, 0.7, 1], duration: 1.2 }
            }}
          >
            From concept to completion, we guide you through every step of your
            digital transformation
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer(0.12, 0.05)}
        >
          {services.map((service, index) => {
            // Determine animation direction based on index
            // Using modulo for consistent animation patterns
            const direction = 
              index % 3 === 0 ? 'left' : 
              index % 3 === 2 ? 'right' : 'bottom';
              
            return (
            <motion.article
              key={service.id}
              variants={getDirectionalAnimation(direction, 0.05 * index)}
              className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 bg-black/70 backdrop-blur-lg border border-white/20"
              whileHover={{ y: -5, transition: { duration: 0.3, ease: "easeOut" } }}
            >
              {/* Image */}
              <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden">
                <img
                  alt={service.title}
                  src={service.image}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-semibold text-white bg-blue-600/90 backdrop-blur-sm rounded-full">
                    {service.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <time className="block text-sm text-blue-400 font-medium mb-2">
                  {service.date}
                </time>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-200 leading-relaxed opacity-90">
                  {service.description}
                </p>

                {/* Hover Effect Arrow */}
                <div className="mt-4 flex items-center text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                  <span className="text-sm font-medium mr-2">Learn More</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>

              {/* Glowing Border Effect on Hover */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-blue-500/50 transition-all duration-300 pointer-events-none"></div>
            </motion.article>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceCards;
