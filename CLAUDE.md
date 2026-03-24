# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server at http://localhost:5173
npm run build    # production build → dist/
npm run preview  # serve the dist/ build locally
```

## Architecture

This is a client-side-only Vite + React app. There is no backend — all data comes from Firestore via the Firebase JS SDK running in the browser.

**Data flow:** `src/firebase.js` initializes the Firestore client using `VITE_*` env vars → `src/components/ProductList.jsx` fetches only documents where `status == "In Tour"` from the `products` collection → renders each doc's `name` field as a list item.

**Environment variables:** All Firebase config values are injected at build time via Vite's `import.meta.env`. They must be prefixed with `VITE_`. Copy `.env.example` to `.env` for local dev. For Netlify, set them under Site Settings → Environment Variables.

**Firestore collections:**
- `products` — documents must have `name` (string) and `status` (string). Only documents with `status: "In Tour"` are displayed.
- `reviewers` — managed by the companion Vercel app (agtour), not read here.

**Firestore security rules** are defined in `firestore.rules` (project root):
- `products` and `reviewers`: public read, write only for authenticated Firebase users
- All other collections: fully blocked
- Deploy via Firebase Console (Firestore → Rules → Publish) or `firebase deploy --only firestore:rules`

**Deployment:** `netlify.toml` configures Netlify to run `npm run build` and serve from `dist/`. No server-side rendering or serverless functions are used.

**Companion app:** A separate Next.js app (agtour on Vercel) handles all writes to Firestore. It authenticates via `signInWithEmailAndPassword` using env vars (`NEXT_PUBLIC_FIREBASE_ADMIN_EMAIL` / `NEXT_PUBLIC_FIREBASE_ADMIN_PASSWORD`) before performing any write operations.
