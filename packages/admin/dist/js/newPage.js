const l = document.getElementById("page-form"),
  { draft: s } = l.dataset,
  d = new EasyMDE({
    element: document.getElementById("content"),
    spellChecker: !1,
    status: !1,
    toolbar: !1,
    uploadImage: !0,
    imageUploadFunction(a, o, n) {
      const t = new FormData();
      (t.append("slug", `_drafts/${s}`),
        t.append("type", "pages"),
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
async function c() {
  (await fetch(`/admin/pages/new/${s}`, { method: "DELETE" }),
    (window.location.href = "/admin/pages"));
}
document.getElementById("cancel-btn").addEventListener("click", c);
l.addEventListener("submit", async (a) => {
  a.preventDefault();
  const o = document.getElementById("title").value,
    n = d.value(),
    t = await fetch("/admin/pages/new", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: o, content: n, draftName: s }),
    }),
    e = await t.json();
  if (!t.ok) {
    showAlert("error", e.error || "Failed to create page.");
    return;
  }
  (flashAlert("success", "Page created successfully."),
    (window.location.href = `/admin/pages/${e.slug}`));
});
