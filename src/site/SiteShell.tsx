import { useEffect, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { SkipLink } from "../components/layout/SkipLink";
import { Footer } from "../home/components/Footer";
import { Nav } from "../home/components/Nav";

export function SiteShell({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <div className="site">
      <SkipLink />
      <Nav />
      <main id="main">{children}</main>
      <Footer />
    </div>
  );
}
