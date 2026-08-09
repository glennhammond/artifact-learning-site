import { Container } from "../../../components/layout/Container";
import { Reveal } from "../../../components/layout/Reveal";
import { problem } from "../../../content/shared";

export function Problem() {
  return (
    <section id="problem" className="a-section" aria-labelledby="problem-heading">
      <Container narrow>
        <Reveal as="div" className="a-fade">
          <h2 id="problem-heading" className="a-heading">
            {problem.headline}
          </h2>
          <p style={{ marginBlockStart: "1.25rem", fontSize: "1.0625rem", color: "var(--a-text-secondary)" }}>
            {problem.body}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
