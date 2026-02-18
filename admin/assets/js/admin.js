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
} from "lucide";
import Alpine from "alpinejs";
import EasyMDE from "easymde";
import flatpickr from "flatpickr";

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
};

createIcons({ icons });

function isDark() {
  return (
    localStorage.adminTheme === "dark" ||
    (!("adminTheme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
}

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

Alpine.store("seo", {
  open: false,
  loading: false,
  error: null,
  result: null,
  close() {
    this.open = false;
  },
});

window.runSEOCheck = async function (url) {
  const store = Alpine.store("seo");
  store.result = null;
  store.error = null;
  store.loading = true;
  store.open = true;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      const data = await res.json();
      store.error = data.error || "SEO check failed.";
    } else {
      store.result = await res.json();
    }
  } catch {
    store.error = "Failed to run SEO check.";
  } finally {
    store.loading = false;
    setTimeout(() => lucide.createIcons(), 50);
  }
};

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
window.flatpickr = flatpickr;
Alpine.start();
