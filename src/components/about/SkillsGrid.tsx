"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

/* ===================================================================
   T-SHAPED SKILLS GRID — Redesigned BentoGrid
   Aesthetics: Sparse layout, blueprint grid, expanding cards, LordIcon
   =================================================================== */

const skills = [
  {
    id: "backend",
    name: "Backend Development",
    description: "Building server-side logic, REST APIs, and database-driven applications using Laravel, C#, and Java.",
    icon: "https://cdn.lordicon.com/wloilxuq.json", // code/terminal icon
    tag: "CORE",
    destination: "/projects/warehouse",
    // Grid position: row 1, col 1
    gridPos: "row-start-1 col-start-1 md:row-start-1 md:col-start-1",
  },
  {
    id: "database",
    name: "Database Architecture",
    description: "Designing schemas, writing optimized queries, and managing relational databases. Teaching SQL at laboratory level.",
    icon: "https://cdn.lordicon.com/dqxjnhuq.json", // database icon
    tag: "CORE",
    destination: "/projects/warehouse",
    // Grid position: row 1, col 3
    gridPos: "row-start-1 col-start-2 md:row-start-1 md:col-start-3",
  },
  {
    id: "pm",
    name: "Project Management",
    description: "Planning programs, managing timelines, delegating tasks, and producing accountability reports (LPJ).",
    icon: "https://cdn.lordicon.com/yxczfiyb.json", // tasks/checklist icon
    tag: "CORE",
    destination: "/projects/obatin",
    // Grid position: row 2, col 2 (center)
    gridPos: "row-start-2 col-start-1 md:row-start-2 md:col-start-2",
  },
  {
    id: "strategy",
    name: "Product Strategy",
    description: "Translating business problems into PRDs, FRDs, and product roadmaps. Built business plan for 1st place hackathon.",
    icon: "https://cdn.lordicon.com/ajkxzznd.json", // lightbulb/strategy icon
    tag: "SUPPORTING",
    destination: "/projects/obatin",
    // Grid position: row 2, col 4
    gridPos: "row-start-2 col-start-2 md:row-start-2 md:col-start-4",
  },
  {
    id: "analysis",
    name: "System Analysis",
    description: "Mapping requirements to system logic, identifying process gaps, and structuring functional specifications.",
    icon: "https://cdn.lordicon.com/kkvxgpti.json", // search/analyze icon
    tag: "SUPPORTING",
    destination: "https://github.com/RizkyAnandaHerly",
    // Grid position: row 3, col 1
    gridPos: "row-start-3 col-start-1 md:row-start-3 md:col-start-1",
  },
  {
    id: "collab",
    name: "Cross-functional Collaboration",
    description: "Coordinating between UI/UX, engineering, and stakeholder teams across organizational and hackathon environments.",
    icon: "https://cdn.lordicon.com/rzrpfvkd.json", // team/people icon
    tag: "SUPPORTING",
    destination: "https://www.linkedin.com/in/rizkyanandaherly/",
    // Grid position: row 3, col 3
    gridPos: "row-start-3 col-start-2 md:row-start-3 md:col-start-3",
  },
];

export default function SkillsGrid() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      data-theme="dark"
      className="relative w-full bg-[#09090A] py-20 px-6 md:px-12 overflow-hidden rounded-2xl border border-white/[0.05]"
    >
      {/* Section header */}
      <div className="flex justify-between items-start mb-8 max-w-6xl mx-auto">
        <p className="font-satoshi text-xs md:text-sm text-white/60 uppercase tracking-widest">
          IM YOUR <strong className="text-white font-bold">T-SHAPED</strong> TECHNICAL BUILDER ↘
        </p>
        <p className="font-satoshi text-xs text-white/30 uppercase tracking-widest hidden md:block">
          [HOVER] THE ELEMENTS TO SEE DETAILS.
        </p>
      </div>

      {/* CSS Grid with graph paper lines */}
      <div
        className="relative max-w-6xl mx-auto"
        style={{
          // Graph paper background
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      >
        {/* Skill grid — sparse layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 gap-0 min-h-[480px] md:min-h-[560px] border border-white/[0.05]">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className={`relative flex flex-col items-center justify-center
                          p-6 min-h-[160px] border border-white/[0.06]
                          cursor-none transition-all duration-300 ${skill.gridPos}`}
              onMouseEnter={() => setHoveredId(skill.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Hover card — appears within cell */}
              <AnimatePresence>
                {hoveredId === skill.id && (
                  <motion.div
                    key="card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute inset-0 z-10 bg-[#141414] border border-white/20
                               rounded-xl p-5 flex flex-col justify-between overflow-hidden"
                  >
                    {/* Card border expand animation */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute top-0 left-0 right-0 h-[1px] bg-[#FFDD00] origin-left"
                    />

                    {/* Skill name — fade in */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="font-satoshi text-[10px] uppercase tracking-widest text-[#FFDD00]"
                    >
                      {skill.name} ↗
                    </motion.p>

                    {/* Description — stagger lines */}
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15, duration: 0.3 }}
                      className="font-satoshi text-[11px] md:text-xs text-white/70 leading-relaxed mt-2 flex-1"
                    >
                      {skill.description}
                    </motion.p>

                    {/* View Project button — slides up last */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25, duration: 0.3 }}
                      className="mt-3"
                    >
                      <Link
                        href={skill.destination}
                        target={skill.destination.startsWith("http") ? "_blank" : "_self"}
                        className="inline-flex items-center gap-1.5 text-[10px] md:text-xs font-satoshi
                                   font-medium text-white bg-white/10 hover:bg-white/20
                                   px-3 py-1.5 rounded-full transition-colors duration-150"
                        rel={skill.destination.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        View Project →
                      </Link>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Default skill display */}
              <motion.div
                animate={{ opacity: hoveredId && hoveredId !== skill.id ? 0.25 : 1 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col items-center gap-3 relative z-0"
              >
                {/* LordIcon animated icon */}
                {/* @ts-ignore */}
                <lord-icon
                  src={skill.icon}
                  trigger="hover"
                  colors="primary:#FFDD00,secondary:#ffffff"
                  size={48}
                />

                {/* Skill name */}
                <motion.span
                  animate={{
                    fontWeight: hoveredId === skill.id ? 700 : 400,
                    fontStyle: hoveredId === skill.id ? "italic" : "normal",
                  }}
                  className="font-satoshi text-xs text-center text-white/80 leading-tight"
                >
                  {skill.name}
                </motion.span>

                {/* Core/Supporting tag */}
                <span className={`text-[9px] uppercase tracking-widest font-satoshi
                  ${skill.tag === "CORE" ? "text-[#FFDD00]/60" : "text-white/30"}`}
                >
                  {skill.tag}
                </span>
              </motion.div>
            </div>
          ))}

          {/* Empty cells to complete the grid shape — creates sparse/scattered feel */}
          {/* Row 1: cells 2, 4 are empty */}
          {/* Row 2: cells 1, 3 are empty */}
          {/* Row 3: cells 2, 4 are empty */}
          {/* These are handled by the grid positioning above */}
        </div>
      </div>

      {/* Section label bottom */}
      <div className="max-w-6xl mx-auto mt-6">
        <p className="font-satoshi text-xs text-white/20 uppercase tracking-widest">
          01.1 · MY SKILLS
        </p>
      </div>
    </section>
  );
}
