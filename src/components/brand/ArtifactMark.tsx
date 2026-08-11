interface ArtifactMarkProps {
  className?: string;
  decorative?: boolean;
}

/** The canonical Artifact Anchor. Its asymmetric void is intentional. */
export function ArtifactMark({ className, decorative = true }: ArtifactMarkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 68 68"
      aria-hidden={decorative ? true : undefined}
      role={decorative ? undefined : "img"}
      focusable="false"
    >
      {!decorative && <title>Artifact</title>}
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0H68V68H0Z M27 15H53V41H27Z"
      />
    </svg>
  );
}
