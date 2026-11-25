import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal, { Line } from "@/components/Reveal";
import Stagger from "@/components/Stagger";
import Arrow from "@/components/Arrow";
import Faq, { type FaqEntry } from "@/components/Faq";
import Steps from "@/components/Steps";
import BindingBox from "@/components/BindingBox";
import OfferPlans from "@/components/OfferPlans";
import { OFFER_PHOTOS } from "@/lib/images";
import { CALENDLY } from "@/lib/links";
import { SUBPAGE_NAV } from "@/lib/nav";
import { PLANS } from "@/lib/offers";

export const metadata: Metadata = {
  title: "Coaching von Führungskräften – Consulting, Mentoring & Strategic Advisory | A.R. ASCENDANCY",
  description:
    "Coaching von Führungskräften mit Mental Reconditioning: Clarity Intensive, Ascent und Ascendancy – 1:1 Begleitung von Alina Rogall, Berlin.",
};

/* All copy below is the client's wording from her Miro board (25 Nov), unchanged. */

const PATTERNS = [
  "Du erkennst deine eigenen Bedürfnisse nicht oder priorisierst dich selbst nicht?",
  "Du lenkst dich ab, um dich nicht mit deinen wahren Needs beschäftigen zu müssen",
  "Führen dich bestimmte Denk- und Reaktionsweisen immer wieder ins Alte zurück?",
  "Treten die selben Konflikte wiederholt auf?",
  "Steckst du in einem geschaffenen System fest, das dich unglücklich macht und nicht zu deinem wahren Selbst passt?",
  "Erleidest du körperliche Beschwerden und innere Anspannung?",
  "Du bist erfolgreich in deinem Job und trotzdem unzufrieden?",
  "Du hast schon viel innere Arbeit geleistet und trotzdem hat sich nichts im Außen verändert?",
];

const JOURNEY = [
  { title: "Mindset & Clarity" },
  { title: "Decision" },
  { title: "Conscious Leadership" },
  { title: "Change" },
  { title: "Embodiment" },
  { title: "Ascent" },
];

const JOURNEY_TEXT = [
  { t: "Mindset & Clarity", d: "Du erkennst, was gerade wirklich da ist und dich gedanklich begrenzt." },
  {
    t: "Decision Making",
    d: "Auf Klarheit folgt eine bewusste Entscheidung, was du stattdessen willst: deine Erkenntnis wird zur Richtung.",
  },
  {
    t: "Lead yourself through change with Mental Reconditioning",
    d: "Du bist fähig, die Entscheidung durch die Übergangsphase zu tragen, statt beim ersten Widerstand in alte Denk-, Entscheidungs- oder Verhaltensmuster zurückzufallen.",
  },
  {
    t: "Embodiment",
    d: "Du beginnst, diese neue Art zu denken, zu entscheiden und zu handeln wirklich zu verkörpern.",
  },
  { t: "Ascent", d: "der Aufstieg in eine neue persönliche, mentale und reale Lebensführung." },
];

const METHODS = [
  {
    title: "Metacognition",
    sub: "become aware",
    text: "Du erkennst deine automatischen Gedanken, Reaktionen und Verhaltensmuster, anstatt ihnen unbewusst zu folgen.",
  },
  {
    title: "Deconditioning",
    sub: "break the old pattern",
    text: "Du unterbrichst bewusst die bisherigen mentalen und emotionalen Reaktionsmuster.",
  },
  {
    title: "Mental Rehearsal",
    sub: "create the new",
    text: "Du richtest deine Aufmerksamkeit wiederholt auf die Art, wie du künftig denken, entscheiden und handeln möchtest.",
  },
  {
    title: "Reconditioning",
    sub: "make the new familiar",
    text: "Durch Wiederholung, bewusste Entscheidungen und neue Erfahrungen wird die neue Reaktion zunehmend vertrauter und stabiler.",
  },
];

const RESILIENZ = [
  "Stress Resilience",
  "Resilienz Coaching",
  "Nervous System",
  "Regeneration & Sleep",
  "Movement & Breathwork",
  "Conscious Daily Routines",
];

const OUTCOMES = [
  "hast du eine bewusste Art der Selbstführung gelernt und wie du dich selbst priorisierst.",
  "Du ersetzt eingefahrene Routinen in deinem Alltag durch bewusste Routinen, die dir gut tun.",
  "Du trägst den Change durch die Übergangsphase, statt beim ersten Widerstand zurückzukehren.",
  "Du lernst Trigger gezielt umzulenken und ermöglichst dir dadurch frei zu entscheiden.",
  "Du durchbrichst alte Muster und vermeidest damit wiederkehrende Konflikte.",
  "Durch Selbstreflexion gewinnst du innere Klarheit und eine Richtung, in die du dich entwickeln möchtest.",
  "Durch einen besseren Zugang zu dir selbst, kannst du neue Handlungsweisen langfristig etablieren.",
  "Du entwickelst ein besseres Verständnis für die Signale deines Körpers und lernst, belastende innere Anspannung zu reduzieren.",
  "Mit Hilfe von Mental Reconditioning durchbrechen wir alte Limitierungen und etablieren neue, bewusste Denk- und Verhaltensmuster.",
];

const FAQ: FaqEntry[] = [
  {
    q: "Wie läuft das Coaching von Führungskräften bei A.R. ASCENDANCY konkret ab?",
    a: "Mein Coaching von Führungskräften findet je nach gewähltem Angebot über 6 Wochen, 12 Wochen oder 6 Monate statt. In regelmäßigen 1:1 Sessions arbeiten wir an Klarheit, Entscheidungsfindung, Self-Leadership und nachhaltiger Veränderung. CLARITY INTENSIVE konzentriert sich auf eine konkrete Entscheidung und erste Impulse aus dem Mental Reconditioning. In ASCENT durchlaufen wir den Mental-Reconditioning-Prozess deutlich tiefer und begleiten die Umsetzung über 12 Wochen. ASCENDANCY verbindet die intensive 1:1 Begleitung über sechs Monate zusätzlich mit dem Secret Space und einer langfristigen Verkörperung deiner persönlichen und beruflichen Veränderung. Je nach Angebot begleiten dich außerdem der Clarity Mirror und persönliche Telegram Support-Slots zwischen den Sessions.",
  },
  {
    q: "Für wen eignet sich Coaching von Führungskräften?",
    a: "Die Zusammenarbeit richtet sich an Führungskräfte, Selbstständige und Menschen mit hoher Eigenverantwortung, die beruflich viel tragen und gleichzeitig merken, dass bestimmte Denkweisen, Routinen oder innere Muster nicht mehr zu ihrer nächsten Entwicklung passen.",
  },
  {
    q: "Was ist Mental Reconditioning?",
    a: "Mental Reconditioning beschreibt einen bewussten Prozess, in dem bestehende Denk-, Reaktions- und Verhaltensmuster zunächst erkannt und anschließend gezielt verändert werden. In meiner Arbeit verbinde ich dabei Metacognition, Deconditioning, Mental Rehearsal und Reconditioning, damit neue Denk- und Handlungsweisen nicht nur verstanden, sondern langfristig etabliert werden können.",
  },
  {
    q: "Wie wird Mental Reconditioning in der Zusammenarbeit eingesetzt?",
    a: "Mental Reconditioning wird individuell auf deine Situation abgestimmt. Wir betrachten zunächst, welche bisherigen Muster deine Entscheidungen und Reaktionen prägen, und arbeiten anschließend daran, neue mentale und praktische Handlungsweisen bewusst zu verankern und im Alltag umzusetzen.",
  },
  {
    q: "Was verstehst du unter Resilienz Coaching?",
    a: "Resilienz Coaching bedeutet für mich nicht, immer mehr Belastung aushalten zu müssen. Es geht vielmehr darum, bewusster mit Druck, Veränderung und innerer Anspannung umzugehen, die eigenen Ressourcen wahrzunehmen und sich auch in anspruchsvollen Phasen selbst klar zu führen.",
  },
  {
    q: "Kann ich das Coaching von Führungskräften auch in Raten zahlen?",
    a: "Ja, für alle drei Angebote ist eine Ratenzahlung möglich. Die genauen Konditionen findest du jeweils direkt beim entsprechenden Angebot. Für Unternehmen und arbeitgeberfinanziertes Coaching von Führungskräften gelten individuelle Konditionen.",
  },
];

const WRAP = "mx-auto max-w-[1400px] px-6 md:px-10 lg:px-14";

export default function Angebot() {
  return (
    <>
      <Header nav={SUBPAGE_NAV} current="Angebot" />

      <main className="sub">
        {/* ───────── 1 · Intro ───────── */}
        <section className={`${WRAP} pb-20 pt-10 md:pb-28 md:pt-16 lg:pb-32`}>
          <div className="grid items-center gap-12 md:grid-cols-12 md:gap-10 lg:gap-16">
            <div className="md:col-span-7">
              <Reveal>
                <span className="label text-brown-soft">Consulting, Mentoring &amp; Strategic Advisory</span>
              </Reveal>
              <Reveal
                as="h1"
                variant="lines"
                delay={80}
                className="display lines-flow-sm mt-6 text-[2.5rem] leading-[1.06] text-brown sm:text-[3.2rem] lg:text-[4rem] xl:text-[4.6rem]"
              >
                <Line>Coaching von</Line>
                <Line>Führungskräften</Line>
              </Reveal>
              <Reveal delay={160}>
                <div className="rule rule-draw mt-9 w-20" />
              </Reveal>
              <Reveal delay={220} className="measure mt-9 space-y-5">
                <p className="copy">
                  Was, wenn deine aktuelle Realität nicht bestimmt, was als Nächstes für dich möglich ist? In meiner
                  Arbeit geht es darum, das Bestehende klar zu sehen, ohne dich davon begrenzen zu lassen.
                </p>
                <p className="copy">
                  Ich führe dich in meinem Coaching von Führungskräften mit Mental Reconditioning gezielt dabei, alte
                  Perspektiven und Denkweisen zu durchbrechen und neu zu definieren, was für dich möglich ist.
                </p>
              </Reveal>
            </div>
            <Reveal variant="image" className="mat md:col-span-5 md:pr-6">
              <div className="frame aspect-[4/5]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={OFFER_PHOTOS.intro}
                  alt="Alina Rogall, Founder & CEO von A.R. ASCENDANCY"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ───────── 2 · Muster ───────── */}
        <section className="bg-cream-soft">
          <div className={`${WRAP} py-20 md:py-28 lg:py-32`}>
            <div className="grid gap-10 md:grid-cols-12 md:gap-8">
              <Reveal className="md:col-span-5 lg:col-span-4">
                <h2 className="display text-[1.9rem] leading-[1.14] text-brown sm:text-[2.3rem] lg:text-[2.8rem]">
                  Spiegeln sich folgende Muster bei dir wieder?
                </h2>
                <div className="rule rule-draw mt-8 w-16" />
              </Reveal>
              <Reveal delay={120} className="md:col-span-7 lg:col-span-7 lg:col-start-6">
                <ol className="numlist">
                  {PATTERNS.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ol>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ───────── 3 · So arbeite ich — Grafik 1 ───────── */}
        <section className={`${WRAP} py-20 md:py-28 lg:py-36`}>
          <Reveal className="max-w-[820px]">
            <h2 className="display text-[1.9rem] leading-[1.14] text-brown sm:text-[2.3rem] lg:text-[2.9rem]">
              So arbeite ich in meinem Coaching von Führungskräften:
            </h2>
          </Reveal>
          <Reveal delay={120} className="mt-14 md:mt-20">
            <Steps items={JOURNEY} label="Mindset & Clarity bis Ascent" />
          </Reveal>
          <Reveal delay={160} className="mt-14 lg:mt-10">
            <dl className="explain">
              {JOURNEY_TEXT.map((x) => (
                <div key={x.t}>
                  <dt>{x.t}</dt>
                  <dd>{x.d}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </section>

        {/* ───────── 4 · Zitat ───────── */}
        <section className="bg-cream-soft">
          <div className={`${WRAP} py-20 md:py-28 lg:py-32`}>
            <div className="grid items-center gap-12 md:grid-cols-12 md:gap-10 lg:gap-16">
              <Reveal variant="image" className="mx-auto w-full max-w-[420px] md:col-span-4 md:max-w-none">
                <div className="frame aspect-square">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={OFFER_PHOTOS.quote} alt="Alina Rogall im Porträt" loading="lazy" className="h-full w-full object-cover" />
                </div>
              </Reveal>
              <Stagger className="md:col-span-8">
                <figure>
                  <div data-s className="quote-mark" aria-hidden="true">
                    “
                  </div>
                  <blockquote data-s className="quote-script mt-2" lang="en">
                    Ascendancy is what happens when clarity becomes a decision, a decision becomes embodied change, and
                    that change becomes your new reality.
                  </blockquote>
                  <figcaption data-s className="byline mt-8">
                    Alina Rogall <span className="mx-1 text-gold-line">•</span> Founder &amp; CEO, A.R. ASCENDANCY{" "}
                    <span className="mx-1 text-gold-line">•</span> Berlin
                  </figcaption>
                </figure>
                <div data-s className="mt-10">
                  <a href={CALENDLY} className="btn btn-solid" title="Link zu Calendly">
                    Sichere dir dein kostenfreies Erstgespräch
                    <Arrow />
                  </a>
                </div>
              </Stagger>
            </div>
          </div>
        </section>

        {/* ───────── 5 · Mental Reconditioning — Grafik 2 ───────── */}
        <section className={`${WRAP} py-20 md:py-28 lg:py-36`}>
          <div className="grid gap-10 md:grid-cols-12 md:gap-8">
            <Reveal className="md:col-span-5 lg:col-span-4">
                <h2 className="display text-[2rem] leading-[1.12] text-brown sm:text-[2.4rem] lg:text-[3rem]">
                Mental Reconditioning
              </h2>
              <div className="rule rule-draw mt-8 w-16" />
            </Reveal>
            <Reveal delay={120} className="space-y-5 md:col-span-7 lg:col-span-7 lg:col-start-6">
              <p className="copy">
                In meinem Coaching von Führungskräften arbeite ich mit Mental Reconditioning. Gemeinsam gehe ich mit
                meinen Klient:innen zurück zum Ursprung limitierender Denk- und Glaubensmuster und verändere die innere
                Grundlage, aus der ihre bisherige Realität entstanden ist. Step by step bauen wir mit meinen Methoden
                der Suggestion, Autosuggestion und Mental Rehearsal neue mentale Ausrichtungen auf und verankern sie
                bewusst. Metacognition, Deconditioning, Mental Rehearsal und Reconditioning bilden dann gemeinsam den
                Veränderungsprozess – vom Erkennen alter Muster bis hin zur bewussten Verankerung neuer Denk-,
                Entscheidungs- und Verhaltensweisen.
              </p>
              <p className="copy">
                Zusammenfassend bildet Mental Reconditioning die Grundlage nachhaltiger Selbstführung: Du erkennst tief
                verankerte Denk-, Bewertungs- und Reaktionsmuster, veränderst automatische Abläufe und entwickelst die
                Fähigkeit, dich bewusst, klar und eigenverantwortlich zu führen.
              </p>
            </Reveal>
          </div>

          <Reveal className="mt-16 md:mt-24">
            <h3 className="display max-w-[820px] text-[1.4rem] leading-[1.25] text-brown md:text-[1.8rem]">
              Diese Methoden des Mental Reconditioning verwende ich in meinem Coaching von Führungskräften:
            </h3>
          </Reveal>
          <Reveal delay={120} className="mt-12 md:mt-16">
            <Steps items={METHODS} label="Metacognition, Deconditioning, Mental Rehearsal, Reconditioning" />
          </Reveal>
        </section>

        {/* ───────── 6 · Goldener Rahmen: Resilienz Coaching + Women ───────── */}
        <section className="bg-cream-soft">
          <div className={`${WRAP} py-20 md:py-28 lg:py-32`}>
            <Reveal className="gold-frame">
              <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_1px_minmax(0,1fr)] lg:gap-14">
                <div>
                  <span className="label text-brown-soft">Beyond the mental work..</span>
                  <h2 className="display mt-5 text-[1.7rem] leading-[1.16] text-brown md:text-[2.1rem]">
                    Resilienz Coaching: Finish what you started!
                  </h2>
                  <div className="frame mt-8 aspect-[3/2]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={OFFER_PHOTOS.resilienz} alt="Ruhiges Interieur in warmem Licht" loading="lazy" className="h-full w-full object-cover" />
                  </div>
                  <div className="mt-8 space-y-5">
                    <p className="copy">
                      Wie klar, belastbar und leistungsfähig du im Business bist, hängt davon ab, welche Grundlage du
                      dir in deinem Alltag legst.
                    </p>
                    <p className="copy">
                      Deshalb fließen neben meinem Coaching von Führungskräften auch individuell Aspekte bewusster
                      Lebensführung in die Zusammenarbeit ein:
                    </p>
                  </div>
                  <ul className="mt-7 flex flex-wrap gap-2.5">
                    {RESILIENZ.map((t) => (
                      <li key={t} className="chip">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="gold-divider" aria-hidden="true" />

                <div>
                  <span className="label text-brown-soft">&amp; specially for Women:</span>
                  <h2 className="display mt-5 text-[1.7rem] leading-[1.16] text-brown md:text-[2.1rem]">
                    Cycle-Informed Self-Leadership for the premenopausal years
                  </h2>
                  <div className="mt-8 space-y-5">
                    <p className="copy">
                      Als Frau bedeutet Self-Leadership für mich auch, den eigenen Körper nicht auszublenden, sondern
                      bewusst mit dem eigenen Zyklus zu arbeiten: in der Art, wie du arbeitest, trainierst,
                      regenerierst und dich ernährst.
                    </p>
                    <p className="copy">
                      Ich habe an einem 1-wöchigen Seminar zu Fasten und Ernährung mit begleitenden Fachvorträgen
                      teilgenommen, selbst gefastet und die vermittelten Prinzipien anschließend in meinen Alltag
                      integriert. Während des Fastens hatte ich große Sorge, bestehende Muskelmasse zu verlieren, da
                      ich bewusst auf Protein und Creatin verzichtet habe. Ich war selbst überrascht, wie schnell mein
                      Muskelaufbau danach wieder anlief.
                    </p>
                    <p className="copy">
                      Auch meine darauffolgende Menstruation habe ich persönlich als außergewöhnlich leicht und
                      angenehm erlebt. Diese Erfahrung hat meinen Blick darauf verändert, wie bewusst Ernährung,
                      Training, Regeneration und Körperwahrnehmung in die eigene Selbstführung einbezogen werden
                      können.
                    </p>
                  </div>
                  <p className="script mt-9 text-[1.75rem] !leading-[1.3] text-burgundy md:text-[2.1rem]">
                    Genau dieses Wissen und meine persönliche Erfahrung sind mein Geschenk an dich.
                  </p>
                </div>
              </div>

              <div className="mt-12 border-t border-gold/70 pt-9 text-center md:mt-14 md:pt-11">
                <p className="display mx-auto max-w-[860px] text-[1.3rem] leading-[1.35] text-brown md:text-[1.7rem]">
                  Wir integrieren genau das dann in deinen eigenen, persönlichen weekly private &amp; business plan.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-x-9 gap-y-4">
                  <a href="#ascent" className="textlink">
                    Zum Angebot Ascent
                    <Arrow />
                  </a>
                  <a href="#ascendancy" className="textlink">
                    Zum Angebot Ascendancy
                    <Arrow />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ───────── 7 · Nach unserer Zusammenarbeit ───────── */}
        <section className={`${WRAP} py-20 md:py-28 lg:py-36`}>
          <div className="grid gap-10 md:grid-cols-12 md:gap-8">
            <Reveal className="md:col-span-5 lg:col-span-4">
                <h2 className="display text-[1.9rem] leading-[1.14] text-brown sm:text-[2.3rem] lg:text-[2.8rem]">
                Nach unserer Zusammenarbeit im Coaching von Führungskräften:
              </h2>
              <div className="rule rule-draw mt-8 w-16" />
            </Reveal>
            <Reveal delay={120} className="md:col-span-7 lg:col-span-7 lg:col-start-6">
              <ol className="numlist">
                {OUTCOMES.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ol>
            </Reveal>
          </div>
        </section>

        {/* ───────── 8 · Story + CTA ───────── */}
        <section className="bg-cream-soft">
          <div className={`${WRAP} py-20 md:py-28 lg:py-32`}>
            <div className="grid items-center gap-12 md:grid-cols-12 md:gap-10 lg:gap-16">
              <Reveal variant="image" className="mat md:col-span-5 md:pr-6">
                <div className="frame aspect-[4/5]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={OFFER_PHOTOS.story} alt="Alina Rogall" loading="lazy" className="h-full w-full object-cover" />
                </div>
              </Reveal>
              <Stagger className="md:col-span-7">
                <div data-s className="rule-accent" />
                <div className="measure mt-9 space-y-5">
                  <p data-s className="copy">
                    Ich weiß, wie es ist, eine vertraute Realität zu verlassen, bevor die nächste vollständig sichtbar
                    ist. Über Jahre habe ich Beziehungen, Gewohnheiten, vermeintliche Sicherheiten und schließlich
                    meine Beamtenlaufbahn losgelassen, um ein Leben aufzubauen, das meinen eigenen Werten und meiner
                    Vision entspricht.
                  </p>
                  <p data-s className="copy">
                    Aus dieser Story ist A.R. ASCENDANCY entstanden: klar sehen, bewusst entscheiden und die eigene
                    Richtung halten, bis Veränderung zur gelebten Realität wird.
                  </p>
                </div>
                <div data-s className="mt-11 flex flex-col items-start gap-5">
                  <span className="label-strong text-brown">Ready to do the invisible work?</span>
                  <a href="#angebote" className="btn btn-solid">
                    Book your intensive 1:1 with me
                    <Arrow />
                  </a>
                </div>
              </Stagger>
            </div>
          </div>
        </section>

        {/* ───────── 9–11 · Die drei Angebote ───────── */}
        <section id="angebote" className={`${WRAP} scroll-mt-24 py-20 md:py-28 lg:py-36`}>
          <Reveal className="text-center">
            <span className="label text-brown-soft">Clarity Intensive · Ascent · Ascendancy</span>
            <h2 className="display mt-6 text-[2.1rem] leading-[1.1] text-brown sm:text-[2.7rem] lg:text-[3.4rem]">
              Coaching von Führungskräften
            </h2>
            <div className="gold-diamond mt-9" />
          </Reveal>

          <Reveal delay={120} className="mt-12 md:mt-16">
            <OfferPlans plans={PLANS} />
          </Reveal>

          {/* 10 · für alle Angebote verbindlich */}
          <Reveal className="mt-10 md:mt-12">
            <BindingBox title="Die folgenden Punkte sind für alle Angebote verbindlich:">
              <div className="grid gap-x-14 gap-y-9 md:grid-cols-2">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="plan-h">Clarity Mirror</p>
                    <span className="pill-note">48 Std. Antwortzeit</span>
                  </div>
                  <p className="plan-small mt-3">
                    Clarity Mirror bedeutet hier: Auch zwischen unseren Calls musst du mit einer Frage, Unsicherheit
                    oder konkreten Situation nicht zwei Wochen alleine weiterlaufen. Du kannst sie mit mir teilen und
                    erhältst meine Perspektive auch außerhalb unserer Sessions. Du wirst hier unterstützt,
                    wiederkehrende Muster zu erkennen &amp; Klarheit für deine nächsten Schritte zu gewinnen.
                  </p>
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="plan-h">Telegram Support-Slot</p>
                    <span className="pill-note">24 Std. Antwortzeit</span>
                  </div>
                  <p className="plan-small mt-3">
                    konkretes Thema inklusive meiner persönlichen Antwort und eines kurzen Follow-ups.
                  </p>
                </div>
                <div>
                  <p className="plan-h">Investition</p>
                  <p className="plan-small mt-3">
                    Nach Vertragsabschluss erhältst du deine Rechnung. Bei Einmalzahlung ist der Gesamtbetrag innerhalb
                    von sieben Kalendertagen nach Rechnungsstellung fällig.
                  </p>
                </div>
                <div>
                  <p className="plan-small">
                    Nach Zahlungseingang melde ich mich persönlich über die von dir angegebenen Kontaktdaten.
                    Anschließend verbinden wir uns über Telegram und stimmen deine erste Session sowie die weiteren
                    Termine gemeinsam ab.
                  </p>
                  <p className="plan-small mt-4">
                    Über unseren persönlichen 1:1 Chat erhältst du die vereinbarte Begleitung zwischen den Sessions.
                    Dort führe ich dich auch in die Nutzung des Clarity Mirrors als deinen persönlichen Reflexionsraum
                    ein.
                  </p>
                </div>
              </div>
            </BindingBox>
          </Reveal>

          {/* 11 · Ready to invest in yourself? — einmal für alle drei, danach je Angebot ein CTA */}
          <Reveal className="mt-20 md:mt-28">
            <p className="gold-line-title">
              <span>Ready to invest in yourself?</span>
            </p>
            <div className="gold-diamond mt-7" />
          </Reveal>
          <Stagger className="mt-10 grid gap-8 md:mt-12 md:grid-cols-3 md:gap-6">
            {PLANS.map((p) => (
              <div key={p.id} data-s className="flex flex-col items-center gap-4 text-center">
                <span className="plan-name !text-[1rem]">{p.name}</span>
                <a href={CALENDLY} className="btn btn-solid btn-fit" title={`Link zu Calendly – ${p.name}`}>
                  Kostenfreies Erstgespräch buchen
                  <Arrow />
                </a>
              </div>
            ))}
          </Stagger>
        </section>

        {/* ───────── 12 · FAQ's + 13 · Final CTA ───────── */}
        <section className="bg-cream-soft">
          <div className={`${WRAP} py-20 md:py-28 lg:py-32`}>
            <div className="grid gap-12 md:grid-cols-12 md:gap-8">
              <Reveal className="md:col-span-4 lg:col-span-3">
                <h2 className="display text-[2.2rem] leading-[1.08] text-brown lg:text-[2.9rem]">FAQ&apos;s</h2>
                <div className="rule rule-draw mt-8 w-16" />
              </Reveal>
              <Reveal delay={120} className="md:col-span-8 lg:col-span-8 lg:col-start-5">
                <Faq items={FAQ} />
              </Reveal>
            </div>
          </div>

          <div className="px-4 pb-5 md:px-8 md:pb-8 lg:px-12">
            <Stagger className="cta-card newsletter-band mx-auto max-w-[1400px] text-brown">
              <div className="flex flex-col items-center gap-9 px-8 py-16 text-center md:px-14 md:py-24">
                <p data-s className="display text-[2.2rem] leading-[1.08] text-brown sm:text-[3rem] lg:text-[3.8rem]">
                  Ready for your new reality?
                </p>
                <a data-s href={CALENDLY} className="btn btn-solid" title="Link zu Calendly">
                  Book your free Client Check-In
                  <Arrow />
                </a>
              </div>
            </Stagger>
          </div>
        </section>
      </main>

      <Footer nav={SUBPAGE_NAV} />
    </>
  );
}
