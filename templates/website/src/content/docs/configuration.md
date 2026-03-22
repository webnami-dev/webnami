---
layout: "layouts/docs"
title: "Configuration — WebNami Docs"
permalink: "/docs/configuration/"
---

# Configuration

Site-wide settings are stored in `_metadata/config.json`. You can edit this file directly or use **Admin → Settings**.

## config.json reference

```json
{
  "site": {
    "name": "My Blog",
    "description": "A short description of my blog.",
    "url": "https://myblog.com"
  },
  "theme": "void",
  "palette": "default",
  "postsPerPage": 10,
  "social": {
    "twitter": "https://twitter.com/yourhandle",
    "github": "https://github.com/yourhandle",
    "linkedin": "",
    "rss": "/feed.xml"
  }
}
```

### Fields

| Field | Type | Description |
|-------|------|-------------|
| `site.name` | string | Site name, used in the header, OG tags, and JSON-LD |
| `site.description` | string | Default meta description |
| `site.url` | string | Canonical base URL (no trailing slash) |
| `theme` | string | Theme folder name inside `themes/` |
| `palette` | string | Palette name (see below) |
| `postsPerPage` | number | Number of posts per paginated list page |
| `social.*` | string | Full URLs for social links; leave empty to hide |

## Color palettes

Eight palettes are built in. Set the `palette` field in config or switch from the admin.

| Palette name | Character |
|--------------|-----------|
| `default` | Clean blue on white |
| `forest` | Deep green tones |
| `ink` | Near-black with charcoal accents |
| `ocean` | Teal and sea blue |
| `plum` | Muted purple |
| `rose` | Warm pink |
| `slate` | Cool grey |
| `sunset` | Amber and orange |

Each palette defines CSS custom properties consumed by the active theme:

```css
--color-primary
--color-background
--color-surface
--color-content
--color-accent
--color-hover
```

To create a custom palette, add a JSON file to `palettes/` following the same structure as an existing one and set `"palette": "your-palette-name"` in config.

## Posts per page

```json
{ "postsPerPage": 10 }
```

Paginated post lists are statically generated. Changing this value requires a full rebuild.

## Next steps

- [Theme system](./themes/)
- [Deployment](./deployment/)
