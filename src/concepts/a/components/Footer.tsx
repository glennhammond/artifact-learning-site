import { Container } from "../../../components/layout/Container";
import { Link } from "react-router-dom";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="a-footer">
      <Container className="a-footer__inner">
        <span className="a-footer__wordmark">Artifact Learning</span>
        <span>artifactlearning.com · artifactlearning.com.au</span>
        <span>
          Concept A — Editorial Product Studio (archived) ·{" "}
          <Link to="/archive">All archived concepts</Link>
        </span>
      </Container>
    </footer>
  );
}
