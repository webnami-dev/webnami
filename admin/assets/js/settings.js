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
      .closest(".navbar-link-row, .social-link-row, .group-link-row")
      ?.remove();
  }
  const removeGroup = e.target.closest(".remove-group");
  if (removeGroup) {
    removeGroup.closest(".link-group")?.remove();
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

// ── Add link group ──
document.getElementById("add-link-group").addEventListener("click", () => {
  const groups = document.getElementById("link-groups");
  const group = document.createElement("div");
  group.className = "link-group";
  group.innerHTML = `
    <div class="flex items-center gap-2 mb-3">
      <input type="text" placeholder="Group Title (optional)"
        class="admin-input group-title">
      <button type="button"
        class="shrink-0 p-1.5 rounded transition-colors duration-100 remove-group"
        style="color: var(--color-accent); border: 1px solid var(--color-border);"
        onmouseover="this.style.color='#e03131'; this.style.borderColor='color-mix(in srgb, #e03131 35%, transparent)';"
        onmouseout="this.style.color='var(--color-accent)'; this.style.borderColor='var(--color-border)';"
        aria-label="Remove group">
        <i data-lucide="trash-2" style="width:14px;height:14px;"></i>
      </button>
    </div>
    <div class="flex flex-col gap-2 group-links"></div>
    <button type="button"
      class="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-[12.5px] font-medium transition-colors duration-100 add-group-link"
      style="color: var(--color-accent); border: 1px solid var(--color-border);"
      onmouseover="this.style.backgroundColor='var(--color-hover)'; this.style.color='var(--color-content)';"
      onmouseout="this.style.backgroundColor=''; this.style.color='var(--color-accent)';">
      <i data-lucide="plus" style="width:13px;height:13px;"></i>
      Add Link
    </button>
  `;
  groups.appendChild(group);
  lucide.createIcons();
});

// ── Add link inside a group (delegated) ──
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".add-group-link");
  if (!btn) return;
  const container = btn.previousElementSibling;
  createRow(container, "group-link-row", [
    { placeholder: "Label", className: "group-link-name" },
    { placeholder: "/path", className: "group-link-href" },
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

  const linkGroups = [
    ...document.getElementById("link-groups").querySelectorAll(".link-group"),
  ].map((group) => {
    const title = group.querySelector(".group-title")?.value.trim() || "";
    const links = collectLinks(group, "group-link-name", "group-link-href");
    const obj = { links };
    if (title) obj.title = title;
    return obj;
  });

  const body = {
    siteName: document.getElementById("siteName").value,
    siteUrl: document.getElementById("siteUrl").value,
    siteLanguage: document.getElementById("siteLanguage").value,
    siteLogo: document.getElementById("siteLogo").value,
    siteFavicon: document.getElementById("siteFavicon").value,
    siteCsp: document.getElementById("siteCsp").value,
    postsPerPage: document.getElementById("postsPerPage").value,
    theme: document.getElementById("theme").value,
    homepageHeading: document.getElementById("homepageHeading").value,
    homepageTitle: document.getElementById("homepageTitle").value,
    homepageDescription: document.getElementById("homepageDescription").value,
    homepageImg: document.getElementById("homepageImg").value,
    navbarLinks: JSON.stringify(navbarLinks),
    socialLinks: JSON.stringify(socialLinks),
    linkGroups: JSON.stringify(linkGroups),
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
