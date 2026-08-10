import { Section } from "../../design-system/Section";
import { productPhilosophy } from "../../content/shared";
import "./ProductPhilosophy.css";

const ANNOTATIONS = ["scenario.designed", "experience.built", "iteration.shipped"];

/**
 * The relocated hero philosophy (Phase 1 strategy §3a: REPOSITION, not
 * REPLACE) — now earned rather than assumed, sitting after Services and
 * Work rather than leading the page. Signal appears once, at "Improve it.",
 * the one moment observation turns into consequence — same device as the
 * original TransitionDesignObserve this replaces.
 */
export function ProductPhilosophy() {
  return (
    <Section
      id="philosophy"
      kicker={productPhilosophy.eyebrow}
      heading={productPhilosophy.headline}
      intro={productPhilosophy.body}
      density="compact"
    >
      <div className="home-philosophy__row">
        {productPhilosophy.words.map((word, i) => (
          <div className="home-philosophy__item" key={word}>
            {i === productPhilosophy.words.length - 1 && (
              <span className="home-philosophy__signal" aria-hidden="true" />
            )}
            <p className="home-philosophy__word">{word}</p>
            <p className="home-philosophy__annotation" aria-hidden="true">
              {ANNOTATIONS[i]}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
