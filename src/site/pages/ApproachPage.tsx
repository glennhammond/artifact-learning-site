import { Container } from "../../components/layout/Container";
import { lifecycle, modelLayers, platform, productPhilosophy } from "../../content/shared";
import { LoopDiagram } from "../../design-system/LoopDiagram";
import { CtaBand } from "../CtaBand";
import { PageIntro } from "../PageIntro";
import { SiteShell } from "../SiteShell";
import { usePageMeta } from "../usePageMeta";
import "./pages.css";

const detail = [
  "Understand the audience, required performance, existing evidence, environment and constraints before choosing a format.",
  "Shape the learning architecture, scenario, practice, feedback, assessment and user experience around the decisions that matter.",
  "Develop in the medium suited to the experience: authoring tools, web technology, multimedia or a considered combination.",
  "Define and capture meaningful events only where they answer a useful question. Instrumentation is separate because it is not required everywhere.",
  "Interpret completion and in-experience behaviour within their limits. Neither automatically demonstrates workplace transfer.",
  "Use evidence, feedback and observation to refine content, interaction, instrumentation or the supporting system.",
];

export function ApproachPage() {
  usePageMeta("Approach – Artifact", "Artifact's six-stage method for designing, building, measuring and improving digital learning products.");
  return (
    <SiteShell>
      <PageIntro tone="ink" eyebrow="Approach" title="Digital learning as a product, not a course." intro={productPhilosophy.body} aside={<p>Not every engagement requires every stage. The method follows the problem rather than forcing a production pipeline.</p>} />
      <section className="site-section" aria-labelledby="method-heading">
        <Container>
          <p className="kicker">Working method</p><h2 id="method-heading" className="site-section__heading">Discover → Design → Build → Instrument → Measure → Improve.</h2>
          <div className="site-approach-grid">{lifecycle.map((step, index) => <article key={step.name}><span className="kicker">{step.index}</span><h3>{step.name}</h3><p>{detail[index]}</p></article>)}</div>
        </Container>
      </section>
      <section className="site-section ds-section--ink on-ink" aria-labelledby="loop-heading">
        <Container>
          <div className="ds-section__head"><p className="kicker">Learning-product loop</p><h2 id="loop-heading" className="ds-section__heading">Experience becomes evidence for improvement.</h2><p className="ds-section__intro">Signals and data are useful only when they lead to careful interpretation and a better experience. Platform is the enabling foundation, not a causal learning stage.</p></div>
          <LoopDiagram layers={modelLayers} platform={platform} />
        </Container>
      </section>
      <section className="site-section" aria-labelledby="evidence-principles-heading"><Container width="content"><div className="site-prose-grid"><div className="site-prose-block"><h2 id="evidence-principles-heading">Measurement begins with a useful question.</h2><p>Instrumentation should be scoped to a decision someone can make with the resulting evidence. Capturing more activity is not automatically more informative.</p></div><div className="site-prose-block"><h2>Publishing is not automatically the end.</h2><p>Where feedback and evidence justify it, the learning product can be revised. Where they do not, Artifact does not manufacture certainty.</p></div></div></Container></section>
      <CtaBand supporting="A clear method begins with the performance problem and applies only the stages the work genuinely needs." />
    </SiteShell>
  );
}
