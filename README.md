# FYP Website

A personal Final Year Project (FYP) showcase website built with React, Vite, and TypeScript. This repo contains the frontend for showcasing projects, featuring a responsive grid, project detail modal pages, stats, testimonials, and contact/referral components.

## Features

- Projects grid and detail view
- Responsive layout and hero section
- Contact / referral system UI
- Stats and testimonials components
- Simple data-driven project list in `src/data/`

## Tech stack

- React
- TypeScript
- Vite
- CSS modules / plain CSS

## Prerequisites

- Node.js (16+ recommended)
- npm or yarn

## Install

```bash
npm install
# or
# yarn
```

## Development

Run the dev server with Vite:

```bash
npm run dev
```

Open http://localhost:5173 (or the URL shown in the terminal).

## Build

```bash
npm run build
npm run preview
```

## Project structure (high level)

- `index.html` - app entry
- `src/main.tsx` - React entry
- `src/App.tsx` - top-level app
- `src/components/` - UI components (Hero, Navigation, ProjectsGrid, ProjectCard, ProjectDetailModal, Footer, etc.)
- `src/data/` - `allProjects.ts`, `projects.ts` — where project content is defined
- `public/` - static assets

## How to edit projects

Project data is driven by `src/data/allProjects.ts` and `src/data/projects.ts`. Add or update project objects there to change the displayed content.

## Contributing

If you'd like to contribute or suggest changes, open an issue or submit a PR with a short description of the change.

## License

This project is provided as-is. Add a `LICENSE` file to declare an open-source license (e.g., MIT) if you want to make it explicit.
