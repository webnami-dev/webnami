---
layout: "layouts/docs"
title: "Images — WebNami Docs"
permalink: "/docs/images/"
---

# Images

WebNami handles image uploads, optimisation, and responsive output automatically.

## Uploading images

There are three ways to insert an image into a post:

1. **Toolbar button** — Click the image icon in the editor toolbar. A file picker opens. After upload, the image is inserted as `![filename](filename.jpg)`.
2. **Drag and drop** — Drag an image file from your desktop onto the editor area.
3. **Clipboard paste** — Copy an image and paste it into the editor with `Ctrl+V` / `Cmd+V`.

All three methods upload the file to the server and insert the correct Markdown syntax at the cursor.

## Where images are stored

| Upload context | Storage location |
|----------------|-----------------|
| Inside a post editor | `content/posts/<slug>/` |
| Inside a page editor | `content/pages/<slug>/` |
| No post/page context | `images/` |

Images are stored alongside the content they belong to, which makes moving or deleting a post straightforward — the images travel with it.

## Filename sanitisation

Uploaded filenames are cleaned automatically:

- Converted to lowercase
- Spaces and special characters replaced with hyphens
- If a file with the same name already exists, a counter is appended

| Original filename | Saved as |
|-------------------|----------|
| `My Hero Photo.jpg` | `my-hero-photo.jpg` |
| `Résumé & CV!.png` | `r-sum-cv.png` |
| `banner.jpg` (duplicate) | `banner-1.jpg` |

## Accepted formats and limits

- **Formats:** JPEG, PNG, WebP, GIF
- **Maximum size:** 5 MB per file

## Responsive image optimisation (production)

In production builds (`npm run build`), every image referenced in a template is processed by `@11ty/eleventy-img`:

- Converted to **WebP**
- Resized to **360 px**, **720 px**, and **1080 px** widths
- Output filenames follow the pattern `<stem>-<width>.webp` (e.g. `hero-1080.webp`)
- A `<picture>` element with `srcset` is generated automatically so browsers load the right size

This optimisation only runs during production builds. In development (`npm start`) the original image is served as-is.

## Cover images

Set a cover image for a post in the frontmatter:

```yaml
cover: hero-image.jpg
```

The filename is relative to the post's folder. The theme uses the `imageFilter` to serve the optimised WebP version in production.

## Next steps

- [Writing content](./content/)
- [SEO and OG images](./seo/)
