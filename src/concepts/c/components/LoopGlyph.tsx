/** A small inline signal — the hybrid's one hint, in the hero, that there's a systems layer beneath the editorial surface. */
export function LoopGlyph() {
  const size = 22;
  const r = 8;
  const c = size / 2;
  const points = [0, 1, 2, 3].map((i) => {
    const angle = (Math.PI * 2 * i) / 4 - Math.PI / 2;
    return { x: c + r * Math.cos(angle), y: c + r * Math.sin(angle) };
  });
  const pathD = `M ${points.map((p) => `${p.x},${p.y}`).join(" L ")} Z`;

  return (
    <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} aria-hidden="true" className="c-loop-glyph">
      {points.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={1.6} fill="var(--c-text-secondary)" />
      ))}
      <circle r={1.8} fill="var(--c-accent)">
        <animateMotion dur="5s" repeatCount="indefinite" path={pathD} />
      </circle>
    </svg>
  );
}
