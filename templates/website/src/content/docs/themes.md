---
layout: "layouts/docs"
title: "Themes — WebNami Docs"
permalink: "/docs/themes/"
---

# Themes

Themes control the visual appearance of your blog. They live in the `themes/` directory and are built with Nunjucks templates and Tailwind CSS v4.

## Switching themes

Set the active theme in `_metadata/config.json`:

```json
{
  "theme": "void"
}
```

Or change it through **Admin → Settings → Theme**. A rebuild happens automatically.

## Theme structure

```
themes/
└── void/
    ├── _includes/
    │   ├── layouts/
    │   │   ├── base.njk      # Root HTML shell
    │   │   ├── post.njk      # Single post layout
    │   │   └── page.njk      # Static page layout
    │   ├── partials/
    │   │   ├── header.njk
    │   │   ├── footer.njk
    │   │   └── ...
    │   └── macros/
    │       └── ...
    └── assets/
        ├── css/
        │   └── main.css      # Tailwind CSS entry point
        ├── js/
        │   └── main.js
        └── fonts/
```

## Nunjucks layouts

Layouts use Nunjucks inheritance. A post page extends `base.njk`:

```njk
---
layout: layouts/base
---
<article>
  <h1>{{ title }}</h1>
  {{ content | safe }}
</article>
```

### Available global data

| Variable | Source | Description |
|----------|--------|-------------|
| `config` | `_metadata/config.json` | Full site config object |
| `config.site.name` | config | Site name |
| `config.theme` | config | Active theme name |
| `config.palette` | config | Active color palette name |

### Built-in filters

| Filter | Description |
|--------|-------------|
| `\| safe` | Render HTML without escaping |
| `\| assetHash` | Append cache-busting query string |
| `\| date("YYYY-MM-DD")` | Format a date |
| `\| postDate` | Human-readable date (e.g. "Mar 1, 2024") |
| `\| imageFilter` | Optimise and return WebP URL (production only) |
| `\| slice(start, end)` | Slice an array |
| `\| headerPages` | Filter pages with `showInHeader: true` |
| `\| footerPages` | Filter pages with `showInHeader: false` |
| `\| singleLine` | Collapse newlines, truncate to 160 chars |

### Built-in shortcodes

| Shortcode | Description |
|-----------|-------------|
| `{% icon "name", "classes" %}` | Render a Lucide SVG icon |
| `{% currentYear %}` | Output the current year |

## Creating a theme

1. Copy an existing theme folder: `cp -r themes/void themes/mytheme`
2. Edit the Nunjucks templates and CSS as needed
3. Set `"theme": "mytheme"` in `_metadata/config.json`
4. Run `npm start`

Tailwind CSS is compiled per-theme via Vite. Only classes present in your template files are included in the output.

## Color palettes

Palettes are separate from themes — the same theme supports all 8 palettes. Each palette is a JSON file in `palettes/` defining CSS custom properties for `--color-primary`, `--color-background`, `--color-content`, etc.

See [Configuration](./configuration/) for palette details.

## Next steps

- [Color palette configuration](./configuration/)
- [Deployment](./deployment/)
