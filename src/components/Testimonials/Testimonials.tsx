"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "Noloops completely transformed our online presence. Our new website is fast, modern, and exactly what we needed to attract more customers.",
    name: "Sukraj Chaudary",
    role: "CEO, Himalaya Trek",
    avatar: "/avatars/sukraj.jpg",
  },
  {
    quote:
      "Their design team nailed our brand identity. From the logo to our social media visuals, everything feels consistent and professional.",
    name: "Suchit Amatya",
    role: "CEO, Expert education",
    avatar: "/avatars/suchit.jpg",
  },
  {
    quote:
      "We needed a mobile app for our delivery service, and Noloops delivered on time with every feature we requested. Couldn't be happier!",
    name: "Yogesh Sapkota",
    role: "Marketing director, Innolystic",
    avatar: "/avatars/yogesh.jpg",
  },
  {
    quote:
      "The team is responsive, creative, and truly cares about delivering quality work. Our traffic and engagement have grown significantly.",
    name: "Liam Walker",
    role: "Product manager, Brightpath",
    avatar: "/avatars/liam.jpg",
  },
  {
    quote:
      "From website development to social media marketing, Noloops has been our go-to partner. They make the whole process simple and stress-free.",
    name: "Miguel Torres",
    role: "IT consultant, Alphadege",
    avatar: "/avatars/miguel.jpg",
  },
  {
    quote:
      "Their design team nailed our brand identity. From the logo to our social media visuals, everything feels consistent and professional.",
    name: "Priya Sharma",
    role: "Founder, NexGen",
    avatar: "/avatars/priya.jpg",
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

const Testimonial = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <button className="px-4 py-1 rounded-full bg-white/10 text-sm border border-white/20 mb-4">
          Testimonials
        </button>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Trusted by satisfied clients
        </h2>
        <p className="mt-3 text-white/80 max-w-2xl mx-auto">
          Discover how we've driven growth and innovation.
        </p>
      </div>

      {/* Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            custom={index}
            //@ts-ignore
            variants={cardVariants}
            className="relative rounded-3xl shadow-2xl p-6 overflow-hidden hover:scale-105 transition-transform"
            style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
          >
            {/* Glassmorphism background */}
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
                background:
                  "radial-gradient(circle at top left, rgba(99, 102, 241, 0.4) 0%, rgba(99, 102, 241, 0.1) 50%, transparent 70%)",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.7, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-28 h-28 rounded-br-3xl"
              style={{
                background:
                  "radial-gradient(circle at bottom right, rgba(192, 132, 252, 0.4) 0%, rgba(192, 132, 252, 0.1) 50%, transparent 70%)",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.7, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full">
              <p className="text-sm sm:text-base text-white/90 mb-6">{t.quote}</p>

              <div className="flex items-center gap-3 mt-auto">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={40}
                  height={40}
                  className="rounded-full border border-white/20"
                />
                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-white/70 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonial;
