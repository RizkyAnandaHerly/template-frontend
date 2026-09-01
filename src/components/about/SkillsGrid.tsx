"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView, useReducedMotion } from "motion/react";
import Link from "next/link";
import {
  Code,
  Database,
  ClipboardList,
  Lightbulb,
  Search,
  Users,
} from "lucide-react";

/* ===================================================================
   T-SHAPED SKILLS GRID — v2 Complete Redesign
   
   FIXES (from impeccable audit):
   - NO identical card grids → asymmetric layout (CORE=large, SUPPORTING=small)
   - NO LordIcon CDN → Lucide React SVG icons
   - NO external scripts → all inline
   - Hover: item expands, non-hovered dims to 0.3
   - Yellow accent line animation on hover
   - Graph-paper background texture
   
   Content: content.md → SECTION 2B
   =================================================================== */

const easeOutQuart = [0.25, 1, 0.5, 1] as const;

interface Skill {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  tag: "CORE" | "SUPPORTING";
  destination: string;
  size: "large" | "small";
}

const skills: Skill[] = [
  {
    id: "backend",
    name: "Backend Development",
    description:
      "Building server-side logic, REST APIs, and database-driven applications using Laravel, and C#.",
    icon: Code,
    tag: "CORE",
    destination: "/projects/warehouse",
    size: "large",
  },
  {
    id: "database",
    name: "Database Architecture",
    description:
      "Designing schemas, writing optimized queries, and managing relational databases. Teaching SQL at laboratory level.",
    icon: Database,
    tag: "CORE",
    destination: "/projects/warehouse",
    size: "large",
  },
  {
    id: "pm",
    name: "Project Management",
    description:
      "Planning programs, managing timelines, delegating tasks, and producing accountability reports (LPJ).",
    icon: ClipboardList,
    tag: "CORE",
    destination: "/projects/obatin",
    size: "large",
  },
  {
    id: "strategy",
    name: "Product Strategy",
    description:
      "Translating business problems into PRDs, FRDs, and product roadmaps. Developed business plan for 1st place hackathon.",
    icon: Lightbulb,
    tag: "SUPPORTING",
    destination: "/projects/obatin",
    size: "small",
  },
  {
    id: "analysis",
    name: "System Analysis",
    description:
      "Mapping requirements to system logic, identifying process gaps, and structuring functional specifications.",
    icon: Search,
    tag: "SUPPORTING",
    destination: "https://github.com/RizkyAnandaHerly",
    size: "small",
  },
  {
    id: "collab",
    name: "Cross-functional Collaboration",
    description:
      "Coordinating between UI/UX, engineering, and stakeholder teams across organizational and hackathon environments.",
    icon: Users,
    tag: "SUPPORTING",
    destination: "https://www.linkedin.com/in/rizkyanandaherly/",
    size: "small",
  },
];

export default function SkillsGrid() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });

  const coreSkills = skills.filter((s) => s.size === "large");
  const supportingSkills = skills.filter((s) => s.size === "small");

  return (
    <section
      ref={containerRef}
      data-theme="dark"
      className="relative w-full bg-[var(--color-bg-dark)] py-16 md:py-20 px-6 md:px-12 overflow-hidden rounded-2xl border border-white/[0.05]"
    >
      {/* Section header */}
      <div className="flex justify-between items-start mb-10 max-w-6xl mx-auto">
        <motion.p
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: easeOutQuart }}
          className="font-satoshi text-xs md:text-sm text-white/60 uppercase tracking-widest"
        >
          IM YOUR{" "}
          <strong className="text-white font-bold">T-SHAPED</strong> TECHNICAL
          BUILDER ↘
        </motion.p>
        <motion.p
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="font-satoshi text-xs text-white/30 uppercase tracking-widest hidden md:block"
        >
          [HOVER] THE ELEMENTS TO SEE DETAILS.
        </motion.p>
      </div>

      {/* === ASYMMETRIC GRID: 3 large CORE cards + 3 small SUPPORTING cards === */}
      <div className="max-w-6xl mx-auto bg-graph-paper-dark">
        {/* CORE skills — large cards, 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-4 md:mb-5">
          {coreSkills.map((skill, i) => (
            <SkillCard
              key={skill.id}
              skill={skill}
              hoveredId={hoveredId}
              setHoveredId={setHoveredId}
              index={i}
              isInView={isInView}
              prefersReducedMotion={!!prefersReducedMotion}
            />
          ))}
        </div>

        {/* SUPPORTING skills — smaller cards, 3 columns (compact) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {supportingSkills.map((skill, i) => (
            <SkillCard
              key={skill.id}
              skill={skill}
              hoveredId={hoveredId}
              setHoveredId={setHoveredId}
              index={i + 3}
              isInView={isInView}
              prefersReducedMotion={!!prefersReducedMotion}
            />
          ))}
        </div>
      </div>

      {/* Section label bottom */}
      <div className="max-w-6xl mx-auto mt-8">
        <p className="font-satoshi text-xs text-white/20 uppercase tracking-widest">
          MY SKILLS
        </p>
      </div>
    </section>
  );
}

/* ---- Individual Skill Card ---- */
function SkillCard({
  skill,
  hoveredId,
  setHoveredId,
  index,
  isInView,
  prefersReducedMotion,
}: {
  skill: Skill;
  hoveredId: string | null;
  setHoveredId: (id: string | null) => void;
  index: number;
  isInView: boolean;
  prefersReducedMotion: boolean;
}) {
  const isHovered = hoveredId === skill.id;
  const hasAnyHover = hoveredId !== null;
  const isLarge = skill.size === "large";
  const Icon = skill.icon;

  return (
    <motion.div
      initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      animate={
        isInView
          ? {
              opacity: hasAnyHover && !isHovered ? 0.3 : 1,
              y: 0,
            }
          : {}
      }
      transition={{
        delay: prefersReducedMotion ? 0 : 0.3 + index * 0.08,
        duration: 0.4,
        ease: [0.25, 1, 0.5, 1],
      }}
      className={`relative group border transition-all duration-200 ${
        isLarge
          ? "min-h-[180px] md:min-h-[220px] p-6 md:p-8"
          : "min-h-[120px] md:min-h-[140px] p-5 md:p-6"
      } ${
        isHovered
          ? "bg-white/[0.06] border-white/20 rounded-xl"
          : "bg-[var(--color-surface-dark)] border-white/[0.06] rounded-xl hover:border-white/15"
      }`}
      onMouseEnter={() => setHoveredId(skill.id)}
      onMouseLeave={() => setHoveredId(null)}
    >
      {/* Yellow accent line — animates on hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="absolute top-0 left-0 right-0 h-[2px] bg-[var(--color-accent-primary)] origin-left rounded-t-xl"
          />
        )}
      </AnimatePresence>

      {/* Card content */}
      <div className="flex flex-col h-full justify-between gap-3">
        {/* Top: icon + name + tag */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div
              className={`flex items-center justify-center rounded-lg transition-colors duration-200 ${
                isLarge ? "w-10 h-10" : "w-8 h-8"
              } ${
                isHovered
                  ? "bg-[var(--color-accent-primary)]/15"
                  : "bg-white/[0.06]"
              }`}
            >
              <Icon
                className={`${isLarge ? "w-5 h-5" : "w-4 h-4"} transition-colors duration-200 ${
                  isHovered
                    ? "text-[var(--color-accent-primary)]"
                    : "text-white/60"
                }`}
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-satoshi font-bold leading-tight transition-colors duration-200 ${
                  isLarge ? "text-sm md:text-base" : "text-xs md:text-sm"
                } ${isHovered ? "text-white" : "text-white/80"}`}
              >
                {skill.name}
              </span>
              <span
                className={`text-[9px] uppercase tracking-widest font-satoshi mt-0.5 ${
                  skill.tag === "CORE"
                    ? "text-[var(--color-accent-primary)]/60"
                    : "text-white/25"
                }`}
              >
                {skill.tag}
              </span>
            </div>
          </div>
        </div>

        {/* Description — always visible for large, hover-reveal for small */}
        <AnimatePresence>
          {(isLarge || isHovered) && (
            <motion.div
              initial={
                isLarge && !prefersReducedMotion
                  ? { opacity: 0, y: 6 }
                  : !isLarge
                    ? { opacity: 0, height: 0 }
                    : { opacity: 1 }
              }
              animate={
                isLarge
                  ? { opacity: 1, y: 0 }
                  : { opacity: 1, height: "auto" }
              }
              exit={
                isLarge ? undefined : { opacity: 0, height: 0 }
              }
              transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
              className="overflow-hidden"
            >
              <p
                className={`font-satoshi font-normal text-white/50 leading-relaxed ${
                  isLarge ? "text-xs md:text-sm" : "text-xs"
                }`}
              >
                {skill.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* View Project link — shows on hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
            >
              <Link
                href={skill.destination}
                target={skill.destination.startsWith("http") ? "_blank" : "_self"}
                className="inline-flex items-center gap-1.5 text-[10px] md:text-xs font-satoshi font-medium text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full transition-colors duration-150"
                rel={
                  skill.destination.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                View Project →
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
