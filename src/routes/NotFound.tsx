import { Link } from "react-router-dom";
import { Container } from "../components/layout/Container";
import { SiteShell } from "../site/SiteShell";
import { usePageMeta } from "../site/usePageMeta";

export function NotFound() {
  usePageMeta("Page not found – Artifact", "The requested Artifact Learning page could not be found.");
  return (
    <SiteShell>
      <section className="site-page-intro" aria-labelledby="not-found-heading">
        <Container width="content"><p className="kicker">404</p><h1 id="not-found-heading">Page not found.</h1><p className="site-page-intro__lead">The page may have moved, or the address may be incorrect.</p><p><Link to="/">Return home</Link> · <Link to="/work">Explore the work</Link></p></Container>
      </section>
    </SiteShell>
  );
}
