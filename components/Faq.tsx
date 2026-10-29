"use client";

import { useState } from "react";

export type FaqEntry = { q: string; a: string };

export default function Faq({ items }: { items: FaqEntry[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div>
      {items.map((item, i) => {
        const isOpen = open === i;
        const id = `faq-${i}`;
        return (
          <div key={item.q} className="faq-item" data-open={isOpen}>
            <h3>
              <button
                type="button"
                className="faq-btn"
                aria-expanded={isOpen}
                aria-controls={`${id}-panel`}
                id={`${id}-btn`}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span className="display-sm text-[1.2rem] md:text-[1.4rem]">
                  {item.q}
                </span>
                <span className="faq-icon" aria-hidden="true" />
              </button>
            </h3>
            <div
              id={`${id}-panel`}
              role="region"
              aria-labelledby={`${id}-btn`}
              className="faq-panel"
            >
              <div>
                <p className="copy copy-soft measure pb-7">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
