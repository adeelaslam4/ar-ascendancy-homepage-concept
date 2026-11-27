"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CALENDLY } from "@/lib/links";

// "Angebot" links to the future Angebotsseite (not the two homepage teasers); "Speaking" to the homepage section.
type NavItem = { label: string; href: string; title?: string };

const NAV: NavItem[] = [
  { label: "Startseite", href: "/" },
  { label: "Angebot", href: "#angebot", title: "Verlinkung zur Angebotsseite" },
  { label: "Über mich", href: "#ueber-mich", title: "Verlinkung zur About-me-Seite" },
  { label: "Blog", href: "#blog", title: "Verlinkung zum Blog" },
  { label: "Kontakt", href: "#kontakt" },
];

/** English menu for the trial translation of the homepage top (/en). */
const NAV_EN: NavItem[] = [
  { label: "Home", href: "/en" },
  { label: "Offer", href: "#offer", title: "Links to the offer page" },
  { label: "About me", href: "#about", title: "Links to the About me page" },
  { label: "Blog", href: "#blog", title: "Links to the blog" },
  { label: "Contact", href: "#kontakt" },
];

const T = {
  de: { home: "A.R. ASCENDANCY – Startseite", main: "Hauptnavigation", lang: "Sprache", cta: "Kostenfreies Erstgespräch", ctaTitle: "Link zu Calendly", close: "Menü schließen", open: "Menü öffnen", mobile: "Mobile Navigation", toDe: "Deutsche Version", toEn: "English version (preview of the homepage top)" },
  en: { home: "A.R. ASCENDANCY – Home", main: "Main navigation", lang: "Language", cta: "Free initial consultation", ctaTitle: "Link to Calendly", close: "Close menu", open: "Open menu", mobile: "Mobile navigation", toDe: "Deutsche Version", toEn: "English version" },
};

/** DE | EN. The current language is plain text, the other one is a link. */
function LangSwitch({ lang, className }: { lang: "de" | "en"; className: string }) {
  const t = T[lang];
  return (
    <span className={className} aria-label={t.lang}>
      {lang === "de" ? (
        <span className="text-brown" aria-current="true">DE</span>
      ) : (
        <Link href="/" hrefLang="de" title={t.toDe} className="transition-colors duration-300 hover:text-burgundy">DE</Link>
      )}
      <span className="h-3 w-px bg-gold-line" />
      {lang === "en" ? (
        <span className="text-brown" aria-current="true">EN</span>
      ) : (
        <Link href="/en" hrefLang="en" title={t.toEn} className="transition-colors duration-300 hover:text-burgundy">EN</Link>
      )}
    </span>
  );
}

/** `nav` / `current` are only passed by the subpages; the homepage keeps the default menu above.
    `lang="en"` is only used by the English trial page (/en). */
export default function Header({ nav, current, lang = "de" }: { nav?: NavItem[]; current?: string; lang?: "de" | "en" } = {}) {
  const t = T[lang];
  nav = nav ?? (lang === "en" ? NAV_EN : NAV);
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
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-3 md:px-10 md:py-4 lg:px-14">
        {/* Logo: original artwork, stacked — monogram, wordmark, then the tagline beneath in the logo colour */}
        <Link href={lang === "en" ? "/en" : "/"} className="group flex flex-col items-center gap-[6px]" aria-label={t.home}>
          <Image
            src="/logo/monogram-original@2x.png"
            alt=""
            width={654}
            height={660}
            priority
            unoptimized
            className="h-10 w-auto transition-opacity duration-500 group-hover:opacity-80 md:h-12"
          />
          <Image
            src="/logo/wordmark-original@2x.png"
            alt="A.R. ASCENDANCY"
            width={926}
            height={66}
            priority
            unoptimized
            className="h-[9px] w-auto md:h-[11px]"
          />
          <span className="label mt-[5px] whitespace-nowrap text-[0.44rem] leading-none tracking-[0.22em] text-brown md:mt-[7px] md:text-[0.5rem]">
            Clarity - Decision - Ascent
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex lg:gap-9" aria-label={t.main}>
          {nav.map((n) => (
            <a
              key={n.label}
              href={n.href}
              title={n.title}
              aria-current={current && n.label === current ? "page" : undefined}
              className="navlink whitespace-nowrap text-[0.82rem] font-medium tracking-[0.12em] uppercase text-brown transition-colors duration-300 hover:text-burgundy"
            >
              {n.label}
            </a>
          ))}
          <LangSwitch lang={lang} className="ml-2 flex items-center gap-2 text-[0.74rem] tracking-[0.16em] text-brown-soft" />
          <a href={CALENDLY} className="btn-pill ml-4 hidden whitespace-nowrap xl:inline-flex" title={t.ctaTitle}>
            {t.cta}
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? t.close : t.open}
          className="relative z-50 flex h-10 w-10 items-center justify-center lg:hidden"
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
        className={`fixed inset-0 z-40 flex flex-col bg-cream px-8 pt-32 pb-12 transition-opacity duration-400 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-7" aria-label={t.mobile}>
          {nav.map((n) => (
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
        <LangSwitch lang={lang} className="mt-auto flex items-center gap-3 text-[0.75rem] tracking-[0.18em] text-brown-soft" />
      </div>
    </header>
  );
}
