"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence, type Transition } from "motion/react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

/* ===================================================================
   NAV ITEMS — from content.md section labels
   IDs must match the section IDs in page.tsx
   =================================================================== */
const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;

/* ===================================================================
   ANIMATION CONFIG
   =================================================================== */
const islandTransition: Transition = {
  type: "tween",
  ease: [0.22, 1, 0.36, 1],
  duration: 0.5,
};

/* ===================================================================
   PROGRESS CIRCLE
   =================================================================== */
function CircleProgress({ percentage }: { percentage: number }) {
  const size = 24;
  const strokeWidth = 2.5;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <svg width={size} height={size} className="-rotate-90 shrink-0">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="var(--color-border-dark)"
        strokeWidth={strokeWidth}
      />
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="var(--color-accent-primary)"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        animate={{ strokeDashoffset: offset }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ===================================================================
   DYNAMIC ISLAND NAVBAR
   =================================================================== */
export default function DynamicIsland() {
  const [activeId, setActiveId] = useState<string>("home");
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [progress, setProgress] = useState(0);

  /* ---- Scroll spy: track which section is in view ---- */
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? Math.min(100, Math.max(0, (scrollY / total) * 100)) : 0);

      let currentId = "home";
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= 120) {
            currentId = item.id;
          }
        }
      }
      setActiveId(currentId);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---- Scroll to section ---- */
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsExpanded(false);
  };

  const activeLabel = useMemo(
    () => NAV_ITEMS.find((item) => item.id === activeId)?.label ?? "Home",
    [activeId]
  );

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={islandTransition}
            className="fixed inset-0 z-[9998] bg-black/20 backdrop-blur-[4px]"
            onClick={() => setIsExpanded(false)}
          />
        )}
      </AnimatePresence>

      {/* Island */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0.5 }}
        className="fixed bottom-[30px] left-1/2 z-[9999] flex -translate-x-1/2 flex-col items-center"
      >
        <motion.div
          onClick={() => {
            if (!isExpanded) setIsExpanded(true);
          }}
          initial={false}
          animate={{
            width: isExpanded ? 320 : 260,
            height: isExpanded ? 340 : 52,
            borderRadius: isExpanded ? 24 : 26,
          }}
          transition={islandTransition}
          style={{ cursor: isExpanded ? "default" : "pointer" }}
          className="relative overflow-hidden border border-white/10 bg-[var(--color-bg-dark)] text-[var(--color-text-primary)] shadow-2xl"
        >
          {/* ---- CLOSED PILL ---- */}
          <motion.div
            initial={false}
            animate={{
              opacity: isExpanded ? 0 : 1,
              scale: isExpanded ? 0.95 : 1,
              filter: isExpanded ? "blur(4px)" : "blur(0px)",
            }}
            transition={{ ...islandTransition, delay: isExpanded ? 0 : 0.1 }}
            className={cn(
              "absolute inset-0 flex items-center gap-4 px-5",
              isExpanded && "pointer-events-none"
            )}
          >
            <div className="h-2 w-2 shrink-0 rounded-full bg-[var(--color-accent-primary)]" />

            <div className="relative flex h-full flex-1 items-center overflow-hidden text-left">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={activeId}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="block w-full overflow-hidden text-ellipsis whitespace-nowrap text-sm font-medium"
                >
                  {activeLabel}
                </motion.span>
              </AnimatePresence>
            </div>

            <CircleProgress percentage={progress} />
          </motion.div>

          {/* ---- EXPANDED MENU ---- */}
          <motion.div
            initial={false}
            animate={{
              opacity: isExpanded ? 1 : 0,
              scale: isExpanded ? 1 : 1.05,
            }}
            transition={{ ...islandTransition, delay: isExpanded ? 0.1 : 0 }}
            className={cn(
              "absolute inset-0 flex flex-col",
              !isExpanded && "pointer-events-none"
            )}
          >
            {/* Header */}
            <div className="flex shrink-0 items-center justify-between px-6 pb-3 pt-5">
              <span className="text-[11px] font-semibold tracking-[0.08em] text-[var(--color-text-muted)] uppercase">
                Navigate
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(false);
                }}
                className="text-[var(--color-text-muted)] transition-colors duration-200 hover:text-white cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Nav Items */}
            <div className="flex-1 overflow-y-auto overscroll-contain px-3 pb-4">
              <div className="flex flex-col gap-0.5">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeId === item.id;
                  const isHovered = hoveredId === item.id;

                  return (
                    <button
                      key={item.id}
                      onMouseEnter={() => setHoveredId(item.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      onClick={(e) => {
                        e.stopPropagation();
                        scrollToSection(item.id);
                      }}
                      className={cn(
                        "group flex w-full shrink-0 cursor-pointer items-center rounded-lg border-none py-3 px-4 text-left text-sm transition-all duration-300 ease-out",
                        isActive && "bg-white/10 font-medium text-white",
                        !isActive && isHovered && "bg-white/5 text-white/85",
                        !isActive && !isHovered && "bg-transparent text-white/45"
                      )}
                    >
                      <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap transition-transform duration-300 group-hover:translate-x-1">
                        {item.label}
                      </span>

                      <motion.div
                        initial={false}
                        animate={{
                          scale: isActive ? 1 : 0,
                          opacity: isActive ? 1 : 0,
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="ml-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent-primary)]"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
