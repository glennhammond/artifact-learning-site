import { Container } from "../../../components/layout/Container";
import { legacyHero as hero } from "../../../content/legacy";
import { LoopGlyph } from "./LoopGlyph";
import "./Hero.css";

export function Hero() {
  return (
    <section id="top" className="c-hero" aria-label="Introduction">
      <Container>
        <div className="c-hero__grid">
          <div className="c-hero__headline">
            <p className="kicker c-hero__eyebrow">
              <LoopGlyph /> {hero.eyebrow}
            </p>
            <h1>{hero.headline}</h1>
          </div>
          <div className="c-hero__aside">
            <p className="c-hero__standfirst">{hero.standfirst}</p>
            <a className="btn-quiet" href="#problem">
              See how we work <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
