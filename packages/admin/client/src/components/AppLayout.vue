<template>
  <div class="flex min-h-screen bg-background text-content">
    <AppSidebar />
    <div class="flex-1 ml-36 flex flex-col min-h-screen">
      <AlertToasts />
      <AppTopbar />
      <main class="flex-1 px-10 py-8 w-8/10 m-auto">
        <RouterView />
      </main>
    </div>
    <ConfirmDialog />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import AppSidebar from "./AppSidebar.vue";
import AppTopbar from "./AppTopbar.vue";
import AlertToasts from "./AlertToasts.vue";
import ConfirmDialog from "./ConfirmDialog.vue";
import { useAlertsStore } from "../stores/alerts.js";
import { useThemeStore } from "../stores/theme.js";

const alerts = useAlertsStore();
const theme = useThemeStore();

onMounted(() => {
  theme.init();
  alerts.processFlash();
});
</script>
