/**
 * INZOZI PARK — placeholder image generator.
 *
 * Generates an elegant branded SVG placeholder for every image slot in
 * scripts/image-slots.mjs, plus a manifest (src/content/images.generated.ts)
 * that maps each slot to a real photo when one exists in public/images/.
 *
 * Run:  npm run images   (also runs automatically before every build)
 */
import { mkdirSync, writeFileSync, existsSync, readdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { IMAGE_SLOTS, ASPECTS } from "./image-slots.mjs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const PUBLIC_IMAGES = join(ROOT, "public", "images");
const PLACEHOLDER_DIR = join(PUBLIC_IMAGES, "placeholders");
const MANIFEST_OUT = join(ROOT, "src", "content", "images.generated.ts");

const REAL_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];

/* ------------------------------------------------------------------ utils */
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function findRealPhoto(slot) {
  const base = join(PUBLIC_IMAGES, slot.file);
  const ext = REAL_EXTENSIONS.find((e) => existsSync(base.replace(/\.[a-z]+$/, "") + e));
  if (!ext) return null;
  const withExt = slot.file.replace(/\.[a-z]+$/, "") + ext;
  return `/images/${withExt}`;
}

/**
 * Concept visuals — AI-generated stand-ins created for the first website
 * concept. They display automatically but are flagged `generated` in the
 * manifest (the UI labels them "Concept visual"). A real photo, when added
 * at public/images/<slot.file>, always takes priority.
 */
function findConceptImage(slot) {
  const p = join(PUBLIC_IMAGES, "concept", `${slot.id}.jpg`);
  return existsSync(p) ? `/images/concept/${slot.id}.jpg` : null;
}

/* --------------------------------------------------- placeholder SVG art */
function zigzag(w, h, bandHeight, size, c1, c2) {
  // Imigongo-inspired interleaved triangle band
  const count = Math.ceil(w / size) + 1;
  const yb = h - bandHeight; // band bottom
  const yt = h - bandHeight + (bandHeight - size) / 2; // band top
  let tris = "";
  for (let i = 0; i < count; i++) {
    const x = i * size;
    tris +=
      i % 2 === 0
        ? `<polygon points="${x},${yb} ${x + size},${yb} ${x + size / 2},${yt}" fill="${c1}"/>`
        : `<polygon points="${x},${yt} ${x + size},${yt} ${x + size / 2},${yb}" fill="${c2}"/>`;
  }
  return tris;
}

function placeholderSvg(slot) {
  const { w, h } = ASPECTS[slot.aspect];
  const dark = slot.variant === "dark";
  const uid = slot.id.replace(/[^a-z0-9]/gi, "");

  const bg1 = dark ? "#1E3D30" : "#F2EBDB";
  const bg2 = dark ? "#13291F" : "#E4D8BE";
  const ink = dark ? "#F3ECD9" : "#20402F";
  const soft = dark ? "rgba(243,236,217,0.66)" : "rgba(32,64,47,0.66)";
  const faint = dark ? "rgba(243,236,217,0.38)" : "rgba(32,64,47,0.38)";
  const gold = dark ? "#C9A45C" : "#A87F35";
  const tri1 = dark ? "rgba(201,164,92,0.20)" : "rgba(168,127,53,0.16)";
  const tri2 = dark ? "rgba(243,236,217,0.10)" : "rgba(32,64,47,0.08)";
  const keyline = dark ? "rgba(201,164,92,0.55)" : "rgba(168,127,53,0.6)";
  const keyline2 = dark ? "rgba(243,236,217,0.22)" : "rgba(32,64,47,0.2)";

  const pad = Math.round(Math.min(w, h) * 0.055);
  const cx = w / 2;
  const cy = h / 2;

  const serif = "Georgia, 'Times New Roman', serif";
  const sans = "'Helvetica Neue', Helvetica, Arial, sans-serif";

  const labelSize = Math.round(Math.min(w, h) * 0.052);
  const smallSize = Math.max(13, Math.round(Math.min(w, h) * 0.021));
  const tinySize = Math.max(11, Math.round(Math.min(w, h) * 0.016));

  /* Quiet variant — used for full-bleed hero slots where page text overlays
     the image: no centred glyph/label, just a small corner caption. */
  if (slot.quiet) {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(slot.label)} — placeholder">
  <defs>
    <radialGradient id="g1-${uid}" cx="30%" cy="22%" r="90%">
      <stop offset="0%" stop-color="${bg1}"/>
      <stop offset="100%" stop-color="${bg2}"/>
    </radialGradient>
    <filter id="n-${uid}">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 ${dark ? 0.05 : 0.045} 0"/>
    </filter>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g1-${uid})"/>
  ${zigzag(w, h, Math.round(h * 0.062), Math.round(h * 0.031), tri1, tri2)}
  <text x="${pad + 14}" y="${pad + 30}" font-family="${sans}" font-size="${smallSize}" letter-spacing="4" fill="${soft}">INZOZI PARK</text>
  <text x="${pad + 14}" y="${pad + 30 + smallSize * 1.6}" font-family="${sans}" font-size="${Math.max(10, tinySize - 2)}" letter-spacing="3" fill="${faint}">PHOTOGRAPH COMING SOON</text>
  <text x="${w - pad - 14}" y="${h - pad - 12}" text-anchor="end" font-family="ui-monospace, 'SF Mono', Menlo, monospace" font-size="${Math.max(10, tinySize - 2)}" fill="${faint}">public/images/${esc(slot.file)}</text>
  <rect width="${w}" height="${h}" filter="url(#n-${uid})"/>
</svg>\n`;
  }

  // camera glyph
  const g = Math.min(w, h) * 0.042;
  const glyph = `
    <g transform="translate(${cx} ${cy - labelSize * 2.7})" stroke="${gold}" fill="none" stroke-width="${Math.max(1.5, g * 0.055)}">
      <rect x="${-g * 1.35}" y="${-g * 0.85}" width="${g * 2.7}" height="${g * 1.7}" rx="${g * 0.3}"/>
      <circle cx="0" cy="0" r="${g * 0.52}"/>
      <path d="M ${-g * 0.5} ${-g * 0.85} l ${g * 0.28} ${-g * 0.32} h ${g * 0.44} l ${g * 0.28} ${g * 0.32}"/>
    </g>`;

  const spacing = (n) => n; // letter-spacing applied via attribute

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(slot.label)} — placeholder">
  <defs>
    <radialGradient id="g1-${uid}" cx="30%" cy="22%" r="90%">
      <stop offset="0%" stop-color="${bg1}"/>
      <stop offset="100%" stop-color="${bg2}"/>
    </radialGradient>
    <filter id="n-${uid}">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 ${dark ? 0.05 : 0.045} 0"/>
    </filter>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g1-${uid})"/>
  <g opacity="1">${zigzag(w, h, Math.round(h * 0.062), Math.round(h * 0.031), tri1, tri2)}</g>
  <rect x="${pad}" y="${pad}" width="${w - pad * 2}" height="${h - pad * 2}" fill="none" stroke="${keyline}" stroke-width="1.6"/>
  <rect x="${pad + 8}" y="${pad + 8}" width="${w - (pad + 8) * 2}" height="${h - (pad + 8) * 2}" fill="none" stroke="${keyline2}" stroke-width="1"/>
  ${glyph}
  <text x="${cx}" y="${cy - labelSize * 0.9}" text-anchor="middle" font-family="${serif}" font-size="${labelSize}" fill="${ink}">${esc(slot.label)}</text>
  <text x="${cx}" y="${cy + labelSize * 1.18}" text-anchor="middle" font-family="${sans}" font-size="${smallSize}" letter-spacing="${spacing(4)}" fill="${soft}">INZOZI PARK</text>
  <text x="${cx}" y="${cy + labelSize * 1.18 + smallSize * 1.7}" text-anchor="middle" font-family="${sans}" font-size="${tinySize}" letter-spacing="${spacing(3)}" fill="${faint}">PHOTOGRAPH COMING SOON</text>
  <text x="${cx}" y="${h - pad - smallSize * 1.6}" text-anchor="middle" font-family="ui-monospace, 'SF Mono', Menlo, monospace" font-size="${Math.max(10, tinySize - 2)}" fill="${faint}">public/images/${esc(slot.file)}</text>
  <rect width="${w}" height="${h}" filter="url(#n-${uid})"/>
</svg>\n`;
}

/* ------------------------------------------------------------------ main */
function main() {
  mkdirSync(PLACEHOLDER_DIR, { recursive: true });

  const manifest = {};
  const generated = [];

  for (const slot of IMAGE_SLOTS) {
    const real = findRealPhoto(slot);
    const concept = real ? null : findConceptImage(slot);
    const placeholderPath = `/images/placeholders/${slot.id}.svg`;

    if (!real && !concept) {
      const out = join(PLACEHOLDER_DIR, `${slot.id}.svg`);
      mkdirSync(dirname(out), { recursive: true });
      writeFileSync(out, placeholderSvg(slot), "utf8");
      // Quiet variant for overlay contexts (hero bands, image-with-caption)
      const quietOut = join(PLACEHOLDER_DIR, `${slot.id}-quiet.svg`);
      writeFileSync(quietOut, placeholderSvg({ ...slot, quiet: true }), "utf8");
      generated.push(slot.id);
    }

    manifest[slot.id] = {
      src: real ?? concept ?? placeholderPath,
      placeholder: !real && !concept,
      generated: !!concept && !real,
    };
  }

  // Clean up stale placeholder SVGs (slots that were removed)
  const valid = new Set(
    IMAGE_SLOTS.flatMap((s) => [`${s.id}.svg`, `${s.id}-quiet.svg`]),
  );
  for (const f of readdirSync(PLACEHOLDER_DIR)) {
    if (f.endsWith(".svg") && !valid.has(f)) {
      unlinkSync(join(PLACEHOLDER_DIR, f));
      console.log("  removed stale placeholder:", f);
    }
  }

  const ts = `/* AUTO-GENERATED by scripts/generate-placeholders.mjs — do not edit by hand.
 *
 * imageManifest maps every image slot to the asset currently shown on the
 * site:
 *   - a real photograph when one exists at public/images/<slot.file>
 *   - otherwise the branded placeholder SVG for that slot.
 *
 * imageRegistry carries each slot's display metadata (aspect ratio, alt
 * text, gallery category, caption).
 *
 * To publish real photos, drop files into public/images/ using the names
 * listed in scripts/image-slots.mjs, then run "npm run images" or rebuild.
 */

export interface GeneratedSlot {
  id: ImageSlotId;
  file: string;
  aspect: "wide" | "landscape" | "portrait";
  variant: "dark" | "light";
  quiet?: boolean;
  label: string;
  alt: string;
  category: "weddings" | "events" | "food" | "kids" | "venue";
  caption: string;
}

export type ImageSlotId =
${IMAGE_SLOTS.map((s) => `  | "${s.id}"`).join("\n")};

export const imageManifest: Record<
  ImageSlotId,
  { src: string; placeholder: boolean; generated: boolean }
> = ${JSON.stringify(
    manifest,
    null,
    2,
  )};

export const imageRegistry: GeneratedSlot[] = ${JSON.stringify(
    IMAGE_SLOTS.map(({ caption = "", ...rest }) => ({ ...rest, caption })),
    null,
    2,
  )};

export const IMAGE_SLOT_COUNT = ${IMAGE_SLOTS.length};
export const PLACEHOLDER_COUNT = ${Object.values(manifest).filter((m) => m.placeholder).length};
`;
  mkdirSync(dirname(MANIFEST_OUT), { recursive: true });
  writeFileSync(MANIFEST_OUT, ts, "utf8");

  console.log(`✓ ${generated.length} placeholders generated`);
  console.log(`✓ manifest written → ${MANIFEST_OUT.replace(ROOT + "/", "")}`);
  const realSlots = Object.entries(manifest).filter(([, m]) => !m.placeholder);
  if (realSlots.length) console.log(`✓ real photos in use: ${realSlots.map(([id]) => id).join(", ")}`);
}

import { unlinkSync } from "node:fs";
main();
