<h1 align="center">AI Apotek — Hero &amp; Store Concept</h1>

<p align="center">
  A full-screen, motion-driven landing experience for a modern <strong>online-pharmacy</strong> brand.<br/>
  Built with <strong>React + TypeScript + Tailwind CSS</strong> on <strong>Vite</strong> — a looping cinematic
  hero, animated statistics, and a themed product-category view.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Live%20Demo%20%E2%86%92-Coming%20Soon-0a0a0a?style=for-the-badge&labelColor=0a0a0a" alt="Live Demo — Coming Soon" height="34" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=fff" alt="Vite 5" />
  <img src="https://img.shields.io/badge/React-18-149ECA?logo=react&logoColor=fff" alt="React 18" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=fff" alt="TypeScript 5" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3-38BDF8?logo=tailwindcss&logoColor=fff" alt="Tailwind CSS 3" />
  <img src="https://img.shields.io/badge/motion-count--up%20%2B%20reveal-111411" alt="Motion" />
  <img src="https://img.shields.io/badge/License-MIT-fdf1e1" alt="License MIT" />
</p>

---

A single-screen hero for a fictional pharmacy brand, **AI Apotek** (repo: `Protect-your-knees`). A muted background video loops behind
a pure black-and-white interface: a floating pill navbar, an oversized headline that reveals word by word,
and live statistics that count up from zero. The primary call-to-action opens a second, fully themed
**category view** that mirrors the same visual language. Motion-safe, keyboard-accessible, and
framework-idiomatic throughout.

> Design direction started from a [MotionSites](https://motionsites.ai) prompt, then was extensively
> reworked — new brand, content, imagery, animations and a second screen.

## ✨ Highlights

- **Cinematic hero** — a fullscreen, `object-cover` looping video sits behind a floating, pill-shaped navbar.
- **Word-by-word headline** — `protect / your / knees` reveals with a staggered **blur → rise → fade**
  sequence on a custom `cubic-bezier` easing.
- **Live count-up stats** — `+1.5K` and `300K+` animate from zero on every load via `requestAnimationFrame`
  and an `easeOutExpo` curve, with `tabular-nums` so the digits never jitter.
- **Themed store view** — the **Order** button opens a dark category grid (eight circular product tiles),
  built as an app-level view with scroll reset — no router needed.
- **Real cut-out imagery** — the navbar logo and every category tile are background-removed (ML segmentation)
  and masked into clean transparent PNGs.
- **Motion-safe & accessible** — honours `prefers-reduced-motion`, single semantic `<h1>`, `<main>` landmarks,
  `aria-hidden` decorative video, visible `focus-visible` rings, and a global no-`I-beam` cursor rule.
- **Monochrome by design** — a disciplined palette of pure black, white, `neutral-900` and white-opacity tints,
  set in **Readex Pro**.

## 🛠 Built with

`Vite 5` · `React 18` · `TypeScript 5` (strict) · `Tailwind CSS 3` · `Readex Pro`
Animation via `requestAnimationFrame` + CSS `@keyframes`. Imagery cut out with ML background removal (BiRefNet / U²-Net).

## ⚙️ Under the hood

- **`CountUp.tsx`** — a self-contained counter: one `requestAnimationFrame` loop eased with `easeOutExpo`,
  lazy-initialised to avoid a first-frame flash, cleaned up on unmount, and short-circuited under reduced-motion.
- **Reveal &amp; entrance** — pure CSS `@keyframes` (`wordReveal`, `cardIn`) driven by per-element
  `animation-delay`, so the browser composites `transform` / `opacity` / `filter` on the GPU.
- **Navigation** — `App.tsx` swaps between the hero and the category view with a single piece of state and a
  scroll reset; each screen mounts fresh, so its entrance animations replay naturally.

## 🚀 Run it locally

```bash
git clone https://github.com/Niko5886/Protect-your-knees.git
cd Protect-your-knees
npm install
npm run dev
```

Then open the printed URL (default **http://localhost:5173**).

```bash
npm run build     # type-check + production build
npm run preview   # serve the build locally
```

## 📁 Structure

```
├─ index.html              → document shell & meta
├─ src/
│  ├─ main.tsx             → React entry
│  ├─ App.tsx              → hero ↔ category view state + scroll reset
│  ├─ Hero.tsx             → navbar, looping video, headline, count-up stats
│  ├─ OrderPage.tsx        → dark category grid (8 tiles)
│  ├─ CountUp.tsx          → rAF counter (easeOutExpo, reduced-motion)
│  └─ index.css            → globals, Readex Pro, keyframes, cursor rules
├─ public/
│  ├─ logo.png             → background-removed product logo
│  └─ categories/          → 8 circular, transparent category images
└─ tailwind.config.js
```

## ♿ Accessibility &amp; notes

- `prefers-reduced-motion` disables the count-up and reveal animations (final values shown immediately).
- One semantic `<h1>` per screen, `<main>` landmarks, `aria-hidden` on the decorative video, `focus-visible`
  rings on every interactive control, and a global `cursor: default` (pointer only on interactive elements).
- The category tiles are **presentational by design** — they mirror the reference layout and carry no click actions.
- **Assets:** the hero video streams from a remote CDN, so an internet connection is required for playback.

## 👤 Author

**Nikolay Stoyanov** — AI-native Full-Stack Developer
[GitHub](https://github.com/Niko5886) · [LinkedIn](https://www.linkedin.com/in/nikolay-stoyanov-dev)

## 📄 License

[MIT](LICENSE) © 2026 Nikolay Stoyanov
