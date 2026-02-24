const form = document.getElementById("post-form");
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

flatpickr("#date", {
  dateFormat: "Y-m-d",
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const tags = document.getElementById("tags").value;
  const category = document.getElementById("category").value;
  const date = document.getElementById("date").value;
  const content = editor.value();

  const res = await fetch(`/admin/posts/${slug}`, {
    method: "PUT",
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
  const data = await res.json();
  if (!res.ok) {
    showAlert("error", data.error || "Failed to update post.");
    return;
  }
  flashAlert("success", "Post updated successfully.");
  window.location.href = `/admin/posts/${data.slug}`;
});

document.getElementById("seo-btn").addEventListener("click", () => {
  runSEOCheck(`/admin/posts/${slug}/seo`);
});

document.getElementById("delete-btn").addEventListener("click", async () => {
  const confirmed = await showConfirm(
    "Are you sure you want to delete this post?",
  );
  if (!confirmed) return;
  const res = await fetch(`/admin/posts/${slug}`, { method: "DELETE" });
  if (!res.ok) {
    showAlert("error", "Failed to delete post.");
    return;
  }
  flashAlert("success", "Post deleted successfully.");
  window.location.href = "/admin/posts";
});
