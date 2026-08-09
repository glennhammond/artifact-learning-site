import { Container } from "../../../components/layout/Container";
import { Reveal } from "../../../components/layout/Reveal";
import { featuredProject, secondaryProjects, readoutPanels } from "../../../content/shared";
import "./Work.css";

export function Work() {
  return (
    <section id="work" className="b-section" aria-labelledby="work-heading">
      <Container>
        <Reveal as="div" className="b-fade">
          <div className="b-section__head">
            <p className="kicker">Selected work</p>
            <h2 id="work-heading" className="b-heading">
              Instrumented, not just delivered
            </h2>
          </div>

          <article className="b-feature">
            <div className="b-feature__body">
              <p className="kicker">{featuredProject.eyebrow}</p>
              <h3>{featuredProject.question}</h3>
              <p className="b-feature__framing">{featuredProject.framing}</p>
              <a className="btn-outline" href="#work">
                Read the case study <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="b-readout">
              <p className="kicker b-readout__label">Illustrative event log</p>
              <pre>{readoutPanels.after.lines.join("\n")}</pre>
              <p className="b-feature__caveat">{readoutPanels.caveat}</p>
            </div>
          </article>

          <ul className="b-work-list">
            {secondaryProjects.map((project) => (
              <li key={project.question}>
                <span className="b-work-list__status">{project.status}</span>
                <p>{project.question}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
