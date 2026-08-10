import { Container } from "../../components/layout/Container";
import { Reveal } from "../../components/layout/Reveal";
import { Button } from "../../design-system/Button";
import { finalCta } from "../../content/shared";
import "./FinalCta.css";

/**
 * No verified contact email or `/contact` route exists yet (Phase 1
 * strategy §10/unresolved decisions), so every CTA on the page — nav, hero,
 * this one — resolves to this section's own `#contact` anchor rather than a
 * fabricated mailto: or a route that doesn't exist. Replace `actionHref`
 * with a real destination once one is verified.
 */
export function FinalCta() {
  return (
    <section id="contact" className="home-cta" aria-labelledby="cta-heading">
      <Container narrow>
        <Reveal as="div" className="ds-fade">
          <h2 id="cta-heading">{finalCta.headline}</h2>
          <p className="home-cta__supporting">{finalCta.supporting}</p>
          <div className="home-cta__actions">
            <Button variant="primary" href={finalCta.actionHref}>
              {finalCta.action} <span aria-hidden="true">→</span>
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
