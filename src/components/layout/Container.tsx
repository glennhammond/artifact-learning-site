import type { ElementType, ReactNode } from "react";

interface ContainerProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  narrow?: boolean;
}

export function Container({
  as: Tag = "div",
  children,
  className = "",
  narrow = false,
}: ContainerProps) {
  return (
    <Tag className={`container ${narrow ? "container--narrow" : ""} ${className}`.trim()}>
      {children}
    </Tag>
  );
}
