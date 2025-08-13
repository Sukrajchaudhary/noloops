"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

const faqData = [
  {
    question: "What services does Noloops offer?",
    answer: "We provide complete digital solutions including web development, web design, mobile app development, graphic design, and social media marketing. Whether you need a simple website or a full-scale digital transformation, we've got you covered."
  },
  {
    question: "How long does it take to develop a website?",
    answer: "The timeline depends on the complexity of your project. A basic static website can take 1-2 weeks, while dynamic or custom websites may take 3-6 weeks. We'll give you a clear delivery schedule before starting."
  },
  {
    question: "Do you offer ongoing support after project completion?",
    answer: "Yes! We offer maintenance packages to keep your website or app updated, secure, and running smoothly. We also provide design updates and marketing support if needed."
  },
  {
    question: "Can you work with clients outside Nepal?",
    answer: "Absolutely. We work with both local and international clients. Communication is done through email, Zoom, or your preferred platform, and we ensure smooth collaboration no matter the location."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
      {/* Header */}
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.button
          className="px-4 py-1 rounded-full bg-white/10 text-sm border border-white/20 mb-4 relative overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
            animate={{ x: ["-100%", "100%"] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatDelay: 4,
              ease: "easeInOut",
            }}
          />
          <span className="relative z-10">FAQs</span>
        </motion.button>
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          We're here to help
        </h2>
        <p className="text-white/80 max-w-2xl mx-auto">
          FAQs designed to provide the information you need.
        </p>
      </motion.div>

      {/* Accordion */}
      <motion.div
        className="max-w-4xl mx-auto space-y-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {faqData.map((faq, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative rounded-2xl overflow-hidden"
          >
            {/* Glassmorphism background */}
            <motion.div
              className="absolute inset-0 bg-white/10 backdrop-blur-lg border border-white/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />

            {/* Top-left gradient */}
            <motion.div
              className="absolute top-0 left-0 w-32 h-32 rounded-tl-2xl"
              style={{
                background:
                  "radial-gradient(circle at top left, rgba(99, 102, 241, 0.4) 0%, rgba(99, 102, 241, 0.1) 50%, transparent 70%)",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.7, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />

            {/* Bottom-right gradient */}
            <motion.div
              className="absolute bottom-0 right-0 w-32 h-32 rounded-br-2xl"
              style={{
                background:
                  "radial-gradient(circle at bottom right, rgba(192, 132, 252, 0.4) 0%, rgba(192, 132, 252, 0.1) 50%, transparent 70%)",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.7, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            />

            <div className="relative z-10">
              {/* Question */}
              <motion.button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left p-6 flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <h3 className="text-lg sm:text-xl font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="flex-shrink-0"
                >
                  <ChevronUp className="w-5 h-5 text-white/70" />
                </motion.div>
              </motion.button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: "auto", 
                      opacity: 1,
                      transition: {
                        height: { duration: 0.4, ease: "easeInOut" },
                        opacity: { duration: 0.3, delay: 0.1 }
                      }
                    }}
                    exit={{ 
                      height: 0, 
                      opacity: 0,
                      transition: {
                        height: { duration: 0.3, ease: "easeInOut" },
                        opacity: { duration: 0.2 }
                      }
                    }}
                    className="overflow-hidden"
                  >
                    <motion.div 
                      className="px-6 pb-6"
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <div className="border-t border-white/10 pt-4">
                        <p className="text-white/80 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FAQ;