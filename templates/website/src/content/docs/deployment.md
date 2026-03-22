---
layout: "layouts/docs"
title: "Deployment — WebNami Docs"
permalink: "/docs/deployment/"
---

# Deployment

WebNami generates a static site in `_site/`. You can host this folder on any static hosting provider.

## Building for production

```bash
npm run build
```

This runs a full production build:
- Tailwind CSS and JS are minified and cache-busted
- Images are converted to WebP and resized to 360/720/1080 px
- HTML is minified
- Sitemap, RSS feed, and robots.txt are generated
- Output goes to `_site/`

## Netlify

1. Push your project to a GitHub repository
2. Go to [netlify.com](https://netlify.com) → **Add new site → Import from Git**
3. Set the build settings:

| Setting | Value |
|---------|-------|
| Build command | `npm run build` |
| Publish directory | `_site` |

4. Deploy. Netlify will rebuild on every push to your main branch.

Add a `netlify.toml` for redirect rules:

```toml
[[redirects]]
  from = "/*"
  to = "/404.html"
  status = 404
```

## Vercel

1. Push to GitHub
2. Import the project at [vercel.com](https://vercel.com)
3. Override the build settings:

| Setting | Value |
|---------|-------|
| Build command | `npm run build` |
| Output directory | `_site` |

## GitHub Pages

1. Build locally: `npm run build`
2. Push the `_site/` contents to a `gh-pages` branch, or configure GitHub Actions:

```yaml
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./_site
```

## Cloudflare Pages

1. Connect your repository in the Cloudflare Pages dashboard
2. Build settings:

| Setting | Value |
|---------|-------|
| Build command | `npm run build` |
| Build output directory | `_site` |

## VPS / self-hosted

Serve the `_site/` directory with any web server.

**nginx:**

```nginx
server {
  listen 80;
  server_name myblog.com;
  root /var/www/myblog/_site;
  index index.html;

  error_page 404 /404.html;

  location / {
    try_files $uri $uri/ $uri.html =404;
  }
}
```

**Caddy:**

```
myblog.com {
  root * /var/www/myblog/_site
  file_server
  handle_errors {
    rewrite * /404.html
    file_server
  }
}
```

## Environment variable

Set `NODE_ENV=production` to enable image optimisation and HTML minification:

```bash
NODE_ENV=production npm run build
```

This is set automatically when using `npm run build`.

## Next steps

- [SEO checklist](./seo/)
- [Configuration](./configuration/)
