import type { AnchorHTMLAttributes, ReactNode } from "react";
import "./NavLink.css";

interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

/** Primary navigation link — IBM Plex Sans, quiet by default (v0.2 §02: Avant Garde "breaks down" under 13px). */
export function NavLink({ children, className = "", ...rest }: NavLinkProps) {
  return (
    <a className={`ds-nav-link ${className}`.trim()} {...rest}>
      {children}
    </a>
  );
}
