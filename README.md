# Portfolio

My personal portfolio site — built with React and Vite, deployed to GitHub Pages via GitHub Actions.

Live at [duyatran.com](https://www.duyatran.com).

## Stack

- React + React Router
- Vite
- Plain CSS (no framework)

## Development

```bash
npm install
npm run dev
```

## Editing content

All personal content (bio, projects, skills, experience) lives in `src/data/site.js` — edit that file to update the site.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the app and publishes it to GitHub Pages.
