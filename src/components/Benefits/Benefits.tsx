"use client";

import { motion } from "framer-motion";
import { Zap, BarChart3, LineChart } from "lucide-react";

const benefits = [
  {
    icon: <Zap className="w-6 h-6 text-white" />,
    title: "Cost reduction",
    description:
      "Optimize processes and streamline operations to significantly reduce costs while improving efficiency.",
    gradientTop: "rgba(99, 102, 241, 0.4)",
    gradientBottom: "rgba(192, 132, 252, 0.4)",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-white" />,
    title: "Improved outcomes",
    description:
      "Leverage insights and strategies to enhance performance and achieve measurable results.",
    gradientTop: "rgba(16, 185, 129, 0.4)",
    gradientBottom: "rgba(59, 130, 246, 0.4)",
  },
  {
    icon: <LineChart className="w-6 h-6 text-white" />,
    title: "Increased productivity",
    description:
      "Automate repetitive tasks and refine workflows to boost team output.",
    gradientTop: "rgba(236, 72, 153, 0.4)",
    gradientBottom: "rgba(249, 115, 22, 0.4)",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    y: 50,
    x: i % 3 === 0 ? -25 : i % 3 === 2 ? 25 : 0,
  }),
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { type: "spring", damping: 12, stiffness: 100, duration: 0.5 },
  },
};

export default function Benefits() {
  return (
    <section className="py-20 px-6 bg-black text-white">
      <div className="text-center mb-12">
        <button className="px-4 py-1 rounded-full bg-white/10 text-sm border border-white/20 mb-4">
          Benefits
        </button>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Maximize efficiency and impact
        </h2>
        <p className="mt-3 text-white/80 max-w-2xl mx-auto">
          Discover the key benefits of working with us.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {benefits.map((b, index) => (
          <motion.div
            key={index}
            custom={index}
            //@ts-ignore
            variants={cardVariants}
            className="relative rounded-3xl shadow-2xl p-6 overflow-hidden hover:scale-105 transition-transform"
          >
            {/* Glass background */}
            <motion.div
              className="absolute inset-0 bg-white/10 backdrop-blur-lg border border-white/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />

            {/* Gradients */}
            <motion.div
              className="absolute top-0 left-0 w-28 h-28 rounded-tl-3xl"
              style={{
                background: `radial-gradient(circle at top left, ${b.gradientTop} 0%, transparent 70%)`,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.7, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-28 h-28 rounded-br-3xl"
              style={{
                background: `radial-gradient(circle at bottom right, ${b.gradientBottom} 0%, transparent 70%)`,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.7, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 border border-white/20 mb-5">
                {b.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{b.title}</h3>
              <p className="text-white/70 text-sm">{b.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
