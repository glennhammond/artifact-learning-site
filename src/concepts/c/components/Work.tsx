import { Container } from "../../../components/layout/Container";
import { Reveal } from "../../../components/layout/Reveal";
import { legacyFeaturedProject as featuredProject, legacySecondaryProjects as secondaryProjects, legacyReadoutPanels as readoutPanels } from "../../../content/legacy";
import "./Work.css";

export function Work() {
  return (
    <section id="work" className="c-section" aria-labelledby="work-heading">
      <Container>
        <Reveal as="div" className="c-fade">
          <div className="c-section__head">
            <p className="kicker">Selected work</p>
            <h2 id="work-heading" className="c-heading">
              Framed by the decision, not just the deliverable
            </h2>
          </div>

          <article className="c-feature">
            <div className="c-feature__figure" role="img" aria-label="Evidence image placeholder">
              <span>Evidence image placeholder</span>
            </div>
            <div className="c-feature__body">
              <p className="kicker">{featuredProject.eyebrow}</p>
              <h3>{featuredProject.question}</h3>
              <p className="c-feature__framing">{featuredProject.framing}</p>
              <div className="c-feature__panel">
                <p className="c-feature__panel-label">Illustrative event line</p>
                <code>{readoutPanels.after.lines[0]}</code>
                <p className="c-feature__caveat">{readoutPanels.caveat}</p>
              </div>
              <a className="btn-quiet" href="#work">
                Read the case study <span aria-hidden="true">→</span>
              </a>
            </div>
          </article>

          <ul className="c-work-list">
            {secondaryProjects.map((project) => (
              <li key={project.question}>
                <p className="kicker">{project.eyebrow}</p>
                <p className="c-work-list__title">{project.question}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
