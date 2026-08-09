import "./WorkComposite.css";

interface WorkCompositeProps {
  label?: string;
}

const TOKENS = [
  { name: "color.ink", var: "--color-ink" },
  { name: "color.paper", var: "--color-paper" },
  { name: "color.signal", var: "--color-signal" },
  { name: "radius.control", swatch: false },
];

/**
 * A multi-artefact composite standing in for real work imagery — a large
 * primary interaction crop, a smaller overlapping detail crop (a
 * knowledge-check state), and a narrow token/component specimen rail, at
 * different scales rather than one oversized fake browser (content doc
 * §7 placeholder imagery direction).
 */
export function WorkComposite({ label = "Representative project layout pending final case-study assets." }: WorkCompositeProps) {
  return (
    <div className="ds-work-composite" role="img" aria-label={label}>
      <div className="ds-work-composite__body">
        <div className="ds-work-composite__stage">
          {/* primary — decision-point interface crop */}
          <svg viewBox="0 0 400 280" preserveAspectRatio="none" aria-hidden="true" className="ds-work-composite__primary">
            <rect x="0.5" y="0.5" width="399" height="279" fill="none" stroke="var(--color-border)" />
            <line x1="0" y1="30" x2="400" y2="30" stroke="var(--color-border)" />
            <circle cx="18" cy="15" r="3.5" fill="none" stroke="var(--color-text-subtle)" />
            <circle cx="32" cy="15" r="3.5" fill="none" stroke="var(--color-text-subtle)" />
            <rect x="150" y="10" width="100" height="9" fill="var(--color-border)" />
            <rect x="24" y="52" width="180" height="12" fill="var(--color-text-subtle)" />
            <rect x="24" y="78" width="300" height="7" fill="var(--color-border)" />
            <rect x="24" y="94" width="260" height="7" fill="var(--color-border)" />
            {/* two decision choices, one selected in Signal */}
            <rect x="24" y="130" width="150" height="44" fill="none" stroke="var(--color-text)" strokeWidth="1.5" />
            <rect x="24" y="130" width="150" height="44" fill="var(--color-signal)" opacity="0.14" />
            <rect x="38" y="146" width="14" height="14" fill="none" stroke="var(--color-signal)" strokeWidth="2" />
            <rect x="60" y="150" width="90" height="6" fill="var(--color-text-secondary)" />
            <rect x="192" y="130" width="150" height="44" fill="none" stroke="var(--color-border)" />
            <rect x="206" y="146" width="14" height="14" fill="none" stroke="var(--color-border)" strokeWidth="2" />
            <rect x="228" y="150" width="90" height="6" fill="var(--color-border)" />
            <rect x="24" y="200" width="90" height="26" fill="var(--color-text)" />
          </svg>

          {/* detail crop — knowledge-check state, overlapping the primary */}
          <div className="ds-work-composite__detail">
            <span className="ds-data-strip__mark" aria-hidden="true" />
            <svg viewBox="0 0 160 120" preserveAspectRatio="none" aria-hidden="true">
              <rect x="0.5" y="0.5" width="159" height="119" fill="none" stroke="var(--color-border)" />
              <rect x="14" y="16" width="90" height="8" fill="var(--color-text-subtle)" />
              <circle cx="20" cy="46" r="6" fill="none" stroke="var(--color-signal)" strokeWidth="2" />
              <path d="M17,46 l2,3 l5,-6" fill="none" stroke="var(--color-signal)" strokeWidth="2" />
              <rect x="34" y="43" width="100" height="6" fill="var(--color-text-secondary)" />
              <circle cx="20" cy="70" r="6" fill="none" stroke="var(--color-border)" strokeWidth="2" />
              <rect x="34" y="67" width="80" height="6" fill="var(--color-border)" />
              <circle cx="20" cy="94" r="6" fill="none" stroke="var(--color-border)" strokeWidth="2" />
              <rect x="34" y="91" width="90" height="6" fill="var(--color-border)" />
            </svg>
          </div>
        </div>

        <div className="ds-work-composite__tokens" aria-hidden="true">
          <p className="kicker ds-work-composite__tokens-label">Tokens</p>
          {TOKENS.map((t) => (
            <div className="ds-work-composite__token" key={t.name}>
              {t.var && <span className="ds-work-composite__swatch" style={{ background: `var(${t.var})` }} />}
              {!t.var && <span className="ds-work-composite__swatch ds-work-composite__swatch--outline" />}
              <span className="ds-work-composite__token-name">{t.name}</span>
            </div>
          ))}
        </div>
      </div>

      <p className="ds-work-composite__caption">{label}</p>
    </div>
  );
}
