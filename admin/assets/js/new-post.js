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

flatpickr("#date", {
  dateFormat: "Y-m-d",
  defaultDate: new Date(),
});

document.getElementById("post-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const tags = document.getElementById("tags").value;
  const category = document.getElementById("category").value;
  const date = document.getElementById("date").value;
  const content = editor.value();

  const resp = await fetch("/admin/posts/new", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title,
      description,
      tags,
      category,
      date,
      content,
    }),
  });
  const data = await resp.json();
  if (!resp.ok) {
    showAlert("error", data.error || "Failed to create post.");
    return;
  }
  flashAlert("success", "Post created successfully.");
  window.location.href = `/admin/posts/${data.slug}`;
});
