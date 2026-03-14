const l = document.getElementById("page-form"),
  { slug: o, isDraft: r } = l.dataset,
  d = new EasyMDE({
    element: document.getElementById("content"),
    spellChecker: !1,
    status: !1,
    toolbar: !1,
    uploadImage: !0,
    imageUploadFunction(e, a, n) {
      const s = new FormData();
      (s.append("slug", o),
        s.append("type", "pages"),
        s.append("image", e),
        fetch("/admin/upload", { method: "POST", body: s })
          .then((t) => t.json())
          .then((t) => (t.url ? a(t.url) : n(t.error ?? "Upload failed.")))
          .catch(() => n("Upload failed.")));
    },
    imageErrorCallback(e) {
      showAlert("error", e);
    },
  });
l.addEventListener("submit", async (e) => {
  e.preventDefault();
  const a = document.getElementById("title").value,
    n = d.value(),
    s = await fetch(`/admin/pages/${o}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: a, content: n }),
    }),
    t = await s.json();
  if (!s.ok) {
    showAlert("error", t.error || "Failed to update page.");
    return;
  }
  (flashAlert("success", "Page updated successfully."),
    (window.location.href = `/admin/pages/${t.slug}`));
});
r === "true" &&
  document.getElementById("publish-btn").addEventListener("click", async () => {
    const e = await fetch(`/admin/pages/${o}/publish`, { method: "POST" }),
      a = await e.json();
    if (!e.ok) {
      showAlert("error", a.error || "Failed to publish page.");
      return;
    }
    (flashAlert("success", "Page published successfully."),
      (window.location.href = `/admin/pages/${a.slug}`));
  });
document.getElementById("delete-btn").addEventListener("click", async () => {
  if (!(await showConfirm("Are you sure you want to delete this page?")))
    return;
  if (!(await fetch(`/admin/pages/${o}`, { method: "DELETE" })).ok) {
    showAlert("error", "Failed to delete page.");
    return;
  }
  (flashAlert("success", "Page deleted successfully."),
    (window.location.href = "/admin/pages"));
});
