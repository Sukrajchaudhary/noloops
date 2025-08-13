"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Build fast, secure, and scalable websites tailored to your business goals — from dynamic company profiles to complex web applications.",
      image: "/Services/Webdevelopment.gif",
      alt: "Web Development",
    },
    {
      id: 2,
      title: "Social Media Marketing",
      description:
        "Grow your online presence, engage your audience, and boost conversions with creative campaigns and data-driven strategies.",
      image: "/Services/socialmedia.png",
      alt: "Social Media Marketing",
    },
    {
      id: 3,
      title: "Mobile App Development",
      description:
        "Turn your ideas into powerful Android and iOS applications with smooth performance and intuitive design.",
      image: "/Services/mobileapp.gif",
      alt: "Mobile App Development",
    },
    {
      id: 4,
      title: "Web and Graphics Designing",
      description:
        "Extract actionable insights from complex data sets to drive informed decisions and accelerate business growth.",
      image: "/Services/Webdesign.png",
      alt: "Web and Graphics Designing",
    },
    {
      id: 5,
      title: "IT Consulting",
      description:
        "Work with our experts to develop personalized AI strategies that streamline operations and deliver impactful results.",
      image: "/Services/Itconsulting.png",
      alt: "IT Consulting",
    },
  ];

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(sectionRef, { margin: "-20% 0px -20% 0px", amount: 0.2, once: true });

  const headingControls = useAnimation();
  const topRowControls = useAnimation();
  const bottomRowControls = useAnimation();

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    const onChange = (e: MediaQueryListEvent | MediaQueryList) => setIsMobile(e.matches);
    onChange(mql);
    const handler = (e: MediaQueryListEvent) => onChange(e);
    mql.addEventListener ? mql.addEventListener("change", handler) : mql.addListener(handler as any);
    return () => {
      mql.removeEventListener ? mql.removeEventListener("change", handler) : mql.removeListener(handler as any);
    };
  }, []);

  useEffect(() => {
    if (!inView) return;
    (async () => {
      await headingControls.start("visible");
      await topRowControls.start("visible");
      await bottomRowControls.start("visible");
    })();
  }, [inView, headingControls, topRowControls, bottomRowControls]);

  const headerVariants = {
    hidden: { opacity: 0, y: -24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  } as const;

  const gridContainer = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: isMobile ? 0.25 : 0.05,
          delayChildren: 0.1,
        },
      },
    }),
    [isMobile]
  );

  const topRowCard = {
    hidden: (index: number) => ({
      opacity: 0,
      x: index === 0 ? -60 : index === 2 ? 60 : 0,
      y: index === 1 ? 60 : 0,
      rotateX: 2,
      scale: 0.98,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 16,
        mass: 0.9,
      },
    },
  } as const;

  const bottomRowCard = {
    hidden: (index: number) => ({
      opacity: 0,
      x: index === 0 ? -40 : 40,
      y: 20,
      scale: 0.985,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 110,
        damping: 18,
      },
    },
  } as const;

  const Media = ({ src, alt }: { src: string; alt: string }) => (
    <div className="relative w-full h-[260px] md:h-[250px] rounded-lg overflow-hidden mb-6 bg-black">
      <Image
        src={src}
        alt={alt}
        fill
        className="w-full h-full object-fill"
        unoptimized={src.endsWith(".gif") || src.includes(".gif")}
        sizes="(max-width: 768px) 100vw, 33vw"
        priority={false}
      />
    </div>
  );

  return (
    <div ref={sectionRef} className="py-20 px-6 md:px-20">
      <section className="px-4 md:px-8 lg:px-10 xl:px-[40px]">
        <motion.div
          className="flex justify-center mb-16"
          variants={headerVariants}
          initial="hidden"
          animate={headingControls}
        >
          <div className="border border-gray-700 rounded-xl px-6 py-2">
            <span className="text-sm font-medium text-white">Services</span>
          </div>
        </motion.div>

        <motion.div
          className="text-center pb-16"
          variants={headerVariants}
          initial="hidden"
          animate={headingControls}
        >
          <h1 className="text-4xl md:text-7xl font-bold mb-6 text-white">
            Innovative services for growth
          </h1>
          <p className="text-lg md:text-3xl text-gray-200">
            Tailored solutions to design, develop and grow your business.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6"
          variants={gridContainer}
          initial="hidden"
          animate={topRowControls}
        >
          {services.slice(0, 3).map((svc, i) => (
            <motion.div
              key={svc.id}
              custom={i}
              variants={topRowCard}
              className="bg-[#1a1a1a] rounded-3xl p-6 flex flex-col items-start relative overflow-hidden"
              style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
            >
              <Media src={svc.image} alt={svc.alt} />
              <h2 className="text-white text-2xl font-semibold mb-3">{svc.title}</h2>
              <p className="text-gray-400 text-lg">{svc.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={gridContainer}
          initial="hidden"
          animate={bottomRowControls}
        >
          {services.slice(3).map((svc, idx) => (
            <motion.div
              key={svc.id}
              custom={idx}
              variants={bottomRowCard}
              className="bg-[#1a1a1a] rounded-3xl p-6 flex flex-col items-start relative overflow-hidden"
              style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
            >
              <Media src={svc.image} alt={svc.alt} />
              <h2 className="text-white text-2xl font-semibold mb-3">{svc.title}</h2>
              <p className="text-gray-400 text-lg">{svc.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
