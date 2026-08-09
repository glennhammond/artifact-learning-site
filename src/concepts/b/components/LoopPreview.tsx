import { legacyModelLayers as modelLayers } from "../../../content/legacy";

/** Decorative, non-interactive ring used in the hero — the full interactive version lives in the Model section. */
export function LoopPreview() {
  const size = 220;
  const radius = 84;
  const center = size / 2;
  const points = modelLayers.map((layer, i) => {
    const angle = (Math.PI * 2 * i) / modelLayers.length - Math.PI / 2;
    return { layer, x: center + radius * Math.cos(angle), y: center + radius * Math.sin(angle) };
  });
  const pathD = `M ${points.map((p) => `${p.x},${p.y}`).join(" L ")} Z`;

  return (
    <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} aria-hidden="true" className="b-loop-preview">
      <circle cx={center} cy={center} r={radius} fill="none" stroke="var(--b-border)" strokeWidth={1} />
      <path d={pathD} fill="none" stroke="var(--b-border)" strokeWidth={1} strokeDasharray="3 5" />
      {points.map((p) => (
        <g key={p.layer.name}>
          <circle cx={p.x} cy={p.y} r={4} fill="var(--b-text-secondary)" />
          <text x={p.x} y={p.y - 12} textAnchor="middle" fontSize={9} fill="var(--b-text-secondary)" fontFamily="var(--font-mono)">
            {p.layer.name.toUpperCase()}
          </text>
        </g>
      ))}
      <circle r={4} fill="var(--b-data)" className="b-loop__pulse">
        <animateMotion dur="6s" repeatCount="indefinite" path={pathD} rotate="auto" />
      </circle>
    </svg>
  );
}
