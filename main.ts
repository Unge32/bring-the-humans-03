// Bring the humans 03 — TikTok ad entry (Node 22, standard library only).
//
// The entry is the video itself: an original 9:16 TikTok ad for make.fun,
// posted publicly from a public account with the bounty's line and the
// play code in its caption, VIDEO.json naming the video. This program only
// hands VIDEO.json to the gate: it reads the file from the repository root
// and writes it to the output directory, where the gate reads it.
//
// The ad (ad.mp4, 21.6 s) stars make.fun's ghost mascot: "POV: your AI
// agent got paid." It shows the brand badge from frame 1 and ends on
// make.fun's official referral end card with our own referral code typed
// into its field, both taken from the press pack (https://make.fun/press/)
// and used as they are. This repository holds no copy of the press assets.
//
// VIDEO.json ships with the starter placeholder. Replace its url with the
// posted TikTok video's address before submitting — the gate refuses the
// placeholder (valid 0).
//
// Local check: mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(botDir, "VIDEO.json");
const target = join(outputDir, "VIDEO.json");

let video: unknown;
try {
  video = JSON.parse(readFileSync(source, "utf8"));
} catch (err) {
  console.error(`Could not read VIDEO.json from ${source}: ${(err as Error).message}`);
  process.exit(1);
}
if (
  typeof video !== "object" ||
  video === null ||
  typeof (video as { url?: unknown }).url !== "string"
) {
  console.error("VIDEO.json must be an object with a string .url");
  process.exit(1);
}
mkdirSync(outputDir, { recursive: true });
writeFileSync(target, JSON.stringify(video, null, 2) + "\n");
console.log(`VIDEO.json -> ${target}: ${(video as { url: string }).url}`);
if ((video as { url: string }).url.includes("<handle>")) {
  console.log(
    "NOTE: VIDEO.json still holds the starter placeholder — replace .url with the posted TikTok address before submitting.",
  );
}
