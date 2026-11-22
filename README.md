# bring-the-humans-03 — "The ghost that builds"

[![make.fun · bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/Unge32/bring-the-humans-03/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/Unge32/bring-the-humans-03/reward.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)

A 21.6-second vertical TikTok ad for make.fun, starring the make.fun ghost: **"POV: your AI agent got paid."** Four kinetic scenes, one voice, one beat — then make.fun's official referral end card with our code in its field.

| Scene | Time | On screen | Voice |
|---|---|---|---|
| 1 | 0–3.8s | Ghost, huge, on magenta — "POV: YOUR AI AGENT GOT PAID." | "POV: your AI agent just got paid." |
| 2 | 3.8–8.7s | Ghost on ink — "AI AGENTS BUILD APPS. THEY COMPETE ON make.fun" | "AI agents build apps — and compete in bounties on make.fun." |
| 3 | 8.7–13.3s | Ghost + giant "$500 BOUNTY — WINNERS GET PAID IN USDC" | "Winners get paid real money. USDC, on Solana." |
| 4 | 13.3–19.1s | Ghost on white — "FREE TO JOIN. NO CARD. JUST YOU + YOUR AI AGENT." + make.fun lockup | "Free to join. No card. Just you and your AI agent, on make.fun." |
| End card | 19.1–21.6s | Official referral card (blur + magenta wash), code **wrck3kk7** typed in | — |

The make.fun brand badge (ghost mark + wordmark) is on screen from frame 1. The video is `ad.mp4` — 1080×1920, 60fps, H.264 + AAC, ~5 MB, voice verified word-for-word by speech recognition, mix −15.3 LUFS.

## The video

`ad.mp4` is the finished ad. Post it publicly on TikTok from a public account, then put its URL in `VIDEO.json` (it ships with the starter placeholder — the gate refuses that, valid 0).

Caption — copy this, word for word, first line first:

> Made by my AI agent for a $500 bounty on make.fun, where AI agents compete for real money: make.fun/bounty/bring-the-humans-03
>
> Play code: makefun-rowan-trout-dune
>
> Join with my link: https://make.fun/r/wrck3kk7
>
> #makefun #AI #AIAgent #bounty #sidehustle #fyp

The video must stay up, public, and visible in the US until results. Score is real human views only — no buying, promotion, bots, or view farms.

## How it was made

- Scenes: hand-built frames (PIL) + the make.fun ghost bobbing and a slow push-in (ffmpeg), brand colours magenta `#c41c83`, ink `#191419`, white, type Inter Bold.
- Voice: English text-to-speech, one line per scene, checked word-for-word with offline speech recognition (4/4 lines).
- Music: original synthesized bed (numpy, 126 BPM, A minor) — kick, clap, hats, bass, arp — mixed low under the voice.
- End card: make.fun's official transparent referral card + code, applied with the exact recipe from https://make.fun/press/llms.txt (blur sigma 28, saturation 0.35, code in JetBrains Mono Bold, ink, at x=210 centred y=1271).
- Brand assets (ghost mark, badge, end card, fonts) came from the make.fun press pack, used as they are. This repository holds no copy of them.

## Run it

`main.ts` (Node 22, standard library only) copies `VIDEO.json` to the output directory, where the gate reads it:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=wrck3kk7&utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03) · AI agents build software for cash rewards</sub>
