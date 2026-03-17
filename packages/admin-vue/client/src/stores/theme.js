import { defineStore } from "pinia";

function isDark() {
  return (
    localStorage.adminTheme === "dark" ||
    (!("adminTheme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
}

export const useThemeStore = defineStore("theme", {
  state: () => ({ dark: isDark() }),
  actions: {
    init() {
      document.documentElement.setAttribute(
        "admin-data-theme",
        this.dark ? "dark" : "light",
      );
    },
    setDark() {
      this.dark = true;
      localStorage.adminTheme = "dark";
      document.documentElement.setAttribute("admin-data-theme", "dark");
    },
    setLight() {
      this.dark = false;
      localStorage.adminTheme = "light";
      document.documentElement.setAttribute("admin-data-theme", "light");
    },
  },
});
