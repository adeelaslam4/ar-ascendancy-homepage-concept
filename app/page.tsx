import Header from "@/components/Header";
import Reveal, { Line } from "@/components/Reveal";
import Drift from "@/components/Drift";
import { Monogram } from "@/components/Logo";
import Arrow from "@/components/Arrow";
import Faq from "@/components/Faq";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { IMAGES, img } from "@/lib/images";

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

export default function Home() {
  return (
    <>
      <Header />
      <Drift />

      <main>
        {/* ───────────────────────── HERO ───────────────────────── */}
        <section className="mx-auto max-w-[1400px] px-6 pb-20 pt-8 md:px-10 md:pb-28 md:pt-14 lg:px-14 lg:pt-20">
          <div className="grid items-center gap-12 md:grid-cols-12 md:gap-10 lg:gap-16">
            <Reveal as="figure" variant="image" className="frame drift aspect-[4/5] w-full md:col-span-5 lg:col-span-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img(IMAGES.hero, 1400)}
                alt="Alina Rogall, Founder & CEO A.R. ASCENDANCY"
                fetchPriority="high"
              />
            </Reveal>

            <div className="md:col-span-7 lg:col-span-6 lg:col-start-7">
              <Reveal as="h1" variant="lines" delay={100} className="display text-[2.1rem] leading-[1.06] text-brown sm:text-[2.6rem] lg:text-[3.1rem] xl:text-[3.4rem]">
                <Line>Führungskräfte</Line>
                <Line>Coaching -</Line>
                <Line className="display-caps mt-4 text-[1rem] leading-[1.55] sm:text-[1.1rem] lg:text-[1.2rem]">
                  CONSULTING, MENTORING &amp; STRATEGIC ADVISORY
                </Line>
              </Reveal>

              <Reveal delay={220}>
                <div className="rule rule-draw mt-9 w-16" />
                <p className="measure mt-9 text-[1.02rem] leading-[1.85] text-brown">
                  Als Consultant, Mentor &amp; Strategic Advisor unterstütze ich Menschen mit
                  Veränderungswunsch dabei Klarheit zu finden, selbstsichere Entscheidungen zu
                  treffen und sich selbst zu führen.
                </p>
                <p className="measure mt-5 text-[1.02rem] leading-[1.85] text-brown">
                  Meine Mission ist es, dich zu begleiten, diesen hohen Standard zu erreichen.
                </p>
              </Reveal>

              <Reveal delay={320}>
                <p className="mt-9 text-[1.05rem] font-semibold tracking-[0.01em] text-brown">
                  Think consciously. Change everything.
                </p>
                <p className="script mt-5 text-[2.6rem] text-burgundy md:text-[2.9rem]" aria-label="Her Ascendancy">
                  Her Ascendancy
                </p>
              </Reveal>

              <Reveal delay={420}>
                <div className="mt-11 flex flex-col items-start gap-5">
                  <span className="label text-brown-soft">Ready to meet the standard?</span>
                  <a href={CALENDLY} className="btn" title="Link zu Calendly folgt">
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
          <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28 lg:px-14 lg:py-36">
            <div className="grid items-center gap-12 md:grid-cols-12 md:gap-10 lg:gap-16">
              <div className="md:col-span-7 lg:col-span-6">
                <Reveal as="p" variant="lines" className="display text-[1.5rem] leading-[1.4] text-brown sm:text-[1.75rem] lg:text-[2.05rem]">
                  <Line>Ich weiß, wie es ist, eine vertraute</Line>
                  <Line>Realität zu verlassen, bevor die nächste</Line>
                  <Line>vollständig sichtbar ist.</Line>
                </Reveal>
                <Reveal delay={120}>
                  <p className="measure mt-8 text-[1.02rem] leading-[1.85] text-brown">
                    Genau daraus ist <strong className="font-semibold">A.R. ASCENDANCY</strong>{" "}
                    entstanden: klar sehen, bewusst entscheiden und die eigene Richtung halten, bis
                    Veränderung zur gelebten Realität wird.
                  </p>
                </Reveal>
                <Reveal delay={220}>
                  <a href="#ueber-mich" className="textlink mt-10" title="Verlinkung zur About-me-Seite">
                    Read my story
                    <Arrow />
                  </a>
                </Reveal>
              </div>

              <Reveal as="figure" variant="image" delay={160} className="frame drift aspect-[4/5] w-full md:col-span-5 md:ml-auto md:max-w-[460px] lg:col-span-5 lg:col-start-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img(IMAGES.story, 1200)} alt="Alina Rogall" loading="lazy" />
              </Reveal>
            </div>
          </div>
        </section>

        {/* ───────────────────────── ANGEBOTE ───────────────────────── */}
        <section id="angebote" className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28 lg:px-14 lg:py-36">
          <div className="grid gap-14 md:grid-cols-2 md:gap-12 lg:gap-24">
            <Reveal className="flex flex-col">
              <span className="label text-gold-line">01</span>
              <h2 className="display-sm mt-5 text-[1.6rem] text-brown lg:text-[1.9rem]">
                Führungskräfte Coaching für Einzelpersonen, Selbstständige &amp; Führungskräfte
              </h2>
              <div className="rule rule-draw mt-7 w-12" />
              <p className="measure mt-7 text-[1rem] leading-[1.85] text-brown">
                1:1 Führungskräfte Coaching - Consulting, Mentoring &amp; Strategic Advisory für
                Menschen, die trotz äußerem Erfolg spüren, dass ihre bisherige Realität nicht mehr zu
                ihnen passt.
              </p>
              <p className="measure mt-5 text-[1rem] leading-[1.85] text-brown">
                Auf Basis von Mental Reconditioning und Methoden Entscheidungsfindung begleite ich
                dich dabei, klarer zu entscheiden, dich bewusster zu führen und tief verankerte Muster
                nachhaltig zu verändern.
              </p>
            </Reveal>

            <Reveal delay={140} className="flex flex-col">
              <span className="label text-gold-line">02</span>
              <h2 className="display-sm mt-5 text-[1.6rem] text-brown lg:text-[1.9rem]">
                Führungskräfte Coaching für Führungskräfte &amp; Teams
              </h2>
              <div className="rule rule-draw mt-7 w-12" />
              <p className="measure mt-7 text-[1rem] leading-[1.85] text-brown">
                Führungskräfte Coaching - Consulting, Mentoring &amp; Strategic Advisory für
                Unternehmen, Führungskräfte und Teams, die bewusste Selbstführung, klare
                Entscheidungsfindung und nachhaltige Veränderung gezielt stärken möchten.
              </p>
              <p className="measure mt-5 text-[1rem] leading-[1.85] text-brown">
                Dabei verbinde ich Mental Reconditioning mit Methoden Entscheidungsfindung und
                begleite Veränderung individuell und praxisnah.
              </p>
              <p className="measure mt-5 text-[1rem] leading-[1.85] text-brown">
                Individuell als 1:1 Zusammenarbeit oder Teamarbeit.
              </p>
            </Reveal>
          </div>

          <Reveal delay={200} className="mt-14 flex flex-col items-center gap-10 md:mt-20">
            <a href="#angebote" className="textlink" title="Verlinkung zur Angebotsseite">
              Mehr dazu
              <Arrow />
            </a>
            <div className="rule w-full max-w-xl" />
            <a href={CALENDLY} className="btn btn-solid" title="Link zu Calendly folgt">
              Kostenfreies Erstgespräch buchen
              <Arrow />
            </a>
          </Reveal>
        </section>

        {/* ───────────────────────── SPEAKING ───────────────────────── */}
        <section id="speaking" className="bg-cream-soft">
          <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28 lg:px-14 lg:py-36">
            <div className="grid items-center gap-12 md:grid-cols-12 md:gap-10 lg:gap-16">
              <Reveal as="figure" variant="image" className="frame drift aspect-[4/5] w-full md:col-span-5 md:max-w-[460px] lg:col-span-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img(IMAGES.speaking, 1200)} alt="Alina Rogall – Speaking & Podcasts" loading="lazy" />
              </Reveal>

              <div className="md:col-span-7 lg:col-span-6 lg:col-start-7">
                <Reveal delay={120}>
                  <h2 className="display text-[2rem] leading-[1.1] text-brown lg:text-[2.6rem]">
                    Speaking &amp; Podcasts
                  </h2>
                  <div className="rule rule-draw mt-8 w-16" />
                  <p className="measure mt-8 text-[1.02rem] leading-[1.85] text-brown">
                    Für Bühnen, Interviews und Gespräche rund um meine Arbeit und zu meiner Person,
                    die neue Perspektiven auf Mindset, Entscheidungen, Self-Leadership und Veränderung
                    eröffnen.
                  </p>
                </Reveal>
                <Reveal delay={220}>
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
        <section id="newsletter" className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28 lg:px-14 lg:py-36">
          <div className="grid items-start gap-10 md:grid-cols-12 md:gap-10">
            <Reveal className="md:col-span-6 lg:col-span-5">
              <span className="label text-gold-line">Newsletter</span>
              <p className="display mt-5 text-[2rem] italic leading-[1.15] text-brown lg:text-[2.7rem]">
                Think consciously.
                <br />
                Stay connected.
              </p>
            </Reveal>
            <Reveal delay={140} className="md:col-span-6 md:col-start-7 lg:col-span-5 lg:col-start-8 md:pt-4">
              <Newsletter />
            </Reveal>
          </div>
        </section>

        {/* ───────────────────────── FAQ ───────────────────────── */}
        <section id="faq" className="bg-cream-soft">
          <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28 lg:px-14 lg:py-36">
            <div className="grid gap-12 md:grid-cols-12 md:gap-10">
              <Reveal className="md:col-span-4 lg:col-span-3">
                <h2 className="display text-[2rem] leading-[1.1] text-brown lg:text-[2.6rem]">FAQ&apos;s</h2>
                <div className="rule rule-draw mt-8 w-16" />
              </Reveal>
              <Reveal delay={120} className="md:col-span-8 lg:col-span-8 lg:col-start-5">
                <Faq items={FAQ} />
              </Reveal>
            </div>
          </div>
        </section>

        {/* ───────────────────────── FINAL CTA (dark interlude) ───────────────────────── */}
        <section className="bg-brown text-cream">
          <div className="mx-auto flex max-w-[1400px] flex-col items-center px-6 py-24 text-center md:px-10 md:py-32 lg:px-14 lg:py-40">
            <Reveal>
              <Monogram className="mx-auto h-16 w-auto text-logo" />
            </Reveal>
            <Reveal as="p" variant="lines" delay={120} className="display mt-10 text-[2.2rem] leading-[1.1] text-cream sm:text-[2.8rem] lg:text-[3.6rem]">
              <Line>Ready for your new reality?</Line>
            </Reveal>
            <Reveal delay={240}>
              <a href={CALENDLY} className="btn btn-on-dark mt-12" title="Link zu Calendly folgt">
                Kostenfreies Erstgespräch vereinbaren
                <Arrow />
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
