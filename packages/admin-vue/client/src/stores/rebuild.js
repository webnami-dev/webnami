import { defineStore } from "pinia";

export const useRebuildStore = defineStore("rebuild", {
  state: () => ({
    dirty: localStorage.getItem("siteNeedsRebuild") === "1",
  }),
  actions: {
    markDirty() {
      this.dirty = true;
      localStorage.setItem("siteNeedsRebuild", "1");
    },
    markClean() {
      this.dirty = false;
      localStorage.removeItem("siteNeedsRebuild");
    },
  },
});
