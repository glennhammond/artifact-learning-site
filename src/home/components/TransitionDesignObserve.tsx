import { Container } from "../../components/layout/Container";
import { Reveal } from "../../components/layout/Reveal";
import { transitionDesignObserve } from "../../content/shared";
import "./TransitionDesignObserve.css";

const ANNOTATIONS = ["experience.started", "signal.captured", "iteration.shipped"];

/**
 * Visual punctuation between Problem and Model, not an empty spacer —
 * content doc §4. Signal appears once, between "Observe it." and
 * "Improve it." — the one moment where observation turns into consequence.
 */
export function TransitionDesignObserve() {
  return (
    <section className="home-transition-a" aria-label={transitionDesignObserve.words.join(" ")}>
      <Container>
        <Reveal as="div" className="ds-fade">
          <p className="home-transition-a__supporting">{transitionDesignObserve.supporting}</p>
          <div className="home-transition-a__row">
            {transitionDesignObserve.words.map((word, i) => (
              <div className="home-transition-a__item" key={word}>
                {i === 2 && <span className="home-transition-a__signal" aria-hidden="true" />}
                <p className="home-transition-a__word">{word}</p>
                <p className="home-transition-a__annotation" aria-hidden="true">
                  {ANNOTATIONS[i]}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
