import { Container } from "../../components/layout/Container";
import { Reveal } from "../../components/layout/Reveal";
import { commercialStatement } from "../../content/shared";
import "./CommercialStatement.css";

export function CommercialStatement() {
  return (
    <section className="home-commercial" aria-label={commercialStatement.statement}>
      <Container width="content">
        <Reveal as="div" className="ds-fade">
          <p className="home-commercial__statement">{commercialStatement.statement}</p>
          <p className="home-commercial__supporting">{commercialStatement.supporting}</p>
        </Reveal>
      </Container>
    </section>
  );
}
