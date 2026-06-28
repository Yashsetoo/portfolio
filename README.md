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

## Deploy to GitHub Pages

1. Create a new GitHub repository (e.g. `portfolio`).
2. Push this folder to it (see commands below).
3. In the repo: **Settings → Pages → Build and deployment → Source = GitHub Actions**.
4. The included workflow (`.github/workflows/deploy.yml`) deploys automatically on
   every push to `main`. Your site goes live at:
   `https://<your-username>.github.io/<repo-name>/`

### First push

```bash
git init
git add .
git commit -m "Initial commit: DevOps portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```
