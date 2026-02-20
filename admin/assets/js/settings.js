const form = document.getElementById("settings-form");

// ── Helper: remove button HTML ──
function removeButtonHTML() {
  return `<button type="button"
    class="shrink-0 p-1.5 rounded transition-colors duration-100 remove-row"
    style="color: var(--color-accent); border: 1px solid var(--color-border);"
    onmouseover="this.style.color='#e03131'; this.style.borderColor='color-mix(in srgb, #e03131 35%, transparent)';"
    onmouseout="this.style.color='var(--color-accent)'; this.style.borderColor='var(--color-border)';"
    aria-label="Remove">
    <i data-lucide="x" style="width:14px;height:14px;"></i>
  </button>`;
}

// ── Helper: create a row of inputs with a remove button ──
function createRow(container, rowClass, fields) {
  const row = document.createElement("div");
  row.className = `flex items-center gap-2 ${rowClass}`;
  fields.forEach(({ placeholder, className }) => {
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = placeholder;
    input.className = `admin-input ${className}`;
    row.appendChild(input);
  });
  row.insertAdjacentHTML("beforeend", removeButtonHTML());
  container.appendChild(row);
  lucide.createIcons();
}

// ── Remove row handler (delegated) ──
document.addEventListener("click", (e) => {
  const removeRow = e.target.closest(".remove-row");
  if (removeRow) {
    removeRow
      .closest(".navbar-link-row, .social-link-row, .footer-link-row")
      ?.remove();
  }
});

// ── Add navbar link ──
document.getElementById("add-navbar-link").addEventListener("click", () => {
  createRow(document.getElementById("navbar-links"), "navbar-link-row", [
    { placeholder: "Label", className: "navbar-link-name" },
    { placeholder: "/path", className: "navbar-link-href" },
  ]);
});

// ── Add social link ──
document.getElementById("add-social-link").addEventListener("click", () => {
  createRow(document.getElementById("social-links"), "social-link-row", [
    { placeholder: "Platform (e.g. facebook)", className: "social-link-name" },
    { placeholder: "URL", className: "social-link-href" },
  ]);
});

// ── Add footer link ──
document.getElementById("add-footer-link").addEventListener("click", () => {
  createRow(document.getElementById("footer-links"), "footer-link-row", [
    { placeholder: "Label", className: "footer-link-name" },
    { placeholder: "/path", className: "footer-link-href" },
  ]);
});

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

  const navbarLinks = collectLinks(
    document.getElementById("navbar-links"),
    "navbar-link-name",
    "navbar-link-href",
  );

  const socialLinks = collectLinks(
    document.getElementById("social-links"),
    "social-link-name",
    "social-link-href",
  );

  const footerLinks = collectLinks(
    document.getElementById("footer-links"),
    "footer-link-name",
    "footer-link-href",
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
    navbarLinks: JSON.stringify(navbarLinks),
    socialLinks: JSON.stringify(socialLinks),
    footerLinks: JSON.stringify(footerLinks),
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
