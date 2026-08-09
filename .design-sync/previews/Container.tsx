import { Container } from "../../src/components/layout/Container";

const demoBox = {
  border: "1px dashed var(--color-border)",
  padding: "var(--space-4)",
  background: "var(--color-surface-subtle)",
};

/** "page" tier (default) — the editorial grid max, ~1440px. Nav, hero, Work, the dark model section. */
export function Page() {
  return (
    <Container width="page">
      <div style={demoBox}>page — ~1440px, the editorial grid max</div>
    </Container>
  );
}

/** "content" tier — inset, ~1180px. Quieter sections that shouldn't claim the full grid width. */
export function Content() {
  return (
    <Container width="content">
      <div style={demoBox}>content — ~1180px, inset from the page max</div>
    </Container>
  );
}

/** "narrow" tier — reading measure, ~66ch. Long-form prose, the final CTA. */
export function Narrow() {
  return (
    <Container width="narrow">
      <div style={demoBox}>narrow — ~66ch reading measure</div>
    </Container>
  );
}
