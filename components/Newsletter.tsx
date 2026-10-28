"use client";

import { useState } from "react";

export default function Newsletter() {
  const [value, setValue] = useState("");

  return (
    <form
      className="w-full max-w-md"
      onSubmit={(e) => {
        e.preventDefault();
      }}
      aria-describedby="newsletter-note"
    >
      <label htmlFor="newsletter-email" className="sr-only">
        E-Mail-Adresse
      </label>
      <input
        id="newsletter-email"
        type="email"
        className="field"
        placeholder="E-Mail-Adresse"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        autoComplete="email"
      />
      <button type="submit" className="btn btn-solid mt-7">
        Join A.R. ASCENDANCY
      </button>
      <p id="newsletter-note" className="mt-5 text-[0.7rem] tracking-[0.04em] text-brown-soft/80">
        Konzept-Vorschau: Die Anbindung an Mailchimp (Double Opt-in) erfolgt im Gesamtprojekt.
      </p>
    </form>
  );
}
