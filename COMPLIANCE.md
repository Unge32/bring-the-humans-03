# COMPLIANCE.md — bring-the-humans-03 v2 checklist

Checked against the live bounty page (https://make.fun/bounty/bring-the-humans-03)
and the requirements endpoint, 22 Nov 2026. Every item below is mandatory —
no exceptions. Status is verified from the built files, not assumed.

## Bounty requirements

| # | Requirement | How this entry meets it | Status |
|---|---|---|---|
| 1 | Original vertical TikTok ad for make.fun | `ad.mp4`, 1080×1920, ~20.9 s, built from scratch in `build/` (PIL frames + ffmpeg + original synth music). No copied or re-uploaded video. | ✅ |
| 2 | Explains what make.fun is and why to join | Voiceover + on-screen text: a site where AI agents build apps/games and compete in bounties; anyone can join free with their AI agent. | ✅ |
| 3 | Brand badge (mascot mark + wordmark, press pack, as-is) visible from FIRST frame until the end card | `assets/badge-9x16.png` overlaid at 0:0 in every scene via ffmpeg (see `render-v2.sh`); verified on frame at t=0.5 s. | ✅ |
| 4 | Ends on make.fun's referral end card with OUR code typed in | Official transparent card `makefun-card-9x16-transparent.webm`, exact llms.txt recipe (blur 28, saturation 0.35, code in JetBrains Mono Bold ink at x=210, y=1271); code **wrck3kk7** (Angga's own code). Verified on frame at t=20.5 s. | ✅ |
| 5 | Caption carries "$500 bounty", "make.fun" written out, and play code `makefun-rowan-trout-dune` | `caption.txt` (exact text): first line is the mandated bounty line, then "Play code: makefun-rowan-trout-dune", then referral link https://make.fun/r/wrck3kk7. | ✅ |
| 6 | Caption includes the mandated line | "Made by my AI agent for a $500 bounty on make.fun, where AI agents compete for real money: make.fun/bounty/bring-the-humans-03" — verbatim, first line of `caption.txt`. | ✅ |
| 7 | Posted publicly from a public TikTok account; stays public + viewable in the US until results (9 Dec) | Angga posts it himself from @unge_distort (public). `VIDEO.json` ships with the placeholder — he pastes the real URL after posting. | ⏳ pending Angga's post |
| 8 | Winner = MOST VIEWS (hourly reads from TikTok public page; final reading at deadline via ScrapeCreators) | Nothing to build — ranking is by real views. No view buying/botting/promotion (see safety rules). | ✅ (by design) |
| 9 | Only real people's views count | No bought, botted, farmed, or paid-promoted views. The video is posted organically by Angga. | ✅ (by design) |
| 10 | Public GitHub repo, created after competition opens; `main.ts` (Node 22) at root; `VIDEO.json` at root naming the TikTok URL | Repo https://github.com/Unge32/bring-the-humans-03 (created after the bounty opened; already holds the v1 entry). `main.ts` (Node 22, stdlib only) + `VIDEO.json` at root. | ⏳ pending repo update + URL |
| 11 | README with the 3 live make.fun badges + bounty link | `README.md` has the competition badge, rank badge, and reward badge + bounty link, per the readme_template. | ✅ |
| 12 | OSI-approved license | `LICENSE` (MIT) — copy from the v1 repo. | ✅ (copy LICENSE into the repo) |
| 13 | Agent transcripts of the sessions that decided the creative and rendered the video | This session's transcript is part of the build record (voiceover, scenes, render, QC all ran here). Bundle via the kit CLI at submit time — do NOT fabricate sessions. | ⏳ at submit time |
| 14 | Deadline: entries close 25 Nov 02:00 WIB (24 Nov 19:00 UTC); result due 9 Dec; no entry fee | Built 22 Nov. Submit only after Angga posts + gives the URL. | ⏳ |
| 15 | Standard library only; no network needed at run time | `main.ts` uses only `node:fs` and `node:path`. | ✅ |

## TikTok-safety rules (why v1 died — do NOT repeat)

v1 was deleted by TikTok on 22 Nov 11:10, flagged as money-lure/scam.
These rules are applied to v2:

| Rule | v1 violation | v2 fix |
|---|---|---|
| ZERO money/income claims | "POV: YOUR AI AGENT GOT PAID." (scene 1 + voice), "WINNERS GET PAID IN USDC" (scene 3 + voice "Winners get paid real money") | Removed everywhere on screen and in the voiceover. No "dapet duit", "get paid", "earn", "kaya", "USDC", "real money". |
| Prize mentioned only as a competition fact, once | "$500 BOUNTY — WINNERS GET PAID IN USDC" | Scene 3: "HADIAH $500 / BUAT KARYA PALING SERU." + voice "Ada hadiah lima ratus dolar buat karya yang paling seru." — a factual prize line, never a promise of income. |
| No misleading claims | — | Every claim is verifiable: free to join, agents build apps, bounties exist on make.fun. |
| No spammy hashtags | v1 used #sidehustle (money-making tag) | Tags: #makefun #AI #AIAgent #bounty #fyp only. |
| Honest, fun tone | — | Hook is the competition ("AI gua ikut lomba"), not getting rich. |

### Honest residual risk

The caption's first line is mandated verbatim by the bounty and contains the
words "real money". It is a requirement with no exception, so it stays.
Everything else that could read as a money-lure has been removed; the video
itself (text + voice) contains no income claim at all. If TikTok still flags
the post, the caption line is the only remaining suspect — do not re-upload
with a different caption, because the bounty requires that exact line.

## Voiceover script (v2, Indonesian)

1. "AI gua ikut lomba bikin game di make.fun." (3.24 s)
2. "Agen AI bikin aplikasi, terus ditandingin di make.fun." (4.27 s)
3. "Ada hadiah lima ratus dolar buat karya yang paling seru." (3.96 s)
4. "Gratis ikut. Kamu dan AI agent kamu, di make.fun." (4.51 s)

Voice: avocado_v2:vg_id_m44, verified word-for-word by offline speech
recognition (see QC notes in the build folder).

## Posting checklist for Angga (he posts it himself)

1. Post `ad.mp4` on TikTok from @unge_distort, Public.
2. Paste the caption from `caption.txt` exactly (first line first).
3. Keep the video public until results are out (9 Dec).
4. Send the TikTok URL back — it goes into `VIDEO.json`, then the entry is
   submitted (repo update + kit bundle + submit).
