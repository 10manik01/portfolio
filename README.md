# Manik Syangtan Portfolio and Blog

This repository contains Manik Syangtan's personal portfolio website and an integrated Quarto blog.

The portfolio frontend is built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, and Swiper. The blog lives in `my blog/` and is rendered with Quarto, then synced into the portfolio app under `public/blog`.

## Features

- Personal portfolio with mobile and desktop layouts
- Integrated Quarto-powered blog
- Animated hero section and project showcase
- Contact section and external profile links
- Theme toggle
- Optional chatbot endpoint support

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Swiper
- Quarto

## Project Structure

```text
.
|-- src/                  # React app source
|-- public/               # Static assets served by Vite
|   `-- blog/             # Generated blog output copied from Quarto
|-- my blog/              # Quarto blog source
|   |-- posts/            # Blog post folders and .qmd files
|   |-- _quarto.yml       # Quarto site configuration
|   `-- _site/            # Quarto-generated blog output
|-- scripts/              # Dev/build helpers for app + blog sync
|-- index.html            # Portfolio HTML entry
`-- vite.config.ts        # Vite config with GitHub Pages base path
```

## Requirements

Before running this project locally, make sure you have:

- Node.js
- npm
- Quarto

Quarto is required because the blog is rendered as part of both development and production builds.

## Getting Started

Install dependencies:

```bash
npm install
```

Start local development:

```bash
npm run dev
```

This does two things:

- renders the Quarto blog
- starts the Vite development server

If you only want to run the React app:

```bash
npm run dev:app
```

## Available Scripts

```bash
npm run dev          # Render blog, watch blog changes, and start Vite
npm run dev:app      # Start only the Vite app
npm run blog:render  # Manually render the Quarto blog into public/blog
npm run build        # Render the blog and build the portfolio for production
npm run build:app    # Build only the React/Vite app
npm run preview      # Preview the Vite production build
npm run deploy       # Deploy dist/ with gh-pages
```

## Blog Workflow

Write future blog posts inside:

```text
my blog/posts/<post-folder>/<post-file>.qmd
```

Example:

```text
my blog/posts/ai-agents/ai-agents.qmd
my blog/posts/ai-agents/cover.png
```

Recommended workflow for a new post:

1. Create a new folder inside `my blog/posts/`
2. Add your `.qmd` file in that folder
3. Add any post-specific images in the same folder
4. Run `npm run dev` or `npm run blog:render`

Important:

- Do not add new posts to `public/blog/`
- Do not edit `my blog/_site/` directly
- Both of those folders are generated output

Shared defaults for blog posts are stored in:

- `my blog/posts/_metadata.yml`

## Environment Variables

The chatbot can use an external backend endpoint through:

```bash
VITE_CHAT_ENDPOINT=<your-chat-endpoint>
```

If this variable is not set, the chatbot UI still loads but returns a fallback message.

## Deployment

The site is configured for GitHub Pages with this base path:

```text
/portfolio/
```

That base is defined in `vite.config.ts`, so if you change the repository name or deployment path, update it there as well.

Production build:

```bash
npm run build
```

Deploy:

```bash
npm run deploy
```

## Notes

- The blog source is in `my blog/`
- The synced blog used by the portfolio app is `public/blog/`
- The Quarto build output inside the blog project is `my blog/_site/`
- The portfolio title, favicon, and blog settings are configured separately for the React app and Quarto blog
