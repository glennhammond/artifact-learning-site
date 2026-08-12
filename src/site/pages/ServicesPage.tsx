import { Link } from "react-router-dom";
import { Container } from "../../components/layout/Container";
import { Button } from "../../design-system/Button";
import { primaryService, secondaryServices } from "../../content/shared";
import { definitionEngagement, serviceDetails } from "../../content/site";
import { CtaBand } from "../CtaBand";
import { PageIntro } from "../PageIntro";
import { SiteShell } from "../SiteShell";
import { usePageMeta } from "../usePageMeta";
import "./pages.css";

export function ServicesPage() {
  usePageMeta("Services – Artifact", "Purpose-built digital learning services for complex capability, judgement and performance problems.");
  const [primary, ...secondary] = serviceDetails;

  return (
    <SiteShell>
      <PageIntro tone="ink" eyebrow="Services" title="Purpose-built learning, not a production line." intro="Four related ways to solve learning and capability problems. Most engagements begin with Bespoke Learning Experiences or a focused definition phase." />

      <section className="site-section site-service-primary" aria-labelledby="service-primary-heading">
        <Container>
          <div className="site-service-primary__head">
            <p className="kicker">01 · Primary offer</p>
            <h2 id="service-primary-heading">{primaryService.name}</h2>
            <p>{primaryService.framing}</p>
          </div>
          <div className="site-service-detail-grid">
            <div className="site-prose-block"><h3>The situation</h3><p>{primary.situation}</p></div>
            <div className="site-prose-block"><h3>What Artifact works on</h3><p>{primary.work}</p></div>
            <div className="site-prose-block"><h3>The engagement may include</h3><ul className="site-list">{primary.includes.map((item) => <li key={item}>{item}</li>)}</ul></div>
            <div className="site-prose-block"><h3>What the client leaves with</h3><p>{primary.outputs}</p><Button variant="text" href={`/work/${primary.related}`}>Related work <span aria-hidden="true">→</span></Button></div>
          </div>
        </Container>
      </section>

      <section className="site-section" aria-labelledby="secondary-services-heading">
        <Container>
          <p className="kicker">Related engagements</p>
          <h2 id="secondary-services-heading" className="site-section__heading">Different starting points, one integrated practice.</h2>
          <div className="site-service-index">
            {secondary.map((service, index) => (
              <article key={service.slug} className="site-service-row">
                <div><span className="kicker">{secondaryServices[index].index}</span><h3>{service.name}</h3><p>{secondaryServices[index].framing}</p></div>
                <div className="site-service-row__details">
                  <p><strong>The situation:</strong> {service.situation}</p>
                  <div><strong>Work may include:</strong><ul className="site-service-row__includes">{service.includes.map((item) => <li key={item}>{item}</li>)}</ul></div>
                  <p><strong>Output:</strong> {service.outputs}</p>
                  <Link to={`/work/${service.related}`}>See related work</Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="site-section site-definition" aria-labelledby="definition-heading">
        <Container width="content">
          <div className="site-definition__grid">
            <div><p className="kicker">A useful starting point</p><h2 id="definition-heading">{definitionEngagement.name}</h2><p>{definitionEngagement.intro}</p><p className="site-status">{definitionEngagement.note}</p></div>
            <ol className="site-list site-number-list">{definitionEngagement.items.map((item) => <li key={item}>{item}</li>)}</ol>
          </div>
        </Container>
      </section>
      <CtaBand supporting="Bring the performance problem, the context and what already exists. The right form of engagement can follow from there." />
    </SiteShell>
  );
}
