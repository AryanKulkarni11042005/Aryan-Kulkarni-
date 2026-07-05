# Aryan Kulkarni — Portfolio

A premium, editorial personal portfolio. Dark, typography-first, 90% monochrome with a single blue accent. Built as a real containerized system: React SPA, Express API, and an Nginx reverse proxy, all orchestrated with Docker Compose and deployed via GitHub Actions.

## Architecture

```
┌─────────────────────────────────────────────┐
│                nginx (edge, :80)            │
│   /api/* ──► backend      /* ──► frontend   │
└─────────────────────────────────────────────┘
        │                        │
┌───────▼────────┐      ┌────────▼─────────┐
│ backend        │      │ frontend         │
│ Express :4000  │      │ nginx + Vite dist│
│ GET /api/profile│     │ SPA fallback     │
└────────────────┘      └──────────────────┘
```

```
frontend/   React + Vite + TypeScript + Tailwind CSS v4 + Framer Motion
backend/    Node.js + Express — serves GET /api/profile and /api/health
nginx/      nginx.conf (edge reverse proxy) + frontend.conf (static SPA server)
docker/     Dockerfiles for all three images
.github/    CI/CD — typecheck, build, smoke test, docker build, SSH deploy
```

## Run with Docker (production setup)

```bash
docker compose up --build
# → http://localhost
```

## Local development

```bash
# Terminal 1 — API on :4000
cd backend && npm install && npm run dev

# Terminal 2 — Vite dev server on :5173 (proxies /api → :4000)
cd frontend && npm install && npm run dev
```

## Deployment (GitHub Actions)

Every push to `main` runs typecheck + build, boots the API and smoke-tests
`/api/profile`, and builds all Docker images. To enable automatic deploys,
add these repository secrets: `DEPLOY_HOST`, `DEPLOY_USER`, `DEPLOY_KEY`
(an SSH private key). The workflow then pulls and rebuilds on the server
with `docker compose up -d --build`.

## Things to personalize

- `frontend/public/resume.pdf` — replace the placeholder with your real resume.
- GitHub / LinkedIn URLs — set them in `frontend/src/data/profile.ts` **and**
  `backend/src/data/profile.js` (currently guessed usernames).
- Project visuals — `frontend/src/components/ProjectVisual.tsx` renders
  hand-drawn SVG diagrams; swap in real screenshots when available.
