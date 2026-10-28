"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV = [
  { label: "Startseite", href: "/" },
  { label: "Angebote", href: "#angebote" },
  { label: "Über mich", href: "#ueber-mich" },
  { label: "Blog", href: "#blog" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 transition-[background-color,box-shadow,backdrop-filter] duration-500 ${
        scrolled
          ? "bg-cream/85 backdrop-blur-md shadow-[0_1px_0_0_rgba(201,173,140,0.45)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10 lg:px-14">
        {/* Logo + tagline beneath (tagline is NOT part of the logo artwork) */}
        <Link href="/" className="group flex items-center gap-4" aria-label="A.R. ASCENDANCY – Startseite">
          <Image
            src="/logo/monogram-flat.png"
            alt=""
            width={327}
            height={340}
            priority
            className="h-11 w-auto md:h-12"
          />
          <span className="flex flex-col gap-[7px]">
            <Image
              src="/logo/wordmark-dark.png"
              alt="A.R. ASCENDANCY"
              width={463}
              height={56}
              priority
              className="h-[13px] w-auto md:h-[14px]"
            />
            <span className="label text-[0.56rem] leading-none text-brown-soft md:text-[0.6rem]">
              Clarity - Decision - Ascent
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 md:flex" aria-label="Hauptnavigation">
          {NAV.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="text-[0.78rem] font-medium tracking-[0.12em] uppercase text-brown transition-colors duration-300 hover:text-burgundy"
            >
              {n.label}
            </a>
          ))}
          <span className="ml-2 flex items-center gap-2 text-[0.7rem] tracking-[0.16em] text-brown-soft" aria-label="Sprache">
            <span className="text-brown">DE</span>
            <span className="h-3 w-px bg-gold-line" />
            <span title="Englische Version folgt nach Freigabe">EN</span>
          </span>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
        >
          <span className="relative block h-3.5 w-6">
            <span
              className={`absolute left-0 top-0 h-px w-full bg-brown transition-transform duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-px w-full bg-brown transition-opacity duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 bottom-0 h-px w-full bg-brown transition-transform duration-300 ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 flex flex-col bg-cream px-8 pt-32 pb-12 transition-opacity duration-400 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-7" aria-label="Mobile Navigation">
          {NAV.map((n) => (
            <a
              key={n.label}
              href={n.href}
              onClick={() => setOpen(false)}
              className="display text-[2rem] text-brown"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="mt-auto flex items-center gap-3 text-[0.75rem] tracking-[0.18em] text-brown-soft">
          <span className="text-brown">DE</span>
          <span className="h-3 w-px bg-gold-line" />
          <span>EN</span>
        </div>
      </div>
    </header>
  );
}
