const a = document.getElementById("settings-form");
function r(n, s, o) {
  return [...n.querySelectorAll(`.${s}`)]
    .map((e) => {
      const l = e.closest("div"),
        t = l.querySelector(".social-link-placeholder");
      return {
        name: e.value.trim(),
        placeholder: t ? t.value.trim() : "",
        href: l.querySelector(`.${o}`).value.trim(),
      };
    })
    .filter((e) => e.name || e.href);
}
a.addEventListener("submit", async (n) => {
  n.preventDefault();
  const s = r(
      document.getElementById("social-links"),
      "social-link-name",
      "social-link-href",
    ),
    o = document.querySelector('input[name="colorPalette"]:checked'),
    e = {
      blogName: document.getElementById("blogName").value,
      blogUrl: document.getElementById("blogUrl").value,
      homepageHeading: document.getElementById("homepageHeading").value,
      colorPalette: o ? o.value : "Default",
      socialLinks: JSON.stringify(s),
    },
    l = await fetch("/admin/settings", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(e),
    });
  if (l.ok) {
    const t = await l.json();
    t.restartRequired || t.nameChanged
      ? showAlert("warning", t.message)
      : (flashAlert("success", "Settings saved successfully."),
        window.location.reload());
  } else showAlert("error", "Failed to save settings.");
});
