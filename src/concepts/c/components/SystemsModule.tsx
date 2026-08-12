import { useState } from "react";
import { Container } from "../../../components/layout/Container";
import { Reveal } from "../../../components/layout/Reveal";
import { legacyModelLayers as modelLayers, legacyModelCaption as modelCaption } from "../../../content/legacy";
import "./SystemsModule.css";

/**
 * The hybrid's one bounded "systems moment": everything above and below
 * this panel is plain editorial styling; inside it, the page borrows
 * Concept B's graphite/interactive language for a single contained module.
 */
export function SystemsModule() {
  const [active, setActive] = useState(0);
  const size = 180;
  const radius = 66;
  const center = size / 2;
  const points = modelLayers.map((layer, i) => {
    const angle = (Math.PI * 2 * i) / modelLayers.length - Math.PI / 2;
    return { layer, x: center + radius * Math.cos(angle), y: center + radius * Math.sin(angle) };
  });
  const pathD = `M ${points.map((p) => `${p.x},${p.y}`).join(" L ")} Z`;

  return (
    <section id="model" className="c-section" aria-labelledby="model-heading">
      <Container>
        <Reveal as="div" className="c-fade">
          <div className="c-section__head">
            <p className="kicker">The Artifact model</p>
            <h2 id="model-heading" className="c-heading">
              Artifact treats the relationship between these four layers as a loop, not a
              hand-off.
            </h2>
          </div>

          <div className="c-module">
            <div className="c-module__diagram">
              <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} aria-hidden="true">
                <path d={pathD} fill="none" stroke="var(--c-module-border)" strokeWidth={1} strokeDasharray="3 5" />
                <circle r={3.5} fill="var(--c-module-data)" className="c-module__pulse">
                  <animateMotion dur="6s" repeatCount="indefinite" path={pathD} />
                </circle>
              </svg>
              <div className="c-module__nodes" style={{ width: size, height: size }}>
                {points.map((p, i) => (
                  <button
                    key={p.layer.name}
                    type="button"
                    className="c-module__node"
                    data-active={active === i}
                    style={{ left: p.x, top: p.y }}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    aria-pressed={active === i}
                  >
                    {p.layer.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="c-module__detail" aria-live="polite">
              <p className="c-module__kicker">{modelLayers[active].index}</p>
              <p>
                <strong>{modelLayers[active].name}.</strong> {modelLayers[active].description}
              </p>
            </div>
          </div>
          <p className="c-module__caption">{modelCaption}</p>
        </Reveal>
      </Container>
    </section>
  );
}
