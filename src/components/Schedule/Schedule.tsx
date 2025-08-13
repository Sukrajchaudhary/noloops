"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Schedule() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(sectionRef, { amount: 0.25, once: true });

  const glowCtrl = useAnimation();
  const headerCtrl = useAnimation();
  const subCtrl = useAnimation();
  const ctaCtrl = useAnimation();

  const [showGlow, setShowGlow] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const [showSub, setShowSub] = useState(false);
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    if (inView && !showGlow) setShowGlow(true);
  }, [inView, showGlow]);

  useEffect(() => {
    if (!showGlow) return;
    glowCtrl.start("visible").then(() => setShowHeader(true));
  }, [showGlow, glowCtrl]);

  useEffect(() => {
    if (!showHeader) return;
    headerCtrl.start("visible").then(() => setShowSub(true));
  }, [showHeader, headerCtrl]);

  useEffect(() => {
    if (!showSub) return;
    subCtrl.start("visible").then(() => setShowCTA(true));
  }, [showSub, subCtrl]);

  useEffect(() => {
    if (!showCTA) return;
    ctaCtrl.start("visible");
  }, [showCTA, ctaCtrl]);

  const glowV = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 0.3, scale: 1, transition: { duration: 0.8 } },
  } as const;

  const badgeV = {
    hidden: { opacity: 0, y: -16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  } as const;

  const titleV = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 18 } },
  } as const;

  const subV = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  } as const;

  const ctaV = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 16 } },
  } as const;

  return (
    <div
      ref={sectionRef}
      className="relative flex items-center justify-center py-20 md:py-24  text-white overflow-hidden"
    >
      {/* Gradient Glow (under content, non-interactive) */}
      {showGlow && (
        <motion.div
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
          variants={glowV}
          initial="hidden"
          animate={glowCtrl}
        >
          <div
            className="w-[240px] md:w-[320px] h-[240px] md:h-[320px] rounded-full blur-[90px]"
            style={{ background: "radial-gradient(circle, #512FEB, #512FEB)" }}
          />
        </motion.div>
      )}

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl w-full">
        {showHeader && (
          <motion.div
            className="inline-block bg-zinc-900 text-xs md:text-sm px-3 py-1 rounded-full mb-4"
            variants={badgeV}
            initial="hidden"
            animate={headerCtrl}
          >
            Noloops
          </motion.div>
        )}

        {showHeader && (
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]"
            variants={titleV}
            initial="hidden"
            animate={headerCtrl}
          >
            Let’s talk about <br />
            <span className="text-white">your next big move</span>
          </motion.h1>
        )}

        {showSub && (
          <motion.p
            className="mt-4 text-zinc-400 text-base md:text-lg lg:text-xl max-w-xl mx-auto"
            variants={subV}
            initial="hidden"
            animate={subCtrl}
          >
            Hop on a call with us to see how our services can accelerate your growth.
          </motion.p>
        )}

        {showCTA && (
          <motion.div className="mt-6" variants={ctaV} initial="hidden" animate={ctaCtrl}>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm md:text-base font-semibold bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-[#0099FF] focus:ring-offset-2 focus:ring-offset-[#0D0D0D] transition shadow-md"
            >
              Schedule a quick call
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          </motion.div>
        )}

        {showCTA && (
          <motion.p
            className="mt-3 text-zinc-500 text-xs md:text-sm"
            variants={subV}
            initial="hidden"
            animate={ctaCtrl}
          >
            <span className="text-gray-200">It’s</span> Free
          </motion.p>
        )}
      </div>
    </div>
  );
}
