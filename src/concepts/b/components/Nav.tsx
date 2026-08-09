import { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "../../../components/layout/Container";
import { legacyNav as nav } from "../../../content/legacy";
import "./Nav.css";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="b-nav">
      <Container className="b-nav__inner">
        <a href="#top" className="b-nav__wordmark">
          Artifact<span className="b-nav__dot" aria-hidden="true">.</span>
        </a>

        <button
          type="button"
          className="b-nav__toggle"
          aria-expanded={open}
          aria-controls="b-nav-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "CLOSE" : "MENU"}
        </button>

        <nav id="b-nav-menu" className="b-nav__menu" data-open={open} aria-label="Primary">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setOpen(false)}>
                  {item.label.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn-outline" onClick={() => setOpen(false)}>
            Contact
          </a>
        </nav>
      </Container>
      <p className="visually-hidden">
        This page is an archived Phase 1 exploratory concept, superseded by the consolidated
        homepage.{" "}
        <Link to="/archive">Return to the archive index.</Link>
      </p>
    </header>
  );
}
