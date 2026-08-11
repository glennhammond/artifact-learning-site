# Controlled xAPI publication implementation v0.1

## Status

Local implementation is in progress on `implementation/xapi-publication-v01`. Preview and production are not verified. This document does not authorise a merge.

## Semantic source and publication architecture

The semantic source of truth remains `glennhammond/artifact-learning-framework` at commit `d9f870e395e4c3471252d416dec6094f718df115`, path `xapi/profiles/artifact-learning/0.1.0/profile.jsonld`. The site contains a derived, byte-identical publication copy at `public/xapi/profiles/artifact-learning/versions/0.1.0/profile.jsonld`; it is not an independently authored Profile.

Vite copies `public/**` unchanged into the production `dist` directory. The package therefore uses static nested `index.html` resources and JSON-LD, with no React routes, runtime fetching, server code, JavaScript, or new dependency.

`public/xapi/publication-manifest.json` records the pinned framework commit, source path, published path, version, generated paths, and governed SHA-256 `93ad17de4c08bcfc557a96abc2129ef1c315195ca588cc10d9d351d5c5bb003a`.

## Public routes

- `/xapi/verbs/consulted`
- `/xapi/verbs/declared-information-sufficiency`
- `/xapi/activity-types/information-source`
- `/xapi/activity-types/decision-context`
- `/xapi/extensions/comparison-group`
- `/xapi/profiles/artifact-learning`
- `/xapi/profiles/artifact-learning/versions/0.1.0`
- `/xapi/profiles/artifact-learning/versions/0.1.0/profile.jsonld`
- `/xapi/profiles/artifact-learning/templates/consultation/0.1.0`
- `/xapi/profiles/artifact-learning/templates/information-sufficiency/0.1.0`

Version `0.1.0` is immutable. It contains five Concepts, two Statement Templates, and zero Patterns.

## Routing and media type

`vercel.json` maps each governed extensionless human IRI to its static nested `index.html`, then narrows the existing SPA rewrite so it applies only outside `/xapi` and `/xapi/**`. The explicit mappings avoid relying on host-specific directory-index behaviour. The JSON-LD file resolves directly, while a missing route such as `/xapi/not-a-real-resource` matches neither a governed mapping nor the SPA fallback and remains a genuine 404. Normal client-side application routes retain the fallback to `/index.html`.

The machine-readable route receives `Content-Type: application/ld+json; charset=utf-8` and `X-Content-Type-Options: nosniff` through static Vercel header configuration.

## Integrity and route validation

`npm run validate:xapi` uses only Node built-ins. It checks the exact SHA-256, parses the JSON-LD, verifies Profile/version/Concept/Template identities, proves that Patterns are absent, checks every static route target, checks the media-type configuration, and proves that the SPA rewrite includes a normal application route but excludes a missing `/xapi` route.

## Accessibility and privacy

Every human resource uses semantic HTML, one `h1`, logical headings, descriptive links, visible focus, responsive measures, reflow-friendly definition lists, and sufficient high-contrast colours. The pages require no JavaScript or animation.

Only governed vocabulary documentation and the Profile artefact are published. No Statements, actors, learner data, fixtures, source bodies, prompts, credentials, environment values, LRS endpoints, or internal paths are present.

## Validation record

Local validation on 12 August 2026 produced these results:

- `npm run typecheck`: passed;
- `npm run lint`: passed;
- `npm run validate:xapi`: passed for ten resources and the governed checksum;
- direct byte comparison with the locally checked-out governed framework source: passed;
- `npm run build`: passed, with the complete static package copied to `dist/xapi`;
- `git diff --check`: passed;
- test command: not present in this repository;
- formatting command: not present in this repository, and no formatter dependency was added;
- local production preview: all nine generated HTML files returned `200`, the JSON-LD returned `200` and parsed, the homepage loaded, and the `/services` application shell loaded;
- visual, keyboard and responsive browser inspection: not completed because no browser-control surface was available in the session.

Vite preview does not apply `vercel.json`, so extensionless rewrites, the configured JSON-LD response header, and the genuine missing-`/xapi` 404 remain Vercel-preview checks. The dependency-free validator proves the intended routing table deterministically but is not substituted for deployment verification.

Vercel preview: not deployed or verified. Production: not deployed or verified. Public resolution must not be claimed until a reviewed merge to `main` deploys successfully and production is tested.

## Limitations and next gate

Local Vite preview does not execute `vercel.json`; routing and response-header behaviour require Vercel preview verification. The next gate is design-owner review at the mandatory pre-commit checkpoint. No commit, push, PR, merge, DNS change, or production deployment is authorised before that review.
