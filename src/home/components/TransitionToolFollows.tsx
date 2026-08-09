import { Container } from "../../components/layout/Container";
import { Reveal } from "../../components/layout/Reveal";
import { transitionToolFollows } from "../../content/shared";
import "./TransitionToolFollows.css";

/** Editorial information design, not another four-card grid — content doc §10. */
export function TransitionToolFollows() {
  return (
    <section className="home-transition-b" aria-label={transitionToolFollows.statement}>
      <Container width="content">
        <Reveal as="div" className="ds-fade home-transition-b__inner">
          <div className="home-transition-b__copy">
            <p className="home-transition-b__statement">{transitionToolFollows.statement}</p>
            <p className="home-transition-b__supporting">{transitionToolFollows.supporting}</p>
          </div>
          <dl className="home-transition-b__tools">
            {transitionToolFollows.tools.map((tool) => (
              <div className="home-transition-b__tool" key={tool.name}>
                <dt>{tool.name}</dt>
                <dd>{tool.when}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
