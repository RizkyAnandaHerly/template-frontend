"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useState, useRef } from "react";

/* ===================================================================
   PROJECT CARD — Large-format Featured Project Card
   Redesign v2 — Nazwa-style:
   - Scroll-driven zoom parallax on the background image
   - Text slides in from outside the frame on scroll
   - Device mockup frame around screenshot
   - Content: content.md → SECTION 4
   =================================================================== */

interface ProjectCardProps {
  number: string;
  title: string;
  subtitle: string;
  role: string;
  tags: string[];
  ctaLink: string;
  imageSrc: string;
  fallbackGradient: string;
}

export default function ProjectCard({
  number,
  title,
  subtitle,
  role,
  tags,
  ctaLink,
  imageSrc,
  fallbackGradient,
}: ProjectCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const [imageError, setImageError] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  /* Scroll-driven parallax: track element through viewport */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  /* Image zoom: 1.15x → 1.0x as you scroll through (zoom out effect) */
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.18, 1.0, 0.97]);

  /* Text slide-in from left: starts off-screen, slides to 0 */
  const titleX = useTransform(scrollYProgress, [0, 0.35], [-80, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  /* Number slides in from right */
  const numberX = useTransform(scrollYProgress, [0, 0.35], [100, 0]);
  const numberOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  /* Tags fade in with slight delay */
  const tagsOpacity = useTransform(scrollYProgress, [0.1, 0.35], [0, 1]);
  const tagsY = useTransform(scrollYProgress, [0.1, 0.35], [20, 0]);

  /* CTA slides up */
  const ctaY = useTransform(scrollYProgress, [0.15, 0.4], [30, 0]);
  const ctaOpacity = useTransform(scrollYProgress, [0.15, 0.4], [0, 1]);

  return (
    <div
      ref={ref}
      className="relative w-full h-[65vh] md:h-[70vh] lg:h-[80vh] min-h-[480px] lg:min-h-[580px] rounded-3xl overflow-hidden group border border-[var(--color-border-light)] shadow-[var(--shadow-xl)] bg-[var(--color-bg-light-alt)]"
    >
      
      {/* ── Background Image with Scroll Zoom Parallax ── */}
      {!imageError ? (
        <motion.div
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={prefersReducedMotion ? {} : { scale: imageScale }}
        >
          <Image
            src={imageSrc}
            alt={`${title} screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            priority={number === "01"}
            className="object-cover object-top"
            onError={() => setImageError(true)}
          />
        </motion.div>
      ) : (
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${fallbackGradient} opacity-95`}
          style={prefersReducedMotion ? {} : { scale: imageScale }}
        />
      )}

      {/* ── Device Mockup Frame Overlay (subtle screen bezel effect) ── */}
      <div className="absolute inset-4 md:inset-8 lg:inset-12 rounded-2xl border border-white/[0.06] pointer-events-none z-[5]">
        {/* Top bezel dots (fake window controls) */}
        <div className="absolute top-3 left-4 flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-white/10" />
          <div className="w-2 h-2 rounded-full bg-white/10" />
          <div className="w-2 h-2 rounded-full bg-white/10" />
        </div>
      </div>

      {/* ── Overlay Gradient for Contrast ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(9,9,10,0.95)] via-[rgba(9,9,10,0.55)] to-[rgba(9,9,10,0.2)] z-[6] transition-opacity duration-300 group-hover:opacity-95" />

      {/* ── Visual Grid Overlay ── */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] z-[7] opacity-40 pointer-events-none" />

      {/* ── Content Container ── */}
      <div className="absolute inset-0 p-8 md:p-12 lg:p-16 flex flex-col justify-between z-10 text-white">
        
        {/* Top: Project label + Number (slides in from right) */}
        <div className="flex justify-between items-start">
          <span className="font-satoshi font-bold text-sm tracking-[0.2em] text-white/40 uppercase">
            Project
          </span>
          <motion.span
            style={prefersReducedMotion ? {} : { x: numberX, opacity: numberOpacity }}
            className="font-clash font-bold text-7xl lg:text-9xl text-[var(--color-accent-primary)] leading-none select-none transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-2"
          >
            {number}
          </motion.span>
        </div>

        {/* Bottom: Info block — slides in from left */}
        <div className="flex flex-col items-start gap-4 lg:gap-6">
          
          {/* Tags */}
          <motion.div
            style={prefersReducedMotion ? {} : { opacity: tagsOpacity, y: tagsY }}
            className="flex flex-wrap gap-2"
          >
            {tags.map((tag) => (
              <span
                key={tag}
                className="font-satoshi font-semibold tracking-[0.08em] text-[10px] lg:text-xs uppercase px-2.5 py-1 rounded bg-white/10 backdrop-blur-md border border-white/10 text-[var(--color-text-subtle)]"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Title & Subtitle — slides in from left */}
          <div className="flex flex-col gap-2 max-w-2xl">
            <motion.h3
              style={prefersReducedMotion ? {} : { x: titleX, opacity: titleOpacity }}
              className="font-satoshi font-bold text-3xl lg:text-5xl leading-tight tracking-[-0.01em]"
            >
              {title}
            </motion.h3>
            <motion.p
              style={prefersReducedMotion ? {} : { x: titleX, opacity: titleOpacity }}
              className="font-satoshi font-normal text-sm lg:text-lg text-white/70 leading-relaxed"
            >
              {subtitle}
            </motion.p>
          </div>

          {/* Role */}
          <motion.div
            style={prefersReducedMotion ? {} : { opacity: tagsOpacity }}
            className="font-satoshi font-medium text-xs lg:text-sm uppercase tracking-[0.05em] text-white/40 flex items-center gap-2"
          >
            <span>Role:</span>
            <span className="text-white/80">{role}</span>
          </motion.div>

          {/* CTA — slides up */}
          <motion.div
            style={prefersReducedMotion ? {} : { y: ctaY, opacity: ctaOpacity }}
          >
            <Link
              href={ctaLink}
              className="inline-flex items-center gap-2 font-satoshi font-bold text-sm lg:text-base uppercase tracking-[0.05em] px-6 py-3.5 rounded-xl bg-[var(--color-accent-primary)] text-black transition-all duration-300 ease-out hover:bg-white hover:scale-105 active:scale-95 cursor-pointer shadow-md select-none group-hover:shadow-[0_0_20px_rgba(255,221,0,0.2)]"
            >
              <span>VIEW PROJECT</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>

        </div>

      </div>

    </div>
  );
}
