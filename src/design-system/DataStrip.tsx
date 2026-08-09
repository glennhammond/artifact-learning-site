import "./DataStrip.css";

interface DataStripProps {
  label: string;
  lines: string[];
  active?: boolean;
}

/**
 * A labelled strip of genuine event/data lines, set in IBM Plex Mono — the
 * one place mono is used as language rather than decoration (v0.2 §02).
 * `active` marks the strip carrying the meaningful contrast (e.g. "what an
 * instrumented experience can also show") with a single Signal rule, never
 * a filled background — Signal marks consequence, not a container.
 */
export function DataStrip({ label, lines, active = false }: DataStripProps) {
  return (
    <div className={`ds-data-strip ${active ? "ds-data-strip--active" : ""}`.trim()}>
      <p className="kicker ds-data-strip__label">{label}</p>
      <pre className="ds-data-strip__lines">{lines.join("\n")}</pre>
    </div>
  );
}
