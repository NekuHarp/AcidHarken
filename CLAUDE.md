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

**Key structure:**
- `src/features/acid/AcidCalculator.jsx` — Main calculator component; parses sequences, computes per-residue percentages and weighted refractive index using `ACID_COLLECTION`
- `src/constants.js` — `ACID_COLLECTION` maps single-letter amino acid codes to labels and refractive index weights; `INPUT_VALIDATION` holds form validation messages
- `src/theme/` — MUI theme configuration with custom palette, typography, shadows, and seasonal flags (`isSpooky`, `isMerry`)
- `src/components/Page.jsx` — Full-viewport layout wrapper

## Code Conventions

- ESLint config enforces: sorted imports (`sort-imports`), no implicit coercion, security plugin, prettier formatting, node plugin
- Uses 4-space indentation in JSX/JS files
- UI text is in French (labels like "Séquence", "Calcul", "Indice de réfraction")
