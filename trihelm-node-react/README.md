# Horizon Development Group — Node.js + React (Vite) + Tailwind

A production-ready static website powered by React and Tailwind, served by a tiny Express server for portability.
Deploy from **GitHub** to a temporary host (Vercel/Render/Railway) and later point your **custom domain**.

## 1) Local setup

```bash
npm install
npm run dev      # Vite dev server (hot reload at http://localhost:5173)
```

## 2) Build

```bash
npm run build    # outputs to /dist
npm run preview  # serves the static build (optional: http://localhost:4173)
```

## 3) Serve via Node (Express)

```bash
npm run build
npm start        # serves /dist on http://localhost:3000
```

## 4) Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Horizon website"
git branch -M main
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
```

## 5) Deploy options (pick one)

### Option A — Vercel (fastest)
- Import your GitHub repo in Vercel.
- Framework preset: **Vite**.
- Build command: `npm run build`
- Output directory: `dist`
- Static hosting is fine; or switch to Node server if needed.

### Option B — Render (Node Web Service)
- New **Web Service** → connect GitHub repo
- Build command: `npm install && npm run build`
- Start command: `npm start`
- Environment: Node LTS

### Option C — Railway/Heroku (Node)
- Ensure build step runs and `npm start` boots Express.

## 6) Connect your custom domain
- Add your domain in the host dashboard (e.g., `horizondevgroup.com`).
- Create the DNS records at your registrar as instructed.
- Enable HTTPS.

## 7) Customize
- Edit React content in `src/App.jsx`.
- Tailwind utilities in `src/index.css`.
- Add assets or a favicon in `/public` (create if needed).

---

For a quick contact form that emails you: try **Formspree** or **Resend**,
or save to a DB (Supabase/Firestore) and send notifications.
