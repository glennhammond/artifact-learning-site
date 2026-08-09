import type { ReactNode, RefObject } from "react";
import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";

interface RevealProps {
  as?: "div" | "section" | "article";
  children: ReactNode;
  className?: string;
  revealClassName?: string;
  id?: string;
}

/** Thin wrapper applying the one-shot reveal-on-scroll pattern used across all three concepts. */
export function Reveal({
  as: Tag = "div",
  children,
  className = "",
  revealClassName = "is-visible",
  id,
}: RevealProps) {
  const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>();
  return (
    <Tag
      ref={ref as RefObject<HTMLDivElement>}
      id={id}
      className={`${className} ${isVisible ? revealClassName : ""}`.trim()}
    >
      {children}
    </Tag>
  );
}
