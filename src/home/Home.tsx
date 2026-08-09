import { useEffect } from "react";
import { SkipLink } from "../components/layout/SkipLink";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Problem } from "./components/Problem";
import { Model } from "./components/Model";
import { Work } from "./components/Work";
import { Capability } from "./components/Capability";
import { Approach } from "./components/Approach";
import { ArtifactTech } from "./components/ArtifactTech";
import { FinalCta } from "./components/FinalCta";
import { Footer } from "./components/Footer";

/**
 * The consolidated Artifact Learning homepage — the primary v0.x foundation
 * this phase produces. See docs/consolidation-decision.md for what survived
 * from Concepts A/B/C and why, and docs/design-system.md for the token and
 * component reference this page is built from.
 */
export function Home() {
  useEffect(() => {
    document.title = "Artifact Learning — Digital learning as a product, not a course.";
  }, []);

  return (
    <div className="home">
      <SkipLink />
      <Nav />
      <main id="main">
        <Hero />
        <Problem />
        <Model />
        <Work />
        <Capability />
        <Approach />
        <ArtifactTech />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
