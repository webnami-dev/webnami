const form = document.getElementById("page-form");
const slug = form.dataset.slug;

const editor = new EasyMDE({
  element: document.getElementById("content"),
  spellChecker: false,
  status: false,
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const content = editor.value();

  await fetch(`/admin/pages/${slug}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, description, content }),
  });
  window.location.href = "/admin/pages";
});

document.getElementById("delete-btn").addEventListener("click", async () => {
  if (!confirm("Are you sure you want to delete this page?")) return;
  await fetch(`/admin/pages/${slug}`, { method: "DELETE" });
  window.location.href = "/admin/pages";
});
