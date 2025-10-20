# Repair Tracker (Beta)

A minimal Vite + React starter that runs locally and deploys cleanly on Vercel.

## Local setup

```bash
# install
npm install

# dev
npm run dev
```

Open the URL shown in your terminal (usually http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

When importing the repo in Vercel:

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install` (default)

No additional config files are required for this basic setup.

---

## Bootstrap

This project includes Bootstrap 5.

- CSS is imported in `src/main.jsx` from `bootstrap/dist/css/bootstrap.min.css`.
- JS (for interactive components like modals, dropdowns) is imported from `bootstrap/dist/js/bootstrap.bundle.min.js`.

When you `npm install` locally or Vercel builds the project, Bootstrap will be installed automatically.