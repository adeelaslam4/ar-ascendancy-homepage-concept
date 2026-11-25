"use client";

import { useState } from "react";

/** Kickoff demo only: lets the client compare two ways of setting the H2 initial. */
export default function CapSwitch({ children }: { children: React.ReactNode }) {
  const [v, setV] = useState<"1" | "2">("1");
  return (
    <div className="post" data-cap={v}>
      <div className="demo-switch" role="group" aria-label="Varianten für den Anfangsbuchstaben">
        <span>
          <strong className="font-semibold text-brown">Nur für den Kickoff:</strong> Anfangsbuchstabe der H2
        </span>
        <button type="button" aria-pressed={v === "1"} onClick={() => setV("1")}>
          1 · Überschrift in Bodoni Moda
        </button>
        <button type="button" aria-pressed={v === "2"} onClick={() => setV("2")}>
          2 · wie dein Beispiel
        </button>
      </div>
      {children}
    </div>
  );
}
