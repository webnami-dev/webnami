const form = document.getElementById("post-form");
const slug = form.dataset.slug;

const editor = new EasyMDE({
  element: document.getElementById("content"),
  spellChecker: false,
  status: false,
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
  const author = document.getElementById("author").value;
  const date = document.getElementById("date").value;
  const content = editor.value();

  await fetch(`/admin/posts/${slug}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, description, tags, category, author, date, content }),
  });
  window.location.href = "/admin/posts";
});

document.getElementById("delete-btn").addEventListener("click", async () => {
  if (!confirm("Are you sure you want to delete this post?")) return;
  await fetch(`/admin/posts/${slug}`, { method: "DELETE" });
  window.location.href = "/admin/posts";
});
