"use client";

import { useState } from "react";
import Arrow from "./Arrow";

export default function Newsletter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <form
      className="w-full"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
        <div className="field-wrap">
          <label htmlFor="newsletter-name" className="label block text-brown-soft">
            Vorname
          </label>
          <input
            id="newsletter-name"
            type="text"
            className="field"
            placeholder="Dein Vorname"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="given-name"
            required
          />
        </div>
        <div className="field-wrap">
          <label htmlFor="newsletter-email" className="label block text-brown-soft">
            E-Mail
          </label>
          <input
            id="newsletter-email"
            type="email"
            className="field"
            placeholder="deine@adresse.de"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />
        </div>
      </div>
      <button type="submit" className="btn btn-champagne mt-9">
        Join A.R. ASCENDANCY
        <Arrow />
      </button>
      <p
        role="status"
        aria-live="polite"
        className={`mt-5 text-[0.9rem] text-brown-soft transition-opacity duration-500 ${sent ? "opacity-100" : "opacity-0"}`}
      >
        {sent ? "Die Anmeldung wird mit dem Launch der Website freigeschaltet." : " "}
      </p>
    </form>
  );
}
