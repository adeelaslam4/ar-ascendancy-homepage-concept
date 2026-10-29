import { LogoLockup } from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="bg-cream">
      <div className="mx-auto max-w-[1400px] px-6 pb-10 pt-16 md:px-10 md:pt-24 lg:px-14">
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <LogoLockup className="text-[1.1rem] text-brown" />
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <span className="label text-gold-line">Kontakt</span>
            <ul className="mt-5 space-y-3 text-[0.9rem] text-brown">
              <li>
                <a href="mailto:office@ar-ascendancy.com" className="transition-colors hover:text-burgundy">
                  office@ar-ascendancy.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/alina-rogall-502749411/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-burgundy"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <span className="label text-gold-line">Rechtliches</span>
            <ul className="mt-5 space-y-3 text-[0.9rem] text-brown">
              <li>
                <a href="#impressum" className="transition-colors hover:text-burgundy" title="Text folgt">
                  Impressum
                </a>
              </li>
              <li>
                <a href="#datenschutz" className="transition-colors hover:text-burgundy" title="Text folgt">
                  Datenschutzerklärung
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="rule mt-16" />
        <div className="flex flex-col gap-3 pt-6 text-[0.72rem] tracking-[0.06em] text-brown-soft md:flex-row md:items-center md:justify-between">
          <span>© 2026 A.R. ASCENDANCY · Alina Rogall · Berlin</span>
          <span className="flex items-center gap-2">
            <span className="text-brown">DE</span>
            <span className="h-3 w-px bg-gold-line" />
            <span>EN</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
