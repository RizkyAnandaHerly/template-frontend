"use client";

import Lottie from "lottie-react";
import mascotData from "../../../public/animations/mascot.json";
import { motion } from "motion/react";

/* ===================================================================
   LOTTIE WALKING MASCOT — creative floating portfolio buddy
   Renders public/animations/mascot.json as a premium floating character.
   =================================================================== */

export default function MascotWalk() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.5, ease: "easeOut" }}
      className="fixed bottom-6 right-6 z-40 w-16 h-16 md:w-20 md:h-20 pointer-events-auto bg-[rgba(9,9,10,0.7)] backdrop-blur-md border border-[var(--color-border-dark)] rounded-2xl p-1.5 hover:scale-105 active:scale-95 hover:border-[var(--color-accent-primary)]/40 transition-all duration-300 shadow-[var(--shadow-xl)] cursor-grab group select-none"
    >
      {/* Status Tooltip */}
      <div className="absolute right-0 bottom-full mb-2 bg-[var(--color-bg-dark)] text-[var(--color-accent-primary)] font-mono text-[9px] uppercase tracking-widest py-1.5 px-3 rounded-lg border border-[var(--color-border-dark)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg">
        rizky_bot.sh [active]
      </div>
      
      {/* Lottie Animation */}
      <Lottie
        animationData={mascotData}
        loop={true}
        className="w-full h-full object-contain"
      />
    </motion.div>
  );
}
