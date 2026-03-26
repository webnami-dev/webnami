<template>
  <div class="fixed top-4 right-4 z-[100] flex flex-col gap-2 max-w-xs w-full pointer-events-none">
    <TransitionGroup name="alert">
      <div
        v-for="alert in alerts.alerts"
        :key="alert.id"
        v-show="alert.visible"
        class="pointer-events-auto flex items-start gap-3 px-4 py-3 rounded border text-[13px]"
        :class="alertClass(alert.type)"
        style="box-shadow: 0 4px 16px rgba(0,0,0,0.12);"
      >
        <span class="flex-1 leading-snug">{{ alert.message }}</span>
        <button
          @click="alerts.dismiss(alert.id)"
          class="shrink-0 mt-0.5 opacity-50 hover:opacity-100 transition-opacity duration-100"
        >
          <X :size="13" />
        </button>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup>
import { X } from 'lucide-vue-next';
import { useAlertsStore } from '../stores/alerts.js';

const alerts = useAlertsStore();

function alertClass(type) {
  if (type === 'success') return 'alert-success';
  if (type === 'warning') return 'alert-warning';
  return 'alert-error';
}
</script>

<style scoped>
.alert-enter-active { transition: all 0.2s ease-out; }
.alert-leave-active { transition: all 0.15s ease-in; }
.alert-enter-from { opacity: 0; transform: translateY(4px) scale(0.95); }
.alert-enter-to { opacity: 1; transform: translateY(0) scale(1); }
.alert-leave-from { opacity: 1; transform: translateY(0) scale(1); }
.alert-leave-to { opacity: 0; transform: translateY(4px) scale(0.95); }
</style>
