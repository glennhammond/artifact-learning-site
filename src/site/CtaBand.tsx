import { Button } from "../design-system/Button";
import { Section } from "../design-system/Section";

export function CtaBand({ heading = "Start with the learning problem.", supporting }: { heading?: string; supporting: string }) {
  return (
    <Section id="next-step" heading={heading} intro={supporting} tone="ink" density="compact" width="content" className="site-cta-band">
      <Button variant="primary" href="/contact">Discuss a learning challenge <span aria-hidden="true">→</span></Button>
    </Section>
  );
}
