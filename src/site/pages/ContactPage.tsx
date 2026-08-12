import { Container } from "../../components/layout/Container";
import { definitionEngagement } from "../../content/site";
import { ContactForm } from "../ContactForm";
import { PageIntro } from "../PageIntro";
import { SiteShell } from "../SiteShell";
import { usePageMeta } from "../usePageMeta";
import "./pages.css";

export function ContactPage() {
  usePageMeta("Discuss a learning challenge – Artifact", "Prepare for an initial conversation with Artifact Learning about a learning, capability or experience problem.");
  return (
    <SiteShell>
      <PageIntro tone="ink" eyebrow="Contact" title="Discuss a learning challenge." intro="An initial conversation is most useful when it begins with what needs to change, not a predetermined format or technology." />
      <section className="site-section" aria-labelledby="enquiry-heading">
        <Container width="content">
          <div className="site-contact-layout">
            <div className="site-contact-context">
              <p className="kicker">Start with the problem</p>
              <h2 id="enquiry-heading">Share the context that matters.</h2>
              <p>You do not need a finished brief. It is useful to know who needs to do something differently, what exists already, and which constraints or timeframes are known.</p>
            </div>
            <ContactForm />
          </div>
        </Container>
      </section>
      <section className="site-section" aria-labelledby="definition-contact-heading"><Container width="content"><div className="site-prose-grid"><div className="site-prose-block"><p className="kicker">Possible next step</p><h2 id="definition-contact-heading">{definitionEngagement.name}</h2><p>{definitionEngagement.intro}</p></div><div className="site-prose-block"><h2>Not a compulsory package.</h2><p>{definitionEngagement.note}</p></div></div></Container></section>
    </SiteShell>
  );
}
