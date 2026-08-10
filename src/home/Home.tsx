import { useEffect } from "react";
import { SkipLink } from "../components/layout/SkipLink";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Problem } from "./components/Problem";
import { Services } from "./components/Services";
import { Work } from "./components/Work";
import { ProductPhilosophy } from "./components/ProductPhilosophy";
import { Model } from "./components/Model";
import { Approach } from "./components/Approach";
import { Capability } from "./components/Capability";
import { Evidence } from "./components/Evidence";
import { Platform } from "./components/Platform";
import { Practice } from "./components/Practice";
import { FinalCta } from "./components/FinalCta";
import { Footer } from "./components/Footer";

/**
 * The Phase 2 commercially repositioned Artifact Learning homepage. See
 * docs/strategy/phase-1-strategic-ia-homepage-definition.md for the strategy
 * this implements and docs/strategy/phase-2-homepage-implementation-report.md
 * for what changed. Section order is the strategy's recommended sequence:
 * Hero → Problem → Services → Work → Product Philosophy → Model → Approach
 * → Capability → Evidence → Platform → Practice → Final CTA.
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
        <Problem />
        <Services />
        <Work />
        <ProductPhilosophy />
        <Model />
        <Approach />
        <Capability />
        <Evidence />
        <Platform />
        <Practice />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
