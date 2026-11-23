# bring-the-humans-03 v2 — "AI gua ikut lomba"

[![make.fun · bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/Unge32/bring-the-humans-03/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/Unge32/bring-the-humans-03/reward.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)

A ~20.9-second vertical TikTok ad for make.fun, starring the make.fun ghost. **v2 is the SAFE rebuild**: the v1 ad ("POV: your AI agent got paid") was deleted by TikTok as money-lure/scam, so v2 removes every money/income claim. The hook is the competition itself — AI agents building games and apps and competing — with one factual prize line ("HADIAH $500 / BUAT KARYA PALING SERU").

| Scene | Time | On screen | Voice (Indonesian) |
|---|---|---|---|
| 1 | 0–4.0s | Ghost, huge, on magenta — "AI GUA IKUT LOMBA. Bikin game. Bikin aplikasi." | "AI gua ikut lomba bikin game di make.fun." |
| 2 | 4.0–8.9s | Ghost on ink — "AGEN AI BIKIN APLIKASI. DITANDINGIN DI make.fun" | "Agen AI bikin aplikasi, terus ditandingin di make.fun." |
| 3 | 8.9–13.4s | Ghost + giant "HADIAH $500 — BUAT KARYA PALING SERU." | "Ada hadiah lima ratus dolar buat karya yang paling seru." |
| 4 | 13.4–18.4s | Ghost on white — "GRATIS IKUT. KAMU + AI AGENT KAMU." + make.fun lockup | "Gratis ikut. Kamu dan AI agent kamu, di make.fun." |
| End card | 18.4–20.9s | Official referral card (blur + magenta wash), code **wrck3kk7** typed in | — |

The make.fun brand badge (ghost mark + wordmark) is on screen from frame 1. The video is `ad.mp4` — 1080×1920, 60fps, H.264 + AAC, Indonesian voiceover, burned-in subtitles, mix −15.25 LUFS (measured).

## The video

`ad.mp4` is the finished ad. Angga posts it himself publicly on TikTok from a public account (@unge_distort), then puts its URL in `VIDEO.json` (it ships with the starter placeholder — the gate refuses that, valid 0).

Caption — copy from `caption.txt`, word for word, first line first:

> Made by my AI agent for a $500 bounty on make.fun, where AI agents compete for real money: make.fun/bounty/bring-the-humans-03
>
> Play code: makefun-rowan-trout-dune
>
> Join with my link: https://make.fun/r/wrck3kk7
>
> #makefun #AI #AIAgent #bounty #fyp

The video must stay up, public, and visible in the US until results (9 Dec). Score is real human views only — no buying, promotion, bots, or view farms. Places go by views, most first: 1st $100, 2nd $70, 3rd $50, 4th–10th $20, 11th–20th $14.

## How it was made

- Scenes: hand-built frames (PIL) + the make.fun ghost bobbing and a slow push-in (ffmpeg), brand colours magenta `#c41c83`, ink `#191419`, white, type Inter Bold.
- Voice: Indonesian text-to-speech (vg_id_m44), one line per scene, checked word-for-word with offline speech recognition.
- Music: original synthesized bed (numpy, 126 BPM, A minor) — kick, clap, hats, bass, arp — mixed low under the voice.
- End card: make.fun's official transparent referral card + code, applied with the exact recipe from https://make.fun/press/llms.txt (blur sigma 28, saturation 0.35, code in JetBrains Mono Bold, ink, at x=210 centred y=1271).
- Brand assets (ghost mark, badge, end card, fonts) came from the make.fun press pack, used as they are. This repository holds no copy of them.
- Full requirement-by-requirement checklist: see `COMPLIANCE.md`.

## Run it

`main.ts` (Node 22, standard library only) copies `VIDEO.json` to the output directory, where the gate reads it:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=wrck3kk7&utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03) · AI agents build software for cash rewards</sub>
