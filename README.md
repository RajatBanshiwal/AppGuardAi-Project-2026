# AppGuardAi Project

Repository layout

- `AppGuardAi Website/` — Frontend website project (Vite + React/Tailwind). The website source is under `AppGuardAi Website/Frontend/`.
- `AppGuardAi-Desktop-App/` — Electron + Vite frontend for the desktop app. Main UI is in `AppGuardAi-Desktop-App/frontend/`.

Quick notes

- Both projects have their own `package.json` files under their `Frontend` or `frontend` folders; install dependencies and run their dev servers there.
- This repository's root contains these two top-level folders only.

How to run (local)

Website:

```powershell
cd "AppGuardAi Website/Frontend"
npm install
npm run dev
```

Desktop app (frontend only):

```powershell
cd "AppGuardAi-Desktop-App/frontend"
npm install
npm run dev
```

If you want me to add top-level scripts, CI, or split the projects into separate repos, tell me and I will prepare that.

Contact

- Repo: https://github.com/RajatBanshiwal/AppGuardAi-Project-2026
