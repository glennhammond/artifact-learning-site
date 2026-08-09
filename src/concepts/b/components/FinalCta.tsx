import { Container } from "../../../components/layout/Container";
import { legacyFinalCta as finalCta } from "../../../content/legacy";
import "./FinalCta.css";

export function FinalCta() {
  return (
    <section id="contact" className="b-section b-cta" aria-labelledby="cta-heading">
      <Container narrow>
        <h2 id="cta-heading">{finalCta.headline}</h2>
        <a className="btn-outline" href={`mailto:${finalCta.email}`}>
          {finalCta.action} <span aria-hidden="true">→</span>
        </a>
        <p className="b-cta__email">
          {finalCta.email} <span>({finalCta.emailNote})</span>
        </p>
      </Container>
    </section>
  );
}
