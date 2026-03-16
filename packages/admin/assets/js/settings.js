const form = document.getElementById("settings-form");

// ── Logo upload ──
const logoInput = document.getElementById("logo-input");
const logoRemove = document.getElementById("logo-remove");

if (logoInput) {
  logoInput.addEventListener("change", async () => {
    const file = logoInput.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("logo", file);

    const res = await fetch("/admin/settings/logo", {
      method: "POST",
      body: formData,
    });
    if (res.ok) {
      flashAlert("success", "Logo uploaded.");
      window.location.href = "/admin/settings";
    } else {
      const { error } = await res.json();
      showAlert("error", error ?? "Logo upload failed.");
      logoInput.value = "";
    }
  });
}

if (logoRemove) {
  logoRemove.addEventListener("click", async () => {
    const res = await fetch("/admin/settings/logo", { method: "DELETE" });
    if (res.ok) {
      flashAlert("success", "Logo removed.");
      window.location.href = "/admin/settings";
    } else {
      showAlert("error", "Failed to remove logo.");
    }
  });
}

// ── Collect rows into array of {name, placeholder, href} ──
function collectLinks(container, nameClass, hrefClass) {
  return [...container.querySelectorAll(`.${nameClass}`)]
    .map((nameInput) => {
      const row = nameInput.closest("div");
      const placeholderInput = row.querySelector(".social-link-placeholder");
      return {
        name: nameInput.value.trim(),
        placeholder: placeholderInput ? placeholderInput.value.trim() : "",
        href: row.querySelector(`.${hrefClass}`).value.trim(),
      };
    })
    .filter((l) => l.name || l.href);
}

// ── Submit ──
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const socialLinks = collectLinks(
    document.getElementById("social-links"),
    "social-link-name",
    "social-link-href",
  );

  const colorThemeInput = document.querySelector(
    'input[name="colorPalette"]:checked',
  );

  const body = {
    blogName: document.getElementById("blogName").value,
    blogUrl: document.getElementById("blogUrl").value,
    homepageHeading: document.getElementById("homepageHeading").value,
    colorPalette: colorThemeInput ? colorThemeInput.value : "Default",
    socialLinks: JSON.stringify(socialLinks),
  };

  const res = await fetch("/admin/settings", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (res.ok) {
    window.markSiteDirty();
    flashAlert("success", "Settings saved successfully.");
    window.location.reload();
  } else {
    showAlert("error", "Failed to save settings.");
  }
});
