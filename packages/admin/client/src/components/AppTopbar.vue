<template>
  <div
    class="flex items-center gap-2.5 px-10 h-[52px] shrink-0 sticky top-0 z-10 border-b"
    :style="{ borderBottomColor: 'var(--color-border-subtle)', backgroundColor: 'var(--color-surface)' }"
  >
    <div class="ml-auto flex items-center gap-2.5">
      <span v-if="rebuild.dirty" class="text-[11px] text-amber-500">
        Site has unsaved changes — update to apply them.
      </span>
      <button
        type="button"
        class="inline-flex items-center gap-1.5 px-2 py-1 rounded text-[12px] font-medium text-white transition-opacity duration-100"
        :style="{ backgroundColor: 'var(--color-primary)' }"
        :disabled="rebuilding"
        @click="doRebuild"
        @mouseenter="(e) => e.currentTarget.style.opacity = '0.88'"
        @mouseleave="(e) => e.currentTarget.style.opacity = '1'"
      >
        <RefreshCw v-if="!rebuilding" :size="12" />
        <span v-if="rebuilding" class="animate-spin inline-block">
          <RefreshCw :size="12" />
        </span>
        {{ rebuilding ? 'Rebuilding…' : 'Update Site' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { RefreshCw } from 'lucide-vue-next';
import { useRebuildStore } from '../stores/rebuild.js';
import { useAlertsStore } from '../stores/alerts.js';

const rebuild = useRebuildStore();
const alerts = useAlertsStore();
const rebuilding = ref(false);

async function doRebuild() {
  rebuilding.value = true;
  try {
    const res = await fetch('/api/rebuild', { method: 'POST' });
    if (res.ok) {
      rebuild.markClean();
      alerts.show('success', 'Site rebuilt successfully.');
    } else {
      alerts.show('error', 'Rebuild failed.');
    }
  } catch {
    alerts.show('error', 'Rebuild failed.');
  } finally {
    rebuilding.value = false;
  }
}
</script>
