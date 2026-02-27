const COMMANDS = [
  {
    id: "upload-image",
    label: "Upload Image",
    hint: "Insert an image from your device",
    keywords: ["image", "img", "photo", "picture", "upload"],
    icon: `<i data-lucide="image" style="width:15px;height:15px;flex-shrink:0;"></i>`,
  },
  {
    id: "insert-link",
    label: "Link",
    hint: "Insert a hyperlink",
    keywords: ["link", "url", "href", "anchor"],
    icon: `<i data-lucide="link" style="width:15px;height:15px;flex-shrink:0;"></i>`,
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
    window.lucide?.createIcons();
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
    if (cmd.id === "insert-link") insertLink(editor, pos);
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

// ── Link dialog ────────────────────────────────────────────────
function showLinkDialog() {
  return new Promise((resolve) => {
    const overlay = document.createElement("div");
    overlay.className = "link-dialog-overlay";

    const dialog = document.createElement("div");
    dialog.className = "link-dialog";
    dialog.innerHTML = `
      <div class="link-dialog-title">Insert Link</div>
      <div class="link-dialog-body">
        <div class="link-dialog-field">
          <label class="admin-label" for="link-dialog-url">URL</label>
          <input class="link-dialog-input" id="link-dialog-url" type="url" placeholder="https://" autocomplete="off" />
        </div>
        <div class="link-dialog-field">
          <label class="admin-label" for="link-dialog-text">Link text</label>
          <input class="link-dialog-input" id="link-dialog-text" type="text" placeholder="Optional — defaults to URL" autocomplete="off" />
        </div>
      </div>
      <div class="link-dialog-footer">
        <button class="link-dialog-btn link-dialog-btn-cancel">Cancel</button>
        <button class="link-dialog-btn link-dialog-btn-insert">Insert</button>
      </div>
    `;

    overlay.appendChild(dialog);
    document.body.appendChild(overlay);

    const urlInput = dialog.querySelector("#link-dialog-url");
    const textInput = dialog.querySelector("#link-dialog-text");
    const cancelBtn = dialog.querySelector(".link-dialog-btn-cancel");
    const insertBtn = dialog.querySelector(".link-dialog-btn-insert");

    function close(result) {
      overlay.remove();
      resolve(result);
    }

    cancelBtn.addEventListener("click", () => close(null));
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) close(null);
    });

    insertBtn.addEventListener("click", () => {
      const url = urlInput.value.trim();
      if (!url) {
        urlInput.focus();
        return;
      }
      close({ url, text: textInput.value.trim() || url });
    });

    dialog.addEventListener("keydown", (e) => {
      if (e.key === "Enter") insertBtn.click();
      if (e.key === "Escape") close(null);
    });

    setTimeout(() => urlInput.focus(), 0);
  });
}

// ── Link insert ────────────────────────────────────────────────
async function insertLink(editor, slashPos) {
  const cm = editor.codemirror;

  const cur = cm.getCursor();
  cm.replaceRange("", slashPos, cur);
  const insertPos = { line: slashPos.line, ch: slashPos.ch };

  const result = await showLinkDialog();
  if (!result) {
    cm.focus();
    return;
  }
  cm.replaceRange(`[${result.text}](${result.url})`, insertPos);
  cm.focus();
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
