import { getToolbar } from "./toolbar.js";

const form = document.getElementById("page-form");
const { draft: draftName } = form.dataset;

const editor = new EasyMDE({
  element: document.getElementById("content"),
  spellChecker: false,
  status: false,
  toolbar: getToolbar(),
  uploadImage: true,
  imageUploadFunction(file, onSuccess, onError) {
    const body = new FormData();
    body.append("slug", `_drafts/${draftName}`);
    body.append("type", "pages");
    body.append("image", file);
    fetch("/admin/upload", { method: "POST", body })
      .then((r) => r.json())
      .then((d) =>
        d.url ? onSuccess(d.url) : onError(d.error ?? "Upload failed."),
      )
      .catch(() => onError("Upload failed."));
  },
  imageErrorCallback(msg) {
    showAlert("error", msg);
  },
});

async function cancelNewPage() {
  await fetch(`/admin/pages/new/${draftName}`, { method: "DELETE" });
  window.location.href = "/admin/pages";
}

document.getElementById("cancel-btn").addEventListener("click", cancelNewPage);

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const content = editor.value();

  const resp = await fetch("/admin/pages/new", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, content, draftName }),
  });
  const data = await resp.json();
  if (!resp.ok) {
    showAlert("error", data.error || "Failed to create page.");
    return;
  }
  flashAlert("success", "Page created successfully.");
  window.location.href = `/admin/pages/${data.slug}`;
});
