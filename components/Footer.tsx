import Image from "next/image";

type NavItem = { label: string; href: string };

const NAV: NavItem[] = [
  { label: "Startseite", href: "/" },
  { label: "Angebot", href: "#angebot" },
  { label: "Über mich", href: "#ueber-mich" },
  { label: "Blog", href: "#blog" },
  { label: "Kontakt", href: "#kontakt" },
];

const LEGAL = [
  { label: "Impressum", href: "#impressum" },
  { label: "Datenschutzerklärung", href: "#datenschutz" },
];

/* English labels for the trial translation of the homepage top (/en). */
const NAV_EN: NavItem[] = [
  { label: "Home", href: "/en" },
  { label: "Offer", href: "#offer" },
  { label: "About me", href: "#about" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#kontakt" },
];
const LEGAL_EN = [
  { label: "Legal notice", href: "#impressum" },
  { label: "Privacy policy", href: "#datenschutz" },
];
const T = {
  de: { line: "Führungskräfte Coaching, Consulting, Mentoring & Strategic Advisory. Berlin.", contact: "Kontakt", mail: "E-Mail an office@ar-ascendancy.com", yt: "YouTube (Link folgt)", ytTitle: "YouTube – Link folgt", nav: "Fußzeilen-Navigation", legal: "Rechtliches", soon: "Text folgt" },
  en: { line: "Executive Coaching, Consulting, Mentoring & Strategic Advisory. Berlin.", contact: "Contact", mail: "E-mail to office@ar-ascendancy.com", yt: "YouTube (link to follow)", ytTitle: "YouTube – link to follow", nav: "Footer navigation", legal: "Legal", soon: "Text to follow" },
};

function IconLinkedIn() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45Z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="3" y="5.5" width="18" height="13" rx="1.5" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </svg>
  );
}

export default function Footer({ nav, lang = "de" }: { nav?: NavItem[]; lang?: "de" | "en" } = {}) {
  const t = T[lang];
  const legal = lang === "en" ? LEGAL_EN : LEGAL;
  nav = nav ?? (lang === "en" ? NAV_EN : NAV);
  return (
    <footer className="bg-cream-soft px-4 pb-5 pt-5 md:px-8 md:pb-8 md:pt-8 lg:px-12">
      <div className="relative mx-auto max-w-[1400px]">
        <div className="fcard relative rounded-[28px] bg-cream px-7 pb-12 pt-10 md:rounded-[32px] md:px-12 md:pb-14 md:pt-12 lg:px-16 lg:pb-16 lg:pt-14">
          {/* architectural notches (desktop) */}
          <span className="notch notch-tl hidden md:block" aria-hidden="true" />
          <span className="notch notch-br hidden md:block" aria-hidden="true" />

          <div className="grid gap-12 md:grid-cols-12 md:gap-8">
            {/* ── Left: logo (her colour, geometry unchanged), tagline separate beneath ── */}
            <div className="flex flex-col md:col-span-7 md:pl-[112px] lg:pl-[120px]">
              {/* Lock-up exactly as in the header: tagline centred under the artwork, gap in the header's
                  proportion (tagline gap ≈ 15% of the monogram height). The PNG carries ~12% transparent
                  padding below the wordmark, hence the small negative margin. */}
              <div className="flex w-fit flex-col items-center">
                <Image
                  src="/logo/lockup-original@2x.png"
                  alt="A.R. ASCENDANCY"
                  width={1000}
                  height={1000}
                  unoptimized
                  className="h-44 w-auto md:h-52"
                />
                <span className="label -mt-[3px] whitespace-nowrap text-center leading-none text-brown md:-mt-[4px]">
                  Clarity - Decision - Ascent
                </span>
              </div>
              <p className="copy mt-7 max-w-[380px] text-[0.98rem] text-brown-soft">
                {t.line}
              </p>

              <div id="kontakt" className="mt-12 flex scroll-mt-24 flex-col gap-3 md:mt-16 md:pl-0">
                <span className="label text-gold-line">{t.contact}</span>
                <a
                  href="mailto:office@ar-ascendancy.com"
                  className="w-fit text-[1rem] text-brown transition-colors duration-300 hover:text-burgundy md:text-[1.05rem]"
                >
                  office@ar-ascendancy.com
                </a>
                <span className="text-[0.9rem] text-brown-soft">Berlin</span>
              </div>

              <div className="mt-10 flex items-center gap-3 md:mt-auto md:pt-12">
                <a
                  href="https://www.linkedin.com/in/alina-rogall-502749411/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social"
                  aria-label="LinkedIn – Alina Rogall"
                >
                  <IconLinkedIn />
                </a>
                <a href="mailto:office@ar-ascendancy.com" className="social" aria-label={t.mail}>
                  <IconMail />
                </a>
                {/* channel link is added by the client once the channel exists */}
                <a href="#youtube" className="social" aria-label={t.yt} title={t.ytTitle}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.28 5 12 5 12 5s-6.28 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.72 19 12 19 12 19s6.28 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15V9l5.2 3L10 15Z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* ── Right: pill CTA, navigation, legal ── */}
            <div className="flex flex-col md:col-span-5 md:items-end md:text-right lg:col-span-4 lg:col-start-9">
              <span className="label text-gold-line md:mt-2">Navigation</span>
              <nav className="mt-4 flex flex-col gap-2.5" aria-label={t.nav}>
                {nav.map((n) => (
                  <a key={n.label} href={n.href} className="flink">
                    {n.label}
                  </a>
                ))}
              </nav>

              <span className="label mt-10 text-gold-line">{t.legal}</span>
              <div className="mt-4 flex flex-col gap-2.5">
                {legal.map((n) => (
                  <a key={n.label} href={n.href} className="flink text-[0.85rem]" title={t.soon}>
                    {n.label}
                  </a>
                ))}
              </div>

              <p className="mt-10 text-[0.72rem] tracking-[0.06em] text-brown-soft md:hidden">
                © 2026 A.R. ASCENDANCY · Alina Rogall
              </p>
            </div>
          </div>
        </div>

        {/* sits inside the bottom-right notch on desktop */}
        <p className="absolute bottom-6 right-4 hidden text-[0.72rem] tracking-[0.06em] text-brown-soft md:block lg:right-6">
          © 2026 A.R. ASCENDANCY · Alina Rogall
        </p>
      </div>
    </footer>
  );
}
