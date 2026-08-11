import { createHash } from "node:crypto";
import { access, readFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const manifestPath = path.join(root, "public/xapi/publication-manifest.json");
const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
const profilePath = path.join(root, manifest.publishedProfilePath);
const profileBytes = await readFile(profilePath);
const actualHash = createHash("sha256").update(profileBytes).digest("hex");

if (actualHash !== manifest.sha256) {
  throw new Error(`Profile checksum mismatch: expected ${manifest.sha256}, received ${actualHash}`);
}

const profile = JSON.parse(profileBytes.toString("utf8"));
const expectedProfileId = "https://artifactlearning.com/xapi/profiles/artifact-learning";
const expectedVersionId = `${expectedProfileId}/versions/0.1.0`;
const expectedConceptIds = [
  "https://artifactlearning.com/xapi/verbs/consulted",
  "https://artifactlearning.com/xapi/verbs/declared-information-sufficiency",
  "https://artifactlearning.com/xapi/activity-types/information-source",
  "https://artifactlearning.com/xapi/activity-types/decision-context",
  "https://artifactlearning.com/xapi/extensions/comparison-group",
];
const expectedTemplateIds = [
  `${expectedProfileId}/templates/consultation/0.1.0`,
  `${expectedProfileId}/templates/information-sufficiency/0.1.0`,
];

if (profile.id !== expectedProfileId || profile.versions?.[0]?.id !== expectedVersionId) {
  throw new Error("Governed Profile or version identity changed");
}
if (JSON.stringify(profile.concepts.map(({ id }) => id)) !== JSON.stringify(expectedConceptIds)) {
  throw new Error("Governed Concept identities changed");
}
if (JSON.stringify(profile.templates.map(({ id }) => id)) !== JSON.stringify(expectedTemplateIds)) {
  throw new Error("Governed Template identities changed");
}
if (profile.patterns !== undefined) {
  throw new Error("Profile 0.1.0 must not publish Patterns");
}

const requiredRoutes = [...expectedConceptIds, expectedProfileId, expectedVersionId, ...expectedTemplateIds];
for (const iri of requiredRoutes) {
  const route = new URL(iri).pathname;
  const htmlPath = path.join(root, "public", route, "index.html");
  await access(htmlPath);
  const html = await readFile(htmlPath, "utf8");
  if ((html.match(/<h1(?:\s|>)/g) ?? []).length !== 1) {
    throw new Error(`${route} must contain exactly one h1`);
  }
  if (!html.includes('<html lang="en">') || !html.includes('name="viewport"')) {
    throw new Error(`${route} is missing language or viewport metadata`);
  }
  if (/<script(?:\s|>)/.test(html)) {
    throw new Error(`${route} must not require JavaScript`);
  }
}

const vercel = JSON.parse(await readFile(path.join(root, "vercel.json"), "utf8"));
const spaRewrite = vercel.rewrites?.find(({ destination }) => destination === "/index.html");
if (!spaRewrite || new RegExp(`^${spaRewrite.source}$`).test("/xapi/not-a-real-resource")) {
  throw new Error("The SPA fallback must exclude every /xapi resource");
}
if (!new RegExp(`^${spaRewrite.source}$`).test("/services")) {
  throw new Error("The SPA fallback must continue to cover business-site routes");
}
for (const iri of requiredRoutes) {
  const route = new URL(iri).pathname;
  const staticRewrite = vercel.rewrites?.find(({ source }) => source === route);
  if (staticRewrite?.destination !== `${route}/index.html`) {
    throw new Error(`Missing deterministic static rewrite for ${route}`);
  }
}
const jsonHeader = vercel.headers?.find(
  ({ source }) => source === "/xapi/profiles/artifact-learning/versions/0.1.0/profile.jsonld",
);
if (!jsonHeader?.headers?.some(({ key, value }) => key === "Content-Type" && value.startsWith("application/ld+json"))) {
  throw new Error("The published Profile must be configured as application/ld+json");
}

console.log(`xAPI publication valid: ${requiredRoutes.length + 1} resources; SHA-256 ${actualHash}`);
