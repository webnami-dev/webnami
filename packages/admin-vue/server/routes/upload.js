import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";

const contentDir = path.resolve("content");
const imagesDir = path.resolve("images");

const ALLOWED_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
]);
const EXT_MAP = {
  "image/jpeg": ".jpg",
  "image/png": ".png",
  "image/webp": ".webp",
  "image/gif": ".gif",
};
const ALLOWED_CONTENT_TYPES = new Set(["posts", "pages"]);

const DRAFT_PREFIXES = { posts: "draft-post-", pages: "draft-page-" };

function resolveUploadDir(req) {
  const { slug, type } = req.body;
  if (!slug || !type) return imagesDir;
  if (!ALLOWED_CONTENT_TYPES.has(type)) return null;

  const prefix = DRAFT_PREFIXES[type];
  const subdir =
    prefix && slug.startsWith(prefix)
      ? path.join(type, "_drafts", slug)
      : path.join(type, slug);
  const resolved = path.resolve(contentDir, subdir);
  if (!resolved.startsWith(contentDir + path.sep)) return null;

  return resolved;
}

const storage = multer.diskStorage({
  destination(req, _file, cb) {
    const dir = resolveUploadDir(req);
    if (!dir) return cb(new Error("Invalid upload destination."));
    if (!fs.existsSync(dir)) {
      return cb(new Error("Post or page folder does not exist."));
    }
    cb(null, dir);
  },
  filename(req, file, cb) {
    const dir = resolveUploadDir(req);
    const ext = EXT_MAP[file.mimetype] ?? path.extname(file.originalname);
    const stem = path.basename(
      file.originalname,
      path.extname(file.originalname),
    );
    const safeStem =
      stem
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "") || "image";

    let name = `${safeStem}${ext}`;
    if (dir) {
      let counter = 1;
      while (fs.existsSync(path.join(dir, name))) {
        name = `${safeStem}-${counter}${ext}`;
        counter++;
      }
    }
    cb(null, name);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter(_req, file, cb) {
    if (ALLOWED_TYPES.has(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Only JPEG, PNG, WebP, and GIF images are allowed."));
    }
  },
});

const router = express.Router();

router.post("/", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded." });
  }
  const { slug, type } = req.body;
  const url =
    slug && type && ALLOWED_CONTENT_TYPES.has(type)
      ? req.file.filename
      : `/images/${req.file.filename}`;
  res.json({ url });
});

router.use((err, _req, res, _next) => {
  if (err?.code === "LIMIT_FILE_SIZE") {
    return res
      .status(413)
      .json({ error: "File too large. Maximum size is 5 MB." });
  }
  res.status(400).json({ error: err.message ?? "Upload failed." });
});

export default router;
