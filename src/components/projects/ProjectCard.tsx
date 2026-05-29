"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

/* ===================================================================
   PROJECT CARD — Large-format Featured Project Card
   component-map.md: Section 4, Sub-component 2
   Aesthetics: Full-width, height 70-80vh, parallax image entrance,
   gradient contrast overlay, prominent Clash number, custom hover.
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

  return (
    <div className="relative w-full h-[65vh] md:h-[70vh] lg:h-[80vh] min-h-[480px] lg:min-h-[580px] rounded-3xl overflow-hidden group border border-[var(--color-border-light)] shadow-[var(--shadow-xl)] bg-[var(--color-bg-light-alt)]">
      
      {/* ── Background Image / Fallback Gradient ── */}
      {!imageError ? (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <Image
            src={imageSrc}
            alt={`${title} screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            priority={number === "01"}
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        </div>
      ) : (
        <div className={`absolute inset-0 bg-gradient-to-br ${fallbackGradient} opacity-95 transition-transform duration-700 ease-out group-hover:scale-102`} />
      )}

      {/* ── Overlay Gradient for Perfect Contrast ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(9,9,10,0.95)] via-[rgba(9,9,10,0.6)] to-[rgba(9,9,10,0.25)] z-2 transition-opacity duration-300 group-hover:opacity-95" />

      {/* ── Visual Grid Overlay Decorator ── */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] z-3 opacity-60 pointer-events-none" />

      {/* ── Content Container (Text overlaid on dark background) ── */}
      <div className="absolute inset-0 p-8 md:p-12 lg:p-16 flex flex-col justify-between z-10 text-white">
        
        {/* Top Section: Prominent Project Number */}
        <div className="flex justify-between items-start">
          <span className="font-satoshi font-bold text-sm tracking-[0.2em] text-white/40 uppercase">
            Project
          </span>
          <span className="font-clash font-bold text-7xl lg:text-9xl text-[var(--color-accent-primary)] leading-none select-none transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-2">
            {number}
          </span>
        </div>

        {/* Bottom Section: Info + Badges + Action */}
        <div className="flex flex-col items-start gap-4 lg:gap-6">
          
          {/* Tags / Badges */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="font-satoshi font-semibold tracking-[0.08em] text-[10px] lg:text-xs uppercase px-2.5 py-1 rounded bg-white/10 backdrop-blur-md border border-white/10 text-[var(--color-text-subtle)]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title & Subtitle */}
          <div className="flex flex-col gap-2 max-w-2xl">
            <h3 className="font-satoshi font-bold text-3xl lg:text-5xl leading-tight tracking-[-0.01em]">
              {title}
            </h3>
            <p className="font-satoshi font-normal text-sm lg:text-lg text-white/70 leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Role & Team Metadata */}
          <div className="font-satoshi font-medium text-xs lg:text-sm uppercase tracking-[0.05em] text-white/40 flex items-center gap-2">
            <span>Role:</span>
            <span className="text-white/80">{role}</span>
          </div>

          {/* CTA Link Button */}
          <Link
            href={ctaLink}
            className="inline-flex items-center gap-2 font-satoshi font-bold text-sm lg:text-base uppercase tracking-[0.05em] px-6 py-3.5 rounded-xl bg-[var(--color-accent-primary)] text-black transition-all duration-300 ease-out hover:bg-white hover:scale-105 active:scale-95 cursor-pointer shadow-md select-none group-hover:shadow-[0_0_20px_rgba(255,221,0,0.2)]"
          >
            <span>VIEW PROJECT</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

        </div>

      </div>

    </div>
  );
}
