"use client";

import { useState } from "react";
import Arrow from "./Arrow";

export default function Newsletter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
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
      {/* Datenschutz-Einwilligung (DSGVO) + Hinweis auf Double-Opt-in */}
      <label htmlFor="newsletter-consent" className="consent mt-7 flex cursor-pointer items-start gap-3">
        <input
          id="newsletter-consent"
          type="checkbox"
          className="consent-box"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          required
        />
        <span className="text-[0.84rem] leading-[1.65] text-brown-soft">
          Ich möchte den Newsletter von A.R. ASCENDANCY erhalten und habe die{" "}
          <a href="#datenschutz" className="underline decoration-gold-line underline-offset-4 transition-colors hover:text-brown" title="Text folgt">
            Datenschutzerklärung
          </a>{" "}
          gelesen. Ich kann die Einwilligung jederzeit widerrufen.
        </span>
      </label>
      <button type="submit" className="btn btn-champagne mt-8">
        Join A.R. ASCENDANCY
        <Arrow />
      </button>
      <p className="mt-4 text-[0.78rem] leading-[1.6] text-brown-soft">
        Double-Opt-in: Du bestätigst deine Anmeldung anschließend per E-Mail.
      </p>
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
