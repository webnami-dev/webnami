---
layout: "layouts/docs"
title: "Admin Dashboard — WebNami Docs"
permalink: "/docs/admin/"
---

# Admin Dashboard

The admin dashboard runs at `http://localhost:3000/admin` when the server is started with `npm start`. It is a browser-based UI for managing all your content without touching the filesystem directly.

## Posts

**`/admin/posts`** — Lists all posts (published and drafts).

- **New post** — Creates a post folder under `content/posts/`, opens the editor.
- **Edit** — Opens the Markdown editor for an existing post.
- **Delete** — Permanently removes the post folder and all its files.
- **Publish** — Moves a draft to `content/posts/` and triggers a rebuild.

## Pages

**`/admin/pages`** — Same as posts but for static pages stored in `content/pages/`.

## Markdown editor

The editor is powered by EasyMDE and includes:

- Toolbar buttons for bold, italic, headings, links, code blocks, tables, and more
- **Upload Image** button — opens a file picker, uploads the image to the post folder, and inserts `![filename](filename.jpg)` at the cursor
- **Drag and drop** — drag an image file onto the editor to upload and insert it
- **Clipboard paste** — paste an image from your clipboard to upload and insert it
- Live preview pane

### Dirty state

The **Save** button is disabled when there are no unsaved changes. It becomes active as soon as you edit the title, category, tags, or content. After saving, it returns to disabled.

## Settings

**`/admin/settings`** — Edit site-wide configuration:

- Site name, description, and URL
- Active theme
- Color palette
- Social links (Twitter/X, GitHub, LinkedIn, etc.)
- Posts per page

Changes are written to `_metadata/config.json` and trigger a site rebuild.

## Image uploads

Images uploaded through the editor are saved to the post's content folder (`content/posts/<slug>/`). Generic uploads (not associated with a post) go to `images/`.

- Maximum file size: **5 MB**
- Accepted types: JPEG, PNG, WebP, GIF
- Filenames are sanitized from the original name (spaces → hyphens, lowercase)
- If a file with the same name already exists, a counter is appended (`banner-1.jpg`, `banner-2.jpg`, etc.)

## Next steps

- [Frontmatter reference](./content/)
- [Image handling details](./images/)
- [Site configuration](./configuration/)
