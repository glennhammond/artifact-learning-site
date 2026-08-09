import { NavLink } from "../../src/design-system/NavLink";
import { nav } from "../../src/content/shared";

/** A single primary nav link — quiet by default, IBM Plex Sans (v0.2 §02). */
export function Default() {
  return <NavLink href={nav[0].href}>{nav[0].label}</NavLink>;
}

/** The full primary nav row, as rendered inside Nav's menu list. */
export function NavRow() {
  return (
    <ul style={{ display: "flex", gap: "1.5rem", listStyle: "none", padding: 0, margin: 0 }}>
      {nav.map((item) => (
        <li key={item.href}>
          <NavLink href={item.href}>{item.label}</NavLink>
        </li>
      ))}
    </ul>
  );
}
