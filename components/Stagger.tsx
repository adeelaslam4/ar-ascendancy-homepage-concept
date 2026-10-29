"use client";

import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "ul" | "article" | "header";
  /** ms between successive children */
  step?: number;
  /** ms before the first child */
  base?: number;
};

/**
 * Choreographed reveal: every descendant with a `data-s` attribute animates in order
 * (opacity + 18px lift, 600ms, ease-out), `step` ms apart, once the container scrolls into view.
 */
export default function Stagger({ children, className = "", as = "div", step = 95, base = 0 }: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = Array.from(el.querySelectorAll<HTMLElement>("[data-s]"));
    items.forEach((it, i) => it.style.setProperty("--d", `${base + i * step}ms`));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            el.classList.add("is-visible");
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [step, base]);

  const Tag = as as React.ElementType;
  return (
    <Tag ref={ref} className={`stagger ${className}`}>
      {children}
    </Tag>
  );
}
