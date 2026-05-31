"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

/* ===================================================================
   CUSTOM CURSOR — circular outline cursor that adapts to background
   Hides default browser cursor and changes color (white on dark sections,
   dark on light sections) with expanding hover animation.
   =================================================================== */

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if on a touch device
    setIsMobile(window.matchMedia("(hover: none)").matches);

    // Hide default cursor
    document.body.style.cursor = "none";

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Detect which section the cursor is over
      const element = document.elementFromPoint(e.clientX, e.clientY);
      const section = element?.closest("[data-theme]");
      const theme = section?.getAttribute("data-theme");
      setIsDark(theme !== "light");
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseover", handleMouseEnter);
    document.addEventListener("mouseout", handleMouseLeave);

    return () => {
      document.body.style.cursor = "auto";
      window.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseover", handleMouseEnter);
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  if (isMobile) return null;

  const cursorColor = isDark ? "#FFFFFF" : "#09090A";

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      animate={{
        x: position.x - (isHovering ? 20 : 10),
        y: position.y - (isHovering ? 20 : 10),
        width: isHovering ? 40 : 20,
        height: isHovering ? 40 : 20,
      }}
      transition={{ type: "spring", mass: 0.2, stiffness: 800, damping: 30 }}
    >
      <motion.div
        className="w-full h-full rounded-full border-2"
        animate={{
          borderColor: cursorColor,
          backgroundColor: isHovering ? `${cursorColor}20` : "transparent",
        }}
        transition={{ duration: 0.15 }}
      />
    </motion.div>
  );
}
