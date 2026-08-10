import type { ReactNode } from "react";
import "./Tag.css";

type TagTone = "neutral" | "signal";

interface TagProps {
  children: ReactNode;
  tone?: TagTone;
  mono?: boolean;
  className?: string;
}

/** Small label/tag primitive — status pills, maturity labels, filter chips. */
export function Tag({ children, tone = "neutral", mono = false, className = "" }: TagProps) {
  return (
    <span className={`ds-tag ds-tag--${tone} ${mono ? "ds-tag--mono" : ""} ${className}`.trim()}>
      {children}
    </span>
  );
}
