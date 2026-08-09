import { Container } from "../../../components/layout/Container";
import { Reveal } from "../../../components/layout/Reveal";
import { featuredProject, secondaryProjects } from "../../../content/shared";
import "./Work.css";

export function Work() {
  return (
    <section id="work" className="a-section" aria-labelledby="work-heading">
      <Container>
        <Reveal as="div" className="a-fade">
          <div className="a-section__head">
            <p className="kicker">Selected work</p>
            <h2 id="work-heading" className="a-heading">
              Framed by the decision, not just the deliverable
            </h2>
          </div>

          <article className="a-feature">
            <div className="a-feature__figure" role="img" aria-label="Evidence image placeholder">
              <span>Evidence image placeholder</span>
            </div>
            <div className="a-feature__body">
              <p className="kicker">{featuredProject.eyebrow}</p>
              <h3>{featuredProject.question}</h3>
              <p className="a-feature__framing">{featuredProject.framing}</p>
              <a className="btn-quiet" href="#work" aria-disabled="true">
                Read the case study <span aria-hidden="true">→</span>
              </a>
            </div>
          </article>

          <ul className="a-work-list">
            {secondaryProjects.map((project) => (
              <li key={project.question}>
                <p className="kicker">{project.eyebrow}</p>
                <p className="a-work-list__title">{project.question}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
