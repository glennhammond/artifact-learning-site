import { useEffect, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { SkipLink } from "../components/layout/SkipLink";
import { Footer } from "../home/components/Footer";
import { Nav } from "../home/components/Nav";

let previousPathname: string | null = null;

export function SiteShell({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    if (previousPathname && previousPathname !== pathname) {
      const heading = document.querySelector<HTMLElement>("#main h1");
      if (heading) {
        heading.tabIndex = -1;
        heading.focus({ preventScroll: true });
      }
    }
    previousPathname = pathname;
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
