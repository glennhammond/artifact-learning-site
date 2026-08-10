import type { ReactNode } from "react";
import { Container } from "../components/layout/Container";

interface PageIntroProps {
  eyebrow: string;
  title: string;
  intro: ReactNode;
  aside?: ReactNode;
}

export function PageIntro({ eyebrow, title, intro, aside }: PageIntroProps) {
  return (
    <header className="site-page-intro">
      <Container>
        <div className="site-page-intro__grid">
          <div>
            <p className="kicker">{eyebrow}</p>
            <h1>{title}</h1>
            <div className="site-page-intro__lead">{intro}</div>
          </div>
          {aside && <aside className="site-page-intro__aside">{aside}</aside>}
        </div>
      </Container>
    </header>
  );
}
