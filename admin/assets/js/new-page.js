const editor = new EasyMDE({
  element: document.getElementById("content"),
  spellChecker: false,
  status: false,
});

document.getElementById("page-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const content = editor.value();

  const resp = await fetch("/admin/pages/new", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, description, content }),
  });
  const data = await resp.json();
  window.location.href = `/admin/pages/${data.slug}`;
});
