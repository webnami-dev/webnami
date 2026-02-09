import Alpine from "alpinejs";

function isDark() {
  return (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
}

Alpine.store("theme", {
  init() {
    document.documentElement.setAttribute(
      "data-theme",
      isDark() ? "dark" : "light"
    );
    this.dark = isDark();
  },
  dark: isDark(),
  darkTheme() {
    this.dark = true;
    localStorage.theme = "dark";
    document.documentElement.setAttribute("data-theme", "dark");
  },
  lightTheme() {
    this.dark = false;
    localStorage.theme = "light";
    document.documentElement.setAttribute("data-theme", "light");
  },
});

window.Alpine = Alpine;
Alpine.start();
