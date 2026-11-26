"use client";

import { useEffect, useState } from "react";

/**
 * "Die folgenden Punkte sind für alle Angebote verbindlich" — sits inside the first (shortest) offer,
 * as on the client's board, and can be folded. Open on wide screens, where it evens out the three
 * columns; folded on phones, where it would otherwise be a long read before the second offer.
 */
export default function BindingBox({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(min-width: 1024px)").matches) setOpen(true);
  }, []);
  return (
    <div className="bind-box">
      <h4>
        <button
          type="button"
          className="bind-btn"
          aria-expanded={open}
          aria-controls="verbindlich-panel"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="display text-[1.12rem] leading-[1.3] text-burgundy">{title}</span>
          <span className="faq-icon" aria-hidden="true" />
        </button>
      </h4>
      <div id="verbindlich-panel" className="fold" data-open={open} role="region" aria-label={title}>
        <div>
          <div className="pb-1 pt-5">{children}</div>
        </div>
      </div>
    </div>
  );
}
