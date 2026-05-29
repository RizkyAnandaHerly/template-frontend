"use client";

import { motion, useReducedMotion } from "motion/react";
import ProjectCard from "./ProjectCard";

/* ===================================================================
   FEATURED SECTION — Section 4 (LIGHT #F0F4F8)
   component-map.md layout:
   - Section label (02 · FEATURED PROJECTS)
   - Vertical list of large-format cards
   - Content: content.md → SECTION 4
   =================================================================== */

export default function FeaturedSection() {
  const prefersReducedMotion = useReducedMotion();

  const projects = [
    {
      number: "01",
      title: "ObatIn",
      subtitle: "Medication reminder for those who matter most.",
      role: "Project Manager (Hustler)",
      tags: ["HACKATHON", "1ST PLACE", "MOBILE", "HEALTH TECH", "2026"],
      ctaLink: "/projects/obatin",
      imageSrc: "/images/obatin/hero.jpg",
      fallbackGradient: "from-blue-950/80 via-purple-950/85 to-[#09090a]/95",
    },
    {
      number: "02",
      title: "Warehouse Management System",
      subtitle: "Every item. Every rack. Every move — tracked.",
      role: "Backend Developer",
      tags: ["WEB", "B2B", "BACKEND", "IN PROGRESS"],
      ctaLink: "/projects/warehouse",
      imageSrc: "/images/warehouse/hero.jpg",
      fallbackGradient: "from-slate-950/80 via-[#2d4c61]/70 to-[#09090a]/95",
    },
  ];

  return (
    <section id="work" className="section-light overflow-hidden">
      <div className="container-portfolio">
        
        {/* ── Section Label ── */}
        <motion.p
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="font-satoshi font-medium text-sm uppercase tracking-[0.08em] mb-12 lg:mb-16"
          style={{ color: "var(--color-text-dark-muted)" }}
        >
          02 · FEATURED PROJECTS
        </motion.p>

        {/* ── Project Cards Stack ── */}
        <div className="flex flex-col gap-12 lg:gap-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.number}
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
