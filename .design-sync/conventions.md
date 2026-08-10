## Setup

No provider/wrapper is required — this design system has no context/theme
provider. Just import `styles.css` once at the app root; it pulls in the
reset, the full v0.2 token set, the self-hosted type family (ITC Avant
Garde Gothic Std, Source Sans 3, IBM Plex Sans/Mono — already inlined,
nothing else to load) and every component's compiled CSS. Skipping it is
the only way to get unstyled output.

Body sets `background: var(--color-bg)` and `color: var(--color-text)` —
build on the Paper surface (`--color-bg`) by default; only the one Ink
section pattern below should switch tones.

## Styling idiom

This is a **props-driven component system**, not a utility-class system.
Reach for a component's variant prop before reaching for CSS:

- `Button`: `variant="primary" | "secondary" | "text"` — primary (Signal
  fill) is reserved for ONE action per view; never more than one per
  screen.
- `Tag`: `tone="neutral" | "signal"` (signal = genuinely consequential,
  never decorative) + boolean `mono` (switches to IBM Plex Mono, for
  data/event-ish labels).
- `Section`: `width="page" | "content" | "narrow"` (containment tier),
  `density="compact" | "default" | "expansive"` (vertical rhythm), and
  `tone="paper" | "ink"` — Ink is reserved for one deliberate dark-surface
  section, not a general dark-mode switch.
- `Container`: the same three `width` tiers standalone, for content that
  needs containment without a full `Section` head.

A handful of raw utility classes exist alongside the components and are
legitimate to use directly, because nothing wraps them:

- `.kicker` — the small-caps eyebrow/label treatment (IBM Plex Sans,
  uppercase, letter-spaced) used above nearly every heading and data label.
- `.container` / `.container--page|content|narrow` — what `Container`
  itself renders; reach for these only when you can't use the component
  (e.g. on a non-React root element).
- `.ds-fade` (+ the `Reveal` component that applies it) — the one-shot
  reveal-on-scroll treatment: `opacity: 0` → `.is-visible` fades/lifts in
  once. Never a repeating or continuous animation.

Everything else is `var(--token-name)`, never a literal value — colour
(`--color-ink`, `--color-paper`, `--color-signal`, `--color-text-secondary`,
`--color-border`, `--color-surface-subtle`), spacing on an 8px-rooted scale
(`--space-1`…`--space-10`), type (`--type-display|heading|body|ui|data`,
`--text-*`, `--weight-*`), radius (`--radius-control`, `--radius-panel`),
and motion (`--duration-state|reveal`, `--ease-out`, `--ease-in-out`). If a
custom element needs a colour, border, radius or spacing value not covered
by a component, pull it from this token set rather than inventing a hex
value or a pixel constant.

## Where the truth lives

- `styles.css` (root) — the whole styling surface: reset → tokens → fonts →
  every component's CSS, in that order. Read it before styling anything
  bespoke.
- `guidelines/design-system.md` — the fuller written reference (tokens,
  components, the system model) this sync was built from.
- Each `components/<group>/<Name>/<Name>.prompt.md` — real composed usage
  for that specific component.

## Example

The real shape of a homepage section — Section head, body copy, a primary
CTA and a couple of status tags:

```tsx
<Section
  id="work"
  kicker="Selected work"
  heading="The decision matters as much as the deliverable."
  intro="Framed around the problem and the decisions behind the experience."
>
  <p>
    A reusable eLearning design system provides a shared foundation for
    interface design, interaction, accessibility and development.
  </p>
  <ul style={{ display: "flex", gap: "var(--space-2)", listStyle: "none", padding: 0 }}>
    <li><Tag mono>Learning design</Tag></li>
    <li><Tag mono>React</Tag></li>
  </ul>
  <Button variant="primary" href="#contact">Start a conversation</Button>
</Section>
```
