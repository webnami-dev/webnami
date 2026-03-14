const d = document.getElementById("post-form"),
  { draft: s } = d.dataset,
  r = new EasyMDE({
    element: document.getElementById("content"),
    spellChecker: !1,
    status: !1,
    toolbar: !1,
    uploadImage: !0,
    imageUploadFunction(a, o, n) {
      const t = new FormData();
      (t.append("slug", `_drafts/${s}`),
        t.append("type", "posts"),
        t.append("image", a),
        fetch("/admin/upload", { method: "POST", body: t })
          .then((e) => e.json())
          .then((e) => (e.url ? o(e.url) : n(e.error ?? "Upload failed.")))
          .catch(() => n("Upload failed.")));
    },
    imageErrorCallback(a) {
      showAlert("error", a);
    },
  });
async function i() {
  (await fetch(`/admin/posts/new/${s}`, { method: "DELETE" }),
    (window.location.href = "/admin/posts"));
}
document.getElementById("cancel-btn").addEventListener("click", i);
d.addEventListener("submit", async (a) => {
  a.preventDefault();
  const o = document.getElementById("title").value,
    n = document.getElementById("tags").value,
    t = document.getElementById("category").value,
    e = r.value(),
    c = await fetch("/admin/posts/new", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: o,
        tags: n,
        category: t,
        content: e,
        draftName: s,
      }),
    }),
    l = await c.json();
  if (!c.ok) {
    showAlert("error", l.error || "Failed to create post.");
    return;
  }
  (flashAlert("success", "Post created successfully."),
    (window.location.href = `/admin/posts/${l.slug}`));
});
