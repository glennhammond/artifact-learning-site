import { Tag } from "../../src/design-system/Tag";
import { ecosystem, featuredProject } from "../../src/content/shared";

/** Neutral status pill — the ecosystem section's default maturity label. */
export function Neutral() {
  return <Tag>{ecosystem[2].status}</Tag>;
}

/** Signal tone — reserved for the one consequential/active label. */
export function Signal() {
  return <Tag tone="signal">Featured</Tag>;
}

/** Mono variant — capability tags on the featured case study (WorkFeature usage). */
export function Mono() {
  return <Tag mono>{featuredProject.tags[0]}</Tag>;
}

/** A row of mono capability tags, as WorkFeature renders its tag list. */
export function CapabilityRow() {
  return (
    <ul style={{ display: "flex", gap: "0.5rem", listStyle: "none", padding: 0, margin: 0, flexWrap: "wrap" }}>
      {featuredProject.tags.map((tag) => (
        <li key={tag}>
          <Tag mono>{tag}</Tag>
        </li>
      ))}
    </ul>
  );
}

/** Every ecosystem item's maturity status, neutral tone. */
export function StatusGroup() {
  return (
    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
      {ecosystem.map((item) => (
        <Tag key={item.name}>{item.status}</Tag>
      ))}
    </div>
  );
}
