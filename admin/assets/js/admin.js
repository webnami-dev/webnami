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
} from "lucide";
import Alpine from "alpinejs";

const icons = {
  FileText,
  File,
  SlidersHorizontal,
  ExternalLink,
  Settings,
  Sun,
  Moon,
  Plus,
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

window.Alpine = Alpine;
Alpine.start();
