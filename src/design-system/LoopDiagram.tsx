import { useEffect, useId, useRef, useState } from "react";
import type { ModelLayer } from "../content/shared";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import "./LoopDiagram.css";

interface LoopDiagramProps {
  layers: ModelLayer[];
  platform: { name: string; description: string };
}

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * The signature system visual — v0.2 §18 Direction 1 (circular loop, Platform
 * as a base plane) as the primary diagram, with a Direction 2 (layered
 * stack) compact fallback for narrow layouts, swapped by CSS `display` at
 * the nav-collapse breakpoint so only one set of controls is ever in the tab
 * order at a time.
 *
 * Motion follows v0.2 §11: a single dot travels the ring once when the
 * diagram is revealed (280ms/node, ease-out) — never a continuous loop —
 * and replays once when a node is activated. Reduced motion drops the
 * travel entirely; the loop-back arrow is drawn statically either way.
 */
export function LoopDiagram({ layers, platform }: LoopDiagramProps) {
  const [active, setActive] = useState(0);
  const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>();
  const pulseRef = useRef<SVGAnimateMotionElement>(null);
  const uid = useId();
  const titleId = `${uid}-loop-title`;
  const descId = `${uid}-loop-desc`;
  const arrowId = `${uid}-loop-arrow`;
  const size = 280;
  const radius = 104;
  const center = size / 2;

  const points = layers.map((layer, i) => {
    const angle = (Math.PI * 2 * i) / layers.length - Math.PI / 2;
    return {
      layer,
      x: center + radius * Math.cos(angle),
      y: center + radius * Math.sin(angle),
    };
  });
  const pathD = `M ${points.map((p) => `${p.x},${p.y}`).join(" L ")} Z`;
  const last = points[points.length - 1];
  const first = points[0];

  const playPulse = () => {
    if (prefersReducedMotion()) return;
    pulseRef.current?.beginElement();
  };

  useEffect(() => {
    if (isVisible) playPulse();
  }, [isVisible]);

  const activateNode = (i: number) => {
    setActive(i);
    playPulse();
  };

  const summary = layers.map((l) => l.name).join(" → ") + " → " + layers[0].name;

  return (
    <div className="ds-loop" ref={ref}>
      <p className="visually-hidden">
        System model: {summary}, looping continuously. {platform.name} is the environment this loop
        runs on, not a stage within it. {layers[active].name}: {layers[active].description}
      </p>

      {/* Direction 1 — circular loop, Platform as base plane (default) */}
      <div className="ds-loop__circular">
        <div className="ds-loop__plane" aria-hidden="true">
          <span className="kicker">{platform.name} — environment / infrastructure</span>
        </div>
        <svg
          viewBox={`0 0 ${size} ${size}`}
          width={size}
          height={size}
          className="ds-loop__svg"
          role="img"
          aria-labelledby={`${titleId} ${descId}`}
        >
          <title id={titleId}>The Experience–Improvement loop</title>
          <desc id={descId}>
            {layers.length} connected stages arranged in a ring: {summary}. Improvement feeds back into
            Experience.
          </desc>
          <circle cx={center} cy={center} r={radius} fill="none" stroke="var(--color-border)" strokeWidth={1} />
          <path d={pathD} fill="none" stroke="var(--color-border)" strokeWidth={1} strokeDasharray="3 5" />
          {/* Loop-back arc drawn heavier — the one relationship the whole diagram exists to show */}
          <path
            d={`M ${last.x},${last.y} L ${first.x},${first.y}`}
            fill="none"
            stroke="var(--color-text)"
            strokeWidth={2}
            markerEnd={`url(#${arrowId})`}
          />
          <defs>
            <marker id={arrowId} markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill="var(--color-text)" />
            </marker>
          </defs>
          <circle cx={first.x} cy={first.y} r={5} fill="var(--color-signal)" className="ds-loop__pulse">
            <animateMotion
              ref={pulseRef}
              dur="1.4s"
              begin="indefinite"
              path={pathD}
              rotate="auto"
              fill="freeze"
            />
          </circle>
        </svg>

        <div className="ds-loop__nodes" style={{ width: size, height: size }}>
          {points.map((p, i) => (
            <button
              key={p.layer.name}
              type="button"
              className="ds-loop__node"
              data-active={active === i}
              style={{ left: p.x, top: p.y }}
              onMouseEnter={() => activateNode(i)}
              onFocus={() => activateNode(i)}
              onClick={() => activateNode(i)}
              aria-pressed={active === i}
            >
              <span className="kicker">{p.layer.index}</span>
              <span>{p.layer.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Direction 2 — layered stack, Platform as foundation (compact fallback) */}
      <div className="ds-loop__stacked">
        <div className="ds-loop__stack-row">
          {layers.map((layer, i) => (
            <button
              key={layer.name}
              type="button"
              className="ds-loop__stack-node"
              data-active={active === i}
              onClick={() => activateNode(i)}
              onFocus={() => activateNode(i)}
              aria-pressed={active === i}
            >
              <span className="kicker">{layer.index}</span>
              <span>{layer.name}</span>
            </button>
          ))}
        </div>
        <p className="ds-loop__stack-return kicker" aria-hidden="true">
          ↺ Improvement returns to Experience
        </p>
        <div className="ds-loop__stack-platform">
          <span className="kicker">{platform.name} — foundation, not a stage</span>
        </div>
      </div>

      <p className="ds-loop__desc" aria-live="polite">
        <strong>{layers[active].name}.</strong> {layers[active].description}
      </p>
    </div>
  );
}
