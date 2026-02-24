const form = document.getElementById("page-form");
const { slug } = form.dataset;

const editor = new EasyMDE({
  element: document.getElementById("content"),
  spellChecker: false,
  status: false,
  toolbar: [
    "bold",
    "italic",
    "heading",
    "|",
    "quote",
    "unordered-list",
    "ordered-list",
    "|",
    "link",
    "upload-image",
    "|",
    "preview",
    "side-by-side",
    "fullscreen",
    "|",
    "guide",
  ],
  imageUploadFunction(file, onSuccess, onError) {
    const body = new FormData();
    body.append("image", file);
    fetch("/admin/upload", { method: "POST", body })
      .then((r) => r.json())
      .then((d) =>
        d.url ? onSuccess(d.url) : onError(d.error ?? "Upload failed."),
      )
      .catch(() => onError("Upload failed."));
  },
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const showInHeader = document.getElementById("showInHeader").value;
  const content = editor.value();

  const res = await fetch(`/admin/pages/${slug}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, description, showInHeader, content }),
  });
  const data = await res.json();
  if (!res.ok) {
    showAlert("error", data.error || "Failed to update page.");
    return;
  }
  flashAlert("success", "Page updated successfully.");
  window.location.href = `/admin/pages/${data.slug}`;
});

document.getElementById("seo-btn").addEventListener("click", () => {
  runSEOCheck(`/admin/pages/${slug}/seo`);
});

document.getElementById("delete-btn").addEventListener("click", async () => {
  const confirmed = await showConfirm(
    "Are you sure you want to delete this page?",
  );
  if (!confirmed) return;
  const res = await fetch(`/admin/pages/${slug}`, { method: "DELETE" });
  if (!res.ok) {
    showAlert("error", "Failed to delete page.");
    return;
  }
  flashAlert("success", "Page deleted successfully.");
  window.location.href = "/admin/pages";
});
