import { Container } from "../../../components/layout/Container";
import { finalCta } from "../../../content/shared";
import "./FinalCta.css";

export function FinalCta() {
  return (
    <section id="contact" className="c-section c-cta" aria-labelledby="cta-heading">
      <Container narrow>
        <h2 id="cta-heading">{finalCta.headline}</h2>
        <a className="btn-quiet c-cta__link" href={`mailto:${finalCta.email}`}>
          {finalCta.action} <span aria-hidden="true">→</span>
        </a>
        <p className="c-cta__email">
          {finalCta.email} <span>({finalCta.emailNote})</span>
        </p>
      </Container>
    </section>
  );
}
