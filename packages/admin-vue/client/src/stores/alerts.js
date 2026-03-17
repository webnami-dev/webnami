import { defineStore } from "pinia";

let alertId = 0;

export const useAlertsStore = defineStore("alerts", {
  state: () => ({ alerts: [] }),
  actions: {
    show(type, message) {
      const id = ++alertId;
      this.alerts.push({ id, type, message, visible: true });
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
    flash(type, message) {
      sessionStorage.setItem("flash_alert", JSON.stringify({ type, message }));
    },
    processFlash() {
      const flash = sessionStorage.getItem("flash_alert");
      if (flash) {
        sessionStorage.removeItem("flash_alert");
        const { type, message } = JSON.parse(flash);
        this.show(type, message);
      }
    },
  },
});
