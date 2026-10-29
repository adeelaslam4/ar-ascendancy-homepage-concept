"use client";

import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "figure" | "p" | "header" | "li" | "span" | "h1" | "h2";
  /** "fade" (default) – fade-up with blur; "lines" – masked line reveal (children must be .line spans); "image" – slow settle */
  variant?: "fade" | "lines" | "image";
};

export default function Reveal({ children, className = "", delay = 0, as = "div", variant = "fade" }: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            el.classList.add("is-visible");
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const base = variant === "lines" ? "lines" : variant === "image" ? "img-reveal" : "reveal";
  const Tag = as as React.ElementType;
  return (
    <Tag
      ref={ref}
      className={`${base} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}

/** Wrap each line of a masked headline. */
export function Line({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`line ${className}`}>
      <span>{children}</span>
    </span>
  );
}
