import { Container } from "../../components/layout/Container";
import { Reveal } from "../../components/layout/Reveal";
import { practice } from "../../content/shared";
import "./Practice.css";

/**
 * Replaces CommercialStatement — not a founder biography (brief §14/§20):
 * explains why the integrated practice matters to the client, not years of
 * experience or a personal story.
 */
export function Practice() {
  return (
    <section id="practice" className="home-practice" aria-labelledby="practice-heading">
      <Container width="content">
        <Reveal as="div" className="ds-fade">
          <p className="kicker">{practice.eyebrow}</p>
          <h2 id="practice-heading" className="home-practice__statement">
            {practice.headline}
          </h2>
          <p className="home-practice__body">{practice.body}</p>
          <p className="home-practice__body">{practice.bodySecondary}</p>
        </Reveal>
      </Container>
    </section>
  );
}
