import { useEffect } from "react";
import { SkipLink } from "../components/layout/SkipLink";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Work } from "./components/Work";
import { Services } from "./components/Services";
import { WhyArtifact } from "./components/WhyArtifact";
import { Approach } from "./components/Approach";
import { Platform } from "./components/Platform";
import { FinalCta } from "./components/FinalCta";
import { Footer } from "./components/Footer";

/**
 * Phase 3 reduced commercial homepage.
 *
 * Deliberately removes standalone Problem, Product Philosophy, Model,
 * Capability, Evidence and Practice sections from the homepage. Their
 * strongest ideas are either folded into WhyArtifact or reserved for
 * future inner pages.
 */
export function Home() {
  useEffect(() => {
    document.title = "Artifact Learning — Develop capability, not just completion.";
  }, []);

  return (
    <div className="home">
      <SkipLink />
      <Nav />
      <main id="main">
        <Hero />
        <Work />
        <Services />
        <WhyArtifact />
        <Approach />
        <Platform />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
