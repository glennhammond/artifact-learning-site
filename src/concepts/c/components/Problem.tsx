import { Container } from "../../../components/layout/Container";
import { Reveal } from "../../../components/layout/Reveal";
import { problem } from "../../../content/shared";

export function Problem() {
  return (
    <section id="problem" className="c-section" aria-labelledby="problem-heading">
      <Container narrow>
        <Reveal as="div" className="c-fade">
          <h2 id="problem-heading" className="c-heading">
            {problem.headline}
          </h2>
          <p style={{ marginBlockStart: "1.25rem", fontSize: "1.0625rem", color: "var(--c-text-secondary)" }}>
            {problem.body}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
