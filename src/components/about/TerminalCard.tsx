"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, useInView } from "motion/react";

/* ===================================================================
   TERMINAL CARD — Custom terminal typing simulation
   component-map.md: About section, sub-component
   Uses only useState, useEffect, and framer-motion (useInView).
   Cycles through terminal blocks every 3.2s, loops infinitely.
   Resets & restarts each time the component enters the viewport.
   =================================================================== */

interface TerminalBlock {
  cmd: string;
  output: string[];
}

const blocks: TerminalBlock[] = [
  {
    cmd: "whoami",
    output: [
      "rizky ananda herly",
      "information systems · telkom university",
      "backend developer + product manager",
    ],
  },
  {
    cmd: "cat skills.txt",
    output: [
      "backend    : laravel, c#, java, sql, mysql",
      "database   : schema design, query optimization",
      "management : pm, product strategy, stakeholder",
      "teaching   : database lab assistant (4 classes)",
    ],
  },
  {
    cmd: "git log --oneline",
    output: [
      "a1b2c3  feat: obatin — 1st place motionhack 5.0",
      "d4e5f6  build: warehouse management system",
      "g7h8i9  role: database lab teaching assistant",
      "j0k1l2  init: 100+ participants managed",
    ],
  },
];

export default function TerminalCard() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  // How many blocks are currently visible (0 = none, 1 = first block, etc.)
  const [visibleCount, setVisibleCount] = useState(0);

  // Reset and cycle through blocks when entering viewport
  const resetAndStart = useCallback(() => {
    setVisibleCount(0);
  }, []);

  useEffect(() => {
    if (!isInView) {
      // Reset when leaving viewport so it replays on re-entry
      resetAndStart();
      return;
    }

    // Show first block after a short initial delay
    const initialTimer = setTimeout(() => {
      setVisibleCount(1);
    }, 400);

    return () => clearTimeout(initialTimer);
  }, [isInView, resetAndStart]);

  useEffect(() => {
    if (!isInView || visibleCount === 0) return;

    // If all blocks are shown, wait then loop back
    if (visibleCount > blocks.length) {
      const loopTimer = setTimeout(() => {
        setVisibleCount(0);
        // Re-trigger from block 1 after a brief pause
        setTimeout(() => setVisibleCount(1), 600);
      }, 2000);
      return () => clearTimeout(loopTimer);
    }

    // Show next block after 3.2s
    if (visibleCount <= blocks.length) {
      const nextTimer = setTimeout(() => {
        setVisibleCount((prev) => prev + 1);
      }, 3200);
      return () => clearTimeout(nextTimer);
    }
  }, [isInView, visibleCount]);

  const displayedBlocks = blocks.slice(0, visibleCount);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-lg font-mono text-[12px] md:text-sm"
    >
      {/* Terminal Window */}
      <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0D0D0D] shadow-2xl">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#1A1A1A] border-b border-white/10 select-none">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28C840]" />
          <span className="ml-2 text-[10px] uppercase tracking-wider text-white/30">
            terminal — rizky@portfolio
          </span>
        </div>

        {/* Terminal Content */}
        <div className="p-5 min-h-[280px] space-y-4 text-left">
          {displayedBlocks.map((block, blockIdx) => (
            <motion.div
              key={`${blockIdx}-${visibleCount}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {/* Command line */}
              <div className="flex items-center gap-1.5 leading-relaxed">
                <span className="text-[#FFDD00]">$</span>
                <span className="text-white/80">{block.cmd}</span>
                {/* Blinking cursor on the last active block */}
                {blockIdx === displayedBlocks.length - 1 && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-2 h-4 bg-[#FFDD00] ml-0.5"
                  />
                )}
              </div>

              {/* Output lines with staggered animation */}
              {block.output.map((line, lineIdx) => (
                <motion.div
                  key={lineIdx}
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: lineIdx * 0.12, duration: 0.25 }}
                  className="text-white/50 ml-4 mt-1 leading-relaxed"
                >
                  {line}
                </motion.div>
              ))}
            </motion.div>
          ))}

          {/* Show blinking cursor when no blocks are visible (loading state) */}
          {visibleCount === 0 && isInView && (
            <div className="flex items-center gap-1.5 leading-relaxed">
              <span className="text-[#FFDD00]">$</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-2 h-4 bg-[#FFDD00] ml-0.5"
              />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
