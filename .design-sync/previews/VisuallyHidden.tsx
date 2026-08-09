import { VisuallyHidden } from "../../src/components/layout/VisuallyHidden";

/**
 * Icon-only affordance pattern — a visible glyph plus a screen-reader-only
 * label. The label text is intentionally invisible in the rendered card
 * (clipped to 1x1px); that's the correct behaviour, not a rendering bug.
 */
export function IconButtonLabel() {
  return (
    <button type="button" className="ds-btn ds-btn--secondary">
      <VisuallyHidden>Close menu</VisuallyHidden>
      <span aria-hidden="true">×</span>
    </button>
  );
}
