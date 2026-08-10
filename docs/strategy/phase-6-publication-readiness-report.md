# Phase 6 — Publication Readiness Report

## 1. Executive status

**NOT READY FOR PUBLICATION.** Code-level publication preparation is complete,
but four gates remain: a verified contact destination, ITC Avant Garde
licensing/public-repository resolution, R&D maturity verification against the
actual implementation, and required rendered/Vercel QA.

## 2. Branch and commit

- Branch: `phase-6-publication-readiness`
- Base: merged Phase 5 multi-page site
- Commit: recorded in repository history with this report

## 3. Publication-readiness classification

The public route set is a credible publication candidate. Representative proof
is safe when status labels remain. The site itself cannot be described as ready
until owner/legal decisions and browser verification are complete.

## 4. Routes reviewed

`/`, `/services`, `/work`, all four `/work/:slug` pages, `/approach`,
`/platform`, `/about`, `/contact` and the fallback route were reviewed in
source. Phase 1 archive routes are now development-only because they contain
historical placeholder contact behaviour and are outside the public IA.

## 5. Real asset replacements completed

None. No PNG, JPEG, WebP, SVG work media or video asset exists in the repository
to assess. Replacing strong representative proof with invented or unapproved
material would weaken publication integrity.

## 6. Representative assets retained

- eLearning Design System multi-artefact prototype
- Wellbeing Studio programme prototype
- anonymous professional-judgement interaction
- Artifact R&D event/inspection architecture

Captions now state prototype/status more concisely. The typed asset model keeps
proof role, status, alt, source slot, aspect ratio and approval dependency.

## 7. Publication and approval dependencies

- eLearning Design System project media requires publication approval.
- Wellbeing Studio real media and relationship wording require confirmation.
- Professional judgement remains anonymous and approval-gated.
- Artifact R&D captures and maturity must be checked against the actual code.

## 8. R&D maturity corrections

No component was promoted to implemented or production-ready. DecisionPoint,
events and xAPI mapping remain described as in development; Inspector, Session
Insight and Analytics remain concept-stage. This site repository does not
contain the Framework/runtime evidence needed to strengthen those statements.

## 9. Contact integration status

No verified public email, booking URL or endpoint exists. Historical
`hello@artifactlearning.com` references are explicitly placeholders in old
wireframes and are not verification. The Contact page has no form, submit
button, mailto or data collection. Contact is a material publication blocker.

## 10. Editorial QA

Public copy was reviewed for UK English, quiet tone, eLearning capitalisation,
unsupported absolutes, repeated caveats and em-dash usage. Public-facing em
dashes were replaced. Representative labels were shortened without removing
status. No client result, metric, testimonial, approval or guarantee was added.

## 11. Accessibility QA

Static review confirms one H1 per route composition, labelled landmarks, shared
skip link, meaningful route links, native navigation controls, non-interactive
proof fragments, concise complex-image alternatives and no fake form. A small
route manager now resets scroll and focuses the destination H1 after SPA
navigation. Rendered keyboard order, mobile menu, focus visibility, zoom and
contrast remain unverified because no browser was available.

## 12. Responsive QA

Existing CSS breakpoints and Phase 4 proof simplification remain intact. No
rendered checks at 375, 480, 768, 1024, 1440 or 1728px could be completed in
this session. This is an open publication gate, not an assumed pass.

## 13. Routing and browser QA

All CTA/link destinations map to implemented routes; no live `href="#"`,
disabled placeholder link or mailto exists. Vercel retains the SPA fallback.
Production builds omit archive placeholder behaviour. Direct loads, refresh,
Back/Forward, focus movement, invalid route rendering and console state still
require browser and Vercel verification.

## 14. Performance review

No bitmap/video assets are loaded. No dependency changed. The production build
contains about 233 kB JavaScript and 77 kB CSS before compression; the archive
gate reduced production JavaScript by removing historical concepts. Font files
remain the only material asset family. No performance dependency was added.

## 15. SEO and metadata review

Distinct route titles and descriptions remain. Basic `og:title`,
`og:description`, `og:type` and `og:site_name` are set without inventing a share
image or social identity. The base metadata reflects the proposition. The site
retains `noindex, nofollow` while publication blockers remain. No approved
social image exists.

## 16. Privacy and security review

A targeted high-confidence secret scan found no environment files, API keys,
private keys or provider tokens. Public source/rendered-output scans found no
private email, local filesystem path, private repository URL, learner data,
stakeholder name or development URL. Production output contains no historical
placeholder contact address. No secret was discovered.

## 17. Font and licensing status

Three ITC Avant Garde Gothic Std WOFF2 binaries are tracked and emitted in the
production build. README and design-system documentation say the files are
personally licensed to Glenn Hammond, but explicitly do not establish public
repository redistribution or `artifactlearning.com` domain rights. The repo is
public. No licence terms resolving this were found. This is a material
owner/legal blocker; the binaries were not removed, substituted or rewritten
from history without approval.

## 18. Unresolved owner decisions

1. Provide and approve the public contact destination.
2. Confirm ITC Avant Garde use and redistribution rights, then decide whether
   the repo/fonts must be private or served through another approved method.
3. Confirm R&D maturity from the actual implementation repositories.
4. Approve or withhold real project media for each Work page.
5. Decide when to remove `noindex, nofollow`, only after all gates pass.

## 19. Final publication checklist

- [ ] all routes load directly
- [ ] mobile navigation works
- [ ] keyboard navigation verified
- [ ] visible focus verified
- [x] headings verified in source
- [x] alt text reviewed
- [ ] responsive layouts reviewed
- [ ] contact destination verified
- [x] no fake form/functionality
- [x] current representative work media is publication-safe
- [x] professional judgement remains anonymous and safe
- [x] Wellbeing Studio relationship avoids unsupported claims
- [ ] R&D maturity confirmed against implementation
- [x] representative content labelled
- [x] no unsupported metrics/testimonials
- [x] no private data found
- [x] no secrets found
- [ ] font licensing/public-repo issue resolved
- [x] metadata reviewed
- [ ] 404 verified in browser
- [x] build passes
- [x] lint passes
- [x] typecheck passes
- [x] diff-check passes
- [ ] Vercel production smoke test completed

## 20. Post-launch backlog

- Replace representative layers with approved, publication-quality project media.
- Add an approved social sharing image.
- Add video only when a real URL, thumbnail, captions and transcript exist.
- Review R&D status whenever Framework/runtime capability changes.
- Add Insights only when meaningful editorial content exists.
