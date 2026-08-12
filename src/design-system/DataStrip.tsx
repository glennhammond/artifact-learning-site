import "./DataStrip.css";

interface DataStripProps {
  label: string;
  lines: string[];
  active?: boolean;
  muted?: boolean;
}

/**
 * A labelled strip of genuine event/data lines, set in IBM Plex Mono: the
 * one place mono is used as language rather than decoration (v0.2 §02).
 * `active` marks the strip carrying the meaningful contrast (e.g. "what an
 * instrumented experience can also show") with a single Signal corner mark
 *: Signal identifies consequence, never a filled background. `muted`
 * recedes the strip that represents the limited/status-quo view (e.g. a
 * completion report), so the pairing reads as a visual transformation
 * rather than two equally-weighted panels.
 */
export function DataStrip({ label, lines, active = false, muted = false }: DataStripProps) {
  const modifier = active ? "ds-data-strip--active" : muted ? "ds-data-strip--muted" : "";
  return (
    <div className={`ds-data-strip ${modifier}`.trim()}>
      {active && <span className="ds-data-strip__mark" aria-hidden="true" />}
      <p className="kicker ds-data-strip__label">{label}</p>
      <pre className="ds-data-strip__lines">{lines.join("\n")}</pre>
    </div>
  );
}
