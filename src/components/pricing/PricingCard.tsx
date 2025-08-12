"use client";
import React from "react";
import { motion } from "framer-motion";

const pricingPlans = [
  {
    name: "Basic",
    price: "1,000,000 NPR",
    icon: "💡",
    description:
      "Essential tools and features for starting your journey with ease.",
    action: "Go with this plan",
    features: [
      "Up to 5 pages",
      "Responsive Design",
      "Basic SEO optimization",
      "Contact form integration",
      "1 month support",
    ],
  },
  {
    name: "Professional",
    price: "1,500,000 NPR",
    icon: "⚙️",
    description:
      "Advanced capabilities designed to meet growing business needs.",
    action: "Go with this plan",
    features: [
      "Unlimited pages",
      "CMS integration",
      "Advanced SEO setup",
      "User login system",
      "2-month support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    icon: "🏢",
    description:
      "Comprehensive solutions tailored for large-scale business success.",
    action: "Schedule a call",
    features: [
      "Fully custom design & features",
      "E-commerce / booking systems",
      "API integrations",
      "Priority support",
      "Unlimited revisions until launch",
    ],
  },
];

const PricingCard = () => {
  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  // Card animation variants based on position
  const cardVariants = {
    hidden: (custom: number) => ({
      opacity: 0,
      y: 50,
      x: custom === 0 ? -25 : custom === 2 ? 25 : 0,
    }),
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              custom={index}
              //@ts-ignore
              variants={cardVariants}
              className="relative  rounded-3xl shadow-2xl p-8 overflow-hidden"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              {/* Dark Glassmorphism Center */}
              <motion.div
                className="absolute inset-0 bg-white/10 backdrop-blur-lg border border-white/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />

              {/* Blue Gradients at Top-left and Bottom-right */}
              <motion.div
                className="absolute top-0 left-0 w-28 h-28 rounded-tl-3xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.7, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{
                  background:
                    "radial-gradient(circle at top left, rgba(99, 102, 241, 0.4) 0%, rgba(99, 102, 241, 0.1) 50%, transparent 70%)",
                }}
              />

              <motion.div
                className="absolute bottom-0 right-0 w-28 h-28 rounded-br-3xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.7, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                style={{
                  background:
                    "radial-gradient(circle at bottom right, rgba(192, 132, 252, 0.4) 0%, rgba(192, 132, 252, 0.1) 50%, transparent 70%)",
                }}
              />

              <div className="relative z-10">
                {/* Header with animated icon */}
                <div className="text-white flex items-center gap-4 mb-4">
                  <motion.span
                    className="text-3xl sm:text-4xl"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    {plan.icon}
                  </motion.span>
                  <motion.h2
                    className="text-xl sm:text-2xl font-bold text-white"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    {plan.name}
                  </motion.h2>
                </div>

                {/* Description */}
                <motion.p
                  className="text-white/80 text-sm sm:text-base leading-relaxed mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  {plan.description}
                </motion.p>

                {/* Animated Price */}
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <strong className="text-3xl font-bold text-white">
                    {plan.price}
                  </strong>
                  {plan.price !== "Custom" && (
                    <span className="text-sm font-medium text-white/70 ml-1">
                      /month
                    </span>
                  )}
                </motion.div>

                {/* Animated button */}
                <motion.button
                  className="w-full rounded-full cursor-pointer border-2 border-indigo-500 bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2 text-sm sm:text-base font-bold text-white focus:ring-4 focus:ring-indigo-500/50 focus:outline-none mb-6 relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  {/* Button shine effect */}
                  <motion.div
                    className="absolute  inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: "easeInOut",
                    }}
                  />
                  <span className="relative z-10">{plan.action}</span>
                </motion.button>

                {/* Features section */}
                <motion.div
                  className="space-y-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <motion.h3
                    className="text-lg sm:text-xl font-semibold text-white mb-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 1.1 }}
                  >
                    Features
                  </motion.h3>
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center text-sm sm:text-base text-white/80"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: 1.2 + featureIndex * 0.1,
                        }}
                      >
                        <motion.span
                          className="mr-2 text-green-400"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                            delay: 1.3 + featureIndex * 0.1,
                          }}
                        >
                          ✓
                        </motion.span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

// Add keyframes for floating animation
const PricingCardStyles = () => (
  <style jsx global>{`
    @keyframes float {
      0%,
      100% {
        transform: translateY(0);
        opacity: 0.5;
      }
      50% {
        transform: translateY(-10px);
        opacity: 1;
      }
    }
  `}</style>
);

const PricingCardWithStyles = () => (
  <>
    <PricingCardStyles />
    <PricingCard />
  </>
);

export default PricingCardWithStyles;
