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

  const res = await fetch(`/admin/pages/${slug}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, description, content }),
  });
  if (!res.ok) {
    showAlert("error", "Failed to update page.");
    return;
  }
  flashAlert("success", "Page updated successfully.");
  window.location.href = "/admin/pages";
});

document.getElementById("seo-btn").addEventListener("click", () => {
  runSEOCheck(`/admin/pages/${slug}/seo`);
});

document.getElementById("delete-btn").addEventListener("click", async () => {
  const confirmed = await showConfirm("Are you sure you want to delete this page?");
  if (!confirmed) return;
  const res = await fetch(`/admin/pages/${slug}`, { method: "DELETE" });
  if (!res.ok) {
    showAlert("error", "Failed to delete page.");
    return;
  }
  flashAlert("success", "Page deleted successfully.");
  window.location.href = "/admin/pages";
});
