const form = document.getElementById("settings-form");

// ── Collect rows into array of {name, href} ──
function collectLinks(container, nameClass, hrefClass) {
  return [...container.querySelectorAll(`.${nameClass}`)]
    .map((nameInput) => {
      const row = nameInput.closest("div");
      return {
        name: nameInput.value.trim(),
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

  const body = {
    blogName: document.getElementById("blogName").value,
    blogUrl: document.getElementById("blogUrl").value,
    siteLogo: document.getElementById("siteLogo").value,
    siteFavicon: document.getElementById("siteFavicon").value,
    postsPerPage: document.getElementById("postsPerPage").value,
    theme: document.getElementById("theme").value,
    homepageHeading: document.getElementById("homepageHeading").value,
    homepageImg: document.getElementById("homepageImg").value,
    socialLinks: JSON.stringify(socialLinks),
  };

  const res = await fetch("/admin/settings", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (res.ok) {
    const data = await res.json();
    if (data.restartRequired) {
      showAlert("warning", data.message);
    } else {
      flashAlert("success", "Settings saved successfully.");
      window.location.reload();
    }
  } else {
    showAlert("error", "Failed to save settings.");
  }
});
