<template>
  <div>
    <!-- Header -->
    <div class="flex items-center justify-between mb-5">
      <h1 class="text-[22px] font-semibold tracking-tight" style="color: var(--color-content); line-height: 1.2;">Pages</h1>
      <button
        @click="newPage"
        class="inline-flex items-center gap-1.5 px-2 py-1 rounded text-[12px] font-medium text-white transition-opacity duration-100"
        :style="{ backgroundColor: 'var(--color-primary)' }"
        @mouseenter="(e) => e.currentTarget.style.opacity='0.88'"
        @mouseleave="(e) => e.currentTarget.style.opacity='1'"
      >
        <Plus :size="12" />
        New Page
      </button>
    </div>

    <!-- Drafts -->
    <div v-if="drafts.length > 0" class="mb-6">
      <p class="text-[11px] font-medium uppercase tracking-widest mb-2" style="color: var(--color-accent);">Drafts</p>
      <div class="flex flex-col">
        <div
          v-for="draft in drafts"
          :key="draft.slug"
          class="content-row"
          style="border-bottom: 1px solid var(--color-border-subtle);"
        >
          <RouterLink
            :to="`/admin/pages/${draft.slug}`"
            class="flex-1 text-[13.5px] font-medium truncate pr-4 transition-colors duration-100"
            style="color: var(--color-content);"
            @mouseenter="(e) => e.currentTarget.style.color='var(--color-primary)'"
            @mouseleave="(e) => e.currentTarget.style.color='var(--color-content)'"
          >
            {{ draft.title || draft.slug }}
          </RouterLink>
          <span
            class="text-[11px] font-medium px-1.5 py-0.5 rounded shrink-0"
            style="background-color: color-mix(in srgb, #f08c00 12%, transparent); color: #f08c00; border: 1px solid color-mix(in srgb, #f08c00 30%, transparent);"
          >
            Draft
          </span>
        </div>
      </div>
    </div>

    <!-- Published Pages -->
    <div v-if="published.length > 0">
      <div class="flex flex-col">
        <div
          v-for="page in published"
          :key="page.slug"
          class="content-row group"
          style="border-bottom: 1px solid var(--color-border-subtle);"
        >
          <div class="flex-1 min-w-0 pr-4">
            <RouterLink
              :to="`/admin/pages/${page.slug}`"
              class="text-[13.5px] font-medium truncate transition-colors duration-100"
              style="color: var(--color-content);"
              @mouseenter="(e) => e.currentTarget.style.color='var(--color-primary)'"
              @mouseleave="(e) => e.currentTarget.style.color='var(--color-content)'"
            >
              {{ page.title }}
            </RouterLink>
          </div>
          <a
            :href="page.url"
            target="_blank"
            title="Preview page"
            class="shrink-0 p-1.5 rounded transition-colors duration-100"
            style="color: var(--color-accent);"
            @mouseenter="(e) => { e.currentTarget.style.color='var(--color-content)'; e.currentTarget.style.backgroundColor='var(--color-hover)'; }"
            @mouseleave="(e) => { e.currentTarget.style.color='var(--color-accent)'; e.currentTarget.style.backgroundColor=''; }"
          >
            <ExternalLink :size="14" />
          </a>
        </div>
      </div>
    </div>

    <!-- Empty state -->
    <div v-else-if="!loading" class="py-16 text-center">
      <FileText :size="32" style="color: var(--color-accent); margin: 0 auto 12px; opacity: 0.5;" />
      <p class="text-[13.5px]" style="color: var(--color-accent);">No pages yet. Create your first page.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { Plus, ExternalLink, FileText } from 'lucide-vue-next';
import { useAlertsStore } from '../stores/alerts.js';

const router = useRouter();
const alerts = useAlertsStore();

const loading = ref(true);
const published = ref([]);
const drafts = ref([]);

onMounted(async () => {
  try {
    const res = await fetch('/api/pages');
    const data = await res.json();
    published.value = data.published;
    drafts.value = data.drafts;
  } catch {
    alerts.show('error', 'Failed to load pages.');
  } finally {
    loading.value = false;
  }
});

async function newPage() {
  try {
    const res = await fetch('/api/pages', { method: 'POST' });
    const data = await res.json();
    router.push(`/admin/pages/${data.slug}`);
  } catch {
    alerts.show('error', 'Failed to create page.');
  }
}
</script>
