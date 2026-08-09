import { Section } from "../../src/design-system/Section";
import { workIntro, approachIntro, modelIntro } from "../../src/content/shared";

/** The default page-width, paper-tone section head — kicker + heading + intro, as Work uses it. */
export function Default() {
  return (
    <Section id="preview-work" kicker={workIntro.eyebrow} heading={workIntro.headline} intro={workIntro.intro}>
      <p>Section content goes here — case studies, diagrams, or any composed children.</p>
    </Section>
  );
}

/** Content-width containment, compact density — a quieter section that shouldn't claim the full grid. */
export function ContentCompact() {
  return (
    <Section
      id="preview-approach"
      kicker={approachIntro.eyebrow}
      heading={approachIntro.headline}
      intro={approachIntro.intro}
      width="content"
      density="compact"
    >
      <p>A tighter section, inset from the page's editorial grid max.</p>
    </Section>
  );
}

/** The Ink tone — the one section (Model) that switches off the Paper surface (v0.2 treats dark as occasional, not default). */
export function InkExpansive() {
  return (
    <Section
      id="preview-model"
      kicker={modelIntro.eyebrow}
      heading={modelIntro.headline}
      intro={modelIntro.body}
      tone="ink"
      density="expansive"
    >
      <p>Dark-surface content — reserved for the one technical-context section that needs it.</p>
    </Section>
  );
}
