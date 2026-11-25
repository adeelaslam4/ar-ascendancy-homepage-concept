"use client";

import { useEffect, useRef } from "react";

type Step = { title: string; sub?: string; text?: string };

/**
 * Process "graphics" built from live text (sharp, translatable, readable for Google) and drawn in
 * once when they scroll into view.
 *  - "stair": stations on a gold line that rises from left to right (phone: down the side)
 *  - "rings": numbered rings joined by a line
 */
export default function Steps({
  items,
  label,
  variant = "stair",
}: {
  items: Step[];
  label: string;
  variant?: "stair" | "rings";
}) {
  const ref = useRef<HTMLOListElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            el.classList.add("is-drawn");
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -18% 0px", threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  if (variant === "rings") {
    return (
      <ol ref={ref} className="rings draws" aria-label={label}>
        {items.map((s, i) => (
          <li key={s.title} className="ring-step" style={{ "--i": i } as React.CSSProperties}>
            <span className="ring-link" aria-hidden="true" />
            <span className="ring" aria-hidden="true">
              {i + 1}
            </span>
            <div className="ring-copy">
              <p className="step-title">{s.title}</p>
              {s.sub ? <p className="step-sub">{s.sub}</p> : null}
              {s.text ? <p className="step-text">{s.text}</p> : null}
            </div>
          </li>
        ))}
      </ol>
    );
  }

  return (
    <ol ref={ref} className="steps draws" style={{ "--n": items.length } as React.CSSProperties} aria-label={label}>
      {items.map((s, i) => (
        <li key={s.title} className="step" style={{ "--i": i } as React.CSSProperties}>
          <span className="step-riser" aria-hidden="true" />
          <span className="step-line" aria-hidden="true" />
          <span className="step-node" aria-hidden="true" />
          <div className="step-copy">
            <span className="step-no">{i + 1}</span>
            <p className="step-title">{s.title}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
