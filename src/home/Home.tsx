import { Hero } from "./components/Hero";
import { Work } from "./components/Work";
import { Services } from "./components/Services";
import { WhyArtifact } from "./components/WhyArtifact";
import { Approach } from "./components/Approach";
import { Platform } from "./components/Platform";
import { FinalCta } from "./components/FinalCta";
import { SiteShell } from "../site/SiteShell";
import { usePageMeta } from "../site/usePageMeta";

/**
 * Phase 3 reduced commercial homepage.
 *
 * Deliberately removes standalone Problem, Product Philosophy, Model,
 * Capability, Evidence and Practice sections from the homepage. Their
 * strongest ideas are either folded into WhyArtifact or reserved for
 * future inner pages.
 */
export function Home() {
  usePageMeta(
    "Artifact Learning – Develop capability, not just completion.",
    "Purpose-built digital learning for organisations where judgement, decision-making and behavioural application matter.",
  );

  return (
    <SiteShell>
      <div className="home">
        <Hero />
        <Work />
        <Services />
        <WhyArtifact />
        <Approach />
        <Platform />
        <FinalCta />
      </div>
    </SiteShell>
  );
}
