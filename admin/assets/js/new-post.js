import { initSlashCommands } from "./slash-commands.js";

const form = document.getElementById("post-form");
const { draft: draftName } = form.dataset;

const editor = new EasyMDE({
  element: document.getElementById("content"),
  spellChecker: false,
  status: false,
  toolbar: false,
});

initSlashCommands(editor, { slug: `_drafts/${draftName}`, type: "posts" });

async function cancelNewPost() {
  await fetch(`/admin/posts/new/${draftName}`, { method: "DELETE" });
  window.location.href = "/admin/posts";
}

document.getElementById("cancel-btn").addEventListener("click", cancelNewPost);

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const tags = document.getElementById("tags").value;
  const category = document.getElementById("category").value;
  const content = editor.value();

  const resp = await fetch("/admin/posts/new", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, tags, category, content, draftName }),
  });
  const data = await resp.json();
  if (!resp.ok) {
    showAlert("error", data.error || "Failed to create post.");
    return;
  }
  flashAlert("success", "Post created successfully.");
  window.location.href = `/admin/posts/${data.slug}`;
});
