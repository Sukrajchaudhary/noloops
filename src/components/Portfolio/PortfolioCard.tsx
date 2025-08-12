"use client";

import React from "react";
// Import specific components instead of the entire library
import { motion as m } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const PortfolioCard: React.FC<{}> = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A modern e-commerce solution with seamless user experience and secure payment integration.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      tags: ["Web Development", "React", "Node.js", "MongoDB"]
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description: "Secure and intuitive mobile banking application with real-time transaction tracking.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      tags: ["Mobile App", "React Native", "Firebase", "UI/UX"]
    },
    {
      id: 3,
      title: "Corporate Branding",
      description: "Complete brand identity redesign for a leading tech company in the finance sector.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      tags: ["Branding", "Design", "Marketing"]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto">
      {projects.map((project) => (
        <m.div
          key={project.id}
          className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl hover:shadow-blue-500/20 transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: project.id * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -10 }}
        >
          <div className="relative h-48 overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="text-xs bg-blue-600/30 text-blue-200 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </m.div>
      ))}
    </div>
  );
};

export default PortfolioCard;