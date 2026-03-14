const d = document.getElementById("post-form"),
  { slug: a, isDraft: c } = d.dataset,
  i = new EasyMDE({
    element: document.getElementById("content"),
    spellChecker: !1,
    status: !1,
    toolbar: !1,
    uploadImage: !0,
    imageUploadFunction(e, t, n) {
      const o = new FormData();
      (o.append("slug", a),
        o.append("type", "posts"),
        o.append("image", e),
        fetch("/admin/upload", { method: "POST", body: o })
          .then((s) => s.json())
          .then((s) => (s.url ? t(s.url) : n(s.error ?? "Upload failed.")))
          .catch(() => n("Upload failed.")));
    },
    imageErrorCallback(e) {
      showAlert("error", e);
    },
  });
d.addEventListener("submit", async (e) => {
  e.preventDefault();
  const t = document.getElementById("title").value,
    n = document.getElementById("tags").value,
    o = document.getElementById("category").value,
    s = i.value(),
    l = await fetch(`/admin/posts/${a}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: t, tags: n, category: o, content: s }),
    }),
    r = await l.json();
  if (!l.ok) {
    showAlert("error", r.error || "Failed to update post.");
    return;
  }
  (flashAlert("success", "Post updated successfully."),
    (window.location.href = `/admin/posts/${r.slug}`));
});
c === "true" &&
  document.getElementById("publish-btn").addEventListener("click", async () => {
    const e = await fetch(`/admin/posts/${a}/publish`, { method: "POST" }),
      t = await e.json();
    if (!e.ok) {
      showAlert("error", t.error || "Failed to publish post.");
      return;
    }
    (flashAlert("success", "Post published successfully."),
      (window.location.href = `/admin/posts/${t.slug}`));
  });
document.getElementById("delete-btn").addEventListener("click", async () => {
  if (!(await showConfirm("Are you sure you want to delete this post?")))
    return;
  if (!(await fetch(`/admin/posts/${a}`, { method: "DELETE" })).ok) {
    showAlert("error", "Failed to delete post.");
    return;
  }
  (flashAlert("success", "Post deleted successfully."),
    (window.location.href = "/admin/posts"));
});
