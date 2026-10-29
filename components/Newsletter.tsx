"use client";

import { useState } from "react";

export default function Newsletter() {
  const [value, setValue] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <form
      className="w-full max-w-md"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <label htmlFor="newsletter-email" className="sr-only">
        E-Mail-Adresse
      </label>
      <div className="field-wrap">
        <input
          id="newsletter-email"
          type="email"
          className="field"
          placeholder="E-Mail-Adresse"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoComplete="email"
        />
      </div>
      <button type="submit" className="btn btn-solid mt-7">
        Join A.R. ASCENDANCY
      </button>
      <p
        role="status"
        aria-live="polite"
        className={`mt-5 text-[0.85rem] text-brown-soft transition-opacity duration-500 ${sent ? "opacity-100" : "opacity-0"}`}
      >
        {sent ? "Die Anmeldung wird mit dem Launch der Website freigeschaltet." : "\u00a0"}
      </p>
    </form>
  );
}
