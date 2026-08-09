import { useState } from "react";
import { Container } from "../../components/layout/Container";
import { NavLink } from "../../design-system/NavLink";
import { Button } from "../../design-system/Button";
import { useScrolled } from "../../hooks/useScrolled";
import { nav, navCta } from "../../content/shared";
import "./Nav.css";

export function Nav() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();

  return (
    <header className="home-nav" data-scrolled={scrolled}>
      <Container className="home-nav__inner">
        <a href="#top" className="home-nav__wordmark">
          <span className="home-nav__mark" aria-hidden="true" />
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
          <Button variant="secondary" href={navCta.href} className="home-nav__cta" onClick={() => setOpen(false)}>
            {navCta.label}
          </Button>
        </nav>
      </Container>
    </header>
  );
}
