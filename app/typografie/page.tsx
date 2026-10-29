import Image from "next/image";
import { LogoLockup, Monogram } from "@/components/Logo";
import Link from "next/link";
import Arrow from "@/components/Arrow";

export const metadata = {
  title: "A.R. ASCENDANCY — Typografie- & Logo-Vergleich",
};

const HEADLINE_B = "Ready for your new reality?";

function Section({ title, kicker, children }: { title: string; kicker: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-gold-line/70 py-16 md:py-24">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4 lg:col-span-3">
          <span className="label text-gold-line">{kicker}</span>
          <h2 className="display mt-4 text-[1.7rem] leading-[1.15] text-brown lg:text-[2.1rem]">{title}</h2>
        </div>
        <div className="md:col-span-8 lg:col-span-9">{children}</div>
      </div>
    </section>
  );
}

function Licence({ status, children }: { status: "frei" | "kostenpflichtig"; children: React.ReactNode }) {
  return (
    <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.72rem] tracking-[0.04em] text-brown-soft">
      <span
        className={`label !text-[0.58rem] rounded-full border px-2 py-[3px] ${
          status === "frei" ? "border-gold-line text-brown" : "border-burgundy text-burgundy"
        }`}
      >
        {status === "frei" ? "Lizenz: frei nutzbar" : "Lizenz: kostenpflichtig"}
      </span>
      <span>{children}</span>
    </p>
  );
}

function Card({ children, recommended = false }: { children: React.ReactNode; recommended?: boolean }) {
  return (
    <div className={`relative bg-cream-soft p-7 md:p-9 ${recommended ? "outline outline-1 outline-gold-line" : ""}`}>
      {recommended && (
        <span className="label absolute right-5 top-5 bg-brown px-2 py-1 !text-[0.56rem] text-cream">
          Empfehlung PENAXIS
        </span>
      )}
      {children}
    </div>
  );
}

export default function Typografie() {
  return (
    <main className="mx-auto max-w-[1400px] px-6 py-10 md:px-10 lg:px-14">
      <header className="flex flex-col gap-8 pb-14 md:flex-row md:items-end md:justify-between md:pb-20">
        <div>
          <Link href="/" className="textlink">
            <Arrow className="rotate-180" />
            Zur Startseite
          </Link>
          <h1 className="display mt-10 text-[2.4rem] leading-[1.05] text-brown md:text-[3.2rem]">
            Typografie- &amp; Logo-Vergleich
          </h1>
          <p className="measure mt-6 text-[0.98rem] leading-[1.8] text-brown-soft">
            Alle Varianten sind mit Ihren Originalformulierungen gesetzt. Es wird nichts ersetzt oder
            gekauft, bevor Sie es schriftlich freigegeben haben. Die mit „Empfehlung PENAXIS“
            markierten Optionen sind auf der Startseiten-Vorschau bereits umgesetzt.
          </p>
        </div>
        <Monogram className="h-20 w-auto text-logo" />
      </header>

      {/* ───────── LOGO ───────── */}
      <Section kicker="01" title="Logo-Varianten">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <span className="label text-brown-soft">Variante 1 – wie geliefert</span>
            <div className="mt-6 flex h-56 items-center justify-center">
              <Image src="/logo/variant-1-gold.png" alt="Logo Variante 1, Gold-Verlauf" width={500} height={500} className="h-48 w-auto" />
            </div>
            <p className="mt-6 text-[0.9rem] leading-[1.75] text-brown-soft">
              Metallischer Gold-Verlauf mit Glanzkante. Wirkt auf Bildschirmen eher glänzend und
              dekorativ – auf cremefarbenem Grund nimmt der Verlauf dem Zeichen etwas von seiner Ruhe.
            </p>
          </Card>
          <Card>
            <span className="label text-brown-soft">Variante 2 – wie geliefert</span>
            <div className="mt-6 flex h-56 items-center justify-center overflow-hidden">
              <Image src="/logo/variant-2-embossed.jpg" alt="Logo Variante 2, geprägt auf Creme" width={866} height={480} className="h-48 w-auto object-contain" />
            </div>
            <p className="mt-6 text-[0.9rem] leading-[1.75] text-brown-soft">
              Matte, geprägte Darstellung in einem Ton nahe #D6C1A3. Ruhiger, materieller, näher am
              „Quiet Luxury“-Anspruch. Liegt als JPG mit eingebranntem Hintergrund vor, ist dadurch für
              die Website (Header, dunkle Flächen, Favicon) nicht direkt verwendbar.
            </p>
          </Card>
          <Card recommended>
            <span className="label text-brown-soft">Web-Fassung – unsere Empfehlung</span>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="flex h-48 items-center justify-center bg-cream">
                <LogoLockup tagline={false} className="text-[1rem] text-logo" />
              </div>
              <div className="flex h-48 items-center justify-center bg-brown">
                <LogoLockup tagline={false} className="text-[1rem] text-logo" />
              </div>
            </div>
            <p className="mt-6 text-[0.9rem] leading-[1.75] text-brown-soft">
              Das Zeichen aus Variante 1 (identische Form), flächig in Ihrem verbindlichen Logo-Ton
              #D6C1A3 – ohne Verlauf und Glanz. Vereint die Klarheit des Originals mit der Ruhe von
              Variante 2, funktioniert auf hellem und dunklem Grund, skaliert als Vektor sauber bis zum Favicon
              und entspricht exakt Ihrem Farbcode. Die Vektorfassung wurde aus Ihrer Logodatei
              nachgezeichnet; für die Produktion bitten wir um Ihre originale Vektordatei (SVG/AI).
            </p>
          </Card>
          <Card>
            <span className="label text-brown-soft">Tagline – unterhalb des Logos</span>
            <div className="mt-6 flex h-48 flex-col items-center justify-center bg-cream">
              <LogoLockup className="text-[0.9rem] text-logo" />
            </div>
            <p className="mt-6 text-[0.9rem] leading-[1.75] text-brown-soft">
              „CLARITY - DECISION - ASCENT“ ist nicht Teil der Logografik, sondern steht – wie im Miro
              vorgesehen – separat darunter, in Caviar Dreams, Versalien, weit gesperrt.
            </p>
          </Card>
        </div>
      </Section>

      {/* ───────── HEADLINES ───────── */}
      <Section kicker="02" title="Hauptüberschriften">
        <div className="grid gap-6">
          <Card recommended>
            <span className="label text-brown-soft">Richtung 2 · Bodoni Moda (Nähe zu „Doing Life“)</span>
            <p className="display mt-6 text-[2rem] leading-[1.08] text-brown md:text-[2.8rem]">
              Führungskräfte Coaching -{" "}
              <span className="display-caps mt-2 block text-[1.05rem] md:text-[1.3rem]">
                CONSULTING, MENTORING &amp; STRATEGIC ADVISORY
              </span>
            </p>
            <p className="display mt-8 text-[2rem] leading-[1.08] text-brown md:text-[2.8rem]">{HEADLINE_B}</p>
            <Licence status="frei">
              SIL Open Font License · lokal auf dem Server eingebunden (DSGVO-konform) · Google Fonts /
              Indestructible Type
            </Licence>
            <p className="mt-5 text-[0.9rem] leading-[1.75] text-brown-soft">
              Der „Doing Life“-Titel ist ein klassischer Didone-Schnitt (hoher Strichkontrast, feine
              Haarlinien, vertikale Achse). Bodoni Moda kommt dieser Anmutung von den frei lizenzierbaren
              Schriften am nächsten – optisch ein eigenständiges Werk, keine Kopie. In großen Graden
              trägt sie Autorität und Ruhe; in Versalien mit Sperrung wird sie zur Positionierungszeile.
              Deshalb ist sie auf der Startseite umgesetzt.
            </p>
          </Card>
          <Card>
            <span className="label text-brown-soft">Richtung 1 · Caviar Dreams</span>
            <p className="font-caviar mt-6 text-[1.9rem] leading-[1.15] text-brown md:text-[2.6rem]">
              Führungskräfte Coaching -{" "}
              <span className="mt-2 block text-[1rem] uppercase tracking-[0.2em] md:text-[1.2rem]">
                CONSULTING, MENTORING &amp; STRATEGIC ADVISORY
              </span>
            </p>
            <p className="font-caviar mt-8 text-[1.9rem] leading-[1.15] text-brown md:text-[2.6rem]">{HEADLINE_B}</p>
            <Licence status="frei">Lauren Thompson / Nymfont · frei für private und kommerzielle Nutzung</Licence>
            <p className="mt-5 text-[0.9rem] leading-[1.75] text-brown-soft">
              Geometrisch, leicht, freundlich – in großen Graden wirkt sie allerdings dünn und eher
              „Boutique“ als „Advisory“. Sie entfaltet ihre Stärke in kleinen, gesperrten Versalien:
              Tagline, Labels, Nummerierungen. Genau dort setzen wir sie auf der Startseite ein.
            </p>
          </Card>
        </div>
      </Section>

      {/* ───────── SCRIPT ───────── */}
      <Section kicker="03" title="„Her Ascendancy“ – Handschrift-Akzent">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <span className="label text-brown-soft">Original · Blacksword Signature</span>
            <div className="mt-6 flex h-32 items-center bg-cream px-6">
              <span className="text-[0.85rem] leading-[1.7] text-brown-soft">
                Nicht eingebettet – kommerzielle Schrift, Webfont-Lizenz erforderlich. Zum Vergleich bitte
                Ihre Miro-Darstellung heranziehen.
              </span>
            </div>
            <Licence status="kostenpflichtig">
              Webfont-Lizenz nötig, auch bei 2–3 Platzierungen · Kauf nur durch Sie, auf A.R. ASCENDANCY
            </Licence>
          </Card>
          <Card recommended>
            <span className="label text-brown-soft">Alternative A · Great Vibes</span>
            <div className="mt-6 flex h-32 items-center bg-cream px-6">
              <span className="script text-[3.2rem] text-burgundy md:text-[3.6rem]">Her Ascendancy</span>
            </div>
            <Licence status="frei">SIL Open Font License · TypeSETit</Licence>
            <p className="mt-5 text-[0.9rem] leading-[1.75] text-brown-soft">
              Dem Blacksword-Duktus am nächsten: schlanke Schwünge, elegante Verbindungen, ruhiger
              Rhythmus. In #7C4242 auf Creme sehr gut lesbar. Auf der Startseite umgesetzt.
            </p>
          </Card>
          <Card>
            <span className="label text-brown-soft">Alternative B · Allura</span>
            <div className="mt-6 flex h-32 items-center bg-cream px-6">
              <span className="font-allura text-[3.2rem] leading-none text-burgundy md:text-[3.6rem]">Her Ascendancy</span>
            </div>
            <Licence status="frei">SIL Open Font License · TypeSETit</Licence>
            <p className="mt-5 text-[0.9rem] leading-[1.75] text-brown-soft">
              Weicher und runder, etwas kleinerer Schwung in den Großbuchstaben – wirkt freundlicher,
              aber weniger signaturhaft.
            </p>
          </Card>
          <Card>
            <span className="label text-brown-soft">Alternative C · Pinyon Script</span>
            <div className="mt-6 flex h-32 items-center bg-cream px-6">
              <span className="font-pinyon text-[3.2rem] leading-none text-burgundy md:text-[3.6rem]">Her Ascendancy</span>
            </div>
            <Licence status="frei">SIL Open Font License · Nicole Fally</Licence>
            <p className="mt-5 text-[0.9rem] leading-[1.75] text-brown-soft">
              Formaler, kalligrafischer, mit ausgeprägten Versalschwüngen – eher Einladungskarte als
              persönliche Signatur.
            </p>
          </Card>
        </div>
      </Section>

      {/* ───────── BODY ───────── */}
      <Section kicker="04" title="Grundschrift">
        <Card>
          <span className="label text-brown-soft">Manrope 400 / 500 – verbindlich</span>
          <p className="measure mt-6 text-[1.02rem] leading-[1.85] text-brown">
            Als Consultant, Mentor &amp; Strategic Advisor unterstütze ich Menschen mit Veränderungswunsch
            dabei Klarheit zu finden, selbstsichere Entscheidungen zu treffen und sich selbst zu führen.
          </p>
          <p className="mt-5 text-[0.8rem] font-medium uppercase tracking-[0.14em] text-brown">
            Navigation · Buttons · FAQs – Manrope 500
          </p>
          <Licence status="frei">SIL Open Font License · lokal eingebunden</Licence>
        </Card>
      </Section>

      {/* ───────── COLOURS ───────── */}
      <Section kicker="05" title="Farbcodes">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {[
            ["#EFE6DF", "Hintergrund"],
            ["#D6C1A3", "Logo"],
            ["#D2B799", "Akzente"],
            ["#4A3434", "Text & Überschriften"],
            ["#7C4242", "„Her Ascendancy“"],
          ].map(([hex, name]) => (
            <div key={hex} className="bg-cream-soft p-4">
              <div className="h-20 w-full border border-gold-line/40" style={{ background: hex }} />
              <p className="mt-3 text-[0.8rem] font-medium text-brown">{hex}</p>
              <p className="text-[0.72rem] text-brown-soft">{name}</p>
            </div>
          ))}
        </div>
      </Section>

      <footer className="border-t border-gold-line/70 py-10 text-[0.72rem] tracking-[0.06em] text-brown-soft">
        Vertrauliche Vorschau · PENAXIS (Private) Limited für A.R. ASCENDANCY · Stand Oktober 2026
      </footer>
    </main>
  );
}
