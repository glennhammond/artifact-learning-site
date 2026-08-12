import { useState } from "react";
import { legacyModelLayers as modelLayers } from "../../../content/legacy";
import "./LoopDiagram.css";

/**
 * Interactive animated loop: a pulse travels the ring continuously (slow,
 * low-amplitude; the concept's one signature motion), and each node is a
 * real button that sets the active description below. Reduced-motion users
 * get a static ring with the Insight→Experience arrow already highlighted.
 */
export function LoopDiagram() {
  const [active, setActive] = useState(0);
  const size = 240;
  const radius = 92;
  const center = size / 2;

  const points = modelLayers.map((layer, i) => {
    const angle = (Math.PI * 2 * i) / modelLayers.length - Math.PI / 2;
    return {
      layer,
      x: center + radius * Math.cos(angle),
      y: center + radius * Math.sin(angle),
    };
  });

  const pathD = `M ${points.map((p) => `${p.x},${p.y}`).join(" L ")} Z`;

  return (
    <div className="b-loop">
      <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} className="b-loop__svg" aria-hidden="true">
        <circle cx={center} cy={center} r={radius} fill="none" stroke="var(--b-border)" strokeWidth={1} />
        <path d={pathD} fill="none" stroke="var(--b-border)" strokeWidth={1} strokeDasharray="3 5" />
        <circle r={4} fill="var(--b-data)" className="b-loop__pulse">
          <animateMotion dur="6s" repeatCount="indefinite" path={pathD} rotate="auto" />
        </circle>
      </svg>

      <div className="b-loop__nodes" style={{ width: size, height: size }}>
        {points.map((p, i) => (
          <button
            key={p.layer.name}
            type="button"
            className="b-loop__node"
            data-active={active === i}
            style={{ left: p.x, top: p.y }}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            aria-pressed={active === i}
          >
            <span className="kicker">{p.layer.index}</span>
            <span>{p.layer.name}</span>
          </button>
        ))}
      </div>

      <p className="b-loop__desc" aria-live="polite">
        <strong>{modelLayers[active].name}.</strong> {modelLayers[active].description}
      </p>
    </div>
  );
}
