"use client";

import { motion, useInView, type Variants } from "motion/react";
import { useRef } from "react";

/* ===================================================================
   BLUR TEXT — ReactBits Component
   Animates text characters or words with a beautiful blur-in-focus transition.
   =================================================================== */

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
  animateBy?: "words" | "letters";
}

export default function BlurText({
  text,
  className = "",
  delay = 0,
  animateBy = "letters"
}: BlurTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const elements = animateBy === "words" ? text.split(" ") : text.split("");

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: animateBy === "words" ? 0.08 : 0.02,
        delayChildren: delay / 1000,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, filter: "blur(8px)", y: 8 },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 1, 0.5, 1], // easeOutQuart
      },
    },
  };

  return (
    <motion.span
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`inline-block ${className}`}
    >
      {elements.map((el, i) => (
        <motion.span
          key={i}
          variants={itemVariants}
          className="inline-block"
          style={{ whiteSpace: "pre-wrap" }}
        >
          {el === "" ? "\u00A0" : el}
          {animateBy === "words" && i < elements.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </motion.span>
  );
}
