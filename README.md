# Yash Jadhav — DevOps Portfolio

A fast, responsive, dark-themed portfolio website for a DevOps / Cloud Engineer.
Built with plain HTML, CSS, and JavaScript — no build step, no framework.

## Project structure

```
.
├─ index.html              # page structure
├─ css/styles.css          # all styling + light/dark themes
├─ js/data.js              # ★ ALL CONTENT lives here (edit this)
├─ js/main.js              # rendering + interactions
├─ assets/
│  ├─ profile.jpg          # hero photo
│  ├─ Resume_Yash.pdf      # resume (download + preview)
│  └─ certs/               # certificate files
├─ serve.ps1               # local dev server (Windows / PowerShell only)
├─ .nojekyll               # tells GitHub Pages to serve files as-is
└─ .github/workflows/deploy.yml  # auto-deploy to GitHub Pages
```

## Edit your content

Open **`js/data.js`** — it's the only file you need to touch. Update your name,
links, projects, skills, experience, certifications, etc. and save.

## Run locally (Windows)

```powershell
.\serve.ps1
```

Then open http://localhost:8080

## Deploy to GitHub Pages (branch method)

1. Push this folder to a **public** GitHub repository.
2. In the repo: **Settings → Pages → Build and deployment → Source → "Deploy from a branch"**.
3. Set **Branch = `main`** and **folder = `/ (root)`**, then **Save**.
4. Wait ~1 minute. Your site goes live at:
   `https://<your-username>.github.io/<repo-name>/`

Every future push to `main` redeploys automatically. The included `.nojekyll`
file ensures all files (including the `assets/` folder) are served as-is.

### First push

```bash
git init
git add .
git commit -m "Initial commit: DevOps portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```
