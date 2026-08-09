import { Container } from "../../../components/layout/Container";
import { hero } from "../../../content/shared";
import "./Hero.css";

export function Hero() {
  return (
    <section id="top" className="a-hero" aria-label="Introduction">
      <Container>
        <div className="a-hero__grid">
          <div className="a-hero__headline">
            <p className="kicker">{hero.eyebrow}</p>
            <h1>{hero.headline}</h1>
          </div>
          <div className="a-hero__aside">
            <p className="a-hero__standfirst">{hero.standfirst}</p>
            <a className="btn-quiet" href="#problem">
              {hero.cta} <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
