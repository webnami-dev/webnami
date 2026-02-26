const COMMANDS = [
  {
    id: "upload-image",
    label: "Upload Image",
    hint: "Insert an image from your device",
    keywords: ["image", "img", "photo", "picture", "upload"],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>`,
  },
];

export function initSlashCommands(editor) {
  const cm = editor.codemirror;
  let slashPos = null;
  let selectedIdx = 0;
  let visibleCmds = [];

  // ── Menu element ───────────────────────────────────────────────
  const menu = document.createElement("div");
  menu.className = "slash-menu";
  menu.style.display = "none";
  document.body.appendChild(menu);

  // ── Key map (only active while menu is open) ───────────────────
  const keyMap = {
    Enter() {
      selectCommand(selectedIdx);
    },
    Escape() {
      hideMenu();
    },
    Up() {
      setSelected(selectedIdx - 1);
    },
    Down() {
      setSelected(selectedIdx + 1);
    },
  };

  // ── Positioning ────────────────────────────────────────────────
  function positionMenu() {
    const coords = cm.cursorCoords(cm.getCursor(), "window");
    const mh = menu.offsetHeight;
    const spaceBelow = window.innerHeight - coords.bottom;
    menu.style.top =
      spaceBelow >= mh + 8
        ? `${coords.bottom + 6}px`
        : `${coords.top - mh - 6}px`;
    menu.style.left = `${Math.min(coords.left, window.innerWidth - menu.offsetWidth - 12)}px`;
  }

  // ── Render ─────────────────────────────────────────────────────
  function renderItems(query) {
    visibleCmds = COMMANDS.filter(
      (cmd) =>
        !query || cmd.keywords.some((k) => k.startsWith(query.toLowerCase())),
    );

    if (visibleCmds.length === 0) {
      hideMenu();
      return;
    }

    selectedIdx = 0;
    menu.innerHTML = "";

    visibleCmds.forEach((cmd, i) => {
      const item = document.createElement("div");
      item.className = `slash-menu-item${i === 0 ? " selected" : ""}`;
      item.innerHTML = `
        <div class="slash-menu-item-icon">${cmd.icon}</div>
        <div>
          <div class="slash-menu-item-label">${cmd.label}</div>
          <div class="slash-menu-item-hint">${cmd.hint}</div>
        </div>`;
      item.addEventListener("mousedown", (e) => {
        e.preventDefault(); // keep editor focused
        selectCommand(i);
      });
      menu.appendChild(item);
    });

    positionMenu();
  }

  // ── Show / hide ────────────────────────────────────────────────
  function showMenu() {
    cm.addKeyMap(keyMap);
    menu.style.display = "block";
  }

  function hideMenu() {
    menu.style.display = "none";
    cm.removeKeyMap(keyMap);
    slashPos = null;
    visibleCmds = [];
    selectedIdx = 0;
  }

  function setSelected(idx) {
    selectedIdx = Math.max(0, Math.min(idx, visibleCmds.length - 1));
    menu.querySelectorAll(".slash-menu-item").forEach((el, i) => {
      el.classList.toggle("selected", i === selectedIdx);
    });
  }

  function selectCommand(idx) {
    const cmd = visibleCmds[idx];
    if (!cmd) return;
    const pos = slashPos; // capture before hideMenu nulls it
    hideMenu();
    if (cmd.id === "upload-image") uploadImage(editor, pos);
  }

  // ── CodeMirror listeners ───────────────────────────────────────
  cm.on("change", (_, change) => {
    if (change.origin === "+input" && change.text.join("") === "/") {
      slashPos = { line: change.from.line, ch: change.from.ch };
      showMenu();
      renderItems("");
      return;
    }

    if (slashPos !== null) {
      const cur = cm.getCursor();
      if (cur.line !== slashPos.line || cur.ch <= slashPos.ch) {
        hideMenu();
        return;
      }
      const query = cm.getRange(
        { line: slashPos.line, ch: slashPos.ch + 1 },
        cur,
      );
      if (query.includes(" ")) {
        hideMenu();
        return;
      }
      renderItems(query);
    }
  });

  cm.on("cursorActivity", () => {
    if (!slashPos) return;
    const cur = cm.getCursor();
    if (cur.line !== slashPos.line || cur.ch <= slashPos.ch) hideMenu();
  });

  cm.on("blur", hideMenu);
  cm.getScrollerElement().addEventListener("scroll", hideMenu, {
    passive: true,
  });
  window.addEventListener("resize", hideMenu, { passive: true });
}

// ── Image upload ───────────────────────────────────────────────
function uploadImage(editor, slashPos) {
  const cm = editor.codemirror;

  // Remove the "/query" text before opening the file dialog
  const cur = cm.getCursor();
  cm.replaceRange("", slashPos, cur);
  cm.focus();
  const insertPos = { line: slashPos.line, ch: slashPos.ch };

  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";
  input.addEventListener("change", () => {
    const file = input.files[0];
    if (!file) return;

    const body = new FormData();
    body.append("image", file);

    fetch("/admin/upload", { method: "POST", body })
      .then((r) => r.json())
      .then((d) => {
        if (!d.url) throw new Error(d.error ?? "Upload failed.");
        const alt = file.name.replace(/\.[^.]+$/, "").replace(/[-_]/g, " ");
        cm.replaceRange(`![${alt}](${d.url})`, insertPos);
        cm.focus();
      })
      .catch((err) => {
        if (typeof showAlert === "function") {
          showAlert("error", err.message || "Image upload failed.");
        }
      });
  });
  input.click();
}
