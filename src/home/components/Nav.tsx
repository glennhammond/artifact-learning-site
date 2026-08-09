import { useState } from "react";
import { Container } from "../../components/layout/Container";
import { NavLink } from "../../design-system/NavLink";
import { nav } from "../../content/shared";
import "./Nav.css";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="home-nav">
      <Container className="home-nav__inner">
        <a href="#top" className="home-nav__wordmark">
          Artifact
        </a>

        <button
          type="button"
          className="home-nav__toggle"
          aria-expanded={open}
          aria-controls="home-nav-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>

        <nav id="home-nav-menu" className="home-nav__menu" data-open={open} aria-label="Primary">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <NavLink href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <span className="home-nav__divider" aria-hidden="true" />
          <NavLink href="#contact" onClick={() => setOpen(false)} className="home-nav__contact">
            Contact
          </NavLink>
        </nav>
      </Container>
    </header>
  );
}
