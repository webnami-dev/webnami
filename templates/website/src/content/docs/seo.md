---
layout: "layouts/docs"
title: "SEO — WebNami Docs"
permalink: "/docs/seo/"
---

# SEO

WebNami includes SEO essentials out of the box. No plugins or additional setup required.

## Meta tags

Every page gets:

```html
<title>Post Title — Site Name</title>
<meta name="description" content="..." />
<link rel="canonical" href="https://myblog.com/my-post/" />
```

The description comes from the post's frontmatter or falls back to the site description in `config.json`.

## OpenGraph & Twitter cards

```html
<meta property="og:title" content="Post Title" />
<meta property="og:description" content="..." />
<meta property="og:image" content="https://myblog.com/images/og-image.png" />
<meta property="og:type" content="article" />
<meta name="twitter:card" content="summary_large_image" />
```

The OG image is auto-generated from the site name at build time using Sharp and stored at `content/site/og-image.png`.

## JSON-LD structured data

Every post includes a `BlogPosting` schema:

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Post Title",
  "datePublished": "2024-03-01",
  "author": { "@type": "Person", "name": "Jane Smith" },
  "publisher": { "@type": "Organization", "name": "My Blog" }
}
```

Search engines use this to understand your content and display rich results.

## Sitemap

A `sitemap.xml` is generated at build time and lists all published posts and pages. Submit it to Google Search Console at `https://yourdomain.com/sitemap.xml`.

## RSS feed

An RSS feed is available at `/feed.xml`. It lists all published posts with full content. Add it to your site header so feed readers can auto-discover it:

```html
<link rel="alternate" type="application/rss+xml" title="My Blog" href="/feed.xml" />
```

This is handled automatically by the default theme.

## robots.txt

A `robots.txt` is generated that allows all crawlers and points to the sitemap:

```
User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap.xml
```

## Custom 404 page

A `404.html` is generated from `content/404.njk`. Configure your host to serve it on missing routes (most static hosts do this automatically).

## Next steps

- [Configuration](./configuration/)
- [Deployment](./deployment/)
