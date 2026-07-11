#!/usr/bin/env node
/**
 * sync-content.mjs
 *
 * Reads the `_Publish/` surface from the Second Brain vault, validates the
 * frontmatter of every note, and copies the markdown into `content/` in this
 * repo. The site builds from the committed copy, so Vercel never touches the
 * vault. Run `npm run sync` locally, review the diff, then commit and push.
 *
 * Override the vault location with VAULT_PATH if it ever moves.
 */

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const DEFAULT_VAULT =
  "/Users/allankirsten/Library/CloudStorage/GoogleDrive-allankirsten@gmail.com/My Drive/Second Brain/AK Personal";

const VAULT = process.env.VAULT_PATH || DEFAULT_VAULT;
const PUBLISH = path.join(VAULT, "_Publish");
const REPO = path.resolve(process.cwd());
const CONTENT = path.join(REPO, "content");

const LANGS = ["pt", "en"];
const DEFAULT_LANG = "pt";

const errors = [];
const warnings = [];

function fail(msg) {
  errors.push(msg);
}

/** Split "about.en.md" into { slug: "about", lang: "en" }. */
function parseName(file) {
  const base = file.replace(/\.md$/, "");
  const parts = base.split(".");
  if (parts.length > 1 && LANGS.includes(parts[parts.length - 1])) {
    return { slug: parts.slice(0, -1).join("."), lang: parts[parts.length - 1] };
  }
  return { slug: base, lang: DEFAULT_LANG };
}

function requireFields(data, fields, where) {
  for (const f of fields) {
    if (data[f] === undefined || data[f] === null || data[f] === "") {
      fail(`${where}: missing required frontmatter field "${f}"`);
    }
  }
}

function checkDashes(raw, where) {
  const lines = raw.split("\n");
  lines.forEach((line, i) => {
    if (line.includes("—") || line.includes("–")) {
      warnings.push(`${where}:${i + 1} contains a long dash (— or –)`);
    }
  });
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function cleanDir(dir) {
  if (fs.existsSync(dir)) fs.rmSync(dir, { recursive: true, force: true });
  ensureDir(dir);
}

function copyKind(kind, requiredFields) {
  const srcDir = path.join(PUBLISH, kind);
  const outDir = path.join(CONTENT, kind);
  if (!fs.existsSync(srcDir)) {
    fail(`missing source folder: ${srcDir}`);
    return 0;
  }
  cleanDir(outDir);
  const files = fs.readdirSync(srcDir).filter((f) => f.endsWith(".md"));
  let count = 0;
  for (const file of files) {
    const raw = fs.readFileSync(path.join(srcDir, file), "utf8");
    const where = `${kind}/${file}`;
    let parsed;
    try {
      parsed = matter(raw);
    } catch (e) {
      fail(`${where}: invalid frontmatter (${e.message})`);
      continue;
    }
    requireFields(parsed.data, requiredFields, where);
    checkDashes(raw, where);
    fs.writeFileSync(path.join(outDir, file), raw);
    count++;
  }
  return count;
}

function buildSiteConfig() {
  const src = path.join(PUBLISH, "_site.md");
  if (!fs.existsSync(src)) {
    fail(`missing ${src}`);
    return;
  }
  const raw = fs.readFileSync(src, "utf8");
  checkDashes(raw, "_site.md");
  const { data, content } = matter(raw);
  requireFields(data, ["name", "hero", "proof", "contact"], "_site.md");
  const site = { ...data, intro: content.trim() };
  ensureDir(CONTENT);
  fs.writeFileSync(
    path.join(CONTENT, "site.json"),
    JSON.stringify(site, null, 2)
  );
}

console.log(`Syncing content from:\n  ${PUBLISH}\n`);

buildSiteConfig();
const pages = copyKind("pages", ["type", "slug", "title", "summary"]);
const cases = copyKind("cases", [
  "type",
  "slug",
  "title",
  "order",
  "summary",
]);

if (warnings.length) {
  console.log("Warnings:");
  warnings.forEach((w) => console.log(`  ! ${w}`));
  console.log("");
}

if (errors.length) {
  console.error("Sync failed:");
  errors.forEach((e) => console.error(`  x ${e}`));
  process.exit(1);
}

console.log(`Synced site.json, ${pages} page files, ${cases} case files.`);
console.log("Review the diff, then commit and push to deploy.");
