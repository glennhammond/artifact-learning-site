import { Container } from "../../../components/layout/Container";
import { legacyFinalCta as finalCta } from "../../../content/legacy";
import "./FinalCta.css";

export function FinalCta() {
  return (
    <section id="contact" className="a-section a-cta" aria-labelledby="cta-heading">
      <Container narrow>
        <h2 id="cta-heading">{finalCta.headline}</h2>
        <a className="btn-quiet a-cta__link" href={`mailto:${finalCta.email}`}>
          {finalCta.action} <span aria-hidden="true">→</span>
        </a>
        <p className="a-cta__email">
          {finalCta.email}{" "}
          <span className="a-cta__note">({finalCta.emailNote})</span>
        </p>
      </Container>
    </section>
  );
}
