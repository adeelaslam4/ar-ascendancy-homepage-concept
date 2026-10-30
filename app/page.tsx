import Header from "@/components/Header";
import Reveal, { Line } from "@/components/Reveal";
import Stagger from "@/components/Stagger";
import Drift from "@/components/Drift";
import Arrow from "@/components/Arrow";
import Faq from "@/components/Faq";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { PHOTOS } from "@/lib/images";
import { CALENDLY, SPEAKING_MAIL } from "@/lib/links";

const FAQ = [
  {
    q: "Für wen ist das Führungskräfte Coaching geeignet?",
    a: "Für Führungskräfte, Selbstständige und erfolgreiche Menschen, die merken, dass ihre bisherige Realität nicht mehr zu dem passt, was sie aufbauen möchten. Besonders dann, wenn bereits viel reflektiert wurde, aber Entscheidungen, Muster oder Veränderungen im Alltag noch nicht wirklich umgesetzt sind.",
  },
  {
    q: "Arbeitest du nur mit Führungskräften?",
    a: "Nein. Ich arbeite auch mit Selbstständigen und anderen erfolgreichen Menschen, die sich persönlich oder beruflich neu ausrichten möchten. Der gemeinsame Nenner ist nicht die Jobbezeichnung, sondern die Bereitschaft, Verantwortung für die eigene Veränderung zu übernehmen.",
  },
  {
    q: "Wie unterscheidet sich deine Arbeit von klassischem Führungskräfte Coaching?",
    a: "Ich bringe meine eigene Perspektive ein, challenge bestehende Denkweisen und verbinde strategische Klarheit mit tiefer persönlicher Veränderung. Die Entscheidung bleibt immer bei dir.",
  },
  {
    q: "Welche Methoden Entscheidungsfindung nutzt du?",
    a: "Ich arbeite nicht mit einer starren Methode. Je nach Situation verbinde ich Perspektivwechsel, strukturierte Reflexion, Decision Making, Mental Reconditioning und Mental Rehearsal. Ziel ist, Entscheidungen nicht nur rational zu verstehen, sondern sie auch innerlich zu tragen und konsequent umzusetzen.",
  },
  {
    q: "Wie helfen Methoden Entscheidungsfindung bei Veränderung?",
    a: "Methoden Entscheidungsfindung helfen dabei, Optionen klarer zu bewerten, innere Konflikte sichtbar zu machen und deine eigene Richtung bewusst zu wählen. Entscheidend ist anschließend, diese Entscheidung auch durch Unsicherheit und Veränderung hindurch zu halten.",
  },
];

const OFFERS = [
  {
    title: "Führungskräfte Coaching für Einzelpersonen, Selbstständige & Führungskräfte",
    paras: [
      "1:1 Führungskräfte Coaching - Consulting, Mentoring & Strategic Advisory für Menschen, die trotz äußerem Erfolg spüren, dass ihre bisherige Realität nicht mehr zu ihnen passt.",
      "Auf Basis von Mental Reconditioning und Methoden Entscheidungsfindung begleite ich dich dabei, klarer zu entscheiden, dich bewusster zu führen und tief verankerte Muster nachhaltig zu verändern.",
    ],
  },
  {
    title: "Führungskräfte Coaching für Führungskräfte & Teams",
    paras: [
      "Führungskräfte Coaching - Consulting, Mentoring & Strategic Advisory für Unternehmen, Führungskräfte und Teams, die bewusste Selbstführung, klare Entscheidungsfindung und nachhaltige Veränderung gezielt stärken möchten.",
      "Dabei verbinde ich Mental Reconditioning mit Methoden Entscheidungsfindung und begleite Veränderung individuell und praxisnah.",
      "Individuell als 1:1 Zusammenarbeit oder Teamarbeit.",
    ],
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <Drift />

      <main>
        {/* ───────────────────────── HERO — kurze Selbstvorstellung mit Foto ───────────────────────── */}
        <section className="mx-auto max-w-[1400px] px-6 pb-24 pt-8 md:px-10 md:pb-32 md:pt-12 lg:px-14 lg:pt-16">
          <div className="grid items-center gap-14 md:grid-cols-12 md:gap-10 lg:gap-20">
            <Reveal variant="image" className="mat md:col-span-6 lg:col-span-5">
              <figure className="frame drift aspect-[4/5] w-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={PHOTOS.hero} alt="Alina Rogall, Founder & CEO A.R. ASCENDANCY" fetchPriority="high" />
              </figure>
            </Reveal>

            <div className="hero-copy md:col-span-6 lg:col-span-6 lg:col-start-7">
              {/* One typography for the whole positioning line, exactly as in the Miro board.
                  .hero-h1 sizes the type to the column so the three lines never re-wrap
                  (desktop, MacBook or phone: always exactly three lines). */}
              <Reveal as="h1" variant="lines" delay={80} className="display hero-h1 text-[1.9rem] leading-[1.2] text-brown sm:text-[2.2rem] lg:text-[2.6rem] xl:text-[2.85rem]">
                <Line>Führungskräfte Coaching -</Line>
                <Line>CONSULTING, MENTORING</Line>
                <Line>&amp; STRATEGIC ADVISORY</Line>
              </Reveal>

              <Reveal delay={360}>
                <div className="rule rule-draw mt-9 w-16" />
                <p className="copy measure mt-9">
                  Als Consultant, Mentor &amp; Strategic Advisor unterstütze ich Menschen mit
                  Veränderungswunsch dabei Klarheit zu finden, selbstsichere Entscheidungen zu
                  treffen und sich selbst zu führen.
                </p>
                <p className="copy measure mt-5">
                  Meine Mission ist es, dich zu begleiten, diesen hohen Standard zu erreichen.
                </p>
              </Reveal>

              <Reveal delay={480}>
                <p className="mt-9 text-[1.1rem] font-semibold tracking-[0.01em] text-brown">
                  Think consciously. Change everything.
                </p>
                <p className="script mt-3 text-[2rem] text-burgundy md:text-[2.2rem]" aria-label="Her Ascendancy">
                  Her Ascendancy
                </p>
              </Reveal>

            </div>
          </div>

          {/* CTA centred beneath the self-presentation (client wish 30 Oct), label bold for emphasis */}
          <Reveal delay={200} className="mt-16 flex flex-col items-center gap-5 text-center md:mt-20">
            <span className="label-strong text-brown">Ready to meet the standard?</span>
            <a href={CALENDLY} className="btn btn-solid" title="Kostenfreies Erstgespräch – Calendly">
              Kostenfreies Erstgespräch vereinbaren
              <Arrow />
            </a>
          </Reveal>
        </section>

        {/* ───────────────────────── HALTUNG — kurz, bewusst nicht vertieft ───────────────────────── */}
        <section id="haltung" className="haltung relative overflow-hidden bg-cream-soft">
          {/* Faint photographic ground behind the claim (as on the reference site) — her own interior photography */}
          <div className="haltung-bg" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={PHOTOS.haltung} alt="" loading="lazy" />
          </div>
          <div className="relative mx-auto max-w-[1400px] px-6 py-24 text-center md:px-10 md:py-36 lg:px-14">
            <Reveal>
              <span className="label text-brown-soft">Clarity - Decision - Ascent</span>
            </Reveal>
            <Reveal as="p" variant="lines" delay={120} className="display lines-flow-sm mx-auto mt-7 max-w-[900px] text-[1.8rem] leading-[1.3] text-brown sm:text-[2.2rem] lg:text-[2.8rem]">
              <Line>Klarheit, die Entscheidungen trägt</Line>
              <Line>und Führung verändert.</Line>
            </Reveal>
          </div>
        </section>

        {/* ───────────────────────── ANGEBOTE — zwei Einleitungen, nebeneinander ───────────────────────── */}
        <section id="angebote" className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-36">
          <Reveal as="h2" variant="lines" className="display lines-flow-sm text-center text-[1.5rem] leading-[1.15] text-brown sm:text-[2rem] md:text-[2.6rem] lg:text-[3rem]">
            <Line>Für Menschen in Entscheidungspositionen</Line>
          </Reveal>

          <div className="mt-14 grid gap-6 md:mt-20 md:grid-cols-2 md:gap-8">
            {OFFERS.map((o, i) => (
              <Stagger key={o.title} as="article" className="offer-panel" base={i * 120}>
                <div data-s="rule" className="rule-accent" />
                <h3 data-s className="display-sm mt-8 text-[1.5rem] leading-[1.22] text-brown lg:text-[1.75rem]">
                  {o.title}
                </h3>
                {o.paras.map((p, j) => (
                  <p key={j} data-s className={`copy measure ${j ? "mt-5" : "mt-7"}`}>
                    {p}
                  </p>
                ))}
              </Stagger>
            ))}
          </div>

          {/* Both actions together, beneath the two offers */}
          <Stagger className="mt-14 flex flex-col items-center gap-6 md:mt-16">
            <a data-s href="#angebot" className="textlink" title="Verlinkung zur Angebotsseite">
              Mehr dazu
              <Arrow />
            </a>
            <a data-s href={CALENDLY} className="btn btn-solid" title="Kostenfreies Erstgespräch – Calendly">
              Kostenfreies Erstgespräch buchen
              <Arrow />
            </a>
          </Stagger>
        </section>

        {/* ───────────────────────── STORY — mit Foto und Signatur ───────────────────────── */}
        <section id="ueber-mich" className="bg-cream-soft">
          <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-40">
            <div className="grid items-center gap-14 md:grid-cols-12 md:gap-10 lg:gap-16">
              <div className="story-copy md:col-span-7 lg:col-span-6">
                <Reveal as="p" variant="lines" className="display story-h lines-flow-sm text-[1.65rem] leading-[1.35] text-brown sm:text-[1.9rem] lg:text-[2.3rem]">
                  <Line>Ich weiß, wie es ist, eine vertraute</Line>
                  <Line>Realität zu verlassen, bevor die</Line>
                  <Line>nächste vollständig sichtbar ist.</Line>
                </Reveal>
                <Reveal delay={200}>
                  <div className="rule rule-draw mt-9 w-16" />
                  <p className="copy measure mt-9">
                    Genau daraus ist <strong className="font-semibold">A.R. ASCENDANCY</strong>{" "}
                    entstanden: klar sehen, bewusst entscheiden und die eigene Richtung halten, bis
                    Veränderung zur gelebten Realität wird.
                  </p>
                </Reveal>
                <Reveal delay={320}>
                  <div className="mt-9">
                    <p className="text-[1.05rem] font-semibold text-brown">Alina Rogall</p>
                    <p className="mt-1 text-[0.95rem] text-brown-soft">Founder &amp; CEO, A.R. ASCENDANCY · Berlin</p>
                  </div>
                  <a href="#ueber-mich-seite" className="textlink mt-9" title="Verlinkung zur About-me-Seite">
                    Read my story
                    <Arrow />
                  </a>
                </Reveal>
              </div>

              <Reveal as="figure" variant="image" delay={120} className="frame drift aspect-[4/5] w-full md:col-span-5 md:ml-auto md:max-w-[440px] lg:col-span-4 lg:col-start-9">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={PHOTOS.story} alt="Alina Rogall" loading="lazy" />
              </Reveal>
            </div>
          </div>
        </section>

        {/* ───────────────────────── SPEAKING & PODCASTS ───────────────────────── */}
        <section id="speaking" className="scroll-mt-24">
          <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-40">
            <div className="grid items-center gap-14 md:grid-cols-12 md:gap-10 lg:gap-16">
              <Reveal as="figure" variant="image" className="frame drift aspect-[4/5] w-full md:col-span-5 md:max-w-[460px] lg:col-span-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={PHOTOS.speaking} alt="" loading="lazy" />
              </Reveal>

              <div className="md:col-span-7 lg:col-span-6 lg:col-start-7">
                <Reveal as="h2" variant="lines" className="display text-[2.2rem] leading-[1.08] text-brown lg:text-[2.9rem]">
                  <Line>Speaking &amp; Podcasts</Line>
                </Reveal>
                <Reveal delay={160}>
                  <div className="rule rule-draw mt-8 w-16" />
                  <p className="copy measure mt-8">
                    Für Bühnen, Interviews und Gespräche rund um meine Arbeit und zu meiner Person,
                    die neue Perspektiven auf Mindset, Entscheidungen, Self-Leadership und Veränderung
                    eröffnen.
                  </p>
                </Reveal>
                <Reveal delay={280}>
                  <a href={SPEAKING_MAIL} className="btn btn-champagne mt-10">
                    Podcast &amp; Speaking Anfragen
                    <Arrow />
                  </a>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────────────── NEWSLETTER — hervorgehoben ───────────────────────── */}
        <section id="newsletter" className="px-4 md:px-8 lg:px-12">
          <Stagger className="newsletter-band mx-auto max-w-[1400px]">
            <div className="grid items-center gap-12 px-8 py-16 md:grid-cols-12 md:gap-10 md:px-14 md:py-24 lg:px-20">
              <div className="md:col-span-6 lg:col-span-5">
                <span data-s className="label text-brown-soft">
                  Newsletter
                </span>
                <p data-s className="display mt-6 text-[2.2rem] italic leading-[1.12] text-brown lg:text-[3rem]">
                  Think consciously.
                  <br />
                  Stay connected.
                </p>
              </div>
              <div data-s className="md:col-span-6 md:col-start-7 lg:col-span-6 lg:col-start-7">
                <Newsletter />
              </div>
            </div>
          </Stagger>
        </section>

        {/* ───────────────────────── FAQ ───────────────────────── */}
        <section id="faq">
          <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-40">
            <div className="grid gap-12 md:grid-cols-12 md:gap-10">
              <Reveal className="md:col-span-4 lg:col-span-3">
                <h2 className="display text-[2.2rem] leading-[1.08] text-brown lg:text-[2.9rem]">FAQ&apos;s</h2>
                <div className="rule rule-draw mt-8 w-16" />
              </Reveal>
              <Reveal delay={120} className="md:col-span-8 lg:col-span-8 lg:col-start-5">
                <Faq items={FAQ} />
              </Reveal>
            </div>
          </div>

          {/* ───────────────────────── FINAL CTA — soft gold tint (same as newsletter), brown type ───────────────────────── */}
          <div className="px-4 pb-5 md:px-8 md:pb-8 lg:px-12">
            <Stagger className="cta-card newsletter-band mx-auto max-w-[1400px] text-brown">
              <div className="grid gap-10 px-8 py-16 md:grid-cols-12 md:gap-8 md:px-14 md:py-24 lg:px-20 lg:py-28">
                <div className="md:col-span-7">
                  <p data-s className="display text-[2.4rem] leading-[1.05] text-brown sm:text-[3rem] lg:text-[4rem]">
                    Ready for your
                    <br />
                    new reality?
                  </p>
                </div>
                <div className="flex md:col-span-5 md:col-start-8 md:items-end md:justify-end">
                  <a data-s href={CALENDLY} className="btn btn-solid" title="Kostenfreies Erstgespräch – Calendly">
                    Kostenfreies Erstgespräch vereinbaren
                    <Arrow />
                  </a>
                </div>
              </div>
            </Stagger>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
