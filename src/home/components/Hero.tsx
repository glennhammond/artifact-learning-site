import { Container } from "../../components/layout/Container";
import { Button } from "../../design-system/Button";
import { hero } from "../../content/shared";
import "./Hero.css";

function DecisionEvidenceSpecimen() {
  return (
    <div className="home-hero-proof" aria-label="Illustrative Artifact learning decision and evidence">
      <div className="home-hero-proof__experience">
        <div className="home-hero-proof__topline">
          <span>DECISION 03</span>
          <span>Illustrative experience</span>
        </div>

        <p className="home-hero-proof__context">
          A colleague asks you to approve an exception without the evidence normally required.
        </p>

        <p className="home-hero-proof__prompt">What would you do next?</p>

        <div className="home-hero-proof__choices" aria-hidden="true">
          <div className="home-hero-proof__choice home-hero-proof__choice--selected">
            <span className="home-hero-proof__radio" />
            Ask for the missing evidence before approving
          </div>
          <div className="home-hero-proof__choice">
            <span className="home-hero-proof__radio" />
            Approve it and document the exception later
          </div>
        </div>

        <div className="home-hero-proof__feedback">
          <span>FEEDBACK</span>
          The decision preserves the evidence needed before approval.
        </div>
      </div>

      <div className="home-hero-proof__signal" aria-hidden="true">
        <p className="kicker">Meaningful signal</p>
        <div className="home-hero-proof__event">
          <span>decision.responded</span>
          <strong>request_evidence</strong>
        </div>
        <div className="home-hero-proof__event">
          <span>feedback.presented</span>
          <strong>decision-03</strong>
        </div>
        <p className="home-hero-proof__note">
          The experience and the evidence are designed together.
        </p>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="home-hero" aria-label="Introduction">
      <Container>
        <div className="home-hero__grid">
          <div className="home-hero__primary">
            <p className="kicker">{hero.eyebrow}</p>
            <h1>
              Develop capability,
              <br />
              not just completion.
            </h1>
            <p className="home-hero__standfirst">{hero.standfirst}</p>
            <div className="home-hero__actions">
              <Button variant="primary" href={hero.ctaHref}>
                {hero.cta}
              </Button>
              <Button variant="text" href={hero.ctaSecondaryHref}>
                {hero.ctaSecondary} <span aria-hidden="true">→</span>
              </Button>
            </div>
          </div>

          <DecisionEvidenceSpecimen />
        </div>
      </Container>
    </section>
  );
}
