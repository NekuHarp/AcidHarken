# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start Vite dev server with HMR
- `npm run build` — Production build
- `npm run lint` — Run ESLint
- `npm run preview` — Preview production build

## Architecture

AcidHarken is an amino acid composition calculator. Users paste a protein sequence (single-letter amino acid codes), and the app computes the percentage of each amino acid and a weighted refractive index.

**Stack:** React 19, Vite 7, MUI 7, Emotion, react-hook-form

**Key files:**
- `src/features/acid/AcidCalculator.jsx` — Main calculator component; parses sequences, computes per-residue percentages and weighted refractive index using `ACID_COLLECTION`. Notably, react-hook-form is used to store both input (`acidChain`) and computed output (`percents`, `finalResult`) as form state via `setValue`.
- `src/constants.js` — `ACID_COLLECTION` maps single-letter codes to 3-letter labels and refractive index weights. `INPUT_VALIDATION` exists but most entries are unused in this app; only `REQUIRED` is referenced.
- `src/theme/index.jsx` — Wraps the app in MUI `ThemeProvider`; exposes `theme.custom.isSpooky` (true on Oct 31) and `theme.custom.isMerry` (true in December) via `src/utils/`.
- `src/components/Page.jsx` — Full-viewport layout wrapper

## Code Conventions

- ESLint config enforces: sorted imports (`sort-imports`), no implicit coercion, security plugin, prettier formatting, node plugin
- 4-space indentation in JSX/JS files
- No test files exist in this project
