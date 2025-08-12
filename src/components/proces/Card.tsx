import React from "react";
import { motion } from "framer-motion";

// AnimatedCards component using framer-motion for smooth animations
// This component displays service cards with various animation effects

const AnimatedCards = () => {
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

  const cardVariants = {
    left: {
      initial: { opacity: 0, x: -100, scale: 0.8 },
      animate: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: { duration: 0.6, ease: [0.25, 0.4, 0.55, 1.4], delay: 0.1 },
      },
    },
    right: {
      initial: { opacity: 0, x: 100, scale: 0.8 },
      animate: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: { duration: 0.6, ease: [0.25, 0.4, 0.55, 1.4], delay: 0.2 },
      },
    },
    bottom: {
      initial: { opacity: 0, y: 100, scale: 0.8 },
      animate: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease: [0.25, 0.4, 0.55, 1.4], delay: 0.3 },
      },
    },
  };

  const containerVariants = {
    initial: {},
    animate: {
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  return (
    <div className="">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => {
            // Determine animation direction based on index
            const direction =
              index % 3 === 0 ? "left" : index % 3 === 2 ? "right" : "bottom";

            return (
              <motion.article
                key={service.id}
                //@ts-ignore
                variants={cardVariants[direction]}
                className="group relative overflow-hidden rounded-2xl shadow-lg bg-black/70 backdrop-blur-lg border border-white/20 cursor-pointer"
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Background glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />

                {/* Image */}
                <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden">
                  <motion.img
                    alt={service.title}
                    src={service.image}
                    className="absolute inset-0 h-full w-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />

                  {/* Dark Color Overlay */}
                  <div className="absolute inset-0 bg-black/80"></div>
                </div>

                {/* Content */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-6"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.time
                    className="block text-sm text-blue-400 font-medium "
                    whileHover={{ color: "#60a5fa" }}
                  >
                    {service.date}
                  </motion.time>

                  <motion.h3
                    className="text-xl font-bold text-white mb-3 transition-colors duration-300"
                    whileHover={{ color: "#60a5fa" }}
                  >
                    {service.title}
                  </motion.h3>

                  <p className="text-sm text-gray-200 leading-relaxed opacity-90 ">
                    {service.description}
                  </p>

                  {/* Hover Effect Arrow */}
                  <motion.div
                    className="flex items-center text-blue-400"
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <span className="text-sm font-medium mr-2">Learn More</span>
                    <motion.svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </motion.svg>
                  </motion.div>
                </motion.div>

                {/* Glowing Border Effect on Hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border border-transparent"
                  whileHover={{
                    borderColor: "rgba(59, 130, 246, 0.5)",
                    boxShadow: "inset 0 0 20px rgba(59, 130, 246, 0.1)",
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"
                  style={{ width: "50%" }}
                />
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedCards;
