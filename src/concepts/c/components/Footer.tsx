import { Link } from "react-router-dom";
import { Container } from "../../../components/layout/Container";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="c-footer">
      <Container className="c-footer__inner">
        <span className="c-footer__wordmark">Artifact Learning</span>
        <span>artifactlearning.com · artifactlearning.com.au</span>
        <span>
          Concept C — Editorial + Experimental Hybrid ·{" "}
          <Link to="/">All concepts</Link>
        </span>
      </Container>
    </footer>
  );
}
