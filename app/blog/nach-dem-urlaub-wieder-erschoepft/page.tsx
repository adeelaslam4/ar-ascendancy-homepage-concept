import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import CapSwitch from "@/components/CapSwitch";
import { OFFER_PHOTOS } from "@/lib/images";
import { SUBPAGE_NAV } from "@/lib/nav";

/* The fields the client asked for in the WordPress editor — here filled with her own values. */
const SEO_TITLE = "Nach dem Urlaub wieder erschöpft? Warum Erholung nicht reicht";
const META =
  "Nach dem Urlaub wieder erschöpft? Erfahre, warum Pausen allein nicht reichen, wenn du anschließend in dasselbe System zurückkehrst.";
const SLUG = "/blog/nach-dem-urlaub-wieder-erschoepft";
const H1 = "Warum Erholung nicht reicht, wenn du anschließend in dasselbe System zurückkehrst";
const IMG_ALT = "Ruhiges Interieur in warmem Licht";

export const metadata: Metadata = {
  title: { absolute: SEO_TITLE },
  description: META,
};

/* Article text: the client's own draft (excerpt for the demo). */
const SECTIONS: { h2: string; p: string[] }[] = [
  {
    h2: "Wenn Urlaub zum Wartungsfenster wird",
    p: [
      "Während meiner Zeit am Gericht durfte ich dieses Phänomen immer wieder beobachten. Auf meine Frage, ob Kollegen verreisen würden, folgte häufig dieselbe Antwort: Nein. Einfach zu Hause bleiben, schlafen und all die Dinge erledigen, zu denen sie sonst nicht kommen.",
      "Der berufliche Kalender wurde gegen eine private To-do-Liste ausgetauscht. Liegengebliebenes wurde aufgearbeitet, Schlaf nachgeholt und die eigene Funktionsfähigkeit langsam wiederhergestellt.",
      "Anschließend kehrten sie zurück. Ausgeschlafener. Aber nicht unbedingt erholt.",
      "Der Urlaub hatte ihnen ermöglicht, wieder in ihrem Alltag zu funktionieren. Er hatte jedoch nichts an den Bedingungen verändert, die sie überhaupt so erschöpft hatten.",
      "Genau darin liegt der Unterschied zwischen Regeneration und Wiederherstellung: Du kannst deine Kräfte zurückgewinnen, ohne etwas an dem System zu verändern, das sie regelmäßig verbraucht.",
      "Der Urlaub wird dann zum Wartungsfenster zwischen zwei Phasen der Belastung.",
    ],
  },
  {
    h2: "Warum du deine Bedürfnisse oft erst in der Erschöpfung wahrnimmst",
    p: [
      "Solange du leistungsfähig bist, lassen sich viele Signale übergehen. Du kannst Müdigkeit kompensieren, innere Anspannung kontrollieren und fehlende Motivation mit Disziplin beantworten.",
      "Deine Bedürfnisse verschwinden dadurch nicht. Sie erhalten lediglich keinen Raum, solange dein Alltag keine unmittelbare Konsequenz von dir verlangt.",
      "Erst wenn dein Körper dich zum Anhalten zwingt, wird spürbar, was du vorher erfolgreich in deinen Tagesablauf integriert hast: die permanente Anspannung, die Gereiztheit, das Bedürfnis nach Rückzug oder das Gefühl, selbst in freien Momenten nicht wirklich abschalten zu können.",
      "Dann entsteht schnell der Eindruck, du bräuchtest lediglich mehr Schlaf, mehr Abstand oder den nächsten Urlaub.",
      "Keine Erholung trotz Urlaub kann deshalb bedeuten, dass deine Bedürfnisse zu lange nur dort berücksichtigt werden, wo sie deine Leistungsfähigkeit nicht beeinträchtigen.",
      "Du erlaubst dir Erholung, damit du anschließend wieder geben kannst. Damit dient selbst die Pause deiner Leistungsfähigkeit, während dein eigenes Befinden weiterhin nicht denselben Stellenwert wie deine Verantwortung besitzt.",
    ],
  },
  {
    h2: "Erholung verändert nicht das System",
    p: [
      "Eine Pause unterbricht lediglich deinen Alltag. Sie verhandelt ihn nicht neu.",
      "Sie verändert weder deinen Kalender noch deine Rolle. Sie spricht keine Grenze aus, beendet keine Verpflichtung und nimmt dir keine Verantwortung ab, die du längst nicht mehr tragen möchtest.",
      "Deshalb kannst du dich im Urlaub leichter fühlen und nach dem Urlaub wieder erschöpft sein. Deine Erholung war nicht wirkungslos, aber dein System wartet unverändert auf dich.",
    ],
  },
];

const OTHER_H2 = [
  "Veränderung als Führungsaufgabe beginnt bei dir selbst",
  "Erkenntnis erklärt. Eine Entscheidung richtet aus.",
  "Das Alte klingt häufig vernünftig",
  "Eine Entscheidung muss auch danach geführt werden",
];

export default function BlogPost() {
  return (
    <>
      <Header nav={SUBPAGE_NAV} current="Blog" />

      <main className="sub">
        <article>
          {/* ───────── Kopf: der sichtbare Titel ist die einzige H1 ───────── */}
          <header className="mx-auto max-w-[980px] px-6 pb-12 pt-10 text-center md:px-10 md:pb-16 md:pt-16">
            <Reveal>
              <span className="label text-brown-soft">Blog</span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="display mt-7 text-[2rem] leading-[1.14] text-brown [text-wrap:balance] sm:text-[2.6rem] lg:text-[3.4rem]">
                {H1}
              </h1>
            </Reveal>
          </header>

          {/* ───────── Beitragsbild mit Alt-Text ───────── */}
          <Reveal variant="image" className="mx-auto max-w-[1400px] px-4 md:px-8 lg:px-12">
            <div className="frame aspect-[16/9] md:aspect-[16/7]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={OFFER_PHOTOS.blog} alt={IMG_ALT} className="h-full w-full object-cover" />
            </div>
          </Reveal>

          <div className="mx-auto max-w-[760px] px-6 pb-20 pt-12 md:px-8 md:pb-28 md:pt-16">
            <CapSwitch>
              <div className="post-body">
                <p className="!mt-10">
                  Du kommst nach ein oder zwei Wochen zurück und bist nach dem Urlaub wieder erschöpft. Hello,
                  Post-Holiday-Syndrom.
                </p>
                <p>
                  Doch vielleicht liegt es nicht daran, dass du dich im Urlaub falsch erholt hast. Vielleicht kehrst du
                  lediglich in ein System zurück, das deine neu gewonnene Energie sofort wieder beansprucht.
                </p>
                <p>
                  Du hast geschlafen, Abstand gewonnen und vielleicht zum ersten Mal seit Monaten wieder gespürt, wie
                  es dir eigentlich geht. Doch kaum beginnt der Alltag, greifen dieselben Abläufe: die gleiche
                  Verantwortung, die gleichen unausgesprochenen Grenzen und die gleichen Erwartungen an dich selbst.
                </p>

                {SECTIONS.map((s) => (
                  <section key={s.h2} className="contents">
                    <h2>{s.h2}</h2>
                    {s.p.map((t) => (
                      <p key={t}>{t}</p>
                    ))}
                  </section>
                ))}

                <p className="!mt-10 text-[0.9rem] !text-brown-soft">[ … Auszug für die Demo – der Artikel geht hier weiter ]</p>
              </div>

              {/* ───────── Nur für den Kickoff: weitere Beispiele + technische Umsetzung ───────── */}
              <aside className="mt-20 border border-dashed border-gold-line bg-cream-soft px-6 py-9 md:px-10 md:py-12">
                <span className="label text-brown-soft">Hinweis zur Vorschau · nicht Teil des Beitrags</span>

                <p className="display mt-6 text-[1.25rem] leading-[1.3] text-brown md:text-[1.5rem]">
                  Dieselbe Gestaltung mit den Überschriften deines zweiten Artikels
                </p>
                <div className="mt-2">
                  {OTHER_H2.map((t) => (
                    <p key={t} className="h2-specimen !mt-7">
                      {t}
                    </p>
                  ))}
                </div>

                <p className="display mt-14 text-[1.25rem] leading-[1.3] text-brown md:text-[1.5rem]">
                  So ist dieser Beitrag technisch aufgebaut
                </p>
                <table className="spec-table mt-5">
                  <tbody>
                    <tr>
                      <th scope="row">Beitragstitel</th>
                      <td>Die einzige H1 der Seite – steht nicht noch einmal im Text.</td>
                    </tr>
                    <tr>
                      <th scope="row">SEO-Titel</th>
                      <td>{SEO_TITLE}</td>
                    </tr>
                    <tr>
                      <th scope="row">Meta Description</th>
                      <td>{META}</td>
                    </tr>
                    <tr>
                      <th scope="row">URL / Slug</th>
                      <td>
                        <code>{SLUG}</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Beitragsbild</th>
                      <td>Mit eigenem Alt-Text (hier: „{IMG_ALT}“).</td>
                    </tr>
                    <tr>
                      <th scope="row">Kapitel</th>
                      <td>Echte H2-Überschriften – jede Überschrift ist ein einziges, zusammenhängendes H2-Element.</td>
                    </tr>
                    <tr>
                      <th scope="row">Anfangsbuchstabe</th>
                      <td>
                        Bodoni Moda, nur per CSS gestaltet (<code>h2::first-letter</code>) – kein Bild, kein eigenes
                        Textelement, auf dem Smartphone deutlich kleiner, nur bei H2.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </aside>
            </CapSwitch>
          </div>
        </article>
      </main>

      <Footer nav={SUBPAGE_NAV} />
    </>
  );
}
