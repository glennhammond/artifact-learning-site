import { Container } from "../../components/layout/Container";
import { Reveal } from "../../components/layout/Reveal";
import { Button } from "../../design-system/Button";
import { finalCta } from "../../content/shared";
import "./FinalCta.css";

/**
 * The real `/contact` route intentionally contains no form or invented email
 * until a verified public destination is supplied.
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
