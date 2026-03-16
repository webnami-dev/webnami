import {
  createIcons,
  FileText,
  File,
  SlidersHorizontal,
  ExternalLink,
  Settings,
  Sun,
  Moon,
  Plus,
  Trash2,
  Menu,
  LayoutTemplate,
  Save,
  Search,
  X,
  ArrowLeft,
  ChevronRight,
  Image,
  Link,
  Send,
  Upload,
  RefreshCw,
} from "lucide";
import Alpine from "alpinejs";
import EasyMDE from "easymde";

const icons = {
  FileText,
  File,
  SlidersHorizontal,
  ExternalLink,
  Settings,
  Sun,
  Moon,
  Plus,
  Trash2,
  Menu,
  LayoutTemplate,
  Save,
  Search,
  X,
  ArrowLeft,
  ChevronRight,
  Image,
  Link,
  Send,
  Upload,
  RefreshCw,
};

createIcons({ icons });

function isDark() {
  return (
    localStorage.adminTheme === "dark" ||
    (!("adminTheme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
}

Alpine.data("postFilter", () => ({
  posts: [],
  activeCategory: "",
  activeTag: "",
  get filtered() {
    return this.posts.filter((post) => {
      const catOk =
        this.activeCategory === "" || post.category === this.activeCategory;
      const tagOk =
        this.activeTag === "" ||
        (Array.isArray(post.tags) && post.tags.includes(this.activeTag));
      return catOk && tagOk;
    });
  },
  init() {
    this.posts = JSON.parse(this.$el.dataset.posts || "[]");
    this.$watch("filtered", () => {
      this.$nextTick(() => window.lucide.createIcons());
    });
    this.$nextTick(() => window.lucide.createIcons());
  },
}));

Alpine.store("adminTheme", {
  init() {
    document.documentElement.setAttribute(
      "admin-data-theme",
      isDark() ? "dark" : "light",
    );
    this.dark = isDark();
  },
  dark: isDark(),
  darkTheme() {
    this.dark = true;
    localStorage.adminTheme = "dark";
    document.documentElement.setAttribute("admin-data-theme", "dark");
  },
  lightTheme() {
    this.dark = false;
    localStorage.adminTheme = "light";
    document.documentElement.setAttribute("admin-data-theme", "light");
  },
});

let alertId = 0;
let alertListenerRegistered = false;

Alpine.data("alertComponent", () => ({
  alerts: [],
  init() {
    const flash = sessionStorage.getItem("flash_alert");
    if (flash) {
      sessionStorage.removeItem("flash_alert");
      const { type, message } = JSON.parse(flash);
      this.show(type, message);
    }
    if (!alertListenerRegistered) {
      alertListenerRegistered = true;
      document.addEventListener("show-alert", (e) => {
        this.show(e.detail.type, e.detail.message);
      });
    }
  },
  show(type, message) {
    const id = ++alertId;
    this.alerts.push({ id, type, message, visible: true });
    this.$nextTick(() => lucide.createIcons());
    if (type !== "warning") {
      setTimeout(() => this.dismiss(id), 4000);
    }
  },
  dismiss(id) {
    const alert = this.alerts.find((a) => a.id === id);
    if (alert) alert.visible = false;
    setTimeout(() => {
      this.alerts = this.alerts.filter((a) => a.id !== id);
    }, 300);
  },
}));

let confirmResolve = null;

Alpine.store("confirm", {
  open: false,
  message: "",
  show(message) {
    this.message = message;
    this.open = true;
  },
  accept() {
    this.open = false;
    if (confirmResolve) confirmResolve(true);
    confirmResolve = null;
  },
  cancel() {
    this.open = false;
    if (confirmResolve) confirmResolve(false);
    confirmResolve = null;
  },
});

window.flashAlert = function (type, message) {
  sessionStorage.setItem("flash_alert", JSON.stringify({ type, message }));
};

window.showAlert = function (type, message) {
  document.dispatchEvent(
    new CustomEvent("show-alert", { detail: { type, message } }),
  );
};

window.showConfirm = function (message) {
  return new Promise((resolve) => {
    confirmResolve = resolve;
    Alpine.store("confirm").show(message);
  });
};

window.lucide = { createIcons: () => createIcons({ icons }) };
window.Alpine = Alpine;
window.EasyMDE = EasyMDE;
Alpine.start();

// ── Rebuild button ──
const rebuildBtn = document.getElementById("rebuild-btn");
const rebuildHint = document.getElementById("rebuild-hint");

function updateRebuildHint() {
  if (!rebuildHint) return;
  if (localStorage.getItem("siteNeedsRebuild") === "1") {
    rebuildHint.classList.remove("hidden");
  } else {
    rebuildHint.classList.add("hidden");
  }
}

window.markSiteDirty = function () {
  localStorage.setItem("siteNeedsRebuild", "1");
  updateRebuildHint();
};

updateRebuildHint();

if (rebuildBtn) {
  rebuildBtn.addEventListener("click", async () => {
    rebuildBtn.disabled = true;
    rebuildBtn.innerHTML = `<svg class="animate-spin" style="width:12px;height:12px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Rebuilding…`;
    const res = await fetch("/admin/rebuild", { method: "POST" });
    if (res.ok) {
      localStorage.removeItem("siteNeedsRebuild");
      updateRebuildHint();
      flashAlert("success", "Site rebuilt successfully.");
    } else {
      showAlert("error", "Rebuild failed.");
    }
    rebuildBtn.disabled = false;
    rebuildBtn.innerHTML = `<i data-lucide="refresh-cw" style="width:12px;height:12px;"></i> Update Site`;
    window.lucide.createIcons();
  });
}
