# Wireframe — Direction B: Digital Learning Laboratory

Territory: instrumentation made visible. Cooler/darker base, structural grid lines, monospace used as a working material (not just for kickers), a persistent animated systems diagram, and the fullest (still honest) visibility of the Artifact ecosystem. Must stay human and commercially legible — this is a learning studio showing its instrumentation, not a dev-tools product.

## Navigation
Dark graphite bar. Wordmark `Artifact` left. Nav items right, styled as mono labels: `WORK` `MODEL` `APPROACH` `ARTIFACT` — `Contact` as a bordered (not filled) button, single accent colour outline.
Collapses to disclosure under 700px, same accessible pattern as Direction A.

## 1. Hero (systems-led)
Dark graphite background. Left: headline + standfirst, smaller than Direction A's (this direction gives the diagram equal weight, not more). Right: a live-feeling animated loop diagram — four nodes (Experience / Platform / Data / Insight) connected in a ring, a small pulse travels the ring on load and loops slowly and quietly (long duration, low frequency — not attention-grabbing), each node labelled in mono type. `prefers-reduced-motion` swaps the pulse for a single static highlighted arrow.

> **Digital learning as a product, not a course.**
> Artifact designs, builds and instruments organisational learning the way a product team would — then uses what actually happens inside the experience to improve it.
> [See the model ↓]

## 2. The problem (instrument readout framing)
Two side-by-side panels, styled like technical readouts (mono labels, thin rule borders, no shadows):

**Panel 1 — "What a completion report shows"**
```
STATUS     completed
SCORE      82%
TIME       14m 02s
```

**Panel 2 — "What an instrumented experience can also show"**
```
decision.presented   scenario: vendor-risk-01
decision.responded   choice: escalate · 4.1s
decision.completed   outcome: correct · attempt 1
```
Caption, clearly labelled: *"Illustrative event shapes — not output from a real client project."*

## 3. The model (interactive)
The four-node loop from the hero, now full-width and larger, each node expandable on hover/focus to reveal 2–3 lines of description (Experience/Platform/Data/Insight, same content as Direction A §3 but presented as an interactive diagram rather than a list). Keyboard-operable (nodes are real buttons; disclosure content is in the DOM, not hidden from assistive tech). The connecting arrow from Insight back to Experience is drawn heavier than the other three, with the caption: *"Insight is the only layer whose job is to change the other three."*

## 4. Selected work
Same credibility bar as Direction A — no invented outcomes — but the featured case study is paired with one small illustrative event-log panel (styled like §2's Panel 2) next to the write-up, making the "instrumentation" idea concrete at the project level, not just the model level.

> **Eyebrow (mono):** CASE — placeholder
> Same problem framing as Direction A's featured project (reused copy — the *treatment* differs between concepts, not the underlying facts).
> [Read the case study →] *(inert in this phase)*

Two further projects as compact rows with a mono status tag (`shipped` / `in build`) rather than Direction A's plain text rows.

## 5. Capability
Same four groupings as Direction A, but presented as a compact grid with a mono index number per group (`01–04`) and a thin rule grid — denser than Direction A, echoing the "instrument panel" visual language, but still no icon decoration.

## 6. Approach (pipeline framing)
Lifecycle shown as a horizontal pipeline strip with mono step-labels and a connecting rule that visually "runs" left to right, evoking a build pipeline rather than a numbered magazine list:
`[ DISCOVER ] → [ DESIGN ] → [ BUILD & INSTRUMENT ] → [ MEASURE ] → [ IMPROVE ]`

## 7. Artifact technology (fullest expression, still honest)
This direction gives the ecosystem the most visible treatment — a small node map (Framework → Components → Events → xAPI → Inspector) with each node tagged by real maturity status pulled directly from the framework repo review, never inflated:

- Artifact Framework — `in development` (engineering foundation, tokens, tooling)
- Artifact Components — `in design` (one component specified, none built)
- Artifact Events — `in design` (event shapes researched, no runtime)
- Artifact xAPI — `in design` (mapping researched, no mapper built)
- Artifact Inspector — `concept` (specified, not started)

Framed explicitly: *"This is early. We're building it the same way we'd build it for a client — designed before it's coded, and honest about what stage it's at."*

## 8. Final CTA
Same directness as Direction A, dark band:
> **Working on a digital learning problem worth taking seriously?**
> [Tell us what you're trying to solve →] `hello@artifactlearning.com`

## Footer
Dark, mono meta line, wordmark, `.com` / `.com.au`.

## Mobile behaviour
Hero diagram moves below the headline and shrinks (nodes stack vertically rather than in a ring under ~480px — a simplified vertical sequence with the same labels, not a shrunk illegible ring). Readout panels in §2 stack vertically. Pipeline in §6 wraps to two rows. Node map in §7 becomes a stacked list with status tags inline.

## Interaction notes
- One continuous, slow, low-amplitude animation (the hero/model loop pulse) — this is the direction's single "signature" motion; everything else is state-based (hover/focus), not decorative.
- Event-log panels: content is present in the DOM at load (not solely revealed by animation), so a no-motion or slow-connection visitor never loses information — a brief reveal animation only enhances a fully-present state.
- All interactive nodes are real buttons with visible focus rings; disclosure content is always reachable by keyboard and never removed from the accessibility tree.
