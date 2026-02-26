import { initSlashCommands } from "./slash-commands.js";

const editor = new EasyMDE({
  element: document.getElementById("content"),
  spellChecker: false,
  status: false,
  toolbar: false,
});

initSlashCommands(editor);

document.getElementById("post-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const tags = document.getElementById("tags").value;
  const category = document.getElementById("category").value;
  const content = editor.value();

  const resp = await fetch("/admin/posts/new", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, tags, category, content }),
  });
  const data = await resp.json();
  if (!resp.ok) {
    showAlert("error", data.error || "Failed to create post.");
    return;
  }
  flashAlert("success", "Post created successfully.");
  window.location.href = `/admin/posts/${data.slug}`;
});
