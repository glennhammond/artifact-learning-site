import type { ElementType, ReactNode } from "react";
import "./Container.css";

type ContainerWidth = "page" | "content" | "narrow";

interface ContainerProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  /** @deprecated use width="narrow" */
  narrow?: boolean;
  width?: ContainerWidth;
}

/**
 * The page's containment primitive: three tiers (Phase 2.2 §4):
 * "page" (the editorial grid max, ~1440px: nav, hero, Work, the dark
 * model section), "content" (inset, ~1180px: quieter sections that
 * shouldn't claim the full grid width) and "narrow" (reading measure,
 * ~66ch: long-form prose, the final CTA). The gutter is fluid and keeps
 * growing on very wide screens rather than capping, so outer whitespace
 * increases gracefully instead of the grid stretching edge to edge.
 */
export function Container({
  as: Tag = "div",
  children,
  className = "",
  narrow = false,
  width,
}: ContainerProps) {
  const resolvedWidth = width ?? (narrow ? "narrow" : "page");
  return (
    <Tag className={`container container--${resolvedWidth} ${className}`.trim()}>{children}</Tag>
  );
}
