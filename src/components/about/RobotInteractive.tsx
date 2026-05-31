"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

/* ===================================================================
   ANIMATED TERMINAL — Replacing 3D Robot
   component-map.md: About section, sub-component 1
   A aesthetics: Sleek dark glassmorphism terminal, animated commands,
   query compilations, and interactive system output reflecting Rizky's work.
   =================================================================== */

interface TerminalLine {
  text: string;
  type: "command" | "system" | "success" | "warning" | "info";
  delay: number; // delay in ms before showing
}

const TERMINAL_DATA: TerminalLine[] = [
  { text: "rizkyanandaherly@telkom-univ:~$ init portfolio", type: "command", delay: 300 },
  { text: "loading metadata...", type: "system", delay: 900 },
  { text: "✓ Telkom University (Information Systems)", type: "success", delay: 1400 },
  { text: "✓ Hustler & Hacker integration", type: "success", delay: 1800 },
  { text: "rizkyanandaherly@telkom-univ:~$ load-skills --core", type: "command", delay: 2400 },
  { text: "» Core 1: Backend Development [Laravel, C#]", type: "info", delay: 2900 },
  { text: "» Core 2: Database Architecture [SQL, Optimization]", type: "info", delay: 3300 },
  { text: "» Core 3: Project Management [LPJ, Timelines]", type: "info", delay: 3700 },
  { text: "rizkyanandaherly@telkom-univ:~$ check-mindset", type: "command", delay: 4300 },
  { text: "analyzing systems thinking approach...", type: "system", delay: 4800 },
  { text: "output: \"Connecting the technical dots with business context.\"", type: "warning", delay: 5400 },
  { text: "status: 100% logic, 0% fluff. READY.", type: "success", delay: 6000 },
];

export default function RobotInteractive() {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [key, setKey] = useState(0); // For looping reset

  useEffect(() => {
    // Hide all lines at start of loop
    setVisibleLines([]);

    const timers: NodeJS.Timeout[] = [];

    // Schedule each line
    TERMINAL_DATA.forEach((line, index) => {
      const timer = setTimeout(() => {
        setVisibleLines((prev) => [...prev, index]);
      }, line.delay);
      timers.push(timer);
    });

    // Loop reset timer (12 seconds)
    const resetTimer = setTimeout(() => {
      setKey((prev) => prev + 1);
    }, 12500);
    timers.push(resetTimer);

    return () => {
      timers.forEach((t) => clearTimeout(t));
    };
  }, [key]);

  return (
    <div className="w-full aspect-[4/3] max-w-md mx-auto rounded-2xl overflow-hidden border border-[var(--color-border-light)] shadow-[var(--shadow-xl)] bg-[#0C0D0E] flex flex-col font-mono text-[11px] md:text-xs">
      
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#16181A] border-b border-[#222528] select-none">
        <div className="flex items-center gap-2">
          {/* Mac-style Window controls */}
          <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
        </div>
        <span className="text-[#8E959E] font-medium text-[10px] uppercase tracking-wider">
          rizky-terminal.sh
        </span>
        <div className="w-12" /> {/* spacer */}
      </div>

      {/* Terminal Content Screen */}
      <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-2 bg-[#0A0B0C] text-[#E1E4E8] scrollbar-thin scrollbar-thumb-[#222528]">
        {TERMINAL_DATA.map((line, index) => {
          const isVisible = visibleLines.includes(index);
          if (!isVisible) return null;

          return (
            <motion.div
              key={`${key}-${index}`}
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="leading-relaxed"
            >
              {line.type === "command" && (
                <span className="text-[#58A6FF]">{line.text}</span>
              )}
              {line.type === "system" && (
                <span className="text-[#8B949E] italic">{line.text}</span>
              )}
              {line.type === "success" && (
                <span className="text-[#56D364] font-semibold">{line.text}</span>
              )}
              {line.type === "warning" && (
                <span className="text-[#E3B341] font-semibold">{line.text}</span>
              )}
              {line.type === "info" && (
                <span className="text-[#C9D1D9]">{line.text}</span>
              )}
            </motion.div>
          );
        })}

        {/* Blinking Cursor at the very end */}
        <div className="flex items-center gap-1.5 mt-1">
          <span className="text-[#8B949E] opacity-50">&gt;</span>
          <span className="w-2 h-4 bg-[#FFDD00] animate-pulse" />
        </div>
      </div>
    </div>
  );
}
