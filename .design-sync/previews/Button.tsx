import { Button } from "../../src/design-system/Button";
import { hero } from "../../src/content/shared";

/** The primary CTA role — Signal fill, reserved for one action per view (v0.2 §08). Real hero usage. */
export function Primary() {
  return (
    <Button variant="primary" href={hero.ctaHref}>
      {hero.cta}
    </Button>
  );
}

/** The bordered secondary role — nav CTA usage. */
export function Secondary() {
  return (
    <Button variant="secondary" href="#contact">
      Start a conversation
    </Button>
  );
}

/** The underline text/link role — used for the Work case-study CTA. */
export function Text() {
  return (
    <Button variant="text" href="#work">
      Explore the case study <span aria-hidden="true">→</span>
    </Button>
  );
}

/** No href renders a real &lt;button type="button"&gt; instead of an &lt;a&gt; — the same component, the other half of the discriminated API. */
export function AsButton() {
  return (
    <Button variant="secondary" onClick={() => {}}>
      Menu
    </Button>
  );
}

/** aria-disabled usage from WorkFeature's case-study CTA (visually normal, marked non-interactive for assistive tech). */
export function DisabledLink() {
  return (
    <Button variant="text" href="#work" aria-disabled="true">
      Explore the case study <span aria-hidden="true">→</span>
    </Button>
  );
}
