import Alpine from "alpinejs";
import intersect from "@alpinejs/intersect";
import { initEmblaCarousel } from "./carousel.js";

document.addEventListener("DOMContentLoaded", () => {
  initEmblaCarousel(".embla");
});

window.Alpine = Alpine;
Alpine.plugin(intersect);

document.addEventListener("alpine:init", () => {
  Alpine.data("contactForm", () => ({
    loading: false,
    submitted: false,
    error: false,

    async submitForm(event) {
      event.preventDefault();
      this.loading = true;
      this.submitted = false;
      this.error = false;

      try {
        const form = event.target;
        const formData = {
          client: "clientA", // or pull from hidden field
          name: form.name.value,
          email: form.email.value,
        };

        const response = await fetch(
          "https://wmcocqiaoquenhyjoocx.supabase.co/functions/v1/test-resend-email",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          }
        );

        const result = await response.json();

        if (response.ok) {
          form.reset();
          this.submitted = true;
        } else {
          this.error = true;
        }
      } catch (error) {
        console.error("Error:", error);
        this.error = true;
      } finally {
        this.loading = false;
      }
    },
  }));
});

Alpine.start();
