import { Link } from "react-router-dom";
import { Container } from "../../../components/layout/Container";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="b-footer">
      <Container className="b-footer__inner">
        <span className="b-footer__wordmark">Artifact_Learning</span>
        <span>artifactlearning.com · artifactlearning.com.au</span>
        <span>
          Concept B: Digital Learning Laboratory (archived) ·{" "}
          <Link to="/archive">All archived concepts</Link>
        </span>
      </Container>
    </footer>
  );
}
