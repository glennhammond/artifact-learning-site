import { Link } from "react-router-dom";
import { Container } from "../../components/layout/Container";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="home-footer">
      <Container className="home-footer__inner">
        <span className="home-footer__wordmark">Artifact Learning</span>
        <span>artifactlearning.com · artifactlearning.com.au</span>
        <span>
          Consolidated v0.x foundation — internal review build, not the public site ·{" "}
          <Link to="/archive">Archived concept prototypes</Link>
        </span>
      </Container>
    </footer>
  );
}
