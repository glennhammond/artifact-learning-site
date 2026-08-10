import { Link } from "react-router-dom";
import { Container } from "../../components/layout/Container";
import { nav } from "../../content/shared";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="home-footer">
      <Container>
        <div className="home-footer__top">
          <div>
            <span className="home-footer__wordmark">Artifact Learning</span>
            <p className="home-footer__tagline">Digital learning as a product, not a course.</p>
          </div>
          <nav aria-label="Footer">
            <ul className="home-footer__nav">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link to={item.href}>{item.label}</Link>
                </li>
              ))}
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
        <div className="home-footer__bottom">
          <span>artifactlearning.com · artifactlearning.com.au</span>
          {import.meta.env.DEV && <span><Link to="/archive">Archived concept prototypes</Link></span>}
        </div>
      </Container>
    </footer>
  );
}
