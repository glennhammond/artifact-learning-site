import { Container } from "../../components/layout/Container";
import { contactPrompts, definitionEngagement } from "../../content/site";
import { PageIntro } from "../PageIntro";
import { SiteShell } from "../SiteShell";
import { usePageMeta } from "../usePageMeta";
import "./pages.css";

export function ContactPage() {
  usePageMeta("Discuss a learning challenge — Artifact Learning", "Prepare for an initial conversation with Artifact Learning about a learning, capability or experience problem.");
  return (
    <SiteShell>
      <PageIntro eyebrow="Contact" title="Discuss a learning challenge." intro="An initial conversation is most useful when it begins with what needs to change—not a predetermined format or technology." aside={<p>No public contact destination is configured yet. This page does not collect or submit information.</p>} />
      <section className="site-section" aria-labelledby="bring-heading"><Container width="content"><p className="kicker">Useful context</p><h2 id="bring-heading" className="site-section__heading">What to bring to the conversation</h2><ul className="site-contact-prompts">{contactPrompts.map((prompt) => <li key={prompt}>{prompt}</li>)}</ul><div className="site-contact-hook"><h2>Contact integration pending</h2><p>A verified public email or form endpoint has not been supplied. The final action will be connected here once a real destination is approved. No form is shown because it would imply functionality that does not exist.</p></div></Container></section>
      <section className="site-section" aria-labelledby="definition-contact-heading"><Container width="content"><div className="site-prose-grid"><div className="site-prose-block"><p className="kicker">Possible next step</p><h2 id="definition-contact-heading">{definitionEngagement.name}</h2><p>{definitionEngagement.intro}</p></div><div className="site-prose-block"><h2>Not a compulsory package.</h2><p>{definitionEngagement.note}</p></div></div></Container></section>
    </SiteShell>
  );
}
