import { defineStore } from "pinia";

export const useConfirmStore = defineStore("confirm", {
  state: () => ({ open: false, message: "", _resolve: null }),
  actions: {
    show(message) {
      this.message = message;
      this.open = true;
      return new Promise((resolve) => {
        this._resolve = resolve;
      });
    },
    accept() {
      this.open = false;
      this._resolve?.(true);
      this._resolve = null;
    },
    cancel() {
      this.open = false;
      this._resolve?.(false);
      this._resolve = null;
    },
  },
});
