# Blog Notes

This Quarto blog is part of the main portfolio site.

## Local Development

From the repo root:

```bash
npm run dev
```

That starts the portfolio app and keeps `public/blog` in sync with the Quarto source.

If you want to preview only the blog from inside `my blog/`, you can still run:

```bash
quarto preview
```

## New Posts

1. Create a folder inside `posts/`.
2. Add a `.qmd` file with front matter like this:

```yaml
---
title: "My Post Title"
author: "Manik"
date: "2026-01-01"
categories: [news, code, analysis]
---
```

## Chatbot Endpoint

The chatbot markup lives in `chat-widget.html`.
Set the `data-chat-endpoint` attribute on `#chatbot-widget` to your backend `/chat` endpoint when it is ready.

## Build and Deploy

From the repo root:

```bash
npm run build
npm run deploy
```
