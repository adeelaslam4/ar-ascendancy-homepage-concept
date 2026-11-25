"use client";

import { useEffect, useRef, useState } from "react";
import { COMPANY, START, type Plan } from "@/lib/offers";
import Rich from "./Rich";

type Layout = "M" | "A" | "B";

const LAYOUTS: { id: Layout; label: string }[] = [
  { id: "M", label: "1 · Wie im Miro-Board (alles sichtbar)" },
  { id: "A", label: "2 · Kompakt (Details aufklappbar)" },
  { id: "B", label: "3 · Reiter" },
];

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
function Board({ plans }: { plans: Plan[] }) {
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
      {plans.map((p) => (
        <article key={p.id} id={p.id} className="plan is-sticky scroll-mt-28">
          <Lead p={p} />
          <div className="mt-4">
            <Included p={p} />
          </div>
          {p.footnote ? <p className="plan-small mt-5">{p.footnote}</p> : null}
          <Secret p={p} />
          <Invest p={p} />
        </article>
      ))}
    </div>
  );
}

/** Layout 2 — same three cards, the long part of each offer opens on demand. */
function Cards({ plans }: { plans: Plan[] }) {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const anyOpen = Object.values(open).some(Boolean);
  return (
    <div className={`grid gap-6 lg:grid-cols-3 xl:gap-8 ${anyOpen ? "lg:items-start" : "lg:items-stretch"}`}>
      {plans.map((p) => {
        const isOpen = !!open[p.id];
        const more = p.included.length > p.preview;
        return (
          <article key={p.id} id={p.id} className="plan scroll-mt-28">
            <Lead p={p} />
            <div className="mt-4">
              <Included p={p} to={p.preview} />
            </div>

            <div id={`${p.id}-mehr`} className="fold" data-open={isOpen}>
              <div>
                <div className="pt-[0.7rem]">
                  {more ? <Included p={p} from={p.preview} /> : null}
                  {p.footnote ? <p className="plan-small mt-5">{p.footnote}</p> : null}
                  <Secret p={p} />
                  <Invest p={p} />
                </div>
              </div>
            </div>

            <div className="mt-auto pt-8">
              <button
                type="button"
                className="plan-toggle"
                aria-expanded={isOpen}
                aria-controls={`${p.id}-mehr`}
                onClick={() => setOpen((o) => ({ ...o, [p.id]: !o[p.id] }))}
              >
                {isOpen ? "Weniger anzeigen" : more ? "Alle Details & Investition" : "Investition & Details"}
                <span className="faq-icon" aria-hidden="true" />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
}

/** Layout 3 — one offer at a time, chosen by tab. */
function Tabs({ plans }: { plans: Plan[] }) {
  const [active, setActive] = useState(plans[0].id);
  const p = plans.find((x) => x.id === active) ?? plans[0];
  const half = Math.ceil(p.included.length / 2);
  return (
    <div>
      {plans.map((x) => (
        <span key={x.id} id={x.id} className="block scroll-mt-28" />
      ))}
      <div className="tabs" role="tablist" aria-label="Angebote">
        {plans.map((x) => (
          <button
            key={x.id}
            type="button"
            role="tab"
            id={`tab-${x.id}`}
            aria-selected={x.id === active}
            aria-controls={`panel-${x.id}`}
            className="tab"
            onClick={() => setActive(x.id)}
          >
            <Head p={x} as="span" />
            <span className="text-[0.8rem] tracking-[0.04em]">{x.duration}</span>
          </button>
        ))}
      </div>
      <div role="tabpanel" id={`panel-${p.id}`} aria-labelledby={`tab-${p.id}`} className="plan !border-t-0" key={p.id}>
        <h3 className="sr-only">{p.name}</h3>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <Intro p={p} />
            <p className="mt-7 text-[0.95rem] font-semibold tracking-[0.02em] text-brown">{p.duration}</p>
            <p className="plan-tag mt-4">{p.tagline}</p>
            <Secret p={p} />
          </div>
          <div className="lg:col-span-8">
            <p className="plan-h">Included</p>
            <div className="mt-4 grid gap-x-10 gap-y-[0.7rem] md:grid-cols-2">
              <Included p={p} to={half} />
              <Included p={p} from={half} />
            </div>
            {p.footnote ? <p className="plan-small mt-5">{p.footnote}</p> : null}
            <Invest p={p} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OfferPlans({ plans }: { plans: Plan[] }) {
  const [layout, setLayout] = useState<Layout>("M");
  return (
    <div>
      <div className="demo-switch mb-10" role="group" aria-label="Layout-Varianten für den Kickoff">
        <span>
          <strong className="font-semibold text-brown">Nur für den Kickoff:</strong> Darstellung der drei Angebote
        </span>
        {LAYOUTS.map((l) => (
          <button key={l.id} type="button" aria-pressed={layout === l.id} onClick={() => setLayout(l.id)}>
            {l.label}
          </button>
        ))}
      </div>
      {layout === "M" ? <Board plans={plans} /> : layout === "A" ? <Cards plans={plans} /> : <Tabs plans={plans} />}
    </div>
  );
}
