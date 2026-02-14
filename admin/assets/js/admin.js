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
  X,
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
  X,
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

window.lucide = { createIcons: () => createIcons({ icons }) };
window.Alpine = Alpine;
window.EasyMDE = EasyMDE;
window.flatpickr = flatpickr;
Alpine.start();
