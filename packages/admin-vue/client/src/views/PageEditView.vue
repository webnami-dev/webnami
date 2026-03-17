<template>
  <div v-if="loaded">
    <form @submit.prevent="savePage" class="flex flex-col gap-5">
      <!-- Title row -->
      <div class="flex items-center gap-2">
        <span
          v-if="page.isDraft"
          class="text-[11px] font-medium px-1.5 py-0.5 rounded shrink-0"
          style="background-color: color-mix(in srgb, #f08c00 12%, transparent); color: #f08c00; border: 1px solid color-mix(in srgb, #f08c00 30%, transparent);"
        >
          Draft
        </span>
        <input
          v-model="page.title"
          type="text"
          required
          class="admin-input text-3xl font-semibold"
          placeholder="Page title"
        />
        <a
          v-if="!page.isDraft"
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

      <!-- Editor -->
      <MarkdownEditor v-model="page.content" :slug="page.slug" type="pages" ref="editorRef" />

      <!-- Actions -->
      <div class="flex items-center gap-2 pt-1">
        <button
          type="submit"
          class="inline-flex items-center gap-1.5 px-2 py-1 rounded text-[12px] font-medium text-white transition-opacity duration-100"
          :style="{ backgroundColor: 'var(--color-primary)' }"
          @mouseenter="(e) => e.currentTarget.style.opacity='0.88'"
          @mouseleave="(e) => e.currentTarget.style.opacity='1'"
        >
          <Save :size="12" />
          {{ page.isDraft ? 'Save Draft' : 'Save Changes' }}
        </button>
        <button
          v-if="page.isDraft"
          type="button"
          @click="publishPage"
          class="inline-flex items-center gap-1.5 px-2 py-1 rounded text-[12px] font-medium text-white transition-opacity duration-100"
          style="background-color: #2f9e44;"
          @mouseenter="(e) => e.currentTarget.style.opacity='0.88'"
          @mouseleave="(e) => e.currentTarget.style.opacity='1'"
        >
          <Send :size="12" />
          Publish
        </button>
        <button
          type="button"
          @click="deletePage"
          class="inline-flex items-center gap-1.5 px-2 py-1 rounded text-[12px] font-medium transition-colors duration-100"
          style="color: #e03131; border: 1px solid color-mix(in srgb, #e03131 25%, transparent); background-color: var(--color-surface);"
          @mouseenter="(e) => e.currentTarget.style.backgroundColor='color-mix(in srgb, #e03131 8%, transparent)'"
          @mouseleave="(e) => e.currentTarget.style.backgroundColor='var(--color-surface)'"
        >
          <Trash2 :size="12" />
          Delete
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Save, Send, Trash2, ExternalLink } from 'lucide-vue-next';
import MarkdownEditor from '../components/MarkdownEditor.vue';
import { useAlertsStore } from '../stores/alerts.js';
import { useConfirmStore } from '../stores/confirm.js';
import { useRebuildStore } from '../stores/rebuild.js';

const route = useRoute();
const router = useRouter();
const alerts = useAlertsStore();
const confirm = useConfirmStore();
const rebuild = useRebuildStore();

const loaded = ref(false);
const editorRef = ref(null);
const page = ref({
  title: '',
  content: '',
  slug: '',
  url: '',
  isDraft: false,
});

onMounted(async () => {
  const res = await fetch(`/api/pages/${route.params.slug}`);
  if (!res.ok) {
    router.push('/admin/pages');
    return;
  }
  page.value = await res.json();
  loaded.value = true;
});

async function savePage() {
  const content = editorRef.value?.getValue() ?? page.value.content;
  const res = await fetch(`/api/pages/${page.value.slug}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: page.value.title,
      content,
    }),
  });
  const data = await res.json();
  if (!res.ok) {
    alerts.show('error', data.error || 'Failed to save page.');
    return;
  }
  rebuild.markDirty();
  alerts.flash('success', 'Page saved successfully.');
  router.push(`/admin/pages/${data.slug}`);
}

async function publishPage() {
  const res = await fetch(`/api/pages/${page.value.slug}/publish`, { method: 'POST' });
  const data = await res.json();
  if (!res.ok) {
    alerts.show('error', data.error || 'Failed to publish page.');
    return;
  }
  rebuild.markDirty();
  alerts.flash('success', 'Page published successfully.');
  router.push(`/admin/pages/${data.slug}`);
}

async function deletePage() {
  const confirmed = await confirm.show('Are you sure you want to delete this page?');
  if (!confirmed) return;
  const res = await fetch(`/api/pages/${page.value.slug}`, { method: 'DELETE' });
  if (!res.ok) {
    alerts.show('error', 'Failed to delete page.');
    return;
  }
  rebuild.markDirty();
  alerts.flash('success', 'Page deleted successfully.');
  router.push('/admin/pages');
}
</script>
