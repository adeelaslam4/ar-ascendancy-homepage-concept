import Image from "next/image";
import Header from "@/components/Header";
import Reveal, { Line } from "@/components/Reveal";
import Stagger from "@/components/Stagger";
import Drift from "@/components/Drift";
import Arrow from "@/components/Arrow";
import Faq from "@/components/Faq";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { PHOTOS } from "@/lib/images";

// Calendly link not yet provided by the client — placeholder until configured.
const CALENDLY = "#calendly";
const MAILTO = "mailto:office@ar-ascendancy.com?subject=Podcast%20%26%20Speaking%20Anfrage";

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
    n: "01",
    title: "Führungskräfte Coaching für Einzelpersonen, Selbstständige & Führungskräfte",
    paras: [
      "1:1 Führungskräfte Coaching - Consulting, Mentoring & Strategic Advisory für Menschen, die trotz äußerem Erfolg spüren, dass ihre bisherige Realität nicht mehr zu ihnen passt.",
      "Auf Basis von Mental Reconditioning und Methoden Entscheidungsfindung begleite ich dich dabei, klarer zu entscheiden, dich bewusster zu führen und tief verankerte Muster nachhaltig zu verändern.",
    ],
  },
  {
    n: "02",
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
        {/* ───────────────────────── HERO ───────────────────────── */}
        <section className="mx-auto max-w-[1400px] px-6 pb-24 pt-6 md:px-10 md:pb-32 md:pt-10 lg:px-14 lg:pt-12">
          <div className="grid items-center gap-14 md:grid-cols-12 md:gap-10 lg:gap-20">
            {/* One portrait, confidently cropped, with a fine offset mat */}
            <Reveal variant="image" className="mat md:col-span-6 lg:col-span-5">
              <figure className="frame drift aspect-[4/5] w-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={PHOTOS.hero} alt="Alina Rogall, Founder & CEO A.R. ASCENDANCY" fetchPriority="high" />
              </figure>
            </Reveal>

            <div className="md:col-span-6 lg:col-span-6 lg:col-start-7">
              <Reveal as="h1" variant="lines" delay={80} className="display text-[2.5rem] leading-[1.02] text-brown sm:text-[3rem] lg:text-[3.7rem] xl:text-[4.2rem]">
                <Line>Führungskräfte</Line>
                <Line>Coaching -</Line>
                <Line className="display-caps mt-5 text-[0.95rem] leading-[1.6] sm:text-[1.05rem] lg:text-[1.15rem] xl:text-[1.25rem]">
                  CONSULTING, MENTORING &amp; STRATEGIC ADVISORY
                </Line>
              </Reveal>

              <Reveal delay={380}>
                <div className="rule rule-draw mt-10 w-16" />
                <p className="copy measure mt-9">
                  Als Consultant, Mentor &amp; Strategic Advisor unterstütze ich Menschen mit
                  Veränderungswunsch dabei Klarheit zu finden, selbstsichere Entscheidungen zu
                  treffen und sich selbst zu führen.
                </p>
                <p className="copy measure mt-5">
                  Meine Mission ist es, dich zu begleiten, diesen hohen Standard zu erreichen.
                </p>
              </Reveal>

              <Reveal delay={500}>
                <p className="mt-9 text-[1.1rem] font-semibold tracking-[0.01em] text-brown">
                  Think consciously. Change everything.
                </p>
                <p className="script mt-4 text-[2.8rem] text-burgundy md:text-[3.2rem]" aria-label="Her Ascendancy">
                  Her Ascendancy
                </p>
              </Reveal>

              <Reveal delay={620}>
                <div className="mt-11 flex flex-col items-start gap-5">
                  <span className="label text-brown-soft">Ready to meet the standard?</span>
                  <a href={CALENDLY} className="btn btn-solid" title="Link zu Calendly folgt">
                    Kostenfreies Erstgespräch vereinbaren
                    <Arrow />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ───────────────────────── STORY ───────────────────────── */}
        <section id="ueber-mich" className="bg-cream-soft">
          <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-40">
            <div className="grid items-center gap-14 md:grid-cols-12 md:gap-10 lg:gap-16">
              <div className="md:col-span-7 lg:col-span-6">
                <Reveal as="p" variant="lines" className="display text-[1.65rem] leading-[1.35] text-brown sm:text-[1.9rem] lg:text-[2.3rem]">
                  <Line>Ich weiß, wie es ist, eine vertraute</Line>
                  <Line>Realität zu verlassen, bevor die nächste</Line>
                  <Line>vollständig sichtbar ist.</Line>
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
                  <a href="#ueber-mich" className="textlink mt-10" title="Verlinkung zur About-me-Seite">
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

        {/* ───────────────────────── ANGEBOTE ───────────────────────── */}
        <section id="angebote" className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-40">
          {OFFERS.map((o) => (
            <Stagger key={o.n} as="article" className="offer-row border-t border-gold-line/70">
              <div className="grid gap-8 py-14 md:grid-cols-12 md:gap-10 md:py-20 lg:py-24">
                {/* numeral — large, champagne, the section's visual anchor */}
                <div className="md:col-span-2">
                  <span data-s className="numeral block">
                    {o.n}
                  </span>
                </div>

                {/* title + self-drawing rule */}
                <div className="md:col-span-10 lg:col-span-5">
                  <h2 data-s className="display text-[1.75rem] leading-[1.15] text-brown lg:text-[2.2rem]">
                    {o.title}
                  </h2>
                  <div data-s="rule" className="rule mt-8 w-14" />
                </div>

                {/* copy, hairline-separated from the title on large screens */}
                <div className="md:col-span-10 md:col-start-3 lg:col-span-5 lg:col-start-8 lg:border-l lg:border-gold-line/50 lg:pl-10">
                  {o.paras.map((p, i) => (
                    <p key={i} data-s className={`copy measure ${i ? "mt-5" : ""}`}>
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </Stagger>
          ))}

          <Stagger className="border-t border-gold-line/70">
            <div className="flex flex-col items-start gap-8 pt-12 md:flex-row md:items-center md:justify-between md:pt-14">
              <a data-s href="#angebote" className="textlink" title="Verlinkung zur Angebotsseite">
                Mehr dazu
                <Arrow />
              </a>
              <a data-s href={CALENDLY} className="btn btn-solid" title="Link zu Calendly folgt">
                Kostenfreies Erstgespräch buchen
                <Arrow />
              </a>
            </div>
          </Stagger>
        </section>

        {/* ───────────────────────── SPEAKING ───────────────────────── */}
        <section id="speaking" className="bg-cream-soft">
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
                  <a href={MAILTO} className="btn mt-10">
                    Podcast &amp; Speaking Anfragen
                    <Arrow />
                  </a>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────────────── NEWSLETTER ───────────────────────── */}
        <section id="newsletter" className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-40">
          <div className="grid items-end gap-12 md:grid-cols-12 md:gap-10">
            <Reveal className="md:col-span-6 lg:col-span-5">
              <span className="label text-gold-line">Newsletter</span>
              <p className="display mt-6 text-[2.2rem] italic leading-[1.12] text-brown lg:text-[3rem]">
                Think consciously.
                <br />
                Stay connected.
              </p>
            </Reveal>
            <Reveal delay={140} className="md:col-span-6 md:col-start-7 lg:col-span-5 lg:col-start-8">
              <Newsletter />
            </Reveal>
          </div>
        </section>

        {/* ───────────────────────── FAQ ───────────────────────── */}
        <section id="faq" className="bg-cream-soft">
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

          {/* ───────────────────────── CLOSING CTA — brown card on the cream field ───────────────────────── */}
          <div className="px-4 pb-5 md:px-8 md:pb-8 lg:px-12">
            <Stagger className="cta-card mx-auto max-w-[1400px] bg-brown text-cream">
              <div className="grid gap-10 px-8 py-16 md:grid-cols-12 md:gap-8 md:px-14 md:py-24 lg:px-20 lg:py-28">
                <div data-s className="md:col-span-1">
                  <Image
                    src="/logo/monogram-original@2x.png"
                    alt=""
                    width={654}
                    height={660}
                    className="h-12 w-auto md:h-14"
                    unoptimized
                  />
                </div>
                <div className="md:col-span-7 md:col-start-2">
                  <p data-s className="display text-[2.4rem] leading-[1.05] text-cream sm:text-[3rem] lg:text-[4rem]">
                    Ready for your
                    <br />
                    new reality?
                  </p>
                </div>
                <div className="flex md:col-span-4 md:col-start-9 md:items-end md:justify-end">
                  <a data-s href={CALENDLY} className="btn btn-on-dark" title="Link zu Calendly folgt">
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
