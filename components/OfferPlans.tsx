"use client";

import { useState } from "react";
import type { Plan } from "@/lib/offers";

type Layout = "A" | "B" | "C";

const LAYOUTS: { id: Layout; label: string }[] = [
  { id: "A", label: "A · Karten nebeneinander" },
  { id: "B", label: "B · Reiter" },
  { id: "C", label: "C · Untereinander" },
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
        <li key={it.text} className={it.note ? "tick-note" : undefined}>
          {it.text}
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
        <p key={t} className="plan-small mt-3">
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
        <p key={t} className="plan-small mt-4">
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
          {t}
        </p>
      ))}
    </>
  );
}

/** Layout A — three cards side by side; the long part of each offer opens on demand. */
function Cards({ plans }: { plans: Plan[] }) {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const anyOpen = Object.values(open).some(Boolean);
  return (
    <div className={`grid gap-6 lg:grid-cols-3 xl:gap-8 ${anyOpen ? "lg:items-start" : "lg:items-stretch"}`}>
      {plans.map((p) => {
        const isOpen = !!open[p.id];
        return (
          <article key={p.id} id={p.id} className="plan scroll-mt-28">
            <Head p={p} stack />
            <div className="rule-accent mt-6" />
            <div className="mt-6">
              <Intro p={p} />
            </div>
            <p className="label mt-7 text-brown-soft">{p.duration}</p>
            <p className="plan-tag mt-4">{p.tagline}</p>

            <p className="plan-h mt-9">Included</p>
            <div className="mt-4">
              <Included p={p} to={p.preview} />
            </div>

            <div id={`${p.id}-mehr`} className="fold" data-open={isOpen}>
              <div>
                <div className="pt-[0.7rem]">
                  {p.included.length > p.preview ? <Included p={p} from={p.preview} /> : null}
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
                {isOpen ? "Weniger anzeigen" : p.included.length > p.preview ? "Alle Details & Investition" : "Investition & Details"}
                <span className="faq-icon" aria-hidden="true" />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
}

function Full({ p }: { p: Plan }) {
  const half = Math.ceil(p.included.length / 2);
  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-4">
        <Intro p={p} />
        <p className="label mt-7 text-brown-soft">{p.duration}</p>
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
  );
}

/** Layout B — one offer at a time, chosen by tab. */
function Tabs({ plans }: { plans: Plan[] }) {
  const [active, setActive] = useState(plans[0].id);
  const p = plans.find((x) => x.id === active) ?? plans[0];
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
      <div
        role="tabpanel"
        id={`panel-${p.id}`}
        aria-labelledby={`tab-${p.id}`}
        className="plan !border-t-0"
        key={p.id}
      >
        <h3 className="sr-only">{p.name}</h3>
        <Full p={p} />
      </div>
    </div>
  );
}

/** Layout C — all three offers one below the other, everything visible. */
function Stacked({ plans }: { plans: Plan[] }) {
  return (
    <div className="grid gap-8">
      {plans.map((p) => (
        <article key={p.id} id={p.id} className="plan scroll-mt-28">
          <Head p={p} />
          <div className="rule-accent mb-8 mt-6" />
          <Full p={p} />
        </article>
      ))}
    </div>
  );
}

export default function OfferPlans({ plans }: { plans: Plan[] }) {
  const [layout, setLayout] = useState<Layout>("A");
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
      {layout === "A" ? <Cards plans={plans} /> : layout === "B" ? <Tabs plans={plans} /> : <Stacked plans={plans} />}
    </div>
  );
}
