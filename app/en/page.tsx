import type { Metadata } from "next";
import Header from "@/components/Header";
import Reveal, { Line } from "@/components/Reveal";
import Drift from "@/components/Drift";
import Arrow from "@/components/Arrow";
import Footer from "@/components/Footer";
import { PHOTOS } from "@/lib/images";
import { CALENDLY } from "@/lib/links";

/* English trial translation (Project Agreement, Clause 5.5): the top section of the homepage
   and the statement block beneath it. Layout and classes are those of the German homepage;
   the German homepage file itself is untouched. */

export const metadata: Metadata = {
  title: "A.R. ASCENDANCY — Executive Coaching, Consulting, Mentoring & Strategic Advisory",
  description:
    "As a consultant, mentor & strategic advisor, I support people who want change in finding clarity, making confident decisions and leading themselves.",
};

export default function HomeEn() {
  return (
    <div lang="en">
      <Header lang="en" />
      <Drift />

      <main>
        {/* ───────────────────────── HERO ───────────────────────── */}
        <section className="mx-auto max-w-[1400px] px-6 pb-24 pt-8 md:px-10 md:pb-32 md:pt-12 lg:px-14 lg:pt-16">
          <div className="grid items-center gap-14 md:grid-cols-12 md:gap-10 lg:gap-20">
            <Reveal variant="image" className="mat md:col-span-6 lg:col-span-5">
              <figure className="frame drift aspect-[4/5] w-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={PHOTOS.hero} alt="Alina Rogall, Founder & CEO A.R. ASCENDANCY" fetchPriority="high" />
              </figure>
            </Reveal>

            <div className="hero-copy md:col-span-6 lg:col-span-6 lg:col-start-7">
              <Reveal as="h1" variant="lines" delay={80} className="display hero-h1 text-[1.9rem] leading-[1.2] text-brown sm:text-[2.2rem] lg:text-[2.6rem] xl:text-[2.85rem]">
                <Line>Executive Coaching -</Line>
                <Line>CONSULTING, MENTORING</Line>
                <Line>&amp; STRATEGIC ADVISORY</Line>
              </Reveal>

              <Reveal delay={360}>
                <div className="rule rule-draw mt-9 w-16" />
                <p className="copy measure mt-9">
                  As a consultant, mentor &amp; strategic advisor, I support people who want change
                  in finding clarity, making confident decisions and leading themselves.
                </p>
                <p className="copy measure mt-5">
                  My mission is to guide you in reaching this high standard.
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

          <Reveal delay={200} className="mt-16 flex flex-col items-center gap-5 text-center md:mt-20">
            <span className="label-strong text-brown">Ready to meet the standard?</span>
            <a href={CALENDLY} className="btn btn-solid" title="Free initial consultation – Calendly">
              Book a free initial consultation
              <Arrow />
            </a>
          </Reveal>
        </section>

        {/* ───────────────────────── STATEMENT ───────────────────────── */}
        <section id="haltung" className="haltung relative overflow-hidden bg-cream-soft">
          <div className="haltung-bg" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={PHOTOS.haltung} alt="" loading="lazy" />
          </div>
          <div className="relative mx-auto max-w-[1400px] px-6 py-24 text-center md:px-10 md:py-36 lg:px-14">
            <Reveal>
              <span className="label text-brown-soft">Clarity - Decision - Ascent</span>
            </Reveal>
            <Reveal as="p" variant="lines" delay={120} className="display lines-flow-sm mx-auto mt-7 max-w-[900px] text-[1.8rem] leading-[1.3] text-brown sm:text-[2.2rem] lg:text-[2.8rem]">
              <Line>Clarity that sustains decisions</Line>
              <Line>and transforms leadership.</Line>
            </Reveal>
          </div>
        </section>

        {/* ───────── Trial only: where the English ends ───────── */}
        <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28 lg:px-14">
          <aside className="mx-auto max-w-[760px] border border-dashed border-gold-line bg-cream-soft px-6 py-9 text-center md:px-12 md:py-12">
            <span className="label text-brown-soft">Preview note · not part of the page</span>
            <p className="display mt-6 text-[1.25rem] leading-[1.3] text-brown md:text-[1.5rem]">
              This is the English trial translation of the top of your homepage.
            </p>
            <p className="copy mx-auto mt-5 max-w-[560px]">
              The remaining sections and all other pages follow in English if you choose the
              English version. Your German homepage is unchanged.
            </p>
            <a href="/" hrefLang="de" className="btn mt-9">
              German homepage
            </a>
          </aside>
        </section>
      </main>

      <Footer lang="en" />
    </div>
  );
}
