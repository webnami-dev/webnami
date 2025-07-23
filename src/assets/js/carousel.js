import EmblaCarousel from "embla-carousel";

export function initEmblaCarousel(containerSelector, options = {}) {
  const emblaNodes = document.querySelectorAll(containerSelector);
  console.log("Found", emblaNodes.length, "carousels");
  if (!emblaNodes.length) return;

  emblaNodes.forEach((emblaNode) => {
    const viewport = emblaNode.querySelector(".embla__viewport");
    const embla = EmblaCarousel(viewport, { loop: true, ...options });

    const prevBtn = emblaNode.querySelector(".embla__prev");
    const nextBtn = emblaNode.querySelector(".embla__next");
    const dots = emblaNode.querySelectorAll(".embla__dot");

    // Button handlers
    prevBtn?.addEventListener("click", () => embla.scrollPrev());
    nextBtn?.addEventListener("click", () => embla.scrollNext());

    // Dot navigation
    dots?.forEach((dot, index) => {
      dot.addEventListener("click", () => embla.scrollTo(index));
    });

    const updateDots = () => {
      const selectedIndex = embla.selectedScrollSnap();
      dots?.forEach((dot, index) => {
        dot.classList.toggle("opacity-100", index === selectedIndex);
        dot.classList.toggle("opacity-50", index !== selectedIndex);
      });
    };

    embla.on("select", updateDots);
    updateDots();

    // Autoplay logic
    let autoplayInterval = setInterval(() => embla.scrollNext(), 5000);

    emblaNode.addEventListener("mouseenter", () =>
      clearInterval(autoplayInterval)
    );
    emblaNode.addEventListener("mouseleave", () => {
      autoplayInterval = setInterval(() => embla.scrollNext(), 5000);
    });
  });
}
