import { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "../../../components/layout/Container";
import { nav } from "../../../content/shared";
import "./Nav.css";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="a-nav">
      <Container className="a-nav__inner">
        <a href="#top" className="a-nav__wordmark">
          Artifact
        </a>

        <button
          type="button"
          className="a-nav__toggle"
          aria-expanded={open}
          aria-controls="a-nav-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>

        <nav id="a-nav-menu" className="a-nav__menu" data-open={open} aria-label="Primary">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="a-nav__contact" onClick={() => setOpen(false)}>
            Contact
          </a>
        </nav>
      </Container>
      <p className="visually-hidden">
        This page is one of three exploratory Artifact Learning homepage concepts.{" "}
        <Link to="/">Return to the concept index.</Link>
      </p>
    </header>
  );
}
