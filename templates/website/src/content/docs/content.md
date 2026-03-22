---
layout: "layouts/docs"
title: "Content — WebNami Docs"
permalink: "/docs/content/"
---

# Content

Posts and pages are Markdown files stored in the `content/` directory. Each post or page lives in its own subfolder so that images and attachments stay alongside the content file.

## Posts

A post folder looks like this:

```
content/posts/my-first-post/
├── index.md
├── hero-image.jpg
└── chart.png
```

### Post frontmatter

```yaml
---
layout: post
title: My First Post
date: 2024-03-01
author: Jane Smith
category: Technology
tags: javascript, web
cover: hero-image.jpg
---

Your post content here.
```

| Field | Required | Description |
|-------|----------|-------------|
| `layout` | Yes | Must be `post` |
| `title` | Yes | Post title, also used for the slug |
| `date` | Yes | Publication date (`YYYY-MM-DD`) |
| `author` | No | Author name |
| `category` | No | Single category string |
| `tags` | No | Comma-separated list of tags |
| `cover` | No | Filename of the cover image (relative to post folder) |

### Slugs

Slugs are auto-generated from the title when a post is created through the admin. The post folder name becomes the URL slug.

Reserved slugs: `admin`, `api` — these cannot be used.

## Pages

Pages work the same as posts but live in `content/pages/`:

```
content/pages/about/
└── index.md
```

### Page frontmatter

```yaml
---
layout: page
title: About
showInHeader: true
---

Page content here.
```

| Field | Required | Description |
|-------|----------|-------------|
| `layout` | Yes | Must be `page` |
| `title` | Yes | Page title |
| `showInHeader` | No | `true` to show in site header nav (default: `true`) |

## Drafts

Drafts are stored in `content/posts/_drafts/` and `content/pages/_drafts/`. They are excluded from the built site. The admin labels them with a "Draft" badge.

To publish a draft, click **Publish** in the admin editor.

## Writing Markdown

WebNami uses standard [CommonMark](https://commonmark.org/) Markdown. Syntax highlighting is built in for fenced code blocks:

````markdown
```javascript
const hello = () => console.log('Hello, world!');
```
````

## Next steps

- [Using the admin dashboard](./admin/)
- [Handling images](./images/)
