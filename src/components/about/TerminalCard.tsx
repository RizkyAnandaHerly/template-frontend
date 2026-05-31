"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "motion/react";

/* ===================================================================
   TERMINAL CARD — Replacing 3D Robot
   component-map.md: About section, sub-component 1
   Renders terminal typing animation lines with glowing yellow $ prompt
   and custom blinking cursor, restarting when scrolled into view.
   =================================================================== */

const terminalLines = [
  {
    cmd: "rizky@portfolio:~$ whoami",
    output: [
      "> rizky ananda herly",
      "> information systems · telkom university",
      "> backend developer + product manager",
    ],
    delay: 0,
  },
  {
    cmd: "rizky@portfolio:~$ cat skills.txt",
    output: [
      "> backend    : laravel, c#, java, sql, mysql",
      "> database   : schema design, query optimization",
      "> management : pm, product strategy, stakeholder",
      "> teaching   : database lab assistant (4 classes)",
    ],
    delay: 3000,
  },
  {
    cmd: "rizky@portfolio:~$ git log --oneline",
    output: [
      "> a1b2c3  feat: obatin — 1st place motionhack 5.0",
      "> d4e5f6  build: warehouse management system",
      "> g7h8i9  role: database lab teaching assistant",
      "> j0k1l2  init: 100+ participants managed",
    ],
    delay: 6500,
  },
  {
    cmd: "rizky@portfolio:~$ _",
    output: [],
    delay: 10000,
  },
];

export default function TerminalCard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [currentBlock, setCurrentBlock] = useState(0);

  // Reset and restart animation when in view
  useEffect(() => {
    if (!isInView) return;

    setCurrentBlock(0);

    const timer = setTimeout(() => {
      let block = 0;
      const interval = setInterval(() => {
        block++;
        setCurrentBlock(block);
        if (block >= terminalLines.length) clearInterval(interval);
      }, 3200);
      return () => clearInterval(interval);
    }, 500);

    return () => clearTimeout(timer);
  }, [isInView]);

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
          <span className="ml-2 text-[10px] uppercase tracking-wider text-white/30">terminal — rizky@portfolio</span>
        </div>

        {/* Terminal Content */}
        <div className="p-5 min-h-[280px] space-y-4 text-left">
          {terminalLines.slice(0, currentBlock + 1).map((block, blockIdx) => (
            <motion.div
              key={blockIdx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {/* Command line */}
              <div className="flex items-center gap-1.5 leading-relaxed">
                <span className="text-[#FFDD00]">$</span>
                <span className="text-white/80">
                  {block.cmd.replace("rizky@portfolio:~$ ", "")}
                </span>
                {blockIdx === currentBlock && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-2 h-4 bg-[#FFDD00] ml-0.5"
                  />
                )}
              </div>

              {/* Output lines */}
              {block.output.map((line, lineIdx) => (
                <motion.div
                  key={lineIdx}
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: lineIdx * 0.12, duration: 0.25 }}
                  className="text-white/50 ml-3 mt-1 leading-relaxed"
                >
                  {line}
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
