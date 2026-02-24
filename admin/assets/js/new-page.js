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

document.getElementById("page-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const showInHeader = document.getElementById("showInHeader").value;
  const content = editor.value();

  const resp = await fetch("/admin/pages/new", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, description, showInHeader, content }),
  });
  const data = await resp.json();
  if (!resp.ok) {
    showAlert("error", data.error || "Failed to create page.");
    return;
  }
  flashAlert("success", "Page created successfully.");
  window.location.href = `/admin/pages/${data.slug}`;
});
