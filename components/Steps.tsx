type Step = { title: string; sub?: string; text?: string };

/**
 * Process "graphic" built from live text: steps on a gold line that rises from left to right
 * (desktop) or runs down the side (phone). Stays sharp, translatable and readable for Google.
 */
export default function Steps({ items, label }: { items: Step[]; label: string }) {
  return (
    <ol className="steps" style={{ "--n": items.length } as React.CSSProperties} aria-label={label}>
      {items.map((s, i) => (
        <li key={s.title} className="step" style={{ "--i": i } as React.CSSProperties}>
          <span className="step-riser" aria-hidden="true" />
          <span className="step-no">{String(i + 1).padStart(2, "0")}</span>
          <p className="step-title">{s.title}</p>
          {s.sub ? <p className="step-sub">{s.sub}</p> : null}
          {s.text ? <p className="step-text">{s.text}</p> : null}
        </li>
      ))}
    </ol>
  );
}
