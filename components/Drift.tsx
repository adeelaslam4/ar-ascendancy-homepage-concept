"use client";

import { useEffect } from "react";

/**
 * Adds a few pixels of vertical drift to .drift elements relative to their
 * position in the viewport. Deliberately tiny (±14px) – depth without parallax theatre.
 */
export default function Drift() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>(".drift"));
    if (!els.length) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      for (const el of els) {
        const r = el.getBoundingClientRect();
        const center = r.top + r.height / 2;
        const t = (center - vh / 2) / vh; // -0.5 … 0.5 across the viewport
        el.style.setProperty("--drift", `${(-t * 28).toFixed(1)}px`);
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return null;
}
