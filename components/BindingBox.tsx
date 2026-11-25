"use client";

import { useState } from "react";

/** "Für alle Angebote verbindlich" as a box that opens (client wish: otherwise too much text at once). */
export default function BindingBox({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bind-box">
      <h3>
        <button
          type="button"
          className="bind-btn"
          aria-expanded={open}
          aria-controls="verbindlich-panel"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="display text-[1.3rem] leading-[1.25] text-burgundy md:text-[1.7rem]">{title}</span>
          <span className="faq-icon" aria-hidden="true" />
        </button>
      </h3>
      <div id="verbindlich-panel" className="fold" data-open={open} role="region" aria-label={title}>
        <div>
          <div className="px-[1.4rem] pb-8 md:px-10 md:pb-11">{children}</div>
        </div>
      </div>
    </div>
  );
}
