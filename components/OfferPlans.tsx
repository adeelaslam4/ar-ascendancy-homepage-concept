"use client";

import { useEffect, useRef } from "react";
import { COMPANY, START, type Plan } from "@/lib/offers";
import Rich from "./Rich";

function Head({ p, as: Tag = "h3", stack = false }: { p: Plan; as?: "h3" | "span"; stack?: boolean }) {
  return (
    <div className={stack ? "plan-head-stack" : "flex flex-wrap items-center gap-x-4 gap-y-3"}>
      <Tag className="plan-name">{p.name}</Tag>
      <span className="pill-gold">{p.price}</span>
    </div>
  );
}

function Included({ p, from = 0, to }: { p: Plan; from?: number; to?: number }) {
  return (
    <ul className="ticks">
      {p.included.slice(from, to).map((it) => (
        <li key={it.text} className={it.note ? "tick-note italic" : undefined}>
          <Rich text={it.text} />
        </li>
      ))}
    </ul>
  );
}

function Secret({ p }: { p: Plan }) {
  if (!p.secret) return null;
  return (
    <div className="secret mt-8">
      <p className="plan-name !text-[1.05rem]">{p.secret.title}</p>
      <p className="plan-tag mt-2">{p.secret.tagline}</p>
      {p.secret.text.map((t) => (
        <p key={t} className={`plan-small mt-3 ${t.startsWith("Wichtig:") ? "italic" : ""}`}>
          {t}
        </p>
      ))}
    </div>
  );
}

function Invest({ p }: { p: Plan }) {
  return (
    <div className="mt-8 border-t border-gold-line/70 pt-7">
      <p className="plan-h">{p.invest}</p>
      <p className="plan-small mt-3">{p.instalmentLead}</p>
      <ul className="ticks mt-3">
        {p.instalments.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      {p.after.map((t) => (
        <p
          key={t}
          className={`plan-small mt-4 ${t === START ? "italic" : ""} ${t === COMPANY ? "!font-semibold !text-brown" : ""}`}
        >
          {t}
        </p>
      ))}
    </div>
  );
}

function Intro({ p }: { p: Plan }) {
  return (
    <>
      {p.intro.map((t) => (
        <p key={t} className="mt-4 text-[0.98rem] leading-[1.7] text-brown first:mt-0">
          <Rich text={t} />
        </p>
      ))}
    </>
  );
}

function Lead({ p }: { p: Plan }) {
  return (
    <>
      <Head p={p} stack />
      <div className="rule-accent mt-6" />
      <div className="mt-6">
        <Intro p={p} />
      </div>
      <p className="mt-7 text-[0.95rem] font-semibold tracking-[0.02em] text-brown">{p.duration}</p>
      <p className="plan-tag mt-4">{p.tagline}</p>
      <p className="plan-h mt-9">Included</p>
    </>
  );
}

/** Layout 1 — as on the client's board: three offers side by side, everything visible. */
function Board({ plans, binding }: { plans: Plan[]; binding?: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);

  // The offers differ a lot in length. Each shorter card scrolls normally until its end is on screen,
  // then stays put beside the longer ones — so its price and terms remain visible, no empty column.
  useEffect(() => {
    const wrap = ref.current;
    if (!wrap) return;
    const cards = Array.from(wrap.querySelectorAll<HTMLElement>(".plan"));
    const wide = window.matchMedia("(min-width: 1024px)");
    const place = () => {
      const vh = window.innerHeight;
      // side by side only from 1024px; on phones the cards simply follow one another
      for (const c of cards) c.style.top = wide.matches ? `${Math.min(112, vh - c.offsetHeight - 24)}px` : "";
    };
    place();
    const ro = new ResizeObserver(place);
    cards.forEach((c) => ro.observe(c));
    window.addEventListener("resize", place);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", place);
    };
  }, []);

  return (
    <div ref={ref} className="grid gap-6 lg:grid-cols-3 lg:items-start xl:gap-8">
      {plans.map((p, i) => (
        <article key={p.id} id={p.id} className="plan is-sticky scroll-mt-28">
          <Lead p={p} />
          <div className="mt-4">
            <Included p={p} />
          </div>
          {p.footnote ? <p className="plan-small mt-5">{p.footnote}</p> : null}
          <Secret p={p} />
          <Invest p={p} />
          {i === 0 && binding ? <div className="mt-9">{binding}</div> : null}
        </article>
      ))}
    </div>
  );
}

export default function OfferPlans({ plans, binding }: { plans: Plan[]; binding?: React.ReactNode }) {
  return <Board plans={plans} binding={binding} />;
}
