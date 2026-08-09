import "./EvidencePlaceholder.css";

interface EvidencePlaceholderProps {
  label?: string;
}

/**
 * A designed stand-in for real work imagery — communicates crop, density
 * and the kind of content that belongs here (an interface fragment with a
 * captured interaction moment) without fabricating a real screenshot
 * (brief §13, §20). Replaces the flat grey box.
 */
export function EvidencePlaceholder({ label = "Illustrative UI fragment — not a real client screen" }: EvidencePlaceholderProps) {
  return (
    <div className="ds-evidence" role="img" aria-label={label}>
      <svg viewBox="0 0 400 300" preserveAspectRatio="none" aria-hidden="true" className="ds-evidence__svg">
        <rect x="0.5" y="0.5" width="399" height="299" fill="none" stroke="var(--color-border)" />
        {/* chrome bar */}
        <line x1="0" y1="34" x2="400" y2="34" stroke="var(--color-border)" />
        <circle cx="20" cy="17" r="4" fill="none" stroke="var(--color-text-subtle)" />
        <circle cx="36" cy="17" r="4" fill="none" stroke="var(--color-text-subtle)" />
        <circle cx="52" cy="17" r="4" fill="none" stroke="var(--color-text-subtle)" />
        <rect x="180" y="12" width="110" height="10" fill="var(--color-border)" />
        {/* nav rail */}
        <line x1="88" y1="34" x2="88" y2="300" stroke="var(--color-border)" />
        <rect x="20" y="58" width="48" height="7" fill="var(--color-border)" />
        <rect x="20" y="84" width="36" height="7" fill="var(--color-border)" />
        <rect x="20" y="110" width="42" height="7" fill="var(--color-border)" />
        <rect x="20" y="136" width="30" height="7" fill="var(--color-border)" />
        {/* content */}
        <rect x="112" y="58" width="150" height="12" fill="var(--color-text-subtle)" />
        <rect x="112" y="86" width="240" height="7" fill="var(--color-border)" />
        <rect x="112" y="104" width="220" height="7" fill="var(--color-border)" />
        <rect x="112" y="122" width="180" height="7" fill="var(--color-border)" />
        {/* captured interaction moment — the one Signal mark, top-left flag */}
        <rect x="112" y="156" width="176" height="72" fill="none" stroke="var(--color-text)" strokeWidth="1.5" />
        <polygon points="112,156 134,156 112,178" fill="var(--color-signal)" />
        <rect x="128" y="176" width="90" height="6" fill="var(--color-border)" />
        <rect x="128" y="190" width="60" height="6" fill="var(--color-border)" />
      </svg>
      <p className="ds-evidence__caption">{label}</p>
    </div>
  );
}
