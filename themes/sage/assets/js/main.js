import Alpine from "alpinejs";
import collapse from "@alpinejs/collapse";

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
      isDark() ? "dark" : "light",
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

// Scroll progress indicator for post pages
Alpine.data("scrollProgress", () => ({
  progress: 0,
  init() {
    this.updateProgress();
    window.addEventListener("scroll", () => this.updateProgress(), {
      passive: true,
    });
  },
  updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    this.progress =
      docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0;
  },
}));

// Intersection observer for fade-in animations
Alpine.data("fadeObserver", () => ({
  init() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("sage-fade-up");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );
    this.$el.querySelectorAll("[data-sage-animate]").forEach((el) => {
      el.style.opacity = "0";
      observer.observe(el);
    });
  },
}));

Alpine.plugin(collapse);
window.Alpine = Alpine;
Alpine.start();
