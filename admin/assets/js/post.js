import { initSlashCommands } from "./slash-commands.js";

const form = document.getElementById("post-form");
const { slug, isDraft } = form.dataset;

const editor = new EasyMDE({
  element: document.getElementById("content"),
  spellChecker: false,
  status: false,
  toolbar: false,
});

initSlashCommands(editor, { slug, type: "posts" });

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const tags = document.getElementById("tags").value;
  const category = document.getElementById("category").value;
  const content = editor.value();

  const res = await fetch(`/admin/posts/${slug}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, tags, category, content }),
  });
  const data = await res.json();
  if (!res.ok) {
    showAlert("error", data.error || "Failed to update post.");
    return;
  }
  flashAlert("success", "Post updated successfully.");
  window.location.href = `/admin/posts/${data.slug}`;
});

if (isDraft === "true") {
  document.getElementById("publish-btn").addEventListener("click", async () => {
    const res = await fetch(`/admin/posts/${slug}/publish`, { method: "POST" });
    const data = await res.json();
    if (!res.ok) {
      showAlert("error", data.error || "Failed to publish post.");
      return;
    }
    flashAlert("success", "Post published successfully.");
    window.location.href = `/admin/posts/${data.slug}`;
  });
}

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
