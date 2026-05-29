"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Copy, Check, ArrowUpRight } from "lucide-react";

/* ===================================================================
   FOOTER / CONTACT SECTION — Section 8 (DARK #09090A)
   component-map.md layout:
   - Left: Large "Let's connect." text + Email copy-to-clipboard CTA
   - Right: Social links vertical stack with underline highlights
   - Bottom: Credits & copyrights
   - Content: content.md → SECTION 8
   =================================================================== */

const SOCIAL_LINKS = [
  { name: "LinkedIn", href: "https://linkedin.com/in/rizkyanandaherly" },
  { name: "GitHub", href: "https://github.com/rizkyanandaherly" },
  { name: "Instagram", href: "https://instagram.com/rizkyanandaherly" },
];

export default function Footer() {
  const prefersReducedMotion = useReducedMotion();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("rizkyanandaherly@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="section-dark border-t border-[var(--color-border-dark)] overflow-hidden">
      <div className="container-portfolio">
        
        {/* ── Section Label ── */}
        <motion.p
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="font-satoshi font-medium text-sm uppercase tracking-[0.08em] mb-12 lg:mb-16 text-[var(--color-text-muted)]"
        >
          05 · CONTACT
        </motion.p>

        {/* ── Main Footer Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column: Headline + Copy + Clipboard Email CTA */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <h2
              className="font-satoshi font-bold leading-none tracking-[-0.02em] text-[var(--color-text-primary)]"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
            >
              Let's connect.
            </h2>
            
            <p className="font-satoshi font-normal text-sm lg:text-base text-[var(--color-text-muted)] leading-[1.7] max-w-xl">
              Whether you're looking for a structured Project Manager, a detail-oriented Backend Developer, or just want to talk about database architectures — my inbox is open.
            </p>

            {/* Premium Interactive Copy Button */}
            <div className="relative mt-2 self-start">
              <button
                onClick={handleCopyEmail}
                className="group relative inline-flex items-center gap-6 px-6 py-4.5 rounded-2xl bg-[var(--color-surface-dark)] border border-[var(--color-border-dark)] text-[var(--color-text-primary)] hover:border-[var(--color-accent-primary)]/50 hover:bg-[rgba(255,255,255,0.06)] transition-all duration-300 cursor-pointer"
              >
                <div className="flex flex-col items-start gap-1">
                  <span className="font-satoshi font-medium text-[9px] uppercase tracking-widest text-[var(--color-text-muted)]">
                    Get in touch
                  </span>
                  <span className="font-satoshi font-bold text-xs md:text-sm tracking-[0.02em]">
                    rizkyanandaherly@gmail.com
                  </span>
                </div>
                
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 transition-colors duration-300 group-hover:bg-[var(--color-accent-primary)] group-hover:text-black">
                  {copied ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4 transition-transform duration-300 group-hover:scale-105" />
                  )}
                </div>
              </button>

              {/* Copied Tooltip Popover */}
              <AnimatePresence>
                {copied && (
                  <motion.div
                    initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10, scale: 0.95, x: "-50%" }}
                    animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: -45, scale: 1, x: "-50%" }}
                    exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.95, x: "-50%" }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-0 left-1/2 px-3.5 py-1.5 rounded-lg bg-[var(--color-accent-primary)] text-black font-satoshi font-bold text-xs uppercase tracking-wider select-none shadow-md z-20 pointer-events-none"
                  >
                    Copied!
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right Column: Social directories stack */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col gap-6 lg:justify-end"
          >
            <span className="font-satoshi font-medium text-[10px] lg:text-xs uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
              Directories
            </span>
            
            <div className="flex flex-col w-full">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex justify-between items-center py-4 border-b border-[var(--color-border-dark)] font-satoshi font-bold text-sm lg:text-base tracking-[0.02em] text-[var(--color-text-subtle)] hover:text-[var(--color-accent-primary)] transition-colors duration-300"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ))}
            </div>
          </motion.div>

        </div>

        {/* ── Footer Copyrights & Credentials Credits ── */}
        <div className="mt-16 lg:mt-24 pt-8 border-t border-[var(--color-border-dark)] flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex flex-col gap-1">
            <p className="font-satoshi font-medium text-xs lg:text-sm text-[var(--color-text-muted)]">
              Designed & Developed by Rizky Ananda Herly.
            </p>
            <p className="font-satoshi font-normal text-[11px] lg:text-xs text-[var(--color-text-muted)] opacity-60">
              Built with Next.js, Tailwind CSS, and Framer Motion.
            </p>
          </div>
          
          <p className="font-satoshi font-normal text-xs lg:text-sm text-[var(--color-text-muted)] opacity-70">
            &copy; 2026. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
