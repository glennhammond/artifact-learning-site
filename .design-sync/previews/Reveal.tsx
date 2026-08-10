import { Reveal } from "../../src/components/layout/Reveal";

/**
 * The one-shot reveal-on-scroll wrapper — CommercialStatement's real usage:
 * `as="div"` with the `ds-fade` class the design system's Section/editorial
 * transitions use. Fades/translates in once via IntersectionObserver when it
 * first enters the viewport (never a repeating animation).
 */
export function Default() {
  return (
    <Reveal as="div" className="ds-fade">
      <p style={{ margin: 0 }}>Learning problems deserve product thinking.</p>
    </Reveal>
  );
}
