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
          Concept C: Editorial + Experimental Hybrid (archived) ·{" "}
          <Link to="/archive">All archived concepts</Link>
        </span>
      </Container>
    </footer>
  );
}
